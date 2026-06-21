import React from 'react'
import TaxCalculator from '../components/tax/TaxCalculator'
import "./globals.css"


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
      </section>
    </main>
  )
}

export default page