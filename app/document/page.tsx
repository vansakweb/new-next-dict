import Link from "next/link";
import Image from "next/image";

const fetchData = async () => {
  const res = await fetch("https://ch-kh-dict-doc.vercel.app/api/document");
  const data = await res.json();
  return data;
};

export default async function Document() {
  const documents = await fetchData();

  return (
    <section className="h-full overflow-y-auto flex flex-col flex-1">
      <div className=" pb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-2 gap-y-4">
        {documents.map((item: any, index: number) => (
          <Link
            target="_blank"
            key={index}
            href={`${
              item.url
                ? item.url
                : `https://ch-kh-dict-doc.vercel.app/document/${item.pdf}.pdf`
            }`}
          >
            <div className="h-[150px] flex items-center shadow-sm overflow-hidden group space-x-2 bg-slate-200 dark:bg-slate-800 rounded-md">
              <div className="h-[150px] w-[100px] overflow-hidden bg-cyan-200">
                <Image
                  src={`https://ch-kh-dict-doc.vercel.app/document/${item?.cover}`}
                  alt={item?.title}
                  width={100}
                  height={150}
                  className="h-full w-full object-center group-hover:scale-105 transition duration-500 ease-in-out"
                />
              </div>
              <p className="flex-1 guoyu text-lg text-violet-500 pkc">
                {item?.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
