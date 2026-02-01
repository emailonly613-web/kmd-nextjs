import Link from 'next/link'

export const metadata = {
  title: 'Secure Work Devices for Your Team | KosherMyDevice',
  description: 'Enterprise device lockdown for businesses. Company phones locked to business apps, productivity protection, data security, and MDM alternative.',
}

export default function EnterpriseBusinessesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 text-white text-sm font-semibold rounded-full mb-6">🏢 Enterprise Business</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{fontFamily: 'Cormorant Garamond, serif'}}>Secure Work Devices for Your Team</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-8">Company phones locked to business applications. Eliminate productivity loss, protect company data, and maintain professional standards.</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition text-lg">Request Business Quote &rarr;</Link>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-navy text-center mb-12" style={{fontFamily: 'Cormorant Garamond, serif'}}>Business Challenges We Solve</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '⏱️', title: 'Productivity Loss', desc: 'Employees check phones 96 times per workday. Each interruption costs 23 minutes of focus. The math is brutal.' },
              { icon: '🔒', title: 'Data Security', desc: 'Personal apps on work phones create data leakage risks. One wrong share to TikTok and company data is public.' },
              { icon: '📋', title: 'Compliance Requirements', desc: 'Regulated industries need guaranteed device security. BYOD policies are liability risks without enforcement.' },
              { icon: '💼', title: 'Professional Standards', desc: 'Company phones should be for company business. Social media and games undermine professional culture.' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-navy mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-navy text-center mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>Our Business Solution</h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">Device Owner technology for the enterprise. The same protection corporations pay six figures for MDM solutions to approximate.</p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '📱', title: 'Business App Whitelist', desc: 'Phone, email, Slack, CRM, and your specific business apps. Nothing else runs.' },
              { icon: '🚫', title: 'No Personal Apps', desc: 'No social media, no games, no personal streaming. Work phones for work.' },
              { icon: '🔐', title: 'Unbypassable Security', desc: 'Device Owner controls at the OS level. Employees cannot disable or work around it.' },
              { icon: '☁️', title: 'Remote Management', desc: 'Push policy updates, add apps, wipe lost devices — all remotely.' },
              { icon: '📊', title: 'Compliance Reports', desc: 'Verification that all devices maintain required security posture.' },
              { icon: '🛡️', title: 'Lost Device Protection', desc: 'FRP ensures lost or stolen devices cannot be reset and used. Data stays secure.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-navy mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-navy text-center mb-12" style={{fontFamily: 'Cormorant Garamond, serif'}}>Common Use Cases</h2>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-navy text-lg mb-2">Field Service Teams</h3>
              <p className="text-gray-500">Workers in the field need communication, navigation, and work apps. They don&apos;t need TikTok. Lock devices to job-essential functions.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-navy text-lg mb-2">Sales Teams</h3>
              <p className="text-gray-500">CRM, email, phone, and presentation apps. Remove distractions that compete with customer focus.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-navy text-lg mb-2">Healthcare Providers</h3>
              <p className="text-gray-500">HIPAA compliance requires device security. Locked-down phones ensure patient data stays protected.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-navy text-lg mb-2">Shared Device Fleets</h3>
              <p className="text-gray-500">Devices used by multiple employees across shifts. Consistent configuration ensures every user has the same secure experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 bg-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12" style={{fontFamily: 'Cormorant Garamond, serif'}}>Device Owner vs. Traditional MDM</h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[500px]">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-3 text-white/60">Feature</th>
                  <th className="text-center py-3 text-white/60">Traditional MDM</th>
                  <th className="text-center py-3 text-blue-400">Device Owner</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-white/10">
                  <td className="py-3">User can remove</td>
                  <td className="text-center text-red-400">Often yes</td>
                  <td className="text-center text-green-400">No</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3">Bypass via factory reset</td>
                  <td className="text-center text-red-400">Usually</td>
                  <td className="text-center text-green-400">No (FRP)</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3">Monthly per-device fees</td>
                  <td className="text-center text-red-400">$5-15/device</td>
                  <td className="text-center text-green-400">Optional</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3">Complex admin console</td>
                  <td className="text-center text-red-400">Yes</td>
                  <td className="text-center text-green-400">Simple</td>
                </tr>
                <tr>
                  <td className="py-3">Setup complexity</td>
                  <td className="text-center text-red-400">IT required</td>
                  <td className="text-center text-green-400">We handle it</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-navy mb-8" style={{fontFamily: 'Cormorant Garamond, serif'}}>Business Pricing</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-3xl font-bold text-navy mb-2">5-25</div>
              <div className="text-gray-400 mb-4">devices</div>
              <div className="text-2xl font-bold text-navy">$100</div>
              <div className="text-gray-400 text-sm">per device setup</div>
            </div>
            <div className="bg-blue-600 text-white rounded-xl p-6">
              <div className="text-3xl font-bold mb-2">26-100</div>
              <div className="text-white/60 mb-4">devices</div>
              <div className="text-2xl font-bold">$80</div>
              <div className="text-white/60 text-sm">per device setup</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-3xl font-bold text-navy mb-2">101+</div>
              <div className="text-gray-400 mb-4">devices</div>
              <div className="text-2xl font-bold text-navy">Custom</div>
              <div className="text-gray-400 text-sm">contact for quote</div>
            </div>
          </div>
          <p className="text-gray-400 text-sm mt-8">Optional annual support and management: $15/device/year</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>Ready to Secure Your Fleet?</h2>
          <p className="text-gray-500 mb-8">Contact us for a consultation. We&apos;ll assess your needs and provide a detailed proposal.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition">Request Quote</Link>
            <a href="tel:7189714311" className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-full hover:bg-white transition">📞 (718) 971-4311</a>
          </div>
        </div>
      </section>
    </>
  )
}
