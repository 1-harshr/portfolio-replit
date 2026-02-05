# portfolio-replit

Portfolio website for Harsh Ranjan built with React, Vite, and Express.

## GitHub Pages Deployment

This repository is configured to automatically deploy to GitHub Pages when changes are pushed to the `main` branch.

### Setup Instructions

1. **Enable GitHub Pages** in your repository settings:
   - Go to Settings → Pages
   - Under "Source", select "GitHub Actions"

2. **Merge your changes** to the `main` branch to trigger the deployment workflow

3. **Access your site** at: `https://1-harshr.github.io/portfolio-replit/`

### How it Works

- The workflow (`.github/workflows/deploy.yml`) automatically builds and deploys the site
- Vite builds the React app with the correct base path (`/portfolio-replit/`)
- The built static files are deployed from the `dist/public` directory
- The workflow runs on every push to `main` or can be triggered manually

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```
