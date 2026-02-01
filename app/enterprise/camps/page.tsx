import Link from 'next/link'

export const metadata = {
  title: 'Phone-Free Summer Camps Made Easy | KosherMyDevice',
  description: 'Enterprise device solutions for summer camps. Pre-configured emergency devices, rental programs, and parent communication solutions.',
}

export default function EnterpriseCampsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-green-800 to-green-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 text-white text-sm font-semibold rounded-full mb-6">🏕️ Enterprise Camps</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{fontFamily: 'Cormorant Garamond, serif'}}>Phone-Free Summer Camps Made Easy</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-8">Create the immersive camp experience campers deserve. Locked-down devices for emergencies only, rental programs, and seamless parent communication.</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-white text-green-800 font-semibold rounded-full hover:bg-gray-100 transition text-lg">Request Camp Quote &rarr;</Link>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-navy text-center mb-12" style={{fontFamily: 'Cormorant Garamond, serif'}}>Why Camps Are Going Phone-Free</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '😢', title: 'Homesickness Amplified', desc: 'Phone access makes homesickness worse, not better. Each call home resets the adjustment clock.' },
              { icon: '📱', title: 'Social Media Drama', desc: 'Instagram and TikTok bring home dynamics to camp. Group chats create hierarchy and exclusion.' },
              { icon: '👀', title: 'Distraction from Experience', desc: 'Phones at the campfire, phones during activities. Campers miss the magic when they\'re scrolling.' },
              { icon: '🔒', title: 'Privacy and Safety', desc: 'Cameras create photo concerns. Location sharing enables inappropriate contact. Risks outweigh benefits.' },
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
          <h2 className="text-3xl font-bold text-navy text-center mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>Our Camp Solutions</h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">Address parent concerns about communication while keeping phones out of the camp experience.</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-navy mb-3" style={{fontFamily: 'Cormorant Garamond, serif'}}>Emergency Communication Devices</h3>
              <p className="text-gray-500 mb-4">Locked-down phones that only make calls to pre-approved numbers. No camera, no apps, no internet. Just calls when genuinely needed.</p>
              <ul className="text-gray-600 text-sm space-y-2">
                <li className="flex items-center gap-2"><span className="text-green-500">&#10003;</span> Calls to parents/emergency contacts only</li>
                <li className="flex items-center gap-2"><span className="text-green-500">&#10003;</span> No camera functionality</li>
                <li className="flex items-center gap-2"><span className="text-green-500">&#10003;</span> No browser or apps</li>
                <li className="flex items-center gap-2"><span className="text-green-500">&#10003;</span> Cannot be reconfigured by campers</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-navy mb-3" style={{fontFamily: 'Cormorant Garamond, serif'}}>Seasonal Rental Program</h3>
              <p className="text-gray-500 mb-4">Don&apos;t buy, rent. We provide devices for the summer, collect them at session end, and handle everything.</p>
              <ul className="text-gray-600 text-sm space-y-2">
                <li className="flex items-center gap-2"><span className="text-green-500">&#10003;</span> Devices delivered before camp starts</li>
                <li className="flex items-center gap-2"><span className="text-green-500">&#10003;</span> Pre-configured with your approved contacts</li>
                <li className="flex items-center gap-2"><span className="text-green-500">&#10003;</span> Collection at session end</li>
                <li className="flex items-center gap-2"><span className="text-green-500">&#10003;</span> No year-round storage or maintenance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-navy text-center mb-12" style={{fontFamily: 'Cormorant Garamond, serif'}}>What&apos;s Included</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '📋', title: 'Custom Contact Lists', desc: 'Each device configured with that camper\'s approved numbers. Parents, emergency contacts, camp office.' },
              { icon: '🏷️', title: 'Camp Branding', desc: 'Optional camp logo on lock screen. Devices feel like camp property, not personal phones.' },
              { icon: '📍', title: 'GPS Tracking (Optional)', desc: 'Location tracking for safety if desired. Know where campers are during trips.' },
              { icon: '🔋', title: 'Durable Hardware', desc: 'Phones selected for durability and battery life. Built for camp conditions.' },
              { icon: '🛡️', title: 'FRP Protection', desc: 'Campers can\'t reset or reconfigure. Devices remain locked to camp settings.' },
              { icon: '📞', title: 'Support Line', desc: 'Direct support during camp season. Issues resolved quickly.' },
            ].map((item, i) => (
              <div key={i} className="text-center p-6">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-navy mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-green-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8" style={{fontFamily: 'Cormorant Garamond, serif'}}>Camp Pricing</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-2">Rental Program</h3>
              <div className="text-3xl font-bold text-white mb-2">$25</div>
              <div className="text-white/60 mb-4">per device/session</div>
              <ul className="text-white/80 text-sm space-y-2 text-left">
                <li>&#10003; Pre-configured devices</li>
                <li>&#10003; Delivery and pickup</li>
                <li>&#10003; Support during season</li>
                <li>&#10003; Damage waiver available</li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-2">Purchase Program</h3>
              <div className="text-3xl font-bold text-white mb-2">$85</div>
              <div className="text-white/60 mb-4">per device (one-time)</div>
              <ul className="text-white/80 text-sm space-y-2 text-left">
                <li>&#10003; Camp owns devices</li>
                <li>&#10003; Full configuration included</li>
                <li>&#10003; Annual support available</li>
                <li>&#10003; Reuse year after year</li>
              </ul>
            </div>
          </div>
          <p className="text-white/50 text-sm mt-8">Minimum order: 20 devices. Contact us for custom quotes.</p>
        </div>
      </section>

      {/* Testimonial placeholder */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="bg-gray-50 rounded-xl p-8">
            <p className="text-xl text-gray-600 italic mb-4">&quot;Our campers actually talk to each other now. The campfire is about presence, not screens. Parents were nervous at first, but by week two, everyone understood why we made this choice.&quot;</p>
            <p className="text-gray-500">— Camp Director, Jewish Summer Camp</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>Ready to Go Phone-Free?</h2>
          <p className="text-gray-500 mb-8">Contact us to discuss your camp&apos;s needs. We recommend planning 2-3 months before camp starts.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="px-6 py-3 bg-green-700 text-white font-semibold rounded-full hover:bg-green-800 transition">Request Quote</Link>
            <a href="tel:7189714311" className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-full hover:bg-white transition">📞 (718) 971-4311</a>
          </div>
        </div>
      </section>
    </>
  )
}
