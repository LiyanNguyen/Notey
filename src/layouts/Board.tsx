import { useQuery } from "@tanstack/react-query";
import {
  EmptyBoard,
  ErrorBoard,
  LoadingBoard,
  NoteCard,
  Pagination,
} from "../components";
import { useRecoilState } from "recoil";
import { ratingState, colorState, searchString, currentPage } from "../global";
import { Note } from "../types/Note";
import { GET_Notes } from "../api";

const Board = () => {
  const [rating] = useRecoilState(ratingState);
  const [color] = useRecoilState(colorState);
  const [search] = useRecoilState(searchString);
  const [page] = useRecoilState(currentPage);

  // HTTP GET
  const { isLoading, data, isError } = useQuery({
    queryKey: ["Notes", rating, color, search, page],
    queryFn: () => {
      return GET_Notes(rating, color, search, page);
    },
    refetchOnWindowFocus: false,
  });

  return (
    <div className="bg-violet-50 dark:bg-slate-900 h-[calc(100vh)] overflow-auto flex flex-col justify-between">
      <div className="pt-24 pb-16 px-8 flex flex-wrap gap-5 justify-center">
        {isLoading && <LoadingBoard />}
        {isError && <ErrorBoard />}
        {data?.notes?.length === 0 && <EmptyBoard />}
        {data?.notes?.map((item: Note) => (
          <NoteCard key={item._id} data={item} />
        ))}
      </div>
      {data?.pages > 0 && <Pagination totalPages={data?.pages} />}
    </div>
  );
};

export default Board;
