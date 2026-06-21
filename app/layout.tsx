import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Pakistan Tax Calculator",
  description:
    "Free Pakistan salary tax calculator.",
};


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
