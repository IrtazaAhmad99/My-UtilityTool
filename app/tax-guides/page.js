import { blogs } from "../../lib/blogData";
import Link from "next/link";

export const metadata = {
  title: "Pakistan Tax Guides & Articles",
  description:
    "Learn about Pakistan salary tax, income tax slabs, and tax calculation.",
};



export default function BlogPage() {


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


          {blogs.map((blog, index) => (

            <Link
              key={blog.slug}
              href={`/tax-guides/${blog.slug}`}
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


            </Link>

          ))}


        </div>
        <div className="mt-12 bg-white p-6 rounded-xl border text-center">
          <h2 className="text-xl font-semibold">
            Calculate Your Salary Tax Instantly
          </h2>

          <p className="text-gray-600 mt-2">
            Use our free Pakistan tax calculator to estimate your monthly and yearly tax.
          </p>

          <Link
            href="/"
            className="inline-block mt-4 text-blue-600 font-medium"
          >
            Go to Tax Calculator →
          </Link>
        </div>


      </section>
    </main>
  );
}