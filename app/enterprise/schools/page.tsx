import Link from 'next/link'

export const metadata = {
  title: 'Device Management for Yeshivas & Day Schools | KosherMyDevice',
  description: 'Enterprise device management for yeshivas and Jewish day schools. Bulk Device Owner deployment, custom whitelists by grade, fleet management.',
}

export default function EnterpriseSchoolsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-navy to-[#0d1e3a] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 text-gold text-sm font-semibold rounded-full mb-6">🎓 Enterprise Education</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{fontFamily: 'Cormorant Garamond, serif'}}>Device Management for Yeshivas &amp; Day Schools</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-8">Protect your talmidim with system-level security they cannot bypass. Grade-specific whitelists, fleet management, and dedicated support for educational institutions.</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-gold text-white font-semibold rounded-full hover:bg-amber-600 transition text-lg">Request a Consultation &rarr;</Link>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-navy text-center mb-12" style={{fontFamily: 'Cormorant Garamond, serif'}}>Challenges Schools Face</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '🔓', title: 'Students Bypass Filters', desc: '73% of students know how to bypass parental controls. VPNs, DNS changes, and workarounds spread quickly through the student body.' },
              { icon: '📱', title: 'Distraction in Class', desc: 'Even when phones are "away," the mental pull remains. True focus requires true disconnection.' },
              { icon: '⚖️', title: 'Liability Concerns', desc: 'Schools can be held responsible for content accessed on school-sanctioned devices without proper protection.' },
              { icon: '🤝', title: 'Parent Expectations', desc: 'Frum parents expect real protection, not security theater. Community standards demand genuine solutions.' },
              { icon: '👥', title: 'Peer Pressure', desc: 'When some students have unrestricted phones, it creates pressure on families trying to maintain boundaries.' },
              { icon: '🔧', title: 'IT Burden', desc: 'Schools aren\'t IT departments. Managing device security shouldn\'t require a full-time tech staff.' },
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
          <h2 className="text-3xl font-bold text-navy text-center mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>The Device Owner Solution</h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">Enterprise-grade device management adapted for educational institutions. The same technology that secures Fortune 500 companies now protects your students.</p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '📋', title: 'Grade-Specific Whitelists', desc: 'Different apps for elementary, middle, and high school. Permissions expand as students mature.' },
              { icon: '🎓', title: 'Educational Apps Only', desc: 'Sefaria, HebrewBooks, TorahAnytime, and approved learning apps. No browser, no social media, no distractions.' },
              { icon: '🔐', title: 'No Bypass Possible', desc: 'Device Owner controls at the OS level. No VPN, no workaround, no factory reset escape.' },
              { icon: '☁️', title: 'Central Management', desc: 'Push policy updates to all devices remotely. Add or remove apps across the fleet with one action.' },
              { icon: '📊', title: 'Compliance Reporting', desc: 'Verify all devices are protected. Reports for administration and parents if desired.' },
              { icon: '🛡️', title: 'FRP Protection', desc: 'Factory Reset Protection ensures students can\'t wipe and restart. Devices remain managed.' },
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

      {/* Implementation Models */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-navy text-center mb-12" style={{fontFamily: 'Cormorant Garamond, serif'}}>Implementation Options</h2>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-navy text-lg mb-2">Option 1: School-Provided Devices</h3>
              <p className="text-gray-500 mb-4">School purchases devices in bulk. We configure all with Device Owner. School distributes to students. Devices remain school property.</p>
              <p className="text-sm text-blue-600">Best for: Schools wanting complete control and standardization</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-navy text-lg mb-2">Option 2: Required Configuration for Personal Devices</h3>
              <p className="text-gray-500 mb-4">Parents purchase devices. School requires Device Owner enrollment as condition of bringing device to school. We handle configuration.</p>
              <p className="text-sm text-blue-600">Best for: Schools wanting protection without device purchase costs</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-navy text-lg mb-2">Option 3: Recommended Service</h3>
              <p className="text-gray-500 mb-4">School recommends our service to parents. Families opt in. We work with individual families while maintaining school-approved standards.</p>
              <p className="text-sm text-blue-600">Best for: Schools preferring gradual rollout or parent-choice model</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8" style={{fontFamily: 'Cormorant Garamond, serif'}}>School Pricing</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-3xl font-bold text-gold mb-2">10-50</div>
              <div className="text-white/60 mb-4">devices</div>
              <div className="text-2xl font-bold text-white">$100</div>
              <div className="text-white/60 text-sm">per device</div>
            </div>
            <div className="bg-white/10 rounded-xl p-6 ring-2 ring-gold">
              <div className="text-3xl font-bold text-gold mb-2">51-200</div>
              <div className="text-white/60 mb-4">devices</div>
              <div className="text-2xl font-bold text-white">$85</div>
              <div className="text-white/60 text-sm">per device</div>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-3xl font-bold text-gold mb-2">201+</div>
              <div className="text-white/60 mb-4">devices</div>
              <div className="text-2xl font-bold text-white">Custom</div>
              <div className="text-white/60 text-sm">contact for quote</div>
            </div>
          </div>
          <p className="text-white/50 text-sm mt-8">Includes configuration, FRP setup, and first-year support. Annual support renewal available.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>Ready to Protect Your Talmidim?</h2>
          <p className="text-gray-500 mb-8">Schedule a consultation to discuss your school&apos;s needs. We&apos;ll create a customized plan that works for your institution.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition">Schedule Consultation</Link>
            <a href="tel:7189714311" className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition">📞 (718) 971-4311</a>
          </div>
        </div>
      </section>
    </>
  )
}
