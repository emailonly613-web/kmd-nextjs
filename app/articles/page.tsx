import Link from 'next/link'

export const metadata = {
  title: 'Knowledge Hub - Digital Wellness Articles | KosherMyDevice',
  description: 'Research-backed articles on smartphone addiction, digital wellness, parental controls, and device security. Expert guides for families and organizations.',
}

const articles = [
  { slug: 'the-1926-test', cat: 'Perspective', time: '6 min', title: 'The 1926 Test: What Your Phone Would Look Like to Your Great-Grandfather', desc: 'Strip away the technology. We didn\'t get weaker — the test got harder.', icon: '🕰️', featured: true },
  { slug: 'smartphone-addiction-crisis', cat: 'Research', time: '12 min', title: 'The Smartphone Addiction Crisis: Statistics, Science, and Solutions', desc: '57% of Americans admit to phone addiction. The data reveals an epidemic.', icon: '📊' },
  { slug: 'when-should-child-get-phone', cat: 'Parenting', time: '15 min', title: 'When Should Your Child Get a Phone? A Complete Guide for Parents', desc: 'Expert recommendations say 13-14, but maturity and environment matter more than age.', icon: '👶' },
  { slug: 'device-owner-vs-filters', cat: 'Technology', time: '12 min', title: 'Device Owner vs. Filter Apps: Why System-Level Protection Wins', desc: '73% of teens bypass parental controls. Device Owner technology cannot be bypassed.', icon: '🔐' },
  { slug: 'school-phone-bans-working', cat: 'Research', time: '14 min', title: 'School Phone Bans Are Working: What 31 States Have Learned', desc: 'Test scores up, anxiety down, students actually talking to each other again.', icon: '🏫' },
  { slug: 'dumb-phone-revolution', cat: 'Wellness', time: '12 min', title: 'The Dumb Phone Revolution: Why 28% of Gen Z Wants a Basic Phone', desc: 'A generation raised on smartphones is choosing to step back.', icon: '📞' },
  { slug: 'social-media-teen-mental-health', cat: 'Research', time: '15 min', title: 'Social Media and Teen Mental Health: The Complete Research Review', desc: 'Teen depression up 150% since 2010. The correlation with smartphones is undeniable.', icon: '💭' },
  { slug: 'vpn-bypass-parental-controls', cat: 'Technology', time: '10 min', title: 'How Kids Use VPNs to Bypass Parental Controls (And How to Stop Them)', desc: 'VPN apps are the #1 bypass method. Here\'s why filter apps can\'t stop them.', icon: '🔓' },
  { slug: 'filter-apps-dont-work', cat: 'Technology', time: '12 min', title: 'Why Filter Apps Don\'t Work: The Technical Truth Parents Need to Know', desc: 'A deep dive into why app-based filters fail and what actually works.', icon: '⚠️' },
  { slug: 'dopamine-detox-guide', cat: 'Wellness', time: '14 min', title: 'The Complete Guide to Dopamine Detox: Reclaim Your Brain from Your Phone', desc: 'Your brain can recalibrate in 2-4 weeks. Here\'s the science and the method.', icon: '🧪' },
  { slug: 'screen-time-statistics-2026', cat: 'Research', time: '10 min', title: 'Screen Time Statistics 2026: How Much Time We Really Spend on Phones', desc: 'The average adult spends 4+ hours daily on their phone. Teens average 7+ hours.', icon: '⏱️' },
  { slug: 'yeshiva-device-management', cat: 'Education', time: '12 min', title: 'Device Management for Yeshivas: A Complete Implementation Guide', desc: 'How Jewish day schools are implementing effective device policies that work.', icon: '🎓' },
  { slug: 'summer-camp-phone-policy', cat: 'Education', time: '10 min', title: 'Summer Camp Phone Policy: Creating the Immersive Experience', desc: 'Why phone-free camps produce better outcomes and how to implement it.', icon: '🏕️' },
  { slug: 'shmirat-einayim-digital-age', cat: 'Faith', time: '12 min', title: 'Shmirat Einayim in the Digital Age: Ancient Wisdom for Modern Challenges', desc: 'Torah principles applied to smartphone use and digital boundaries.', icon: '✡️' },
  { slug: 'factory-reset-protection-explained', cat: 'Technology', time: '10 min', title: 'Factory Reset Protection Explained: Why It Matters for Device Security', desc: 'Understanding FRP and how it prevents bypass attempts.', icon: '🛡️' },
]

export default function ArticlesPage() {
  const featured = articles.find(a => a.featured)
  const rest = articles.filter(a => !a.featured)

  return (
    <>
      <section className="pt-28 pb-12 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-navy mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>Knowledge Hub</h1>
          <p className="text-gray-500 text-lg">Research-backed articles on digital wellness, device security, and protecting your family.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          {featured && (
            <Link href={`/articles/${featured.slug}`} className="block mb-12 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition group">
              <div className="grid md:grid-cols-2">
                <div className="h-64 md:h-auto bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center text-8xl">{featured.icon}</div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full mb-4 w-fit">Featured</span>
                  <h2 className="text-2xl font-bold text-navy group-hover:text-blue-600 transition mb-3" style={{fontFamily: 'Cormorant Garamond, serif'}}>{featured.title}</h2>
                  <p className="text-gray-500 mb-4">{featured.desc}</p>
                  <span className="text-blue-600 font-semibold">Read Article &rarr;</span>
                </div>
              </div>
            </Link>
          )}

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {['All', 'Research', 'Technology', 'Parenting', 'Wellness', 'Education', 'Faith'].map((cat) => (
              <span key={cat} className="px-4 py-2 bg-gray-100 text-gray-600 text-sm font-medium rounded-full hover:bg-blue-100 hover:text-blue-600 cursor-pointer transition">
                {cat}
              </span>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((a, i) => (
              <Link key={i} href={`/articles/${a.slug}`} className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-blue-500 hover:shadow-lg transition">
                <div className="h-40 bg-gray-100 flex items-center justify-center text-5xl">{a.icon}</div>
                <div className="p-5">
                  <div className="flex gap-3 text-xs mb-2">
                    <span className="text-blue-600 font-semibold uppercase">{a.cat}</span>
                    <span className="text-gray-400">{a.time} read</span>
                  </div>
                  <h3 className="font-bold text-navy group-hover:text-blue-600 transition mb-2">{a.title}</h3>
                  <p className="text-gray-500 text-sm">{a.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>Ready to Take Action?</h2>
          <p className="text-white/70 mb-8">Knowledge is the first step. Real protection is the next.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/service" className="px-6 py-3 bg-gold text-white font-semibold rounded-full hover:bg-amber-600 transition">Device Lockdown Service</Link>
            <Link href="/pricing" className="px-6 py-3 border border-white text-white font-semibold rounded-full hover:bg-white/10 transition">View All Options</Link>
          </div>
        </div>
      </section>
    </>
  )
}
