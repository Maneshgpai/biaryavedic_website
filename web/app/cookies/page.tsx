import Link from "next/link";

export default function CookiePolicyPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#1b5c70] to-[#19495a]">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white font-display">
            Cookie <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">Policy</span>
          </h1>
          <p className="text-gray-200 mt-4 text-lg">Effective date: 11 June 2025</p>
        </div>
      </section>

      {/* Cookie Policy Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 font-display">Cookie Policy — Bio-Aryavedic Naturals Pvt. Ltd.</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                This Cookie Policy explains how Bio-Aryavedic Naturals Pvt. Ltd. (&quot;we&quot;, &quot;our&quot;, &quot;Company&quot;) uses cookies and similar tracking technologies on our website www.aryavedicnaturals.com (the &quot;Site&quot;). This policy should be read in conjunction with our <Link href="/privacy" className="text-emerald-600 hover:text-emerald-700">Privacy Policy</Link> and <Link href="/privacy" className="text-emerald-600 hover:text-emerald-700">Terms & Conditions</Link>.
              </p>
              <p className="text-gray-600 text-sm italic">
                This policy complies with applicable data protection laws including the General Data Protection Regulation (GDPR) for European users, the Information Technology Act, 2000 and Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 for Indian users, and relevant US state privacy laws including the California Consumer Privacy Act (CCPA).
              </p>
            </div>

            {/* What are Cookies */}
            <div className="mb-12 border-t border-gray-200 pt-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 font-display">1. What Are Cookies?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cookies are small text files that are placed on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Cookies allow a website to recognize your device and store some information about your preferences or past actions. They help us understand how visitors interact with our Site, which enables us to improve the user experience and functionality of our services.
              </p>
            </div>

            {/* Types of Cookies We Use */}
            <div className="mb-12 border-t border-gray-200 pt-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 font-display">2. Types of Cookies We Use</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">2.1 Essential Cookies (Strictly Necessary)</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    These cookies are essential for the Site to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt-out of these cookies as they are necessary for the Site to operate.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed ml-4">
                    <li><strong>Session cookies:</strong> Temporary cookies that expire when you close your browser</li>
                    <li><strong>Authentication cookies:</strong> Used to identify you when you log into your account</li>
                    <li><strong>Security cookies:</strong> Help protect against fraud and maintain security</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">2.2 Functional Cookies</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    These cookies allow the Site to remember choices you make (such as your language preference or region) and provide enhanced, personalized features.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed ml-4">
                    <li>Language and region preferences</li>
                    <li>User interface customization</li>
                    <li>Remembering your login information (if you choose)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">2.3 Analytics & Performance Cookies</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    These cookies help us understand how visitors interact with our Site by collecting and reporting information anonymously. This helps us improve the way our Site works.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed ml-4">
                    <li>Page views and navigation patterns</li>
                    <li>Time spent on pages</li>
                    <li>Error messages and page load times</li>
                    <li>Traffic sources and referral information</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-3">
                    We may use services such as Google Analytics, which uses cookies to analyze how visitors use our Site. You can opt-out of Google Analytics by visiting the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700">Google Analytics Opt-out page</a>.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">2.4 Marketing & Advertising Cookies</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    These cookies are used to deliver advertisements relevant to you and your interests. They also help measure the effectiveness of advertising campaigns.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed ml-4">
                    <li>Tracking your browsing habits across websites</li>
                    <li>Building a profile of your interests</li>
                    <li>Showing you relevant advertisements</li>
                    <li>Measuring ad campaign effectiveness</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-3">
                    These cookies may be set by third-party advertising networks. You can opt-out of these cookies through your browser settings or by visiting the relevant third-party opt-out pages.
                  </p>
                </div>
              </div>
            </div>

            {/* Third-Party Cookies */}
            <div className="mb-12 border-t border-gray-200 pt-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 font-display">3. Third-Party Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the Site, deliver advertisements, and so on. These third parties may include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed ml-4">
                <li><strong>Analytics providers:</strong> Google Analytics and similar services to understand how visitors use our Site</li>
                <li><strong>Payment processors:</strong> Cookies from payment gateways to process transactions securely</li>
                <li><strong>Social media platforms:</strong> Cookies from social media platforms when you interact with social sharing buttons or widgets</li>
                <li><strong>Advertising networks:</strong> Third-party advertising networks that display ads on our Site</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                These third parties may use cookies to collect information about your online activities across different websites. We do not control these third-party cookies, and you should refer to their respective privacy policies for more information.
              </p>
            </div>

            {/* Cookie Consent & Your Rights */}
            <div className="mb-12 border-t border-gray-200 pt-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 font-display">4. Cookie Consent & Your Rights</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">4.1 Consent Management</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    When you first visit our Site, you will be presented with a cookie consent banner. You can choose to accept all cookies, reject non-essential cookies, or customize your preferences.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    You can change your cookie preferences at any time by accessing the cookie settings in your browser or by contacting us at <a href="mailto:info@aryavedicnaturals.com" className="text-emerald-600 hover:text-emerald-700">info@aryavedicnaturals.com</a>.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">4.2 Your Rights Under GDPR (European Users)</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    If you are located in the European Economic Area (EEA), you have the following rights regarding cookies:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed ml-4">
                    <li><strong>Right to be informed:</strong> You have the right to be informed about the use of cookies</li>
                    <li><strong>Right to access:</strong> You can request information about what cookies are used on our Site</li>
                    <li><strong>Right to withdraw consent:</strong> You can withdraw your consent to non-essential cookies at any time</li>
                    <li><strong>Right to object:</strong> You can object to the processing of your data through cookies</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">4.3 Your Rights Under Indian Law</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Under the Information Technology Act, 2000 and related rules, Indian users have the right to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed ml-4">
                    <li>Be informed about the collection and use of personal information</li>
                    <li>Access and correct their personal information</li>
                    <li>Withdraw consent for the use of cookies (except essential cookies)</li>
                    <li>File a complaint with the appropriate authority if their rights are violated</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">4.4 Your Rights Under US State Laws (CCPA/CPRA)</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    If you are a California resident, you have the following rights under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA):
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed ml-4">
                    <li><strong>Right to know:</strong> You can request information about what personal information we collect through cookies</li>
                    <li><strong>Right to delete:</strong> You can request deletion of personal information collected through cookies</li>
                    <li><strong>Right to opt-out:</strong> You can opt-out of the sale or sharing of personal information (if applicable)</li>
                    <li><strong>Right to non-discrimination:</strong> We will not discriminate against you for exercising your privacy rights</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-3">
                    Similar rights may apply to residents of other US states with privacy laws (e.g., Virginia, Colorado, Connecticut).
                  </p>
                </div>
              </div>
            </div>

            {/* How to Manage Cookies */}
            <div className="mb-12 border-t border-gray-200 pt-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 font-display">5. How to Manage or Disable Cookies</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">5.1 Browser Settings</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Most web browsers allow you to control cookies through their settings. You can set your browser to refuse cookies or alert you when cookies are being sent. However, if you disable cookies, some parts of our Site may not function properly.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Here are links to cookie management instructions for popular browsers:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed ml-4">
                    <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700">Google Chrome</a></li>
                    <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700">Mozilla Firefox</a></li>
                    <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700">Safari</a></li>
                    <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700">Microsoft Edge</a></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">5.2 Opt-Out Tools</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    You can also opt-out of certain third-party cookies using the following tools:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed ml-4">
                    <li><a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700">Google Analytics Opt-out</a></li>
                    <li><a href="https://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700">Network Advertising Initiative (NAI) Opt-out</a></li>
                    <li><a href="https://www.youronlinechoices.com/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700">Your Online Choices (EU)</a></li>
                    <li><a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700">Digital Advertising Alliance (DAA) Opt-out</a></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">5.3 Mobile Devices</h3>
                  <p className="text-gray-700 leading-relaxed">
                    For mobile devices, you can manage cookies through your device settings. Please refer to your device manufacturer&apos;s instructions for more information.
                  </p>
                </div>
              </div>
            </div>

            {/* Cookie Retention */}
            <div className="mb-12 border-t border-gray-200 pt-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 font-display">6. Cookie Retention</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Cookies are stored on your device for different periods depending on their type:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed ml-4">
                <li><strong>Session cookies:</strong> These are temporary and are deleted when you close your browser</li>
                <li><strong>Persistent cookies:</strong> These remain on your device for a set period (typically 30 days to 2 years) or until you delete them</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                We will only retain cookie data for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law.
              </p>
            </div>

            {/* Updates to This Policy */}
            <div className="mb-12 border-t border-gray-200 pt-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 font-display">7. Updates to This Cookie Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Cookie Policy on this page and updating the &quot;Effective date&quot; at the top. We encourage you to review this Cookie Policy periodically to stay informed about how we use cookies.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12 border-t border-gray-200 pt-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 font-display">8. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions, concerns, or requests regarding this Cookie Policy or our use of cookies, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>Bio-Aryavedic Naturals Pvt. Ltd.</strong>
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Integrated Startup Complex (ISC) – KSUM, Kerala Technology Innovation Zone<br />
                  Kinfra Hi-Tech Park Main Rd, HMT Colony, Kalamassery<br />
                  Kochi, Kerala, IN 683503
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Email: <a href="mailto:info@aryavedicnaturals.com" className="text-emerald-600 hover:text-emerald-700">info@aryavedicnaturals.com</a>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Phone: <a href="tel:+918304082080" className="text-emerald-600 hover:text-emerald-700">+91-830-40-82080</a>
                </p>
              </div>
            </div>

            {/* Related Policies */}
            <div className="mb-12 border-t border-gray-200 pt-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 font-display">9. Related Policies</h2>
              <p className="text-gray-700 leading-relaxed">
                For more information about how we handle your personal data, please review our <Link href="/privacy" className="text-emerald-600 hover:text-emerald-700">Privacy Policy</Link> and <Link href="/privacy" className="text-emerald-600 hover:text-emerald-700">Terms & Conditions</Link>.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}


