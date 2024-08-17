import { useQuery } from "@tanstack/react-query";
import {
  EmptyBoard,
  ErrorBoard,
  LoadingBoard,
  NoteCard,
  Pagination,
} from "../components";
import { Note } from "../types/Note";
import { GET_Notes } from "../api";
import { useAppSelector } from "../store";

const Board = () => {
  const color = useAppSelector((state) => state.filter.colorState);
  const rating = useAppSelector((state) => state.filter.ratingState);
  const page = useAppSelector((state) => state.filter.currentPage);
  const search = useAppSelector((state) => state.filter.searchString);

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
