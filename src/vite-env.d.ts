/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Which `src/content/clients/*.ts` entry to build (registry key). */
  readonly VITE_CLIENT_ID?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
