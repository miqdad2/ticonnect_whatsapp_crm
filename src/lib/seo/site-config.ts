/**
 * Single source of truth for anything the SEO layer needs to know
 * about the site: base URL, brand name, headline copy, and social
 * metadata. Import from here everywhere so a rename or domain change
 * stays a one-file edit.
 */

/** Production origin used to resolve all absolute URLs in metadata. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://ticode.tech'

export const SITE_NAME = 'Ticonnect WhatsApp CRM'

export const SITE_TAGLINE =
  'A Ticode product for WhatsApp sales and support teams'

/** Default description reused by layout metadata and structured data. */
export const SITE_DESCRIPTION =
  'Ticonnect WhatsApp CRM is a Ticode product for teams that run sales and support on WhatsApp: shared inbox, contact hub, sales pipelines, broadcasts, and no-code automations.'

/**
 * Keyword targets. Search engines largely ignore the meta keywords
 * field, but a couple still use it and it is a cheap inclusion.
 */
export const SITE_KEYWORDS = [
  'Ticonnect',
  'Ticonnect WhatsApp CRM',
  'Ticode Technologies',
  'WhatsApp CRM',
  'WhatsApp Business CRM',
  'WhatsApp shared inbox',
  'WhatsApp Business API',
  'WhatsApp automation',
  'customer engagement workspace',
  'sales pipeline CRM',
  'team inbox',
]

/** Public hero image for OG / Twitter previews. */
export const OG_IMAGE_PATH = '/opengraph-image'
export const OG_IMAGE_ALT = `${SITE_NAME} - ${SITE_TAGLINE}`

/** Organization info surfaced in JSON-LD. */
export const ORG_INFO = {
  name: SITE_NAME,
  legalName: 'Ticode Technologies',
  url: SITE_URL,
  logo: `${SITE_URL}/icon`,
}

/**
 * Helper: absolute-URL a relative path using SITE_URL.
 * Use this instead of string concat so trailing-slash handling stays
 * consistent.
 */
export function absoluteUrl(path = '/'): string {
  const trimmed = path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL}${trimmed}`
}
