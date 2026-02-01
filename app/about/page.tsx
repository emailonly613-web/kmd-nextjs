import Link from 'next/link'

export const metadata = {
  title: 'About Us | KosherMyDevice',
  description: 'We believe technology should serve you, not control you. Learn about KosherMyDevice\'s mission.'
}

export default function AboutPage() {
  return (
    <>
      <section className="pt-28 pb-16 bg-gradient-to-b from-gray-50 to-white text-center">
        <div className="container">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Technology Should Serve You,<br/>Not Control You
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            We build tools that put you back in control of your digital life. Not through willpower. Through design.
          </p>
        </div>
      </section>
      
      {/* Mission */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold mb-6">Our Mission</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>We started with a simple observation: most people don't want to spend 5+ hours a day on their phones. They don't want to check 144 times a day. They don't want to feel anxious without their device.</p>
                <p>Yet they do anyway.</p>
                <p>The problem isn't willpower — it's design. Phones are engineered by thousands of the world's smartest engineers to capture and hold attention. Expecting individuals to resist through self-control alone is unrealistic.</p>
                <p>Our mission is to provide technology designed for human flourishing, not engagement metrics. Phones that do what you need without pulling you into what you don't.</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-12 text-center">
              <span className="text-8xl">◈</span>
              <h3 className="font-display text-2xl font-bold mt-4">Freedom Through Boundaries</h3>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-20 bg-navy text-white">
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-badge bg-gold/20 text-gold">Our Values</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-4">What We Believe</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🔒', title: 'Protection Over Permission', desc: 'Real protection comes from design, not settings. We build devices where problematic access isn\'t available.' },
              { icon: '🎯', title: 'Intentional Technology', desc: 'Technology should be a tool you use purposefully, not a slot machine you check compulsively.' },
              { icon: '👨‍👩‍👧‍👦', title: 'Family First', desc: 'Families shouldn\'t have to choose between connectivity and safety.' },
              { icon: '📚', title: 'Education Over Fear', desc: 'We provide research-backed information so you can make informed decisions.' },
              { icon: '🤝', title: 'Honest Communication', desc: 'We\'re transparent about what our products do and don\'t do.' },
              { icon: '🌍', title: 'Universal Solutions', desc: 'Digital wellness isn\'t a niche concern — it\'s a human need.' },
            ].map((value, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-gold to-amber-500 rounded-xl flex items-center justify-center text-2xl mb-4">{value.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-white/60 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Approach */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-center mb-8">Our Approach</h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>We believe the current technology landscape has a fundamental design flaw: products are optimized to maximize engagement, not user wellbeing.</p>
              
              <p>Our approach is different. We start with the question: <strong>what do people actually need from their devices?</strong></p>
              
              <p>The answer, for most people: communication, navigation, productivity tools, and access to specific applications. What they don't need: infinite scroll, algorithmic feeds, constant notifications, and frictionless access to everything.</p>
              
              <blockquote className="bg-gray-50 border-l-4 border-gold p-6 rounded-r-xl my-8 italic text-lg">
                "The best technology is technology you don't think about. It does its job, then gets out of the way so you can live your life."
              </blockquote>
              
              <p>Our Device Owner technology operates at the system level, which means protection can't be circumvented by downloading a VPN or finding a workaround. This isn't about distrust — it's about acknowledging that willpower is a finite resource.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="bg-white rounded-2xl p-12 text-center max-w-2xl mx-auto shadow-lg">
            <h3 className="font-display text-2xl font-bold mb-4">Let's Talk</h3>
            <p className="text-gray-500 mb-6">Have questions about our approach? We're always happy to chat.</p>
            <Link href="/contact" className="btn btn-primary btn-large">Get in Touch</Link>
            <div className="flex gap-8 justify-center mt-6 text-sm">
              <a href="tel:7189714311" className="text-gray-500 hover:text-blue-500">📞 (718) 971-4311</a>
              <a href="mailto:info@koshermydevice.com" className="text-gray-500 hover:text-blue-500">✉️ info@koshermydevice.com</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
