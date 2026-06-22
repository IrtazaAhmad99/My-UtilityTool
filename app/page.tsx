import React from 'react'
import TaxCalculator from '../components/tax/TaxCalculator'
import "./globals.css"
import Link from "next/link";


export const metadata = {
  title: "Pakistan Salary Tax Calculator 2026",
  description:
    "Calculate your monthly and annual salary tax in Pakistan using latest income tax slabs.",
};


const page = () => {
  return (
    <main className="min-h-screen bg-slate-50">

      <section className="max-w-6xl mx-auto px-4 py-12 md:py-4">

        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
            Pakistan Tax Calculator 2026
          </span>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
            Calculate Your Income Tax
            <span className="block text-blue-600">
              In Seconds
            </span>
          </h1>

          <p className="max-w-2xl mx-auto mt-6 text-lg text-slate-600">
            Calculate monthly and annual income tax using
            the latest Pakistan salaried tax slabs.
            Get accurate tax estimates instantly.
          </p>
        </div>

        {/* Calculator */}
        <div className="max-w-4xl mx-auto">
          <TaxCalculator />
        </div>

        {/* Trust Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
            <h3 className="font-semibold text-slate-900">
              Latest Tax Slabs
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              Updated according to current Pakistan tax regulations.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
            <h3 className="font-semibold text-slate-900">
              Instant Results
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              Get annual tax, monthly tax and net salary instantly.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
            <h3 className="font-semibold text-slate-900">
              Free To Use
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              Unlimited tax calculations with no signup required.
            </p>
          </div>
        </div>
        {/* SEO Content Section */}
        <section className="mt-16 max-w-4xl mx-auto text-slate-700">

          <h2 className="text-2xl font-bold text-slate-900">
            Pakistan Income Tax Calculator 2026
          </h2>

          <p className="mt-4 leading-7">
            This Pakistan salary tax calculator helps employees estimate their monthly and annual income tax
            based on the latest tax slabs in Pakistan. It automatically converts your monthly salary into
            yearly income and applies the correct tax rate.
          </p>

          <h3 className="text-xl font-semibold mt-8 text-slate-900">
            How Salary Tax is Calculated in Pakistan
          </h3>

          <p className="mt-3 leading-7">
            Salary tax is calculated on annual income, not monthly salary. The system multiplies your monthly
            salary by 12 and then applies progressive tax slabs defined by the Federal Board of Revenue (FBR).
          </p>

          <h3 className="text-xl font-semibold mt-8 text-slate-900">
            Why Use This Calculator?
          </h3>

          <p className="mt-3 leading-7">
            It provides instant tax estimation without manual calculations, helping you understand your net
            salary after tax deductions.
          </p>

        </section>

        {/* Internal Links Section */}
        <section className="mt-16 bg-white rounded-2xl p-8 border border-slate-200">

          <h2 className="text-2xl font-bold text-slate-900 text-center">
            Learn More About Pakistan Income Tax
          </h2>

          <p className="text-center text-slate-600 mt-3 max-w-2xl mx-auto">
            Understand Pakistan salary tax slabs, common tax questions,
            and helpful guides to manage your income tax better.
          </p>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">


            <Link
              href="/tax-slab"
              className="p-5 rounded-xl border hover:border-blue-500 transition"
            >
              <h3 className="font-semibold text-slate-900">
                Pakistan Tax Slabs 2026
              </h3>

              <p className="text-sm text-slate-600 mt-2">
                View current income tax slabs and understand how tax is calculated.
              </p>
            </Link>



            <Link
              href="/faq"
              className="p-5 rounded-xl border hover:border-blue-500 transition"
            >
              <h3 className="font-semibold text-slate-900">
                Tax Calculator FAQ
              </h3>

              <p className="text-sm text-slate-600 mt-2">
                Find answers to common questions about salary tax in Pakistan.
              </p>
            </Link>




            <Link
              href="/tax-guides"
              className="p-5 rounded-xl border hover:border-blue-500 transition"
            >
              <h3 className="font-semibold text-slate-900">
                Tax Guides & Articles
              </h3>

              <p className="text-sm text-slate-600 mt-2">
                Read detailed guides about income tax calculations.
              </p>
            </Link>


          </div>

        </section>
        {/* FAQ Section */}
        <section className="mt-16 max-w-4xl mx-auto">

          <h2 className="text-2xl font-bold text-slate-900 text-center">
            Frequently Asked Questions
          </h2>

          <div className="mt-8 space-y-6">

            <div className="bg-white p-6 rounded-xl border">
              <h3 className="font-semibold">Is salary tax calculated monthly or yearly?</h3>
              <p className="text-slate-600 mt-2">
                Salary tax is calculated on annual income, not monthly salary.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border">
              <h3 className="font-semibold">Is income below 600,000 tax free in Pakistan?</h3>
              <p className="text-slate-600 mt-2">
                Yes, income below the tax-free threshold is not taxed.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border">
              <h3 className="font-semibold">Does this calculator include all tax slabs?</h3>
              <p className="text-slate-600 mt-2">
                Yes, it uses the latest Pakistan income tax slabs.
              </p>
            </div>

          </div>

        </section>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Pakistan Salary Tax Calculator",
            url: "https://your-domain.com",
            description:
              "Calculate your monthly and annual salary tax in Pakistan using latest income tax slabs.",
            applicationCategory: "FinanceApplication",
            operatingSystem: "All",
          }),
        }}
      />
    </main>
  )
}

export default page