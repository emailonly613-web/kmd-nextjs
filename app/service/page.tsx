import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Device Lockdown Service - $125 One-Time',
  description: 'Professional Device Owner installation for $125. Unbypassable security, Factory Reset Protection, app whitelist configuration, 30-day support included.',
  openGraph: {
    title: 'Device Lockdown Service - $125 One-Time | KosherMyDevice',
    description: 'Transform any Android device into an unbypassable, secure phone. One-time setup, permanent protection.',
    url: 'https://koshermydevice.com/service',
  },
}

// Service Schema
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Device Lockdown Service',
  description: 'Professional Device Owner installation that transforms any Android device into an unbypassable, secure phone with Factory Reset Protection and custom app whitelisting.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'KosherMyDevice',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lakewood',
      addressRegion: 'NJ',
      addressCountry: 'US',
    },
    telephone: '+1-718-971-4311',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  offers: {
    '@type': 'Offer',
    price: '125',
    priceCurrency: 'USD',
    priceValidUntil: '2027-12-31',
    availability: 'https://schema.org/InStock',
  },
  serviceType: 'Device Security Configuration',
}

// FAQ Schema
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What devices do you support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Any Android device running Android 6.0 (Marshmallow) or higher. This includes Samsung, Google Pixel, Motorola, OnePlus, and most other Android phones.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can the user bypass this?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Device Owner mode is OS-level control. There is no app to uninstall, no VPN to use, no workaround. The only way to remove it requires admin credentials.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if they factory reset?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Factory Reset Protection kicks in. The device requires our authorization to be set up again. Without credentials, the device is unusable.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a monthly subscription?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The $125 is a one-time fee for setup. There are no mandatory monthly charges. Optional remote monitoring is available for $10/month if desired.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I change the app whitelist later?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Bring the device back or schedule a remote session. The first 30 days of changes are included. After that, a small fee may apply for extensive changes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you support iPhone?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Unfortunately, Apple does not allow Device Owner-style control. Our service is Android only. For iOS, Apple's Screen Time is the best available option, though it has known bypasses.",
      },
    },
    {
      '@type': 'Question',
      name: 'What apps can I whitelist?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Almost any app: phone, texts, email, maps, banking, specific messaging apps, educational apps, work apps. We configure exactly what you need. No browser or app store if you don't want them.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long does setup take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Most devices are completed within 1-2 hours. Complex configurations may take longer. We'll give you an estimate when you contact us.",
      },
    },
  ],
}

