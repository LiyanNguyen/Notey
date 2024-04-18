import { useRecoilState } from "recoil";
import { currentPage } from "../global";

const Pagination = ({ totalPages }: { totalPages: number }) => {
  const [page, setPage] = useRecoilState(currentPage);

  const renderPageList = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          className={`relative inline-flex items-center ${
            page === i
              ? "bg-violet-500 text-white"
              : "text-slate-500 hover:bg-slate-200"
          } px-4 py-2 text-sm font-semibold focus:z-20 focus:outline-offset-0 ring-1 ring-inset ring-gray-300 focus:outline-violet-500 `}
          onClick={() => setPage(i)}
        >
          {i}
        </button>
      );
    }

    return buttons;
  };

  const previousPage = () => {
    page > 1 && setPage((prev) => prev - 1);
  };

  const nextPage = () => {
    page < totalPages && setPage((prev) => prev + 1);
  };

  return (
    <nav
      className="isolate inline-flex -space-x-px rounded-md shadow-sm self-center mb-4"
      aria-label="Pagination"
    >
      <button
        onClick={previousPage}
        className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 bg-slate-100 hover:bg-slate-200 focus:z-20 focus:outline-offset-0"
      >
        <span className="sr-only">Previous</span>
        <svg
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {renderPageList()}
      <button
        onClick={nextPage}
        className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 bg-slate-100 hover:bg-slate-200 focus:z-20 focus:outline-offset-0"
      >
        <span className="sr-only">Next</span>
        <svg
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </nav>
  );
};

export default Pagination;
