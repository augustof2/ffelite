// ════════════════════════════════════════════
//  GUEST ANALYTICS — localStorage only
// ════════════════════════════════════════════
const GuestAnalytics = (function () {
  const KEY = 'gg_analytics';

  function _load() {
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) { return null; }
  }

  function _save(data) {
    try { localStorage.setItem(KEY, JSON.stringify(data)); } catch (e) {}
  }

  function _empty() {
    return {
      totalVisits: 0,
      firstVisit: null,
      lastVisit: null,
      pageViews: { home: 0, stay: 0, places: 0, food: 0, transport: 0, departure: 0 },
      langCounts: { it: 0, en: 0 },
      deviceCounts: { mobile: 0, tablet: 0, desktop: 0 }
    };
  }

  function _getDevice() {
    const w = window.innerWidth || screen.width;
    if (w < 768) return 'mobile';
    if (w < 1024) return 'tablet';
    return 'desktop';
  }

  function getData() {
    return _load() || _empty();
  }

  function trackVisit() {
    const d = getData();
    const now = new Date().toISOString();
    d.totalVisits = (d.totalVisits || 0) + 1;
    if (!d.firstVisit) d.firstVisit = now;
    d.lastVisit = now;
    const dev = _getDevice();
    if (!d.deviceCounts) d.deviceCounts = { mobile: 0, tablet: 0, desktop: 0 };
    d.deviceCounts[dev] = (d.deviceCounts[dev] || 0) + 1;
    _save(d);
  }

  function trackPageView(tabName) {
    const d = getData();
    if (!d.pageViews) d.pageViews = {};
    d.pageViews[tabName] = (d.pageViews[tabName] || 0) + 1;
    _save(d);
  }

  function trackLang(lang) {
    const d = getData();
    if (!d.langCounts) d.langCounts = { it: 0, en: 0 };
    const key = (lang === 'en') ? 'en' : 'it';
    d.langCounts[key] = (d.langCounts[key] || 0) + 1;
    _save(d);
  }

  function reset() {
    localStorage.removeItem(KEY);
  }

  function renderDashboard(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const d = getData();

    const pv = d.pageViews || {};
    const tabs = ['home', 'stay', 'places', 'food', 'transport', 'departure'];
    const tabLabels = { home: 'Home', stay: 'Soggiorno', places: 'Luoghi', food: 'Mangiare', transport: 'Muoversi', departure: 'Partenza' };
    const maxPv = Math.max(1, ...tabs.map(t => pv[t] || 0));

    const lc = d.langCounts || { it: 0, en: 0 };
    const totalLang = (lc.it || 0) + (lc.en || 0);
    const itPct = totalLang ? Math.round((lc.it || 0) / totalLang * 100) : 0;
    const enPct = totalLang ? 100 - itPct : 0;

    const dc = d.deviceCounts || {};
    const totalDev = (dc.mobile || 0) + (dc.tablet || 0) + (dc.desktop || 0);

    function fmtDate(iso) {
      if (!iso) return '—';
      try {
        return new Date(iso).toLocaleString('it-IT', { dateStyle: 'short', timeStyle: 'short' });
      } catch (e) { return iso.slice(0, 16).replace('T', ' '); }
    }

    function devBar(label, icon, key) {
      const count = dc[key] || 0;
      const pct = totalDev ? Math.round(count / totalDev * 100) : 0;
      return `<div class="an-dev-row">
        <span class="an-dev-label">${icon} ${label}</span>
        <div class="an-bar-wrap"><div class="an-bar-fill" style="width:${pct}%"></div></div>
        <span class="an-dev-count">${count} (${pct}%)</span>
      </div>`;
    }

    container.innerHTML = `
      <div class="an-cards-row">
        <div class="an-stat-card">
          <div class="an-stat-value">${d.totalVisits || 0}</div>
          <div class="an-stat-label">Visite totali</div>
        </div>
        <div class="an-stat-card">
          <div class="an-stat-value">${tabs.reduce((s, t) => s + (pv[t] || 0), 0)}</div>
          <div class="an-stat-label">Pagine viste</div>
        </div>
        <div class="an-stat-card">
          <div class="an-stat-value">${totalLang > 0 ? itPct + '%' : '—'}</div>
          <div class="an-stat-label">🇮🇹 Italiano</div>
        </div>
        <div class="an-stat-card">
          <div class="an-stat-value">${totalLang > 0 ? enPct + '%' : '—'}</div>
          <div class="an-stat-label">🇬🇧 English</div>
        </div>
      </div>

      <div class="an-section-title">📊 Sezioni più visitate</div>
      <div class="an-bars">
        ${tabs.map(tab => {
          const count = pv[tab] || 0;
          const pct = Math.round(count / maxPv * 100);
          return `<div class="an-bar-row">
            <span class="an-bar-label">${tabLabels[tab]}</span>
            <div class="an-bar-wrap"><div class="an-bar-fill" style="width:${pct}%"></div></div>
            <span class="an-bar-count">${count}</span>
          </div>`;
        }).join('')}
      </div>

      <div class="an-section-title">📱 Dispositivi</div>
      <div class="an-devices">
        ${devBar('Mobile', '📱', 'mobile')}
        ${devBar('Tablet', '📟', 'tablet')}
        ${devBar('Desktop', '🖥️', 'desktop')}
      </div>

      <div class="an-dates">
        <span>🗓️ Prima visita: <strong>${fmtDate(d.firstVisit)}</strong></span>
        <span>🕐 Ultima visita: <strong>${fmtDate(d.lastVisit)}</strong></span>
      </div>
    `;
  }

  return { getData, trackVisit, trackPageView, trackLang, reset, renderDashboard };
})();
