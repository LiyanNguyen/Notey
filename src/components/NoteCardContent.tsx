import { TrashIcon, PencilIcon } from "@heroicons/react/24/outline";
import { memo } from "react";

type Props = {
  borderColor: string
  ratingColor: string
  title: string
  description: string
  rating: number
  createdDate: string
  openEditModal: () => void
  openDeleteModal: () => void
}

const NoteCardContent = memo((props: Props) => {
  const {
    borderColor,
    ratingColor,
    title,
    description,
    rating,
    createdDate,
    openEditModal,
    openDeleteModal
  } = props

  return (
    <fieldset
      role="group"
      className={`bg-white border border-violet-100 shadow-md ${borderColor} border-t-2`}
    >
      <div className="flex flex-col gap-2 p-4 pt-2 min-w-[320px] max-w-xs h-36 justify-between">
        <div className="flex justify-between items-center">
          <h3 className="font-medium text-lg break-all">{title}</h3>
          <p
            role="note"
            className={`w-7 h-7 flex items-center justify-center ${ratingColor} rounded text-white`}
          >
            {rating}
          </p>
        </div>
        <footer role="contentinfo" className="text-slate-500 truncate">
          {description}
        </footer>
        <div className="flex justify-between items-center">
          <time role="time" className="text-slate-400 text-xs">
            {createdDate}
          </time>
          <div className="flex gap-2">
            <button
              onClick={openEditModal}
              className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-all"
            >
              <span className="hidden">Edit</span>
              <PencilIcon className="h-4 w-4 text-gray-500" />
            </button>
            <button
              onClick={openDeleteModal}
              className="p-2 rounded-full bg-slate-100 hover:bg-slate-200"
            >
              <span className="hidden">Delete</span>
              <TrashIcon className="h-4 w-4 text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </fieldset>
  );
})

export default NoteCardContent