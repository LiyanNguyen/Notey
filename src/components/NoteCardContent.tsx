import { TrashIcon, PencilIcon } from "@heroicons/react/24/outline";
import { memo } from "react";

type Props = {
  borderColor: string
  ratingColor: string
  title: string
  description: string
  rating: number
  dateDisplay: string
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
    dateDisplay,
    openEditModal,
    openDeleteModal
  } = props

  return (
    <div className={`bg-white border border-violet-100 shadow-md w-72 ${borderColor} border-t-2`}>
      <div className='flex flex-col gap-2 p-4 pt-2'>
        <div className="flex justify-between items-center">
          <h3 className='font-medium text-lg break-all'>{title}</h3>
          <p className={`w-7 h-7 flex items-center justify-center ${ratingColor} rounded text-white`}>{rating}</p>
        </div>
        <p className='text-slate-500'>{description}</p>
        <div className='flex justify-between items-center'>
          <p className='text-slate-400 text-xs'>{dateDisplay}</p>
          <div className="flex gap-2">
            <button onClick={openEditModal} className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-all">
              <PencilIcon className="h-4 w-4 text-gray-500" />
            </button>
            <button onClick={openDeleteModal} className="p-2 rounded-full bg-slate-100 hover:bg-slate-200">
              <TrashIcon className="h-4 w-4 text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
})

export default NoteCardContent