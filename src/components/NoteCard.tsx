import { useEffect, useState } from "react"
import { TrashIcon, PencilIcon } from "@heroicons/react/24/outline";
import { Note } from "../types/Note";
import { DeleteModal, NoteModal } from ".";
import formatDate from "../utils/formatDate";

type Props = {
  data: Note
}

const NoteCard = (props: Props) => {
  const { id, title, description, rating, color, createdAt } = props.data
  const [borderColor, setBorderColor] = useState<string>('')
  const [ratingColor, setRatingColor] = useState<string>('')
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isDeleting, setIsDeleting] = useState<boolean>(false)
  const dateDisplay = formatDate(new Date(createdAt))

  // https://tailwindcss.com/docs/content-configuration#dynamic-class-names
  useEffect(() => {
    setBorderColor(`border-t-${color}-400`)
    setRatingColor(`bg-${color}-400`)
  }, [color])

  return (
    <>
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
              <button onClick={() => setIsOpen(true)} className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-all">
                <PencilIcon className="h-4 w-4 text-gray-500" />
              </button>
              <button onClick={() => setIsDeleting(true)} className="p-2 rounded-full bg-slate-100 hover:bg-slate-200">
                <TrashIcon className="h-4 w-4 text-gray-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <NoteModal data={props.data} isOpen={isOpen} setIsOpen={setIsOpen} />
      <DeleteModal id={id} title={title} isOpen={isDeleting} setIsOpen={setIsDeleting}/>
    </>
  )
}

export default NoteCard