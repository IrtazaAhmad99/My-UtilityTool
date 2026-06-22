import { blogs } from "@/lib/blogData";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const blog = blogs.find((b) => b.slug === b.slug);

    if (!blog) return {};

    return {
        title: blog.title,
        description: blog.description,
    };
}

export default async function BlogPost({ params }) {
    const { slug } = await params;
    const blog = blogs.find((b) => b.slug === b.slug);

    if (!blog) return notFound();

    return (
        <main className="min-h-screen bg-gray-50 px-5 py-12">
            <article className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">

                <span className="text-sm text-blue-600 font-medium">
                    {blog.category}
                </span>

                <h1 className="text-4xl font-bold mt-3">
                    {blog.title}
                </h1>

                <p className="text-gray-500 mt-2">
                    {blog.date}
                </p>

                <div
                    className="mt-8 prose max-w-none text-gray-700"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                />


                <div className="mt-10 p-5 bg-blue-50 rounded-lg">
                    <p className="text-gray-700">
                        Use our tax calculator to estimate your salary tax instantly.
                    </p>

                    <Link
                        href="/"
                        className="inline-block mt-3 text-blue-600 font-medium"
                    >
                        Go to Tax Calculator →
                    </Link>
                </div>

            </article>
        </main>
    );
}