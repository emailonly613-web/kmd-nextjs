import Link from 'next/link'

export const metadata = {
  title: 'Contact Us | KosherMyDevice',
  description: 'Get in touch with KosherMyDevice. Call, email, or visit us in Lakewood, NJ.'
}

export default function ContactPage() {
  return (
    <>
      <section className="pt-28 pb-12 bg-gray-50 text-center">
        <div className="container">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-gray-500 text-lg">Questions? We're here to help. Reach out anytime.</p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-2xl font-bold mb-4">Contact Information</h2>
              <p className="text-gray-500 mb-8">
                Whether you need help choosing the right solution, have technical questions, or want to discuss enterprise options — we're happy to assist.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-xl">📞</div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <a href="tel:7189714311" className="text-blue-500">(718) 971-4311</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-xl">✉️</div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <a href="mailto:info@koshermydevice.com" className="text-blue-500">info@koshermydevice.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-xl">📍</div>
                  <div>
                    <div className="font-semibold">Visit Us</div>
                    <span className="text-gray-500">Lakewood, NJ — Walk-ins welcome</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold mb-4">Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-gray-500">Sunday - Thursday</span><span>10:00 AM - 6:00 PM</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">Friday</span><span>10:00 AM - 2:00 PM</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">Saturday</span><span>Closed</span></div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="font-display text-xl font-bold mb-2">Send Us a Message</h2>
              <p className="text-gray-500 text-sm mb-6">We'll get back to you within 24 hours.</p>
              
              <form name="contact" method="POST" data-netlify="true" className="space-y-4">
                <input type="hidden" name="form-name" value="contact" />
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-1">First Name *</label>
                    <input type="text" name="first-name" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1">Last Name *</label>
                    <input type="text" name="last-name" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-1">Email *</label>
                    <input type="email" name="email" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1">Phone</label>
                    <input type="tel" name="phone" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">I'm interested in...</label>
                  <select name="interest" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Select an option</option>
                    <option value="device-lockdown">Device Lockdown Service ($125)</option>
                    <option value="kosher-phone">TheKosherPhone (mobile device)</option>
                    <option value="kosher-sidekick">KosherSidekick (home tablet)</option>
                    <option value="torah-companion">Torah Companion (learning device)</option>
                    <option value="school">School / Yeshiva Solutions</option>
                    <option value="camp">Summer Camp Solutions</option>
                    <option value="business">Business Solutions</option>
                    <option value="support">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Message *</label>
                  <textarea name="message" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32" placeholder="How can we help you?" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-large w-full">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-badge">FAQ</span>
            <h2 className="font-display text-3xl font-bold mt-4">Frequently Asked Questions</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { q: 'How quickly can I get a device?', a: 'Same-day if you visit in person, or 2-3 business days for shipped orders.' },
              { q: 'Do you offer technical support?', a: 'Yes! All devices include support. Call us anytime during business hours.' },
              { q: 'Can I customize which apps are available?', a: 'Yes. We configure the exact app whitelist you need.' },
              { q: 'Do you serve customers outside New Jersey?', a: 'Absolutely. We ship nationwide and serve organizations internationally.' },
              { q: 'Is there a warranty?', a: 'All devices include manufacturer warranty plus ongoing configuration support.' },
              { q: 'What\'s the process for organizations?', a: 'Contact us for a free consultation. We can begin deployment within 2 weeks.' },
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-xl">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-gray-500 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
