# Media Kit - Content Creator

Un media kit moderno e ottimizzato per content creator nel settore crochet e knitting.

## 🚀 Setup

### Prerequisiti
- Node.js (versione 18 o superiore)
- npm o yarn

### Installazione

1. Clona il repository
2. Installa le dipendenze:
```bash
npm install
```

## 💻 Sviluppo

Avvia il server di sviluppo:
```bash
npm run dev
```

Il sito sarà disponibile su `http://localhost:5173`

## 📦 Build

Per creare una build di produzione:
```bash
npm run build
```

I file ottimizzati saranno generati nella cartella `dist/`

## 🌐 Deploy su GitHub Pages

### Configurazione Iniziale

1. **Vai nelle impostazioni del repository GitHub:**
   - Settings → Pages
   - Source: seleziona "GitHub Actions"

2. **Aggiorna il file `vite.config.js`:**
   - Modifica il campo `base` con il nome del tuo repository:
   ```js
   base: '/nome-del-tuo-repo/'
   ```

3. **Push sul branch main:**
   ```bash
   git add .
   git commit -m "Setup Vite with GitHub Pages"
   git push origin main
   ```

Il workflow GitHub Actions si attiverà automaticamente e deploierà il sito su GitHub Pages.

### URL del Sito
Dopo il deploy, il sito sarà disponibile su:
```
https://tuo-username.github.io/nome-del-tuo-repo/
```

## 📁 Struttura del Progetto

```
mediakit/
├── index.html          # Pagina principale
├── style.css           # Stili CSS separati
├── vite.config.js      # Configurazione Vite
├── package.json        # Dipendenze e script
├── .gitignore          # File da ignorare
└── .github/
    └── workflows/
        └── deploy.yml  # Workflow GitHub Actions
```

## 🎨 Personalizzazione

- **HTML:** Modifica `index.html` per cambiare contenuti e struttura
- **CSS:** Modifica `style.css` per personalizzare i colori e lo stile
- **Tailwind CSS:** Usa le classi Tailwind direttamente nell'HTML

## 📝 Note

- Il progetto usa Vite per un'esperienza di sviluppo veloce e build ottimizzate
- Tailwind CSS è caricato tramite CDN per semplicità
- Il deploy su GitHub Pages è automatizzato tramite GitHub Actions
- La configurazione supporta il base path per il deploy su sottocartelle

## 🔧 Comandi Disponibili

- `npm run dev` - Avvia il server di sviluppo
- `npm run build` - Crea la build di produzione
- `npm run preview` - Anteprima della build locale

## 📄 Licenza

Personalizza secondo le tue esigenze.
