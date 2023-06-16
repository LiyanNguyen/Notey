import { NoteCard } from "."
import { fakeArray } from "../data/fakeNotes"

const Board = () => {
  return (
    <div className="bg-violet-50">
      <div className="mx-auto container h-[calc(100vh-80px)] overflow-auto">
        <div className='px-3 sm:px-10 py-3 sm:py-5 flex flex-wrap items-start gap-5'>
          {fakeArray.map((item, index) => 
            <NoteCard key={index} data={item} />
          )}
        </div>
      </div>
    </div>
  ) 
}

export default Board