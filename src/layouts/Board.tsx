import { useQuery } from "@tanstack/react-query"
import { EmptyBoard, ErrorBoard, LodingBoard, NoteCard } from "../components"
import { GET_Notes } from "../api"
// import { fakeArray } from "../data" // switch to this one when there is something wrong with supabase

const Board = () => {  
  // HTTP GET
  const { isLoading, data, isError } = useQuery({
    queryKey: ['Notes'],
    queryFn: GET_Notes
  })

  return (
    <div className="bg-violet-50">
      <div className="mx-auto container h-[calc(100vh-80px)] overflow-auto">
        <div className='px-3 sm:px-10 py-3 sm:py-5 flex flex-wrap justify-center sm:justify-normal items-start gap-5'>
          {isLoading && <LodingBoard />}
          {data?.error || isError ?  <ErrorBoard /> : null}
          {data?.data?.length === 0 && <EmptyBoard />}
          {data?.data?.map((item, index) => <NoteCard key={index} data={item} />)}
        </div>
      </div>
    </div>
  ) 
}

export default Board