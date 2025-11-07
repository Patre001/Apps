# Fullscreen Background + Foreground Lottie

Dieses minimales Setup zeigt ein bildschirmfüllendes Hintergrundbild und darüber eine Lottie-Animation – beides skaliert immer **füllend** ("cover").
- **Mobile**: Seiten werden ggf. beschnitten.
- **Widescreen**: Oben/unten wird ggf. beschnitten.
- Die Animation respektiert `prefers-reduced-motion`.

## Dateien
```
.
├─ index.html
├─ styles.css
├─ main.js
└─ assets/
   ├─ Background_Lottie.jpg
   └─ 251107_LoadIt_Background_Ew01_pt.json
```

## Lokal testen
Einige Browser blockieren das Laden von JSON-Dateien über `file://`. Nutze daher einen lokalen Server:

- Python: `python3 -m http.server 3000`
- Node: `npx serve .`

Dann `http://localhost:3000` öffnen.

## Deployment auf GitHub Pages
1. Neues Repo erstellen (z. B. `loadit-fullscreen-lottie`).
2. Alle Dateien ins Repo pushen.
3. In **Settings → Pages**: Source = **Deploy from a branch**, Branch = **main** (root).
4. Nach dem Build ist die Seite unter `https://<user>.github.io/<repo>/` erreichbar.

## Anpassen
- **Hintergrundbild**: `assets/Background_Lottie.jpg` austauschen.
- **Lottie**: JSON-Datei ersetzen und Pfad in `main.js` anpassen.
- **Ausrichtung**: Mittelpunkt ist `center` – bei Bedarf `object-position` in `styles.css` ändern oder `preserveAspectRatio` in `main.js`.

## Barrierefreiheit
- Animation stoppt automatisch, wenn Nutzer:innen "Bewegung reduzieren" aktiviert haben.
- Die visuellen Layer sind `aria-hidden`; eigentlicher Inhalt kommt in `<main class="content">…</main>`.
