# Pineel Studio Website

Eine vollständige Next.js-One-Page-Website für pineelstudio.com.

## Lokal starten

```bash
npm install
npm run dev
```

Dann im Browser öffnen:

```text
http://localhost:3000
```

## Projekt bauen

```bash
npm run build
npm run start
```

## Online stellen mit Vercel

1. Projektordner in ein GitHub-Repository hochladen.
2. Auf vercel.com anmelden.
3. "Add New" → "Project" → GitHub-Repository importieren.
4. Framework wird automatisch als Next.js erkannt.
5. Deploy klicken.
6. Danach in Vercel unter Project → Settings → Domains `pineelstudio.com` hinzufügen.
7. Die von Vercel angezeigten DNS-Einträge bei deinem Domain-Anbieter setzen.

## Wichtige Dateien

- `app/page.tsx`: komplette Startseite
- `app/layout.tsx`: Metadaten und Grundlayout
- `app/globals.css`: komplettes Design
- `package.json`: Dependencies und Scripts

## Kontaktadresse ändern

Aktuell ist überall hinterlegt:

```text
hello@pineelstudio.com
```

Falls du noch keine Mail eingerichtet hast, kannst du diese Adresse später ersetzen.
