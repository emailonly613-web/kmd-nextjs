import Link from 'next/link'

export const metadata = {
  title: 'Support | KosherMyDevice',
  description: 'Get help with your KosherMyDevice product. Troubleshooting guides and contact options.'
}

export default function SupportPage() {
  return (
    <>
      <section className="pt-28 pb-12 bg-gray-50 text-center">
        <div className="container">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">How Can We Help?</h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">Find answers, troubleshooting guides, and ways to reach our support team.</p>
        </div>
      </section>
      
      {/* Quick Help */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl font-bold">Quick Help</h2>
            <p className="text-gray-500">Select your product for specific support.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: '📱', title: 'TheKosherPhone', desc: 'Setup, apps, calling, messaging' },
              { icon: '🏠', title: 'KosherSidekick', desc: 'Tablet setup, browser config' },
              { icon: '📖', title: 'Torah Companion', desc: 'App access, subscriptions' },
              { icon: '🏢', title: 'Enterprise', desc: 'Bulk deployment, MDM' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 text-center hover:bg-blue-50 transition cursor-pointer">
                <span className="text-4xl">{item.icon}</span>
                <h3 className="font-semibold mt-4 mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact */}
      <section className="py-12 bg-navy text-white text-center">
        <div className="container">
          <h2 className="font-display text-2xl font-bold text-white mb-4">Need Direct Help?</h2>
          <p className="text-white/70 mb-8">Our support team is here during business hours.</p>
          
          <div className="flex gap-6 justify-center flex-wrap">
            <div className="bg-white/10 border border-white/20 rounded-xl p-6 min-w-48">
              <span className="text-2xl">📞</span>
              <h3 className="text-white font-semibold mt-2">Call Us</h3>
              <a href="tel:7189714311" className="text-gold">(718) 971-4311</a>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6 min-w-48">
              <span className="text-2xl">✉️</span>
              <h3 className="text-white font-semibold mt-2">Email</h3>
              <a href="mailto:support@koshermydevice.com" className="text-gold">support@koshermydevice.com</a>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6 min-w-48">
              <span className="text-2xl">📍</span>
              <h3 className="text-white font-semibold mt-2">Walk In</h3>
              <span className="text-white/70">Lakewood, NJ</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-badge">FAQ</span>
            <h2 className="font-display text-2xl font-bold mt-4">Frequently Asked Questions</h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: 'What makes Device Owner different from regular parental controls?', a: 'Device Owner operates at the OS level. It cannot be bypassed by VPNs, cannot be uninstalled, and persists after factory reset.' },
              { q: 'Can I add or remove apps after setup?', a: 'Yes, but changes must be made by an authorized administrator. Contact us to request app changes.' },
              { q: 'What happens if I forget my admin password?', a: 'Contact support. We can verify your identity and help you reset access.' },
              { q: 'Will my device still receive security updates?', a: 'Yes. Device Owner doesn\'t prevent system updates. You\'ll continue receiving security patches.' },
              { q: 'Can I use the device with any carrier?', a: 'Our devices are unlocked and work with any GSM carrier (AT&T, T-Mobile, etc.).' },
            ].map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-gray-500">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Troubleshooting */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-badge">Troubleshooting</span>
            <h2 className="font-display text-2xl font-bold mt-4">Common Issues & Solutions</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: '📱 Phone Won\'t Connect to WiFi', steps: ['Toggle WiFi off and on', 'Forget network and reconnect', 'Restart device', 'Contact support if persists'] },
              { title: '🔋 Battery Draining Quickly', steps: ['Check battery usage in Settings', 'Reduce screen brightness', 'Disable unused location services', 'Enable battery saver mode'] },
              { title: '📶 Calls Not Going Through', steps: ['Check signal strength', 'Toggle airplane mode on/off', 'Restart device', 'Contact carrier if persists'] },
              { title: '📧 App Not Working', steps: ['Force stop and reopen app', 'Clear app cache', 'Check for app updates', 'Contact support for help'] },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6">
                <h3 className="font-semibold mb-4">{item.title}</h3>
                <ol className="space-y-2">
                  {item.steps.map((step, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm">
                      <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{j + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
