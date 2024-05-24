const EmptyBoard = () => {
  return (
    <div className="w-full h-96 flex flex-col items-center justify-center text-slate-500 text-md dark:text-slate-300">
      <p className="">No notes found with this search and filters...</p>
    </div>
  );
}

export default EmptyBoard