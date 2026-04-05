# Asset conventions

## Per-client folder

Static files for a client live under:

```text
public/clients/<clientId>/
```

`<clientId>` must match `clientId` in that client’s `SiteConfig` (see `src/content/clients/`).

Examples:

- `public/clients/northline/logo.svg`
- `public/clients/northline/hero.jpg`
- `public/clients/acme-dental/hero.webp`

## Referencing in config

Use **root-relative** URLs so Vite copies them as-is at build time:

```ts
hero: {
  imageSrc: '/clients/northline/hero.jpg',
  imageAlt: '…',
}
```

External URLs (Unsplash, CDN) also work for `imageSrc`.

## Recommended files (optional)

| File        | Purpose                          |
| ----------- | -------------------------------- |
| `hero.jpg`  | Hero section main image          |
| `logo.svg`  | Future: header logo (if you add) |
| `og.jpg`    | Future: Open Graph image         |

Keep originals high resolution (e.g. 1600px wide for hero); compress before commit if repo size matters.

## Favicon

Global favicon stays at `public/favicon.svg` unless you add per-build swapping later.
