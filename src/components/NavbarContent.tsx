import { memo } from "react";
import icon from "../assets/icon.png";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Dropdown, SearchBar } from ".";
import { useRecoilState } from "recoil";
import { colorState, ratingState } from "../global";
import { colorOptions } from "../data";

const NavbarContent = memo(({ openModal }: { openModal: () => void }) => {
  const [color, setColor] = useRecoilState(colorState);
  const [rating, setRating] = useRecoilState(ratingState);

  return (
    <div className="bg-violet-950 h-20 flex">
      <div className="px-10 mx-auto container w-full flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <img src={icon} alt="" className=" object-scale-down w-8" />
          <h1 className=" text-white font-medium text-3xl">Notey</h1>
        </div>
        <div className="flex gap-5">
          <SearchBar />
          <Dropdown value={color} onChange={setColor} options={colorOptions} />
          <Dropdown
            value={rating}
            onChange={setRating}
            options={["ascending", "descending"]}
          />
        </div>
        <button
          data-testid="new-note-button"
          onClick={openModal}
          className=" border border-slate-400 h-max py-1.5 px-2.5 rounded-md text-white hover:text-violet-950 hover:bg-white transition-all flex items-center"
        >
          <PlusIcon className="w-4 h-4" />
          New Note
        </button>
      </div>
    </div>
  );
});

export default NavbarContent;
