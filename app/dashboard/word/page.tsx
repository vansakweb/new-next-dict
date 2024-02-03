import { Button } from "@/components/ui/button";
import { hsk } from "@/lib/data";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Fragment } from "react";
import DeleteWordButton from "@/components/DeleteWordButton";
import { CiEdit } from "react-icons/ci";

export default async function Word({
  params,
  searchParams,
}: {
  params: string;
  searchParams: { page: string; limit: string };
}) {
  const { page, limit } = searchParams;
  const currentPage = Number(page) || 1;
  const pageSize = Number(limit) || 10;
  const words: any = await hsk.all(currentPage, pageSize);

  // console.log(words?.hsks?.length);

  if (words?.hsks?.length == 0) {
    return null;
  }

  const allPage = Math.ceil(words.count / pageSize);

  // console.log(currentPage, pageSize, allPage);
  // console.log(currentPage <= allPage);

  currentPage > allPage &&
    redirect(`/dashboard/word?page=${allPage}&limit=${pageSize}`);
  currentPage < 1 && redirect(`/dashboard/word?page=${1}&limit=${pageSize}`);

  return (
    <section className={`overflow-auto battambang`}>
      <div className="border border-slate-600/20 rounded-md overflow-hidden">
        <table className="w-full mx-auto">
          <thead className="bg-slate-300 dark:bg-slate-700">
            <tr>
              <th className="w-1/12 py-4 pl-4 text-start">#</th>
              <th className="w-2/12 py-4 px-2 text-start">ចិន</th>
              <th className="w-5/12 py-4 px-2 text-start">ខ្មែរ</th>
              <th className="w-3/12 py-4 px-2 text-start">ស្រៈប្រកប</th>
              <th className="w-1/12 py-4 pr-4 text-end">មីនុយ</th>
            </tr>
          </thead>
          <tbody>
            {words?.hsks.map((word: any, index: number) => (
              <tr
                key={index}
                className="border-b border-slate-600/20 odd:bg-slate-50 even:bg-slate-100 dark:odd:bg-slate-900 dark:even:bg-slate-800"
              >
                <th className={`w-1/12 py-3 pl-4 text-start pinyin`}>
                  {(currentPage - 1) * pageSize + index + 1}
                </th>
                <th className={`w-2/12 py-3 px-2 text-start guoyu`}>
                  {word.chinese}
                </th>
                <th className="w-5/12 py-2 px-2 text-start">
                  <div className="flex gap-1 items-center">
                    {word.khmer.map((item: string, index: number) => (
                      <Fragment key={index}>
                        <p>{item}</p>
                        {word.khmer.length - 1 > index && <span>|</span>}
                      </Fragment>
                    ))}
                  </div>
                </th>
                <th className="w-4/12 py-2 px-2 text-start">
                  <div className={`flex gap-1 items-center pinyin`}>
                    {word.pinyin.map((item: string, index: number) => (
                      <Fragment key={index}>
                        <p>{item}</p>
                        {word.pinyin.length - 1 > index && <span>|</span>}
                      </Fragment>
                    ))}
                  </div>
                </th>
                <th className="w-1/12 py-3 pr-4 text-end">
                  <div className={`flex gap-1 justify-end`}>
                    <Link href={`/dashboard/word/edit/${word.id}`}>
                      <Button
                        className={`text-lg`}
                        size={"icon"}
                        variant={"outline"}
                      >
                        <CiEdit size={20} />
                      </Button>
                    </Link>
                    <DeleteWordButton wordId={word.id} />
                  </div>
                </th>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-slate-200 dark:bg-slate-800">
              <td colSpan={6} className="w-1/12 py-2 px-4 text-start">
                <div className="flex gap-1 justify-between items-center">
                  <div className="space-x-2">
                    <Link
                      href={`/dashboard/word?page=${
                        currentPage > 1 ? currentPage - 1 : currentPage
                      }&limit=${pageSize}`}
                    >
                      <Button className={`text-lg`} disabled={currentPage <= 1}>
                        ទំព័រមុន
                      </Button>
                    </Link>
                    <Link
                      href={`/dashboard/word?page=${
                        currentPage <= allPage ? currentPage + 1 : currentPage
                      }&limit=${pageSize}`}
                    >
                      <Button
                        className={`text-lg`}
                        disabled={currentPage >= allPage}
                      >
                        ទំព័របន្ទាប់
                      </Button>
                    </Link>
                  </div>
                  <div>
                    <Button variant={"ghost"} className={`text-lg pinyin`}>
                      {currentPage}/{allPage}
                    </Button>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Link
                      href={`/dashboard/word?page=${
                        currentPage > 1 && 1
                      }&limit=${pageSize}`}
                    >
                      <Button className={`text-lg`} disabled={currentPage <= 1}>
                        ទំព័រដំបូង
                      </Button>
                    </Link>
                    <Link
                      href={`/dashboard/word?page=${
                        currentPage <= allPage && allPage
                      }&limit=${pageSize}`}
                    >
                      <Button
                        className={`text-lg`}
                        disabled={currentPage >= allPage}
                      >
                        ទំព័រចុងក្រោយ
                      </Button>
                    </Link>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
}
