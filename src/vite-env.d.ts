/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Which `src/content/clients/*.ts` entry to build (registry key). */
  readonly VITE_CLIENT_ID?: string
  /** Page language: `en` (LTR) or `he` (RTL). */
  readonly VITE_LOCALE?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
