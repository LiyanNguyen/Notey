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
  const { id, title, description, rating, color, createdAt } = data
  const [borderColor, setBorderColor] = useState<string>('')
  const [ratingColor, setRatingColor] = useState<string>('')
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [isDeleting, setIsDeleting] = useState<boolean>(false)
  const dateDisplay = formatDate(new Date(createdAt))

  // WE HAVE TO DO THIS CUZ TAILWIND DOES NOT ALLOW DYNAMIC CLASSES LOL
  // https://tailwindcss.com/docs/content-configuration#dynamic-class-names
  useEffect(() => {
    if (color === 'blue') {
      setBorderColor(`border-t-blue-400`)
      setRatingColor(`bg-blue-400`)      
    }
    else if (color === 'red') {
      setBorderColor(`border-t-red-400`)
      setRatingColor(`bg-red-400`)      
    }
    else if (color === 'yellow') {
      setBorderColor(`border-t-yellow-400`)
      setRatingColor(`bg-yellow-400`)      
    }
    else if (color === 'green') {
      setBorderColor(`border-t-green-400`)
      setRatingColor(`bg-green-400`)      
    }
    else if (color === 'slate') {
      setBorderColor(`border-t-slate-400`)
      setRatingColor(`bg-slate-400`)      
    }
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
        dateDisplay={dateDisplay}
        openEditModal={openEditModal}
        openDeleteModal={openDeleteModal}
      />
      <NoteModal data={data} isOpen={isEditing} setIsOpen={setIsEditing} />
      <DeleteModal id={id} title={title} isOpen={isDeleting} setIsOpen={setIsDeleting}/>
    </>
  )
}

export default NoteCard