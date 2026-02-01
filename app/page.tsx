import Link from 'next/link'

const stats = [
  { number: '57%', label: 'of adults admit phone addiction' },
  { number: '5.3hrs', label: 'average daily screen time' },
  { number: '31', label: 'states with school phone bans' },
  { number: '2x', label: 'depression risk at 5+ hrs/day' },
]

const problems = [
  { icon: '📱', title: 'Smartphone Addiction', desc: 'The average person checks their phone 144 times per day and spends 5+ hours on screens.', stat: '99.2%', statLabel: 'experience anxiety without their phone' },
  { icon: '🧠', title: 'Mental Health Impact', desc: 'Teen depression and anxiety rates have surged alongside smartphone adoption.', stat: '48%', statLabel: 'of teens say social media is negative' },
  { icon: '👨‍👩‍👧‍👦', title: 'Family Disruption', desc: '67% of teens lose sleep to phones. Parents struggle to set boundaries that stick.', stat: '71%', statLabel: 'sleep with phone within reach' },
  { icon: '🏫', title: 'Academic Decline', desc: 'Schools nationwide are banning phones after seeing attention and performance drop.', stat: '90%', statLabel: 'of teachers support phone restrictions' },
  { icon: '🔓', title: 'Security Failures', desc: 'Traditional filters can be bypassed. VPNs, browser tricks, and workarounds defeat most controls.', stat: '73%', statLabel: 'of teens can bypass parental controls' },
  { icon: '⏱️', title: 'Attention Collapse', desc: 'Human attention spans have dropped from 2.5 minutes to 47 seconds since 2004.', stat: '-68%', statLabel: 'decline in sustained focus' },
]

const solutions = [
  { tag: 'For Mobile', title: 'TheKosherPhone', desc: 'LTE smartphones locked at the system level. All the tools you need, none of the distractions.', features: ['Device Owner security — cannot be bypassed', 'Whitelist-only app architecture', 'Factory Reset Protection enabled', 'Business apps: email, maps, banking, messaging'], link: 'https://thekosherphone.com', color: 'blue' },
  { tag: 'For Home', title: 'KosherSidekick', desc: 'A family tablet with a secured browser. Safe internet access for the whole household.', features: ['Kosher Browser with whitelist control', 'Shared family device — one point of access', 'No hidden browsing or private modes', 'Perfect for homework and family use'], link: 'https://koshersidekick.com', color: 'green' },
  { tag: 'For Learning', title: 'Torah Companion', desc: 'A dedicated MP4 device preloaded with 26 Torah apps. Learning without distraction.', features: ['26 curated Torah learning apps', 'iTorah, TorahAnytime, AllDaf & more', 'No browser, no phone, pure learning', 'Premium subscription with updates'], link: 'https://torahcompanion.com', color: 'gold' },
]

const articles = [
  { slug: 'the-1926-test', cat: 'Perspective', time: '6 min', title: 'The 1926 Test: What Your Phone Would Look Like to Your Great-Grandfather', desc: 'Strip away the technology. A man in 1926 with these behaviors would be pitied.', icon: '🕰️' },
  { slug: 'smartphone-addiction-crisis', cat: 'Research', time: '8 min', title: 'The Smartphone Addiction Crisis: What the Data Shows', desc: '57% of Americans admit to phone addiction. Here\'s what the research reveals.', icon: '📊' },
  { slug: 'when-child-get-phone', cat: 'Parenting', time: '12 min', title: 'When Should Your Child Get a Phone?', desc: 'Experts recommend 13-14, but maturity matters more than age.', icon: '👶' },
  { slug: 'device-owner-vs-filters', cat: 'Technology', time: '6 min', title: 'Device Owner vs. Filters: Why System-Level Wins', desc: 'DNS filters can be bypassed. Here\'s why OS-level security is the only solution.', icon: '🔐' },
  { slug: 'dumb-phone-revolution', cat: 'Wellness', time: '7 min', title: 'The Dumb Phone Revolution', desc: '28% of Gen Z wants a basic phone. They\'re leading the rebellion.', icon: '📞' },
  { slug: 'school-phone-bans', cat: 'Research', time: '9 min', title: 'School Phone Bans Are Working', desc: 'Test scores up, discipline down. The evidence from 31 states.', icon: '🏫' },
]

