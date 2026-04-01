# 🏨 GuestGuide B&B

![License](https://img.shields.io/badge/license-Commercial-gold) ![PWA](https://img.shields.io/badge/PWA-ready-blue) ![Languages](https://img.shields.io/badge/languages-IT%20%2F%20EN-green) ![No Code](https://img.shields.io/badge/setup-no--code-brightgreen)

Una **Guest Guide interattiva** per il tuo Bed & Breakfast — un singolo file `index.html` da deployare su GitHub Pages, con supporto bilingue IT/EN e un pannello di personalizzazione integrato.

---

## 📸 Demo Live

👉 **[Prova la demo: ffeliteapartments.github.io/guide](https://ffeliteapartments.github.io/guide)**

---

## ✨ Perché scegliere GuestGuide

- 📱 **Nessuna app da installare** — gli ospiti aprono il link dal browser, su qualsiasi telefono
- ⚙️ **Configurazione completa senza toccare il codice** — nome, WiFi, regole, luoghi, ristoranti: tutto dal pannello ⚙️
- 🔌 **Funziona offline** grazie alla tecnologia PWA — perfetto per ospiti senza dati mobili
- 🖨️ **QR Code stampabili per ogni appartamento** — generati automaticamente, pronti da appendere in camera
- 🌐 **Cambio lingua istantaneo IT/EN** — l'ospite sceglie la propria lingua in un tap
- 🌤️ **Meteo in tempo reale** per la location dell'appartamento
- 🔄 **Aggiornamenti in tempo reale via pannello admin** — ogni modifica è live in pochi minuti
- 🏠 **Multi-appartamento** — gestisci più unità dallo stesso pannello

---

## ▶️ Cosa fare adesso per vedere il sito

> Segui questi **3 passi** — bastano 5 minuti.

**Passo 1 — Fai il merge di questa Pull Request**
- Apri la [Pull Request #1](../../pull/1) su GitHub
- Se è marcata come *Draft*, clicca **"Ready for review"**
- Poi clicca **"Merge pull request"** → **"Confirm merge"**

**Passo 2 — Attiva GitHub Pages**
- Vai su **Settings** (menu in alto nel tuo repository)
- Nel menu laterale clicca **Pages**
- Sotto *Source* seleziona **GitHub Actions**
- Clicca **Save**

**Passo 3 — Aspetta 1-2 minuti e apri il link**
- Vai su **Actions** (menu in alto) e attendi che il deployment finisca (cerchio verde ✅)
- Il sito sarà live su: **`https://ffeliteapartments.github.io/guide`**

> 💡 Dopo aver aperto il sito, clicca il pulsante **⚙️** in basso a destra per personalizzare nome, appartamenti, WiFi, luoghi e tutto il resto — senza toccare il codice.

---

## 🌐 Come rendere visibili le tue personalizzazioni a tutti

Le personalizzazioni fatte tramite il pannello ⚙️ sono salvate nel tuo browser (`localStorage`). Per pubblicarle online in modo che **tutti** vedano la versione aggiornata, segui questi passi:

**1. Personalizza il sito** — Apri `https://ffeliteapartments.github.io/guide`, clicca ⚙️ e modifica tutti i campi. Poi clicca **💾 Salva e Applica**.

**2. Scarica l'HTML aggiornato** — Nel pannello ⚙️, clicca il pulsante **📥 Scarica HTML Aggiornato**. Verrà scaricato un file `index.html` con i tuoi dati incorporati.

**3. Carica su GitHub** — Vai su `https://github.com/ffeliteapartments/guide`, clicca sul file `index.html`, poi su ✏️ **Edit**, e incolla il contenuto del file scaricato. Oppure, se usi Git:
```bash
# Copia il file scaricato nella cartella del repo, poi:
git add index.html
git commit -m "Aggiorna dati B&B"
git push
```

**4. Attendi il deploy** — Il workflow si avvia automaticamente. Dopo 1-2 minuti il sito sarà live con i tuoi dati per tutti gli ospiti.

---

![Landing Page](https://github.com/user-attachments/assets/ee2fe4ec-a0c4-4ac8-afba-e66ebaec33bb)

---

## ✨ Funzionalità

- 📱 **Design mobile-first** (max 430px, stile app nativa)
- 🌐 **Bilingue IT/EN** — cambio lingua istantaneo
- 🏠 **Multi-appartamento** — supporto per più appartamenti
- 🗺️ **5 sezioni** — Home, Soggiorno, Luoghi, Mangiare, Muoversi
- ⚙️ **Pannello di personalizzazione** — modifica tutto dal browser senza toccare il codice
- 💾 **Salvataggio automatico** in `localStorage`
- 📋 **Esporta/Importa JSON** — per backup e condivisione delle impostazioni
- 📞 **Bottoni di chiamata** per emergenze e host
- 🧭 **Link Google Maps** per ogni luogo e ristorante
- 🔐 **Pannello Host (PIN)** — accesso semplificato per il proprietario B&B (solo sezioni operative)
- 🛡️ **Pannello Admin (Login)** — accesso completo per l'amministratore tecnico
- 📧 **Invia Modifiche** — l'host può notificare l'admin via email o download JSON
- 📱 **QR Code per ogni appartamento** — generati automaticamente, scaricabili e stampabili (solo Admin)
- 🔑 **Autenticazione doppia** — PIN e credenziali hashati con SHA-256

---

## 🚀 Deploy su GitHub Pages

Il repository include un workflow GitHub Actions che pubblica automaticamente il sito ogni volta che fai push su `main`.

### Primo Deploy (una sola volta)

1. Vai su **Settings → Pages** nel tuo repository
2. In **Source**, seleziona **GitHub Actions**
3. Clicca **Save**
4. Il sito si pubblicherà automaticamente ad ogni push su `main`
5. Sarà live su `https://ffeliteapartments.github.io/guide`

> **Nota:** Se vedi ancora una pagina vuota o un errore 404 subito dopo il merge, attendi 1-2 minuti che il deployment finisca, poi ricarica la pagina.

---

## ⚙️ Come Personalizzare

### Pannello HOST (PIN) — Per l'host del B&B
1. Apri il sito nel browser
2. Clicca il pulsante **⚙️** in basso a destra nella landing page
3. Inserisci il **PIN a 4 cifre** (il PIN iniziale è impostato dall'amministratore al primo accesso)
4. Modifica i campi nel pannello semplificato:
   - 🏡 **Info B&B** — nome, sottotitolo, città, host, telefono
   - 🏠 **Appartamenti** — indirizzo, WiFi, check-in/out, Maps, regole
   - 🧳 **Partenza** — messaggi di chiusura IT/EN, link recensione Google
   - 🗺️ **Luoghi da Visitare** — 5 slot con descrizioni e link Maps
   - 🍽️ **Ristoranti** — 4 slot con tipo, descrizioni, fascia prezzi
   - 🚇 **Trasporti** — aeroporto, stazione, metro, bus
   - 📞 **Contatti Extra** — numeri utili aggiuntivi
   - 🔐 **Sicurezza** — cambio PIN
5. Clicca **💾 Salva e Applica** (viene chiesta conferma)
6. Clicca **📧 Invia Modifiche** per notificare l'amministratore

### Pannello ADMIN (Login) — Per l'amministratore tecnico
1. Apri il sito nel browser
2. Clicca il pulsante **⚙️**, poi **🛡️ Accesso Admin**
3. Inserisci username e password (le credenziali sono configurate dall'amministratore al setup iniziale)
4. Hai accesso a **tutte** le sezioni, incluse:
   - 🎨 **Aspetto** — cambio tema chiaro/scuro
   - 🏷️ **Etichette Navigazione** — personalizza tutte le label
   - 🔐 **Sicurezza completa** — PIN + credenziali admin + recovery + GitHub Token
   - 📱 **QR Code** — visualizza, scarica e stampa QR per ogni appartamento
5. Usa **🚀 Pubblica Online** per aggiornare il sito su GitHub Pages

Apri `index.html` in un editor di testo e modifica l'oggetto `DEFAULT_DATA` all'inizio del tag `<script>`:

```javascript
const DEFAULT_DATA = {
  bbName: "Il Nome del Tuo B&B",
  subtitle: "Guest Guide",
  cityZone: "La Tua Città · Quartiere",
  hostName: "Mario Rossi",
  hostPhone: "+39 333 123 4567",
  // ... altri campi
};
```

---

## 📂 Struttura del Progetto

```
guide/
├── index.html                         ← struttura HTML e shell dell'app
├── css/
│   └── style.css                      ← tutti gli stili
├── js/
│   ├── app.js                         ← logica principale e rendering
│   ├── data.js                        ← dati di default e configurazione
│   ├── i18n.js                        ← stringhe UI, traduzioni IT/EN, t()
│   ├── utils.js                       ← funzioni di utilità condivise
│   ├── settings-ui.js                 ← rendering pannello e form
│   ├── settings-publish.js            ← logica pubblicazione su GitHub Pages
│   ├── settings-apartments.js         ← gestione multi-appartamento
│   ├── analytics.js                   ← analytics locale
│   ├── crypto.js                      ← hashing PIN/credenziali (SHA-256)
│   ├── qr-lib.js                      ← libreria generazione QR code
│   ├── weather.js                     ← widget meteo (open-meteo API)
│   └── sw-register.js                 ← registrazione Service Worker
├── icon-192.png                       ← icona PWA 192×192
├── icon-512.png                       ← icona PWA 512×512
├── sw.js                              ← Service Worker (PWA offline)
├── manifest.json                      ← PWA manifest
├── CHANGELOG.md                       ← storico versioni
├── LICENSE                            ← licenza proprietaria commerciale
├── .gitignore                         ← file e cartelle da escludere da git
├── .nojekyll                          ← disabilita Jekyll su GitHub Pages
└── .github/workflows/deploy.yml      ← auto-deploy su GitHub Pages
```

---

## 🔑 Autenticazione: Due Ruoli Separati

Il pannello ⚙️ è protetto da **due metodi di accesso** che aprono **pannelli diversi**:

### 🏡 Ruolo HOST — Accesso con PIN
- **Come accedere:** Inserisci il PIN a 4 cifre (il PIN iniziale è impostato dall'amministratore al primo accesso)
- **Cosa vede:** Pannello semplificato ⚙️ con solo le sezioni utili:
  - 🏡 Info B&B, 🏠 Appartamenti, 🧳 Partenza, 🗺️ Luoghi, 🍽️ Ristoranti, 🚇 Trasporti, 📞 Contatti Extra, 🔐 Cambio PIN
- **Azioni disponibili:** 💾 Salva e Applica, 📧 Invia Modifiche, 👁️ Anteprima
- **NON vede:** Reset, Pubblica Online, GitHub Token, cambio credenziali admin, QR Code, etichette navigazione

### 🛡️ Ruolo ADMIN — Accesso con Login
- **Come accedere:** Clicca "🛡️ Accesso Admin" nel modal PIN, poi inserisci username e password (le credenziali sono configurate dall'amministratore al setup iniziale)
- **Cosa vede:** Pannello completo con **tutte** le sezioni e funzionalità
- **Azioni disponibili:** 💾 Salva e Applica, 🗑️ Reset, 👁️ Anteprima, 🚀 Pubblica Online

Entrambe le credenziali sono hashate con SHA-256 e salvate in `localStorage`. Puoi cambiarle dal pannello Admin → sezione **🔐 Sicurezza**.

---

## 🔧 Primo Setup / First Setup

> Segui questi passi la **prima volta** che configuri il sito.
> Follow these steps the **first time** you set up the site.

### 1. PIN iniziale / Initial PIN

> ⚠️ **Sicurezza / Security:** Cambia il PIN immediatamente dopo il primo accesso. / Change the PIN immediately after first access.

**IT:** Il PIN predefinito all'installazione è `1234`. Cambialo subito al primo accesso:
1. Apri il sito nel browser
2. Clicca **⚙️** (in basso a destra nella landing page)
3. Inserisci il PIN `1234`
4. Vai alla sezione **🔐 Sicurezza** nel pannello HOST
5. Inserisci il nuovo PIN a 4 cifre nel campo "Nuovo PIN" e conferma con **💾 Salva e Applica**

**EN:** The default PIN at installation is `1234`. Change it immediately on first login:
1. Open the site in your browser
2. Click **⚙️** (bottom-right on the landing page)
3. Enter PIN `1234`
4. Go to the **🔐 Security** section in the HOST panel
5. Enter your new 4-digit PIN in the "New PIN" field and confirm with **💾 Save & Apply**

---

### 2. Credenziali Admin / Admin Credentials

> ⚠️ **Sicurezza / Security:** Cambia le credenziali admin immediatamente dopo la prima configurazione. Non usare mai le credenziali di default in produzione. / Change admin credentials immediately after initial setup. Never use default credentials in production.

**IT:** Le credenziali admin predefinite sono `admin` / `admin`. Cambiale subito:
1. Apri il sito nel browser
2. Clicca **⚙️**, poi **🛡️ Accesso Admin**
3. Inserisci username `admin` e password `admin`
4. Nel pannello Admin, vai alla sezione **🔐 Sicurezza**
5. Modifica **Username Admin** e **Password Admin** con le tue credenziali personalizzate
6. Clicca **💾 Salva e Applica**, poi **🚀 Pubblica Online** per rendere permanente il cambiamento

**EN:** The default admin credentials are `admin` / `admin`. Change them immediately:
1. Open the site in your browser
2. Click **⚙️**, then **🛡️ Admin Access**
3. Enter username `admin` and password `admin`
4. In the Admin panel, go to the **🔐 Security** section
5. Set your custom **Admin Username** and **Admin Password**
6. Click **💾 Save & Apply**, then **🚀 Publish Online** to make the change permanent

---

### 3. Dove trovare il pannello Admin / Where to find the Admin panel

**IT:** Il pannello Admin si trova cliccando **⚙️** nella landing page → **🛡️ Accesso Admin** (link sotto il campo PIN).

**EN:** The Admin panel is accessed by clicking **⚙️** on the landing page → **🛡️ Admin Access** (link below the PIN field).

---

### 4. Come cambiare PIN e credenziali successivamente / How to change PIN and credentials later

**IT:**
- **Cambio PIN (Host):** Pannello ⚙️ (HOST) → sezione **🔐 Sicurezza** → "Nuovo PIN"
- **Cambio credenziali Admin:** Pannello ⚙️ (Admin) → sezione **🔐 Sicurezza** → "Username Admin" e "Password Admin"
- Dopo ogni modifica: **💾 Salva e Applica** + **🚀 Pubblica Online**

**EN:**
- **Change PIN (Host):** ⚙️ Panel (HOST) → **🔐 Security** section → "New PIN"
- **Change Admin credentials:** ⚙️ Panel (Admin) → **🔐 Security** section → "Admin Username" and "Admin Password"
- After each change: **💾 Save & Apply** + **🚀 Publish Online**

---

## 📧 "Invia Modifiche" — Flusso Host → Admin

L'host (persona non tecnica) può comunicare le sue modifiche all'amministratore tramite il pulsante **📧 Invia Modifiche**:

1. L'host salva le modifiche con 💾 Salva e Applica
2. L'host clicca **📧 Invia Modifiche**:
   - Se l'admin ha configurato la propria email (campo "📧 Email Admin" nel pannello Admin → Info B&B): si apre il client email con un messaggio precompilato contenente tutti i dati in JSON
   - Se l'email non è configurata: viene scaricato un file `guestguide-backup-YYYY-MM-DD.json` da inviare manualmente
3. L'admin riceve i dati, accede al pannello con il proprio login e usa **🚀 Pubblica Online** per aggiornare il sito

### Come configurare l'email Admin
1. Accedi al pannello con il login Admin (🛡️ Accesso Admin)
2. Apri la sezione **🏡 Info B&B**
3. Compila il campo **📧 Email Admin** (es. `ffeliteapartments@gmail.com`)
4. Clicca **💾 Salva e Applica** (e poi **🚀 Pubblica Online** per rendere la configurazione permanente)

---

## 📱 QR Code per Appartamenti

Ogni appartamento ha un **QR Code univoco** che punta direttamente alla sua guida (`?apt=0`, `?apt=1`, ecc.). Dal pannello ⚙️ → sezione **📱 QR Code** puoi:

- Visualizzare il QR di ogni appartamento
- Scaricare il QR come PNG con "📥 Scarica QR"
- Stampare tutti i QR con "🖨️ Stampa Tutti i QR"

Gli ospiti scansionano il QR e accedono direttamente alla guida dell'appartamento corretto, saltando la landing page.

---

## 💼 Licenza e Acquisto

Questo software è distribuito sotto **licenza proprietaria commerciale**.
Ogni licenza è valida per **un singolo sito/dominio**.

### Cosa è incluso

| ✅ Incluso | ❌ Non incluso |
|---|---|
| Licenza d'uso per 1 struttura ricettiva | Hosting (usa GitHub Pages gratuito) |
| Pannello admin completo (no codice) | Dominio personalizzato (opzionale, gratuito su GitHub Pages) |
| Supporto tecnico iniziale via WhatsApp | Personalizzazioni custom avanzate |
| Aggiornamenti gratuiti per 12 mesi | |
| Multi-appartamento illimitato | |
| QR Code generati automaticamente | |
| PWA + funzionamento offline | |

### Acquista o richiedi supporto

📧 **ffeliteapartments@gmail.com**  
💬 **[WhatsApp](https://wa.me/393450307922)**

---

## 🌐 Compatibilità Browser / Browser Compatibility

**IT:** GuestGuide utilizza API moderne (`crypto.subtle` AES-GCM, `ES6+`, CSS custom properties, unità `dvh`). Di seguito i requisiti minimi.

**EN:** GuestGuide uses modern APIs (`crypto.subtle` AES-GCM, `ES6+`, CSS custom properties, `dvh` units). Below are the minimum requirements.

| Browser | Versione minima / Minimum version |
|---|---|
| Chrome / Chromium | 60+ (2017) |
| Firefox | 63+ (2018) |
| Safari | 14+ (2020) |
| Edge (Chromium) | 79+ (2020) |
| Samsung Internet | 8.2+ (2019) |

### 📱 Note iOS / Safari (ospiti con iPhone / guests on iPhone)

**IT:** Su iOS, `crypto.subtle` richiede un contesto sicuro (HTTPS). Assicurarsi che il sito sia sempre servito via HTTPS (GitHub Pages lo garantisce automaticamente). Safari < 14 non supporta le unità `dvh`, che fanno cadere silenziosamente in fallback. Si consiglia di testare su iOS 15+ per un'esperienza ottimale.

**EN:** On iOS, `crypto.subtle` requires a secure context (HTTPS). Ensure the site is always served over HTTPS (GitHub Pages provides this automatically). Safari < 14 does not support `dvh` units, which silently fall back. Testing on iOS 15+ is recommended for the best experience.

### 🔒 Requisito HTTPS / HTTPS Requirement

**IT:** `crypto.subtle` (usato per l'hashing SHA-256 di PIN e credenziali) e il Service Worker (PWA offline) **richiedono HTTPS**. Su `localhost` funzionano comunque per sviluppo locale. GitHub Pages serve sempre HTTPS — nessuna azione richiesta.

**EN:** `crypto.subtle` (used for SHA-256 hashing of PIN and credentials) and the Service Worker (PWA offline) **require HTTPS**. On `localhost` they still work for local development. GitHub Pages always serves HTTPS — no action needed.

---

## 🛠️ Tecnologie

- HTML5, CSS3, JavaScript vanilla
- Google Fonts (Playfair Display + Jost)
- Nessuna dipendenza esterna oltre ai font
- `localStorage` per il salvataggio delle personalizzazioni

---

## 🌍 Architettura i18n / i18n Architecture

**IT:** Il sistema bilingue attuale (IT/EN) usa campi duplicati per ogni contenuto localizzabile: `titleIt`/`titleEn`, `descIt`/`descEn`, ecc. La funzione `t(obj, 'title')` risolve il campo corretto in base alla lingua selezionata (`window.currentLang`).

**EN:** The current bilingual system (IT/EN) uses duplicated fields for each localizable piece of content: `titleIt`/`titleEn`, `descIt`/`descEn`, etc. The `t(obj, 'title')` function resolves the correct field based on the selected language (`window.currentLang`).

### Struttura attuale / Current structure

```javascript
// Esempio campo localizzato / Example localized field
{
  titleIt: "Duomo di Milano",
  titleEn: "Milan Cathedral",
  descIt: "La cattedrale gotica più grande d'Italia.",
  descEn: "The largest Gothic cathedral in Italy."
}
// Risoluzione / Resolution: t(obj, 'title') → titleIt o titleEn
```

### Piano per future lingue / Plan for future languages

**IT:** Per aggiungere in futuro lingue aggiuntive (FR, DE, ES) senza riscrivere tutto il codice, la struttura consigliata sarebbe migrare verso oggetti `title: { it: "...", en: "...", fr: "..." }` e aggiornare `t()` per accedere a `obj[field][lang]`. Questo richiederebbe una migrazione dei dati in `loadData()` e l'aggiornamento di tutti i form di editing nel pannello admin.

**EN:** To add additional languages in the future (FR, DE, ES) without rewriting all the code, the recommended approach would be to migrate to `title: { it: "...", en: "...", fr: "..." }` objects and update `t()` to access `obj[field][lang]`. This would require a data migration in `loadData()` and updating all editing forms in the admin panel.

---

## 📸 Screenshot

| Landing Page | Guida | Pannello Personalizzazione |
|---|---|---|
| ![Landing](https://github.com/user-attachments/assets/ee2fe4ec-a0c4-4ac8-afba-e66ebaec33bb) | ![Guide](https://github.com/user-attachments/assets/ce9de08d-ea1e-45df-99f0-f883d3e9ff7e) | ![Panel](https://github.com/user-attachments/assets/9554ee5e-47aa-4da5-9c5e-236a4ab5508c) |