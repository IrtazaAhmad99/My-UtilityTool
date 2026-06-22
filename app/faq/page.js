import React from 'react'
import Link from "next/link";

export const metadata = {
  title: "Pakistan Salary Tax FAQ",
  description:
    "Frequently asked questions about Pakistan salary tax calculation.",
};


const page = () => {

  const faqs = [
    {
      question: "How is salary tax calculated in Pakistan?",
      answer:
        "Salary tax in Pakistan is calculated on your annual taxable income. If you enter your monthly salary, it is multiplied by 12 to get your annual income. The applicable tax slab is then applied according to your yearly income."
    },

    {
      question: "Is income up to Rs. 600,000 tax free in Pakistan?",
      answer:
        "Yes. According to the latest salary tax slabs, annual taxable income up to Rs. 600,000 is not subject to income tax."
    },

    {
      question: "How do I calculate tax on my monthly salary?",
      answer:
        "First convert your monthly salary into annual income by multiplying it by 12. After finding your annual taxable income, apply the relevant tax slab and divide the yearly tax by 12 to estimate monthly tax."
    },

    {
      question: "What is the tax rate for salary above Rs. 7,000,000?",
      answer:
        "For annual taxable income above Rs. 7,000,000, the tax is Rs. 1,424,000 plus 35% of the amount exceeding Rs. 7,000,000."
    },

    {
      question: "Does the tax calculator calculate monthly or yearly tax?",
      answer:
        "The calculator uses your monthly salary, converts it into annual income, calculates yearly tax according to the tax slabs, and then shows the estimated monthly deduction."
    },

    {
      question: "Who needs to pay salary tax in Pakistan?",
      answer:
        "Individuals whose taxable salary income falls within the taxable income brackets defined by the government are required to pay income tax."
    },

    {
      question: "Are bonuses included in taxable salary income?",
      answer:
        "Yes. Additional salary components such as bonuses and other taxable benefits may be included while calculating taxable salary income."
    },

    {
      question: "Can this calculator replace official tax advice?",
      answer:
        "This calculator provides an estimate based on available tax slabs. For official tax filing and personal tax matters, consult a qualified tax professional or refer to official tax authorities."
    },
  ];


  return (
    <main className="min-h-screen bg-gray-50 px-5 py-12">

      <section className="max-w-4xl mx-auto">

        <div className="text-center mb-10">

          <h1 className="text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h1>

          <p className="mt-4 text-gray-600">
            Find answers to common questions about Pakistan salary tax
            calculation and tax slabs.
          </p>

        </div>


        <div className="space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="bg-white rounded-xl shadow p-6"
            >

              <h2 className="text-lg font-semibold text-gray-900">
                {faq.question}
              </h2>


              <p className="mt-3 text-gray-600 leading-7">
                {faq.answer}
              </p>

            </div>

          ))}

        </div>

        {/* Internal Linking Section */}
        <div className="mt-12 bg-white border border-gray-200 rounded-xl p-6 text-center">

          <h2 className="text-xl font-semibold text-gray-900">
            Still confused about salary tax?
          </h2>

          <p className="text-gray-600 mt-2">
            Use our free Pakistan income tax calculator to instantly calculate your monthly and yearly tax.
          </p>

          <Link
            href="/"
            className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Try Tax Calculator
          </Link>

        </div>


      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How is salary tax calculated in Pakistan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Salary tax in Pakistan is calculated on annual income. Monthly salary is multiplied by 12 and then tax slabs are applied.",
                },
              },
              {
                "@type": "Question",
                name: "Is income up to 600,000 tax free in Pakistan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes, income up to 600,000 PKR annually is generally tax free in Pakistan.",
                },
              },
              {
                "@type": "Question",
                name: "How do I calculate tax on monthly salary?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Multiply monthly salary by 12 to get annual income, then apply tax slabs and divide yearly tax by 12.",
                },
              },
            ],
          }),
        }}
      />

    </main>

  )
}

export default page