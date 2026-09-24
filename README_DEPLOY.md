# gyabisito.github.io — portfolio replacement

This folder is a drop-in replacement for the public portfolio homepage.

## Files to copy into the repository root

- `index.html`
- `favicon.svg`
- `robots.txt`
- `sitemap.xml`
- `styles/portfolio.css`
- `scripts/portfolio.js`

## Recommended cleanup

The current repository is the old Metalúrgica Fabál website. After verifying the new homepage, remove the legacy assets/pages that are no longer referenced (`paginas/`, old Fabal-specific styles/scripts/images) so GitHub Pages does not keep publishing obsolete client pages under direct URLs.

## Git commands

```bash
git clone https://github.com/GyabiSito/gyabisito.github.io.git
cd gyabisito.github.io

# Copy the contents of this package over the repository.

git add -A
git commit -m "feat: rebuild personal portfolio"
git push origin main
```

GitHub Pages normally republishes the `main` branch automatically for a user site repository.
