import { useQuery } from "@tanstack/react-query";
import { EmptyBoard, ErrorBoard, LoadingBoard, NoteCard } from "../components";
import { useRecoilState } from "recoil";
import { ratingState, colorState } from "../global";
import { Note } from "../types/Note";
import { GET_Notes } from "../api";

const Board = () => {
  const [rating] = useRecoilState(ratingState);
  const [color] = useRecoilState(colorState);

  // HTTP GET
  const { isLoading, data, isError } = useQuery({
    queryKey: ["Notes", rating, color],
    queryFn: () => {
      return GET_Notes(rating, color);
    },
    refetchOnWindowFocus: false,
  });

  return (
    <div className="bg-violet-50">
      <div className="mx-auto container h-[calc(100vh-80px)] overflow-auto">
        <div className="px-3 sm:px-10 py-3 sm:py-5 flex flex-wrap justify-center sm:justify-normal items-start gap-5">
          {isLoading && <LoadingBoard />}
          {isError && <ErrorBoard />}
          {data?.length === 0 && <EmptyBoard />}
          {data?.map((item: Note) => (
            <NoteCard key={item._id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Board;
