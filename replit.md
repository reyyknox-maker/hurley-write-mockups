# Hurley Write Homepage

A homepage redesign for Hurley Write, a B2B SaaS consulting firm specializing in technical communication and writing audits.

## Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite 5
- **Icons:** Lucide React
- **Styling:** Plain CSS
- **Package Manager:** npm

## Project Structure

```
web/               # Main application
  src/
    App.jsx        # Main component with full landing page
    App.css        # Component styles
    index.css      # Global styles
    main.jsx       # Entry point
  public/          # Static assets
  vite.config.js   # Vite config (host: 0.0.0.0, port: 5000)
  package.json
```

## Development

The app runs via the "Start application" workflow:
```
cd web && npm run dev
```

Runs on port 5000 at `0.0.0.0` with all hosts allowed for Replit proxy compatibility.

## Deployment

Configured as a static site:
- **Build:** `cd web && npm run build`
- **Public dir:** `web/dist`
