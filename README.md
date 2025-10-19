# Projekt: Wiener Kongress – Version 2.0

Diese Version erweitert die ursprüngliche Seite um zusätzliche **Unterseiten** und **Funktionen**, ohne Design und vorhandene Inhalte zu verändern.

## Neu in 2.0
- Suchseite (`search.html`) mit clientseitiger Suche über die Abschnitte der Startseite (Index aus `assets/content-index.json`).
- Zeitleiste (`timeline.html`) mit wichtigen Daten.
- Quiz (`quiz.html`) als kleiner Selbsttest (keine Speicherung von Daten).
- Glossar (`glossar.html`), Quellen (`quellen.html`), Impressum (`impressum.html`), Datenschutz (`datenschutz.html`).
- PWA-Unterstützung: `manifest.json` und `service-worker.js` für rudimentären Offline-Zugriff.
- SEO/Meta: `sitemap.xml`, `robots.txt`.
- Vercel-Konfiguration: `vercel.json`.
- GitHub Actions: Link-Check-Workflow `check.yml`.

Die bestehende **Startseite** und **CSS** wurden nicht inhaltlich oder gestalterisch verändert.

## Lokale Vorschau
Öffne `index.html` im Browser oder starte einen einfachen Server:
```bash
python3 -m http.server 8000
# dann: http://localhost:8000/index.html
```

## Deployment auf GitHub + Vercel
1. Neues Repo erstellen (z. B. `wiener-kongress-v2`).
2. Dateien pushen:
   ```bash
   git init
   git add .
   git commit -m "v2.0"
   git branch -M main
   git remote add origin https://github.com/<dein-user>/wiener-kongress-v2.git
   git push -u origin main
   ```
3. In Vercel:
   - **New Project** → **Import Git Repository**.
   - Root ist das Repo; Build ist *Static Files* (kein Framework erforderlich).
   - Deploy.
4. Optional: Domain in Vercel verbinden. Passe in `robots.txt` und `sitemap.xml` die Domain an.

## Hinweise
- `impressum.html` und `datenschutz.html` enthalten Platzhalter. Bitte mit euren realen Angaben füllen.
- Wenn ihr Analytics nutzen wollt, bindet es bedingt über ein Script ein (nur mit Einwilligung).
- Falls ihr zusätzliche Seiten ergänzt, tragt sie in `sitemap.xml` nach.

Viel Erfolg!
