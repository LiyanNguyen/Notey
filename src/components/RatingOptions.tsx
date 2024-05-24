import { Dispatch, SetStateAction } from "react";
import { ratingOptions } from "../data";

const RatingOptions = ({
  rating,
  setRating,
}: {
  rating: number;
  setRating: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div className="flex justify-between w-full my-2">
      {ratingOptions.map((num) => (
        <button
          onClick={() => setRating(num)}
          key={num}
          className={` transition-all text-slate-500 dark:text-slate-300 text-center flex-1 border border-slate-200 dark:border-slate-500 ${
            num === rating && "bg-violet-100 text-black font-semibold dark:bg-black dark:text-white"
          } hover:bg-violet-100 dark:hover:bg-slate-950 hover:text-black hover:font-semibold`}
        >
          {num}
        </button>
      ))}
    </div>
  );
};

export default RatingOptions;
