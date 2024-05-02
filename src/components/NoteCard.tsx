import { useCallback, useEffect, useState } from "react"
import { Note } from "../types/Note";
import { DeleteModal, NoteModal } from ".";
import formatDate from "../utils/formatDate";
import NoteCardContent from "./NoteCardContent";
import { colorClasses } from "../data";

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
  const createdDate = formatDate(new Date(createdAt));

  // https://tailwindcss.com/docs/content-configuration#dynamic-class-names
  useEffect(() => {
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