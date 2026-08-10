import React from 'react';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-[#FAFAFA] text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Legal Information
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-gray-600 lg:w-[425px] w-auto leading-tight mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal
            information.
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20">
        <div className="lg:w-[750px] w-auto px-4 sm:px-6 lg:px-8 prose prose-slate">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              <div className="text-gray-600 space-y-4">
                <p>
                  We collect information you provide directly to us, such as when you register for events, sign up for
                  our newsletter, or contact us for support. This may include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name and contact information (email address, phone number)</li>
                  <li>Event registration details and preferences</li>
                  <li>Payment information for event tickets and merchandise</li>
                  <li>Communications you send to us</li>
                  <li>Feedback and survey responses</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <div className="text-gray-600 space-y-4">
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Process event registrations and manage your participation</li>
                  <li>Send you important updates about events and schedule changes</li>
                  <li>Provide customer support and respond to your inquiries</li>
                  <li>Send marketing communications about upcoming events (with your consent)</li>
                  <li>Improve our services and develop new programs</li>
                  <li>Comply with legal obligations and protect our rights</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
              <div className="text-gray-600 space-y-4">
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your
                  consent, except in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>With service providers who assist us in operating our events and website</li>
                  <li>When required by law or to protect our rights and safety</li>
                  <li>With event partners and sponsors (only with your explicit consent)</li>
                  <li>In connection with a business transfer or merger</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
              <div className="text-gray-600 space-y-4">
                <p>
                  We implement appropriate security measures to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Encryption of sensitive data during transmission</li>
                  <li>Secure storage systems with access controls</li>
                  <li>Regular security assessments and updates</li>
                  <li>Staff training on data protection practices</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
              <div className="text-gray-600 space-y-4">
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access and review the personal information we hold about you</li>
                  <li>Request corrections to inaccurate or incomplete information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt out of marketing communications at any time</li>
                  <li>Request a copy of your data in a portable format</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking</h2>
              <div className="text-gray-600 space-y-4">
                <p>
                  Our website uses cookies and similar technologies to enhance your browsing experience, analyze site
                  traffic, and personalize content. You can control cookie settings through your browser preferences.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Children&apos;s Privacy</h2>
              <div className="text-gray-600 space-y-4">
                <p>
                  Our services are not directed to children under 13. We do not knowingly collect personal information
                  from children under 13. If we become aware that we have collected such information, we will take steps
                  to delete it promptly.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
              <div className="text-gray-600 space-y-4">
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by
                  posting the new policy on our website and updating the &quot;Last Updated&quot; date below.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <div className="text-gray-600 space-y-4">
                <p>
                  If you have any questions about this Privacy Policy or our data practices, please contact us through
                  our website contact form or reach out to us via our official social media channels.
                </p>
              </div>
            </div>

            {/* <div className="border-t border-gray-200 pt-8">
              <p className="text-sm text-gray-600">
                <strong>Last Updated:</strong> September 2025
              </p>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;