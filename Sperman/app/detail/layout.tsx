export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="inline-block max-w-lg text-left justify-center">
        {children}
      </div>
    </section>
  );
}
