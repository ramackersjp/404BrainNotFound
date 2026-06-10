# 404BrainNotFound

![Banner](preview.png)

A minimal, dark, personal Hugo theme with Tailwind CSS.

## Requirements

- Hugo (extended) **v0.150.0+**
- Node.js (for Tailwind CSS)

## Quick Start (example site)

```bash
npm ci
npm run dev
```

Open http://localhost:1313 in your browser. The example site will build and hot-reload as you edit.

## Using the theme in your own project

### 1. Add the theme

```bash
git clone https://github.com/ramackersjp/404BrainNotFound themes/404BrainNotFound
```

### 2. Install dependencies

```bash
npm ci
```

### 3. Configure your site

Set the theme in your `hugo.toml`:

```toml
theme = "404BrainNotFound"
```

### 4. Build

```bash
npm run build      # production build (outputs to public/)
npm run dev        # development server with live reload
```

> **Note:** Using `npm run` ensures the Tailwind CSS binary is found automatically. If you run `hugo` directly, make sure `tailwindcss` is on your PATH or run from a directory that contains `node_modules/.bin/`.

## Repository structure

```
├── archetypes/      # Content archetypes (used when running `hugo new`)
├── assets/          # Theme assets (Tailwind CSS input, etc.)
├── layouts/         # Hugo templates
├── static/          # Static files (images, JS, PWA assets)
├── exampleSite/     # Demo site — clone this to get started
│   ├── content/
│   └── hugo.toml
├── theme.toml       # Theme metadata
└── package.json     # Node dependencies and scripts
```

To run or modify the example site locally, use `--source exampleSite`:

```bash
npm run dev          # runs: hugo --source exampleSite server
npm run build        # runs: hugo --source exampleSite
```

## License

MIT
