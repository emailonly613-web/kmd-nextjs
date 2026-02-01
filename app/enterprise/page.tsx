import Link from 'next/link'

const useCases = [
  { icon: '🎓', title: 'Schools & Yeshivos', color: 'blue', desc: 'Provide students with learning tools while eliminating distractions.', features: ['Grade-specific whitelists', 'Educational apps pre-installed', 'No browser or social media', 'Bulk deployment ready', 'Central management'] },
  { icon: '🏕️', title: 'Camps & Programs', color: 'green', desc: 'Communication without unlimited internet access.', features: ['Camp-branded experience', 'Communication apps only', 'Emergency features', 'Rental programs', 'Parent portals'] },
  { icon: '🏢', title: 'Businesses', color: 'purple', desc: 'Company phones locked to business applications.', features: ['Business whitelist only', 'Email, CRM, messaging', 'No personal apps', 'MDM integration', 'Remote wipe'] },
  { icon: '🏛️', title: 'Institutions', color: 'gold', desc: 'Healthcare, rehab, religious organizations.', features: ['HIPAA-compliant', 'Appropriate access levels', 'Staff vs. client profiles', 'Custom branding', 'Content whitelisting'] },
]

export default function EnterprisePage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-b from-navy to-[#0d1e3a] text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 text-gold text-sm font-semibold rounded-full mb-6">✦ 200+ Organizations Worldwide</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Device Security at Scale</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-8">Custom Device Owner configurations for schools, camps, businesses, and institutions.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#contact" className="px-6 py-3 bg-gold text-white font-semibold rounded-full hover:bg-amber-600 transition">Request Demo</a>
            <a href="#use-cases" className="px-6 py-3 border border-white text-white font-semibold rounded-full hover:bg-white/10 transition">View Use Cases</a>
          </div>
        </div>
      </section>
      
      <section id="use-cases" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-navy mb-4">Solutions for Every Organization</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((uc, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className={`p-8 text-center ${uc.color === 'blue' ? 'bg-blue-50' : uc.color === 'green' ? 'bg-green-50' : uc.color === 'purple' ? 'bg-purple-50' : 'bg-amber-50'}`}>
                  <div className="text-5xl mb-4">{uc.icon}</div>
                  <h3 className="text-xl font-display font-bold text-navy">{uc.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-500 mb-4">{uc.desc}</p>
                  <ul className="space-y-2 mb-6">{uc.features.map((f, j) => (<li key={j} className="flex items-center gap-2 text-sm"><span className="text-green-500">✓</span> {f}</li>))}</ul>
                  <a href="#contact" className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-full text-sm">Request Demo</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section id="contact" className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-display font-bold text-navy mb-4">Let's Talk</h2>
          <p className="text-gray-500 mb-8">Contact us for institutional pricing and custom solutions.</p>
          <div className="flex gap-8 justify-center flex-wrap mb-8">
            <a href="tel:7189714311" className="flex items-center gap-2 text-lg">📞 (718) 971-4311</a>
            <a href="mailto:enterprise@koshermydevice.com" className="flex items-center gap-2 text-lg text-blue-600">✉️ enterprise@koshermydevice.com</a>
          </div>
        </div>
      </section>
    </>
  )
}
