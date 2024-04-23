import { Dispatch, SetStateAction } from "react";
import { colorOptions } from "../data";
import { CheckIcon } from "@heroicons/react/20/solid";

const ColorOptions = ({
  color,
  setColor,
}: {
  color: string;
  setColor: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="flex justify-center gap-4 md:justify-between">
      {colorOptions.slice(1).map((item) => (
        <button
          onClick={() => setColor(item)}
          className={`w-12 md:w-16 h-8 bg-${item}-400 rounded items-center justify-center flex hover:scale-105 transition-all`}
          key={item}
        >
          {color === item && (
            <CheckIcon className="w-5 h-5 text-black font-bold" />
          )}
        </button>
      ))}
    </div>
  );
};

export default ColorOptions;
