import { useQuery } from "@tanstack/react-query"
import { EmptyBoard, ErrorBoard, LoadingBoard, NoteCard } from "../components"
import { GET_Notes } from "../api"
import { useRecoilState } from 'recoil';
import { ascendingState, colorState } from "../global";
import { Note } from "../types/Note";

const Board = () => {
  const [ascending] = useRecoilState(ascendingState)
  const [color] = useRecoilState(colorState)

  // HTTP GET
  const { isLoading, data, isError } = useQuery({
    queryKey: ['Notes', ascending, color],
    queryFn: () => GET_Notes(ascending, color),
    refetchOnWindowFocus: false
  })

  return (
    <div className="bg-violet-50">
      <div className="mx-auto container h-[calc(100vh-80px)] overflow-auto">
        <div className='px-3 sm:px-10 py-3 sm:py-5 flex flex-wrap justify-center sm:justify-normal items-start gap-5'>
          {isLoading && <LoadingBoard />}
          {data?.error || isError ?  <ErrorBoard /> : null}
          {data?.data?.length === 0 && <EmptyBoard />}
          {data?.data?.map((item : Note) => <NoteCard key={item.id} data={item} />)}
        </div>
      </div>
    </div>
  ) 
}

export default Board