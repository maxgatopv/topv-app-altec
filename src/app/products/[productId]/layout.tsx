export default function ProductDetailLayout({
  children,
  image,
  info,
  description,
}: {
  children: React.ReactNode;
  image: React.ReactNode;
  info: React.ReactNode;
  description: React.ReactNode;
}) {
  return (
    <section className="bg-theme-container">
      <main className="container mx-auto block pb-16">
        {children}

        {/* <!-- Info --> */}
        <div className="transition-responsive rounded-lg bg-white p-4">
          <div className="transition-responsive grid grid-cols-1 md:grid-cols-5 space-x-4">
            <div className="col-span-2">{image}</div>
            <div className="col-span-3">{info}</div>
          </div>

          {/* <!-- Description --> */}
          <div className="py-5">
            <div className="rounded-lg md:border md:p-5">{description}</div>
          </div>
        </div>
      </main>
    </section>
  );
}
