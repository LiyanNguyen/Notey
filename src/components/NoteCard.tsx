import { useCallback, useEffect, useState } from "react"
import { Note } from "../types/Note";
import { DeleteModal, NoteModal } from ".";
import formatDate from "../utils/formatDate";
import NoteCardContent from "./NoteCardContent";

type Props = {
  data: Note
}

const NoteCard = (props: Props) => {
  const { data } = props
  const { _id, title, description, rating, color, createdAt } = data;
  const [borderColor, setBorderColor] = useState<string>('')
  const [ratingColor, setRatingColor] = useState<string>('')
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [isDeleting, setIsDeleting] = useState<boolean>(false)
  const createdDate = formatDate(new Date(createdAt))

  // https://tailwindcss.com/docs/content-configuration#dynamic-class-names
  useEffect(() => {
    const colorClasses = {
      blue: { borderColor: 'border-t-blue-400', ratingColor: 'bg-blue-400' },
      red: { borderColor: 'border-t-red-400', ratingColor: 'bg-red-400' },
      yellow: { borderColor: 'border-t-yellow-400', ratingColor: 'bg-yellow-400' },
      green: { borderColor: 'border-t-green-400', ratingColor: 'bg-green-400' },
      slate: { borderColor: 'border-t-slate-400', ratingColor: 'bg-slate-400' },
    }
    setBorderColor(colorClasses[color].borderColor)
    setRatingColor(colorClasses[color].ratingColor)
  }, [color])

  const openEditModal = useCallback(() => setIsEditing(true), [])
  const openDeleteModal = useCallback(() => setIsDeleting(true), [])
  
  return (
    <>
      <NoteCardContent
        borderColor={borderColor}
        ratingColor={ratingColor}
        title={title}
        description={description}
        rating={rating}
        createdDate={createdDate}
        openEditModal={openEditModal}
        openDeleteModal={openDeleteModal}
      />
      <NoteModal data={data} isOpen={isEditing} setIsOpen={setIsEditing} />
      <DeleteModal
        id={_id}
        title={title}
        isOpen={isDeleting}
        setIsOpen={setIsDeleting}
      />
    </>
  );
}

export default NoteCard