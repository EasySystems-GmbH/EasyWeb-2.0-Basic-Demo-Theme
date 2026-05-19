# EasyWeb 2.0 Basic Demo Theme

Public starter theme for EasyWeb 2.0.

Use this theme as:

- a working baseline for new sites
- a reference for EasyWeb placeholders and navigation loops
- a safe starting point for custom designs

## Included Files

- `theme.json` - theme metadata
- `inc/_header.html` - shared head, header, and navigation
- `inc/_footer.html` - shared footer and script include
- `index.html` - homepage
- `blank.html` - minimal page template
- `contact.html` - sample contact form using `/api/web/contact`
- `assets/css/main.css` - base styling
- `assets/css/pageEditor.css` - editor helper styles
- `assets/js/main.js` - basic behavior
- `assets/manifest.json` - optional web manifest

## Install

1. Use as a site workspace (`theme/`, `pages/`) and run `easyweb publish .`, or let the container entrypoint seed on first deploy.
2. Hosted stacks use `Themes__DefaultRootPath=/app/Themes/site` (see [Hub install guide](https://github.com/EasySystems-GmbH/EasyWeb-2.0-Hub/blob/main/docs/install-with-docker.md)).
3. After CMS edits on a live server, run `easyweb pull .` to sync changes back to git.

## Notes

- Mark editable blocks with `wf-editable`.
- Keep `{{ current_theme.path }}` in asset paths for compatibility.
