export default function DictionaryLoading() {
  return (
    <section className="overflow-hidden flex flex-col flex-1 transition-all animate-pulse">
      <div className="flex h-full">
        <div className="h-full w-3/12 animate-pulse">
          <div className={`h-full flex-col flex`}>
            <div className="h-fit flex justify-center items-center px-4">
              <div className="h-10 w-full bg-slate-200 dark:bg-slate-800 rounded-md border" />
            </div>
            <div className="flex-1 w-full overflow-hidden p-4 pt-0">
              <div className="h-12 flex items-center justify-between border-b-2"></div>
              <div className="h-12 flex items-center justify-between border-b-2"></div>
              <div className="h-12 flex items-center justify-between border-b-2"></div>
              <div className="h-12 flex items-center justify-between border-b-2"></div>
              <div className="h-12 flex items-center justify-between border-b-2"></div>
              <div className="h-12 flex items-center justify-between border-b-2"></div>
              <div className="h-12 flex items-center justify-between border-b-2"></div>
              <div className="h-12 flex items-center justify-between border-b-2"></div>
              <div className="h-12 flex items-center justify-between border-b-2"></div>
              <div className="h-12 flex items-center justify-between border-b-2"></div>
              <div className="h-12 flex items-center justify-between border-b-2"></div>
              <div className="h-12 flex items-center justify-between border-b-2"></div>
              <div className="h-12 flex items-center justify-between border-b-2"></div>
              <div className="h-12 flex items-center justify-between border-b-2"></div>
              <div className="h-12 flex items-center justify-between border-b-2"></div>
              <div className="h-12 flex items-center justify-between border-b-2"></div>
              <div className="h-12 flex items-center justify-between border-b-2"></div>
              <div className="h-12 flex items-center justify-between border-b-2"></div>
              <div className="h-12 flex items-center justify-between border-b-2"></div>
              <div className="h-12 flex items-center justify-between border-b-2"></div>
            </div>
          </div>
        </div>
        <div className="h-full w-9/12 flex-1 flex justify-center items-center">
          <h2>Loading...</h2>
        </div>
      </div>
    </section>
  );
}