export default function ServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wide rounded-full mb-4">Professional Service</span>
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6" style={{fontFamily: 'Cormorant Garamond, serif'}}>Device Lockdown Service</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-8">Transform any Android device into an unbypassable, secure phone. One-time setup, permanent protection.</p>
          <div className="text-5xl font-bold text-navy mb-2" style={{fontFamily: 'Cormorant Garamond, serif'}}>$125</div>
          <p className="text-gray-400 mb-8">One-time fee &bull; No monthly charges required</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition text-lg">Schedule Your Setup &rarr;</Link>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-navy text-center mb-12" style={{fontFamily: 'Cormorant Garamond, serif'}}>What&apos;s Included</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🔐', title: 'Device Owner Installation', desc: 'OS-level control that cannot be bypassed or uninstalled by the user. This is enterprise-grade security.' },
              { icon: '🛡️', title: 'Factory Reset Protection', desc: 'Device becomes unusable if factory reset is attempted without authorization. No escape hatch.' },
              { icon: '📱', title: 'App Whitelist Configuration', desc: 'Only approved apps can be installed or run. You control exactly what the device can do.' },
              { icon: '🔌', title: 'USB/ADB Lockdown', desc: 'No computer connections, no debugging mode, no sideloading apps. All backdoors closed.' },
              { icon: '⚙️', title: 'Settings Restrictions', desc: 'Users cannot access developer options, change network settings, or modify security configurations.' },
              { icon: '💬', title: '30-Day Support', desc: 'Questions? Need adjustments? We are here to help for 30 days after setup. Changes included.' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-navy mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Works */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12" style={{fontFamily: 'Cormorant Garamond, serif'}}>Why Device Owner Actually Works</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gold mb-4">What Filter Apps Do</h3>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start gap-3">
                  <span className="text-red-400">✗</span>
                  <span>Run as a regular app that can be uninstalled</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400">✗</span>
                  <span>Block known bad sites (but miss new ones)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400">✗</span>
                  <span>Can be bypassed with VPN in minutes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400">✗</span>
                  <span>Removed entirely by factory reset</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400">✗</span>
                  <span>73% of teens know how to bypass them</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gold mb-4">What Device Owner Does</h3>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start gap-3">
                  <span className="text-green-400">✓</span>
                  <span>Controls the operating system itself</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400">✓</span>
                  <span>Only allows whitelisted apps (blocks everything else)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400">✓</span>
                  <span>VPN apps cannot be installed at all</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400">✓</span>
                  <span>Factory reset requires admin authorization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400">✓</span>
                  <span>No bypass method exists for users</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-navy text-center mb-12" style={{fontFamily: 'Cormorant Garamond, serif'}}>How It Works</h2>
          <div className="space-y-8">
            {[
              { num: 1, title: 'Contact Us', desc: 'Call, email, or fill out our contact form. Tell us about your device and what apps you need whitelisted.' },
              { num: 2, title: 'Bring Your Device', desc: 'Visit us in Lakewood, NJ or mail your device for remote setup. We handle all the technical work.' },
              { num: 3, title: 'We Configure Everything', desc: 'Device Owner installation, Factory Reset Protection setup, app whitelist configuration, and full security lockdown.' },
              { num: 4, title: 'Pick Up and Go', desc: 'Your device is ready. Fully secured. Cannot be bypassed. We walk you through everything before you leave.' },
            ].map((step) => (
              <div key={step.num} className="flex gap-6 items-start bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">{step.num}</div>
                <div>
                  <h3 className="font-semibold text-navy text-lg">{step.title}</h3>
                  <p className="text-gray-500 mt-1">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-navy text-center mb-12" style={{fontFamily: 'Cormorant Garamond, serif'}}>Who This Service Is For</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '👨‍👩‍👧‍👦', title: 'Parents', desc: 'Protect your children with security they cannot bypass. Peace of mind that actually works.' },
              { icon: '🎓', title: 'Students', desc: 'Stay focused on learning without digital distractions. Keep the tools you need, remove the rest.' },
              { icon: '👔', title: 'Professionals', desc: 'A phone that handles business without the addictive apps that steal your time and focus.' },
              { icon: '🙏', title: 'Individuals', desc: 'Take back control from technology designed to exploit your attention. Choose freedom.' },
            ].map((item, i) => (
              <div key={i} className="text-center p-6">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-navy mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-navy text-center mb-12" style={{fontFamily: 'Cormorant Garamond, serif'}}>Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'What devices do you support?', a: 'Any Android device running Android 6.0 (Marshmallow) or higher. This includes Samsung, Google Pixel, Motorola, OnePlus, and most other Android phones.' },
              { q: 'Can the user bypass this?', a: 'No. Device Owner mode is OS-level control. There is no app to uninstall, no VPN to use, no workaround. The only way to remove it requires admin credentials.' },
              { q: 'What if they factory reset?', a: 'Factory Reset Protection kicks in. The device requires our authorization to be set up again. Without credentials, the device is unusable.' },
              { q: 'Do I need a monthly subscription?', a: 'No. The $125 is a one-time fee for setup. There are no mandatory monthly charges. Optional remote monitoring is available for $10/month if desired.' },
              { q: 'Can I change the app whitelist later?', a: 'Yes. Bring the device back or schedule a remote session. The first 30 days of changes are included. After that, a small fee may apply for extensive changes.' },
              { q: 'Do you support iPhone?', a: 'Unfortunately, Apple does not allow Device Owner-style control. Our service is Android only. For iOS, Apple\'s Screen Time is the best available option, though it has known bypasses.' },
              { q: 'What apps can I whitelist?', a: 'Almost any app: phone, texts, email, maps, banking, specific messaging apps, educational apps, work apps. We configure exactly what you need. No browser or app store if you don\'t want them.' },
              { q: 'How long does setup take?', a: 'Most devices are completed within 1-2 hours. Complex configurations may take longer. We\'ll give you an estimate when you contact us.' },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-navy mb-2">{faq.q}</h3>
                <p className="text-gray-500">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>Ready to Lock Down Your Device?</h2>
          <p className="text-white/70 mb-8">Contact us today. Walk-ins welcome in Lakewood, NJ.</p>
          <div className="flex gap-4 justify-center flex-wrap mb-8">
            <Link href="/contact" className="px-6 py-3 bg-gold text-white font-semibold rounded-full hover:bg-amber-600 transition">Contact Us</Link>
            <a href="tel:7189714311" className="px-6 py-3 border border-white text-white font-semibold rounded-full hover:bg-white/10 transition">📞 (718) 971-4311</a>
          </div>
          <p className="text-white/50 text-sm">Located in Lakewood, NJ &bull; Serving clients nationwide</p>
        </div>
      </section>
    </>
  )
}
