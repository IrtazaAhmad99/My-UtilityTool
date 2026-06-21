import React from 'react'

export const metadata = {
  title: "Pakistan Salary Tax Slabs 2026",
  description:
    "View latest Pakistan income tax slabs for salaried individuals.",
};

const page = () => {
  const slabs = [
    {
      range: "Up to Rs. 600,000",
      tax: "0% (Tax Free)",
    },

    {
      range: "Rs. 600,001 to Rs. 1,200,000",
      tax: "1% of the amount exceeding Rs. 600,000",
    },

    {
      range: "Rs. 1,200,001 to Rs. 2,200,000",
      tax: "Rs. 6,000 + 11% of the amount exceeding Rs. 1,200,000",
    },

    {
      range: "Rs. 2,200,001 to Rs. 3,200,000",
      tax: "Rs. 116,000 + 20% of the amount exceeding Rs. 2,200,000",
    },

    {
      range: "Rs. 3,200,001 to Rs. 4,100,000",
      tax: "Rs. 316,000 + 25% of the amount exceeding Rs. 3,200,000",
    },

    {
      range: "Rs. 4,100,001 to Rs. 5,600,000",
      tax: "Rs. 541,000 + 29% of the amount exceeding Rs. 4,100,000",
    },

    {
      range: "Rs. 5,600,001 to Rs. 7,000,000",
      tax: "Rs. 976,000 + 32% of the amount exceeding Rs. 5,600,000",
    },

    {
      range: "Above Rs. 7,000,000",
      tax: "Rs. 1,424,000 + 35% of the amount exceeding Rs. 7,000,000",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 px-5 py-12">
      <section className="max-w-5xl mx-auto">

        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900">
            Pakistan Salary Tax Slabs
          </h1>

          <p className="mt-4 text-gray-600">
            Income tax rates applicable on taxable salary income.
            Calculate your estimated annual tax based on the latest salary tax slabs.
          </p>
        </div>


        <div className="bg-white rounded-xl shadow overflow-hidden">

          <table className="w-full text-left">

            <thead className="bg-gray-900 text-white">
              <tr>
                <th className="p-4">
                  Taxable Salary Income
                </th>

                <th className="p-4">
                  Income Tax Rate
                </th>
              </tr>
            </thead>


            <tbody>

              {slabs.map((slab, index) => (
                <tr
                  key={index}
                  className="border-b last:border-none"
                >

                  <td className="p-4 text-gray-700">
                    {slab.range}
                  </td>


                  <td className="p-4 text-gray-700">
                    {slab.tax}
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>


        <div className="mt-10 bg-white p-6 rounded-xl shadow">

          <h2 className="text-2xl font-semibold mb-4">
            How Salary Tax is Calculated
          </h2>

          <p className="text-gray-600 leading-7">
            Salary tax is calculated on your annual taxable income.
            If your monthly salary is entered, it is first converted into
            annual income by multiplying it by 12. The applicable tax slab
            is then applied according to the taxable income range.
          </p>


          <p className="mt-4 text-gray-600 leading-7">
            Example: If your monthly salary is Rs. 60,000,
            your annual salary will be Rs. 720,000.
            This amount falls in the second tax slab, therefore tax is
            calculated on the amount exceeding Rs. 600,000.
          </p>

        </div>


      </section>
    </main>
  )
}

export default page