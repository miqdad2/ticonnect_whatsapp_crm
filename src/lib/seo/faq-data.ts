/**
 * FAQ content used by both the rendered FAQ accordion on the landing
 * page and the FAQPage JSON-LD emitted for rich-result eligibility.
 */
export interface FaqItem {
  q: string
  a: string
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: 'Do I need my own WhatsApp Business API access?',
    a: 'Yes. Ticonnect WhatsApp CRM connects to your existing Meta WhatsApp Business setup. You bring the phone number and access token, and Ticonnect WhatsApp CRM provides the team inbox, CRM, pipeline, and automation layer around it.',
  },
  {
    q: 'Can my whole team share one WhatsApp number?',
    a: 'Yes. Assign conversations to specific agents, track who is responding, and hand off threads without losing context. Everyone works from one shared Ticonnect WhatsApp CRM inbox.',
  },
  {
    q: 'How fast is setup?',
    a: 'Most teams can complete the product setup quickly once their WhatsApp Business number has been approved by Meta. Add credentials in Settings, import contacts if needed, and start replying.',
  },
  {
    q: 'Who owns the data?',
    a: 'You do. Contacts, conversations, deals, and automation logs live in your configured workspace and use export-friendly data structures.',
  },
  {
    q: 'Can I send bulk messages and automated replies?',
    a: 'Yes. Broadcasts send approved templates to segmented contact lists with delivery tracking. Automations run no-code flows triggered by new contacts, keywords, tag changes, and more.',
  },
  {
    q: 'What about message templates?',
    a: 'Templates you create in Meta are synced into Ticonnect WhatsApp CRM. Use them from the inbox, broadcasts, or inside an automation step.',
  },
]
