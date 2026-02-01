export const metadata = {
  title: 'Privacy Policy | KosherMyDevice',
  description: 'KosherMyDevice privacy policy. How we collect, use, and protect your information.'
}

export default function PrivacyPage() {
  return (
    <>
      <section className="pt-28 pb-8 bg-gray-50">
        <div className="container">
          <h1 className="font-display text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-gray-500">Last updated: January 2026</p>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container-narrow prose prose-lg max-w-none">
          <p>KosherMyDevice ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information.</p>
          
          <h2 className="font-display text-2xl font-bold mt-10 mb-4">Information We Collect</h2>
          
          <h3 className="font-display text-xl font-bold mt-6 mb-3">Personal Information</h3>
          <p>We may collect personal information you voluntarily provide when you fill out forms, make purchases, or contact us. This includes name, email, phone, and payment information.</p>
          
          <h3 className="font-display text-xl font-bold mt-6 mb-3">Device Information</h3>
          <p>When configuring devices, we access device identifiers necessary for setup. We do not collect, store, or monitor your communications or personal data on the device.</p>
          
          <h2 className="font-display text-2xl font-bold mt-10 mb-4">How We Use Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide and maintain our services</li>
            <li>Process transactions</li>
            <li>Respond to inquiries</li>
            <li>Send technical notices and support messages</li>
            <li>Improve our services</li>
          </ul>
          
          <h2 className="font-display text-2xl font-bold mt-10 mb-4">Information Sharing</h2>
          <p>We do not sell your personal information. We may share with service providers who assist our operations, or when required by law.</p>
          
          <h2 className="font-display text-2xl font-bold mt-10 mb-4">Your Rights</h2>
          <p>You may request access, correction, or deletion of your personal information by contacting privacy@koshermydevice.com.</p>
          
          <h2 className="font-display text-2xl font-bold mt-10 mb-4">Contact Us</h2>
          <ul className="list-none pl-0 space-y-1">
            <li>Email: privacy@koshermydevice.com</li>
            <li>Phone: (718) 971-4311</li>
            <li>Location: Lakewood, NJ</li>
          </ul>
        </div>
      </section>
    </>
  )
}