const enterprise = [
  { icon: '🎓', title: 'Schools & Yeshivos', desc: 'Student devices locked to educational apps. Custom whitelists per grade.' },
  { icon: '🏕️', title: 'Camps & Programs', desc: 'Summer devices with camp-specific apps. Rental programs available.' },
  { icon: '🏢', title: 'Businesses', desc: 'Work phones locked to business apps. BYOD policies enforced at OS level.' },
  { icon: '🏛️', title: 'Institutions', desc: 'Hospitals, rehab centers, religious organizations. Controlled access.' },
  { icon: '🌍', title: 'International', desc: 'Serving US, Canada, UK, Israel, and worldwide. Remote config available.' },
  { icon: '⚙️', title: 'Custom Solutions', desc: 'Need something specific? We build custom configurations. White-label available.' },
]

const comparison = [
  { feature: 'VPN Bypass Protection', dns: '✗ Easily bypassed', app: '✗ VPN defeats filter', owner: '✓ VPN cannot be installed' },
  { feature: 'User Can Uninstall', dns: '◐ Can change DNS', app: '✗ Yes, can delete app', owner: '✓ Cannot be removed' },
  { feature: 'Factory Reset Protection', dns: '✗ No protection', app: '✗ Reset removes app', owner: '✓ Device bricks on reset' },
  { feature: 'App Installation Control', dns: '✗ No control', app: '◐ Can be circumvented', owner: '✓ Whitelist only' },
  { feature: 'Works Offline', dns: '✗ Requires connection', app: '◐ Limited', owner: '✓ Full protection offline' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 text-sm font-semibold rounded-full mb-6">
            ✦ Trusted by 10,000+ Families & Organizations
          </span>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold text-navy mb-6">
            Take Control of Technology.<br/>Before It Controls You.
          </h1>
          
          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-8">
            The definitive platform for digital wellness — research-backed knowledge and enterprise-grade solutions for families, schools, and organizations worldwide.
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap mb-16">
            <Link href="#solutions" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition">
              Explore Solutions
            </Link>
            <Link href="#knowledge" className="px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition">
              Browse Knowledge Hub
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-gray-200">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-display font-bold text-navy">{s.number}</div>
                <div className="text-sm text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Problem Section */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-white/10 text-gold text-xs font-semibold uppercase tracking-wide rounded-full mb-4">The Challenge</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">The Digital Wellness Crisis Is Real</h2>
            <p className="text-white/60 max-w-xl mx-auto">The data doesn't lie. We're facing a technology crisis affecting every demographic, every community, every family.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((p, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition">
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center text-2xl mb-4">{p.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-white/60 text-sm mb-4">{p.desc}</p>
                <div className="pt-4 border-t border-white/10">
                  <div className="text-2xl font-bold text-gold">{p.stat}</div>
                  <div className="text-xs text-white/50">{p.statLabel}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wide rounded-full mb-4">Our Approach</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">System-Level Protection That Works</h2>
            <p className="text-gray-500 max-w-xl mx-auto">We don't rely on apps that can be deleted or filters that can be bypassed. Our Device Owner technology provides OS-level control that's truly tamper-proof.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition hover:-translate-y-2">
                <div className={`h-48 flex items-center justify-center text-6xl ${s.color === 'blue' ? 'bg-blue-50' : s.color === 'green' ? 'bg-green-50' : 'bg-amber-50'}`}>
                  {s.color === 'blue' ? '📱' : s.color === 'green' ? '🏠' : '📖'}
                </div>
                <div className="p-6">
                  <span className="inline-block px-2 py-1 bg-blue-100 text-blue-600 text-xs font-semibold rounded mb-3">{s.tag}</span>
                  <h3 className="text-xl font-display font-bold text-navy mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">{s.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {s.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm">
                        <span className="text-green-500 font-bold">✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={s.link} target="_blank" className="inline-flex items-center gap-1 text-blue-600 font-semibold text-sm hover:gap-2 transition-all">
                    Learn More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Knowledge Hub */}
      <section id="knowledge" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wide rounded-full mb-4">Knowledge Hub</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">The Definitive Resource for Digital Wellness</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Research-backed articles, practical guides, and expert insights.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((a, i) => (
              <Link key={i} href={`/articles/${a.slug}`} className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-blue-500 hover:shadow-lg transition">
                <div className="h-40 bg-gray-100 flex items-center justify-center text-5xl">{a.icon}</div>
                <div className="p-5">
                  <div className="flex gap-3 text-xs mb-2">
                    <span className="text-blue-600 font-semibold uppercase">{a.cat}</span>
                    <span className="text-gray-400">{a.time}</span>
                  </div>
                  <h3 className="font-display font-bold text-navy group-hover:text-blue-600 transition mb-2">{a.title}</h3>
                  <p className="text-gray-500 text-sm line-clamp-2">{a.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link href="/articles" className="inline-flex items-center gap-2 px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition">
              View All Articles →
            </Link>
          </div>
        </div>
      </section>
      
      {/* Enterprise */}
      <section id="enterprise" className="py-20 bg-gradient-to-b from-navy to-[#0d1e3a] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-gold/20 text-gold text-xs font-semibold uppercase tracking-wide rounded-full mb-4">For Organizations</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Enterprise Solutions at Scale</h2>
            <p className="text-white/60 max-w-xl mx-auto">Custom device configurations for schools, camps, businesses, and institutions worldwide.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {enterprise.map((e, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 hover:border-gold transition">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-gold to-amber-500 rounded-xl flex items-center justify-center text-3xl">{e.icon}</div>
                <h3 className="font-semibold mb-2">{e.title}</h3>
                <p className="text-white/60 text-sm">{e.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3">Ready to Protect Your Organization?</h3>
            <p className="text-white/60 mb-6">Contact us for institutional pricing and custom configuration services.</p>
            <Link href="/enterprise" className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-white font-semibold rounded-full hover:bg-amber-600 transition">
              Request Enterprise Demo
            </Link>
          </div>
        </div>
      </section>
      
      {/* Comparison */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wide rounded-full mb-4">The Difference</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">Why Device Owner Technology Wins</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-4 font-semibold text-sm text-gray-600">Feature</th>
                  <th className="text-left p-4 font-semibold text-sm text-gray-600">DNS Filters</th>
                  <th className="text-left p-4 font-semibold text-sm text-gray-600">App Controls</th>
                  <th className="text-left p-4 font-semibold text-sm text-white bg-blue-600 rounded-t-lg">Device Owner</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((c, i) => (
                  <tr key={i} className="border-b border-gray-200">
                    <td className="p-4 font-medium">{c.feature}</td>
                    <td className="p-4 text-red-500">{c.dns}</td>
                    <td className="p-4 text-amber-500">{c.app}</td>
                    <td className="p-4 text-green-600 bg-blue-50 font-semibold">{c.owner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-navy text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Ready to Take Back Control?</h2>
          <p className="text-white/80 text-lg mb-8">Whether you're a parent, educator, or organization leader — we have a solution that works.</p>
          
          <div className="flex gap-4 justify-center flex-wrap mb-10">
            <a href="https://thekosherphone.com" className="px-6 py-3 bg-gold text-white font-semibold rounded-full hover:bg-amber-600 transition">Get a Kosher Phone</a>
            <Link href="/enterprise" className="px-6 py-3 bg-white/10 border border-white text-white font-semibold rounded-full hover:bg-white/20 transition">Enterprise Inquiry</Link>
          </div>
          
          <div className="flex gap-8 justify-center flex-wrap text-lg">
            <a href="tel:7189714311" className="flex items-center gap-2">📞 (718) 971-4311</a>
            <span className="flex items-center gap-2">📍 Lakewood, NJ</span>
            <a href="mailto:info@koshermydevice.com" className="flex items-center gap-2">✉️ info@koshermydevice.com</a>
          </div>
        </div>
      </section>
    </>
  )
}
