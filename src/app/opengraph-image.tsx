import { ImageResponse } from 'next/og'
import { SITE_DESCRIPTION, SITE_NAME, SITE_TAGLINE } from '@/lib/seo/site-config'

export const alt = `${SITE_NAME} - ${SITE_TAGLINE}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 76,
          background: 'linear-gradient(135deg, #020617 0%, #0f172a 48%, #12385c 100%)',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div
            style={{
              width: 78,
              height: 78,
              borderRadius: 16,
              background: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="58" height="49" viewBox="0 0 96 80" fill="#1f4f7a">
              <path d="M10 10h35l-8 11H18z" />
              <path d="M51 10h35l-8 11H58L40 40v25L29 52V35z" />
              <path d="M22 29h27l-8 11H30z" />
              <path d="M57 29h29l-8 11H64l-7 7v18L48 76l-9-11V43z" />
            </svg>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', fontSize: 48, fontWeight: 800 }}>
              Ticonnect
            </div>
            <div
              style={{
                display: 'flex',
                marginTop: 7,
                fontSize: 15,
                fontWeight: 700,
                letterSpacing: 7,
                color: '#7dd3fc',
                textTransform: 'uppercase',
              }}
            >
              WhatsApp CRM
            </div>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            marginTop: 62,
            fontSize: 78,
            fontWeight: 850,
            lineHeight: 1.03,
            maxWidth: 1000,
          }}
        >
          Ticonnect WhatsApp CRM for sales, support, and follow-up workflows.
        </div>

        <div
          style={{
            display: 'flex',
            marginTop: 28,
            fontSize: 27,
            color: '#cbd5e1',
            maxWidth: 920,
            lineHeight: 1.32,
          }}
        >
          {SITE_DESCRIPTION}
        </div>
      </div>
    ),
    size,
  )
}
