import React from "react";

export const metadata = {
  title: "Privacy Policy - Pakistan Tax Calculator",
  description:
    "Read the privacy policy of Pakistan Tax Calculator. Learn how we handle user data and ensure privacy.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-5 py-12">
      <section className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow">

        <h1 className="text-4xl font-bold text-gray-900">
          Privacy Policy
        </h1>

        <p className="text-gray-600 mt-4">
          This Privacy Policy explains how Pakistan Tax Calculator collects,
          uses, and protects your information when you use our website.
        </p>

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold mt-8">
          1. Information We Collect
        </h2>

        <p className="text-gray-600 mt-3 leading-7">
          We do not collect personal information such as name, CNIC, or salary.
          The calculator works entirely on the client side. However, we may use
          basic analytics tools to understand website traffic and improve user experience.
        </p>

        {/* Section 2 */}
        <h2 className="text-2xl font-semibold mt-8">
          2. How We Use Information
        </h2>

        <p className="text-gray-600 mt-3 leading-7">
          Any collected analytics data is used only to improve website performance,
          optimize user experience, and understand visitor behavior.
        </p>

        {/* Section 3 */}
        <h2 className="text-2xl font-semibold mt-8">
          3. Cookies
        </h2>

        <p className="text-gray-600 mt-3 leading-7">
          We may use cookies to improve website functionality and analyze traffic.
          You can disable cookies in your browser settings if you prefer.
        </p>

        {/* Section 4 */}
        <h2 className="text-2xl font-semibold mt-8">
          4. Third-Party Services
        </h2>

        <p className="text-gray-600 mt-3 leading-7">
          We may use third-party services such as Google Analytics in the future.
          These services may collect anonymous usage data.
        </p>

        {/* Section 5 */}
        <h2 className="text-2xl font-semibold mt-8">
          5. Data Security
        </h2>

        <p className="text-gray-600 mt-3 leading-7">
          We take reasonable measures to ensure the security of our website.
          Since no personal data is stored, risk is minimal.
        </p>

        {/* Section 6 */}
        <h2 className="text-2xl font-semibold mt-8">
          6. Changes to This Policy
        </h2>

        <p className="text-gray-600 mt-3 leading-7">
          We may update this Privacy Policy from time to time. All changes will
          be posted on this page.
        </p>

        {/* Footer CTA */}
        <div className="mt-10 p-5 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-gray-700">
            If you have any questions, feel free to contact us through our website.
          </p>

          <a
            href="/"
            className="inline-block mt-4 text-blue-600 font-medium hover:underline"
          >
            Go back to Tax Calculator
          </a>
        </div>

      </section>
    </main>
  );
}