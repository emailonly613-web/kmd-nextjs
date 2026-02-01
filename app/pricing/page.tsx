import Link from 'next/link'

export const metadata = {
  title: 'Pricing | KosherMyDevice',
  description: 'Transparent pricing for device lockdown service and kosher devices. $125 one-time setup. TheKosherPhone, Torah Companion, and KosherSidekick devices available.',
}

export default function PricingPage() {
  const products = [
    {
      name: 'Device Lockdown Service',
      price: '$125',
      period: 'one-time',
      desc: 'We lock down YOUR existing Android device',
      features: ['Device Owner installation', 'Factory Reset Protection', 'Custom app whitelist', 'USB/ADB lockdown', '30-day support included'],
      cta: 'Schedule Setup',
      link: '/contact',
      featured: true,
    },
    {
      name: 'TheKosherPhone Basic',
      price: '$299',
      period: '+ $15/mo optional',
      desc: 'LTE smartphone, pre-configured and ready',
      features: ['Pre-configured device', 'Device Owner enabled', 'Standard app whitelist', 'Maps, banking, email included', 'FRP protection'],
      cta: 'Learn More',
      link: 'https://thekosherphone.com',
      featured: false,
    },
    {
      name: 'TheKosherPhone Business',
      price: '$449',
      period: '+ $25/mo optional',
      desc: 'For professionals who need more',
      features: ['Everything in Basic', 'Expanded app whitelist', 'Business apps enabled', 'Priority support', 'Custom configuration'],
      cta: 'Learn More',
      link: 'https://thekosherphone.com',
      featured: false,
    },
    {
      name: 'Torah Companion',
      price: '$149',
      period: '+ $5/mo subscription',
      desc: 'Dedicated Torah learning device',
      features: ['26 Torah apps preloaded', 'iTorah, TorahAnytime, AllDaf', 'No browser, no phone', 'Regular OTA updates', 'Perfect for learning'],
      cta: 'Learn More',
      link: 'https://torahcompanion.com',
      featured: false,
    },
    {
      name: 'KosherSidekick',
      price: '$199',
      period: '+ $10/mo optional',
      desc: 'Family tablet for the home',
      features: ['Kosher Browser included', 'Whitelist-only internet', 'Shared family device', 'No private browsing', 'Parental dashboard'],
      cta: 'Learn More',
      link: 'https://koshersidekick.com',
      featured: false,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'volume pricing',
      desc: 'For schools, camps, businesses',
      features: ['Bulk device configuration', 'Custom app whitelists', 'Fleet management', 'Dedicated support', 'Volume discounts'],
      cta: 'Contact Sales',
      link: '/enterprise',
      featured: false,
    },
  ]

  return (
    <>
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6" style={{fontFamily: 'Cormorant Garamond, serif'}}>Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">No hidden fees. No surprises. Just real protection that actually works.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <div key={i} className={`rounded-2xl p-6 ${product.featured ? 'bg-navy text-white ring-4 ring-gold' : 'bg-white border border-gray-200'}`}>
                {product.featured && <span className="inline-block px-3 py-1 bg-gold text-white text-xs font-semibold rounded-full mb-4">Most Popular</span>}
                <h3 className={`text-xl font-bold mb-2 ${product.featured ? 'text-white' : 'text-navy'}`} style={{fontFamily: 'Cormorant Garamond, serif'}}>{product.name}</h3>
                <div className="mb-4">
                  <span className={`text-3xl font-bold ${product.featured ? 'text-white' : 'text-navy'}`}>{product.price}</span>
                  <span className={`text-sm ${product.featured ? 'text-white/70' : 'text-gray-400'}`}> {product.period}</span>
                </div>
                <p className={`text-sm mb-6 ${product.featured ? 'text-white/80' : 'text-gray-500'}`}>{product.desc}</p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((f, j) => (
                    <li key={j} className={`flex items-center gap-2 text-sm ${product.featured ? 'text-white/90' : 'text-gray-600'}`}>
                      <span className={product.featured ? 'text-gold' : 'text-green-500'}>&#10003;</span> {f}
                    </li>
                  ))}
                </ul>
                {product.link.startsWith('http') ? (
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-center py-3 rounded-full font-semibold transition ${product.featured ? 'bg-gold text-white hover:bg-amber-600' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                  >
                    {product.cta}
                  </a>
                ) : (
                  <Link
                    href={product.link}
                    className={`block text-center py-3 rounded-full font-semibold transition ${product.featured ? 'bg-gold text-white hover:bg-amber-600' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                  >
                    {product.cta}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-navy text-center mb-12" style={{fontFamily: 'Cormorant Garamond, serif'}}>Which Option Is Right for You?</h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-navy mb-2">Already have an Android phone you want to keep?</h3>
              <p className="text-gray-500 mb-4">Choose the <strong>Device Lockdown Service ($125)</strong>. We&apos;ll configure your existing device with full Device Owner protection.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-navy mb-2">Need a new phone that&apos;s ready to go?</h3>
              <p className="text-gray-500 mb-4">Choose <strong>TheKosherPhone ($299-$449)</strong>. Pre-configured device with Device Owner already installed. Just activate and use.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-navy mb-2">Want a dedicated Torah learning device?</h3>
              <p className="text-gray-500 mb-4">Choose <strong>Torah Companion ($149)</strong>. 26 Torah apps preloaded. No phone, no browser, just learning.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-navy mb-2">Need a family tablet for the home?</h3>
              <p className="text-gray-500 mb-4">Choose <strong>KosherSidekick ($199)</strong>. Shared device with kosher browser for the whole family.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-navy mb-2">Managing devices for a school, camp, or business?</h3>
              <p className="text-gray-500 mb-4">Choose <strong>Enterprise (custom pricing)</strong>. Bulk configuration, fleet management, volume discounts. <Link href="/enterprise" className="text-blue-600 hover:underline">Learn more &rarr;</Link></p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-navy text-center mb-12" style={{fontFamily: 'Cormorant Garamond, serif'}}>Pricing Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'Are there hidden fees?', a: 'No. The prices shown are the actual prices. The $125 lockdown service is one-time with no required monthly fees. Device prices include the lockdown configuration.' },
              { q: 'What does the monthly fee cover?', a: 'Monthly fees are optional and cover remote monitoring, updates, and priority support. The devices work fully without any monthly subscription.' },
              { q: 'Can I get a refund?', a: 'For the lockdown service, we offer a satisfaction guarantee. If you\'re not happy with the configuration, we\'ll adjust it at no charge. Device returns follow standard return policies.' },
              { q: 'Do you offer payment plans?', a: 'For enterprise orders over $1,000, we can discuss payment terms. Individual services and devices are paid at time of service.' },
              { q: 'What about international shipping?', a: 'We ship devices within the US. International customers can use a mail forwarding service or contact us for options.' },
            ].map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-6">
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
          <h2 className="text-3xl font-bold mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>Questions About Pricing?</h2>
          <p className="text-white/70 mb-8">We&apos;re happy to help you find the right solution for your needs and budget.</p>
          <Link href="/contact" className="inline-block px-6 py-3 bg-gold text-white font-semibold rounded-full hover:bg-amber-600 transition">Contact Us</Link>
        </div>
      </section>
    </>
  )
}
