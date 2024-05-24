import useResetFilters from "../hooks/useResetFilters";

const EmptyBoard = () => {
  const { resetAllFilters } = useResetFilters();

  return (
    <div className="w-full h-96 flex flex-col items-center justify-center text-slate-500 text-md dark:text-slate-300 gap-4">
      <p className="">No notes found with this search and filters...</p>
      <button
        type="button"
        className="inline-flex justify-center rounded-md border border-transparent bg-violet-100 px-4 py-2 text-sm font-medium text-violet-900 hover:bg-violet-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 self-center w-28 disabled:bg-slate-200 disabled:text-gray-400"
        onClick={resetAllFilters}
      >
        Reset Filters
      </button>
    </div>
  );
};

export default EmptyBoard;
