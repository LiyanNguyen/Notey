import { NoteCard } from "../components"
import supabase from "../config/supabase"
// import { fakeArray } from "../data" // switch to this one when there is something wrong with supabase
import { Note } from "../types/Note"
import { useState, useEffect } from 'react'

const Board = () => {
  const [fetchError, setFetchError] = useState<boolean>(false)
  const [notes, setNotes] = useState<Note[]>()

  useEffect(() => {
    const fetchNotes = async () => {
      const { data, error } = await supabase.from('Note').select()
      if (error) setFetchError(true)
      if (data) setNotes(data); setFetchError(false)
    }

    fetchNotes()
  },[])

  return (
    <div className="bg-violet-50">
      <div className="mx-auto container h-[calc(100vh-80px)] overflow-auto">
        <div className='px-3 sm:px-10 py-3 sm:py-5 flex flex-wrap justify-center sm:justify-normal items-start gap-5'>
          {notes?.map((item, index) => 
            <NoteCard key={index} data={item} />
          )}
        </div>
      </div>
    </div>
  ) 
}

export default Board