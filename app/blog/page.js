
export const metadata = {
  title: "Pakistan Tax Guides & Articles",
  description:
    "Learn about Pakistan salary tax, income tax slabs, and tax calculation.",
};


export default function BlogPage() {

  const blogs = [
    {
      title: "How to Calculate Salary Tax in Pakistan?",
      description:
        "Learn how Pakistan salary tax is calculated, how monthly salary converts into annual income, and how tax slabs are applied.",
      date: "June 2026",
      category: "Tax Guide",
    },

    {
      title: "Pakistan Salary Tax Slabs Explained",
      description:
        "Understand the latest salary tax slabs and how different income ranges are taxed according to annual taxable income.",
      date: "June 2026",
      category: "Tax Slabs",
    },

    {
      title: "How Much Tax Will Be Deducted From Your Salary?",
      description:
        "Find out how to estimate monthly tax deductions from your salary using annual taxable income calculations.",
      date: "June 2026",
      category: "Calculator Guide",
    },

    {
      title: "Monthly Salary vs Annual Income: Why It Matters For Tax",
      description:
        "Tax calculations are based on annual taxable income. Learn why your monthly salary is converted into yearly income.",
      date: "June 2026",
      category: "Tax Basics",
    },

    {
      title: "Common Salary Tax Mistakes People Make",
      description:
        "Avoid common mistakes while estimating your income tax and understand how tax calculations actually work.",
      date: "June 2026",
      category: "Tax Tips",
    },

    {
      title: "Understanding Tax-Free Income Limits in Pakistan",
      description:
        "Learn about the tax-free salary threshold and how income above the limit is calculated.",
      date: "June 2026",
      category: "Tax Knowledge",
    },
  ];


  return (
    <main className="min-h-screen bg-gray-50 px-5 py-12">

      <section className="max-w-6xl mx-auto">

        <div className="text-center mb-12">

          <h1 className="text-4xl font-bold text-gray-900">
            Tax Calculator Blog
          </h1>


          <p className="mt-4 text-gray-600">
            Learn about Pakistan salary tax, tax slabs, income calculation,
            and financial awareness.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-6">


          {blogs.map((blog, index)=>(

            <article
              key={index}
              className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
            >


              <span className="text-sm text-blue-600 font-medium">
                {blog.category}
              </span>


              <h2 className="text-xl font-semibold mt-3 text-gray-900">
                {blog.title}
              </h2>


              <p className="text-gray-600 mt-3 leading-6">
                {blog.description}
              </p>


              <div className="mt-5 text-sm text-gray-500">
                {blog.date}
              </div>


            </article>

          ))}


        </div>


      </section>

    </main>
  );
}