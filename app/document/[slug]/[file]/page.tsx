export default function page({
  params,
}: {
  params: { slug: string; file: string };
}) {
  return (
    <section className={`h-full mian`}>
      <iframe
        className="border-0 w-full h-full"
        src={`/document/${params.slug}/${params.file}.pdf`}
      />
    </section>
  );
}
