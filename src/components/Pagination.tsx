import { useRecoilState } from "recoil";
import { currentPage } from "../global";

const Pagination = ({ totalPages }: { totalPages: number }) => {
  const [page, setPage] = useRecoilState(currentPage);

  const firstPage = () => {
    if (page !== 1) setPage(1);
  };

  const lastPage = () => {
    if (page !== totalPages) setPage(totalPages);
  };

  const previousPage = () => {
    page > 1 && setPage((prev) => prev - 1);
  };

  const nextPage = () => {
    page < totalPages && setPage((prev) => prev + 1);
  };

  return (
    <nav
      className="flex py-2 self-center absolute bottom-0 bg-violet-50 w-full justify-center "
      aria-label="Pagination"
    >
      <button
        data-testid="first-button"
        onClick={firstPage}
        className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 bg-slate-100 hover:bg-slate-200 focus:z-20 focus:outline-offset-0 transition-all"
      >
        <span className="sr-only">First</span>
        <svg
          className="h-4 w-4 text-slate-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {" "}
          <polyline points="11 17 6 12 11 7" />{" "}
          <polyline points="18 17 13 12 18 7" />
        </svg>
      </button>
      <button
        data-testid="previous-button"
        onClick={previousPage}
        className="relative inline-flex items-center px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 bg-slate-100 hover:bg-slate-200 focus:z-20 focus:outline-offset-0 transition-all"
      >
        <span className="sr-only">Previous</span>

        <svg
          className="h-4 w-4 text-slate-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <p
        data-testid="page-display"
        className="relative inline-flex items-center text-slate-500 px-4 py-2 text-sm font-semibold focus:z-20 focus:outline-offset-0 ring-1 ring-inset ring-gray-300 focus:outline-violet-500"
      >
        {page} / {totalPages}
      </p>

      <button
        data-testid="next-button"
        onClick={nextPage}
        className="relative inline-flex items-center px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 bg-slate-100 hover:bg-slate-200 focus:z-20 focus:outline-offset-0 transition-all"
      >
        <span className="sr-only">Next</span>
        <svg
          className="h-4 w-4 text-slate-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
      <button
        data-testid="last-button"
        onClick={lastPage}
        className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 bg-slate-100 hover:bg-slate-200 focus:z-20 focus:outline-offset-0 transition-all"
      >
        <span className="sr-only">Last</span>
        <svg
          className="h-4 w-4 text-slate-500"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {" "}
          <path stroke="none" d="M0 0h24v24H0z" />{" "}
          <polyline points="7 7 12 12 7 17" />{" "}
          <polyline points="13 7 18 12 13 17" />
        </svg>
      </button>
    </nav>
  );
};

export default Pagination;
