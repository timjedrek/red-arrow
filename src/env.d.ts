/// <reference path="../.astro/types.d.ts" />
interface ImportMetaEnv {
  readonly FB_PRIVATE_KEY_ID: string;
  readonly FB_PRIVATE_KEY: string;
  readonly FB_PROJECT_ID: string;
  readonly FB_CLIENT_EMAIL: string;
  readonly FB_CLIENT_ID: string;
  readonly FB_AUTH_URI: string;
  readonly FB_TOKEN_URI: string;
  readonly FB_AUTH_CERT_URL: string;
  readonly FB_CLIENT_CERT_URL: string;
  readonly DISCOVERY_FORM_WEBHOOK_URL: string;
  readonly ENROLLMENT_FORM_WEBHOOK_URL: string;
  readonly CONTACT_US_FORM_WEBHOOK_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
