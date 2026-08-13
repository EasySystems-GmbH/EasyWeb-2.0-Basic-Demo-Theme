# EasyWeb 2.0 Basic Demo Theme

**Single source of truth** for the EasyWeb starter theme (CMS-ready Bootstrap 5).

This repo is the only place to edit the starter. EasyWeb Core copies it into `Themes/site` on Docker first boot or via **Load starter theme** in the Theme admin tab. After that copy, the instance theme is `site` — not this starter.

## What this is

- CMS markers (`ew-site-meta`, `ew-nav-brand`, `ew-asset:*`, design tokens)
- Bootstrap navbar + `wf-editable` shells
- CLI / WebDAV / code-first compatible (`theme/` files)
- Empty structural templates: `gallery.html`, `news.html`, `kontakt.html`, legal shells
- **No** seeded news/dataset/gallery/document entries
- **No** custom form POST handlers — use CMS forms (`kontakt` placeholder)

## Layout

```text
theme/
  theme.json
  inc/_header.html, _footer.html, _language_switcher.html
  blank.html, index.html, 404.html
  gallery.html, news.html, news-detail.html
  kontakt.html, impressum.html, datenschutz.html
  assets/...
```

Default content culture: **German (de) only**. The language switcher partial stays in the starter but only renders when alternate languages exist.

## Use with EasyWeb

- **Docker / Hosting:** image bakes this theme as seed → entrypoint copies to `Themes/site` when missing
- **Theme tab:** Load starter theme restores chrome files into the active site theme
- **CLI:** `easyweb create-theme MyTheme` scaffolds from this starter
- **Site workspace:** after pull/publish, work in `theme/` + `pages/`

Docs: [EasyWeb 2.0 Hub](https://easysystems-gmbh.github.io/EasyWeb-2.0-Hub/)

<!-- easyweb:template-docs:start -->
## Template Docs

Template name: `BasicDemoTheme`

### EasyWeb CLI

- Install and usage guide: https://easysystems-gmbh.github.io/EasyWeb-2.0-Hub/docs/cli/
- Quick start:
  - `easyweb --help`
  - `easyweb create-theme MyTheme ./Themes`
  - `easyweb update docs .`

### Required placeholders

- {{ current_theme.path }}
- {{ current_page.seo.title }}
- {{ current_page.seo.description }}
- {% for link in navigations.main.links %} ... {% endfor %}

### Live Docs

- https://easysystems-gmbh.github.io/EasyWeb-2.0-Hub/
<!-- easyweb:template-docs:end -->
