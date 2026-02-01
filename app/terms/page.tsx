export const metadata = {
  title: 'Terms of Service | KosherMyDevice',
  description: 'KosherMyDevice terms of service.'
}

export default function TermsPage() {
  return (
    <>
      <section className="pt-28 pb-8 bg-gray-50">
        <div className="container">
          <h1 className="font-display text-4xl font-bold mb-2">Terms of Service</h1>
          <p className="text-gray-500">Last updated: January 2026</p>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container-narrow prose prose-lg max-w-none">
          <p>Welcome to KosherMyDevice. These Terms govern your use of our website, products, and services.</p>
          
          <h2 className="font-display text-2xl font-bold mt-10 mb-4">1. Services</h2>
          <p>KosherMyDevice provides device configuration services, hardware products, and digital wellness resources including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Configuration of Android devices with Device Owner security</li>
            <li>Sale of pre-configured devices</li>
            <li>Enterprise device management solutions</li>
            <li>Technical support and maintenance</li>
          </ul>
          
          <h2 className="font-display text-2xl font-bold mt-10 mb-4">2. Device Configuration</h2>
          <p>Our device configuration applies system-level restrictions that cannot be easily removed. This is intentional. By purchasing, you acknowledge and consent to these restrictions.</p>
          <p>Attempting to bypass our protections may void any warranty or support agreement.</p>
          
          <h2 className="font-display text-2xl font-bold mt-10 mb-4">3. Factory Reset Protection</h2>
          <p>Devices with FRP require authorization after reset. Loss of credentials may result in an unusable device. We are not responsible for devices rendered unusable due to lost credentials.</p>
          
          <h2 className="font-display text-2xl font-bold mt-10 mb-4">4. Refunds</h2>
          <p>We offer a 14-day satisfaction period for consumer products. Hardware returns are subject to manufacturer policies. Configuration services are non-refundable once performed.</p>
          
          <h2 className="font-display text-2xl font-bold mt-10 mb-4">5. Limitation of Liability</h2>
          <p>Our total liability shall not exceed the amount paid for the specific service. We are not liable for indirect, incidental, or consequential damages.</p>
          
          <h2 className="font-display text-2xl font-bold mt-10 mb-4">6. Governing Law</h2>
          <p>These Terms are governed by the laws of New Jersey.</p>
          
          <h2 className="font-display text-2xl font-bold mt-10 mb-4">7. Contact</h2>
          <ul className="list-none pl-0 space-y-1">
            <li>Email: legal@koshermydevice.com</li>
            <li>Phone: (718) 971-4311</li>
          </ul>
        </div>
      </section>
    </>
  )
}
