const EmptyBoard = () => {
  return (
    <div className="w-full h-96 flex flex-col items-center justify-center">
      <p className='text-slate-500'>You don't have any notes...</p>
      <p className='text-slate-500'>Create a new note to get started</p>
    </div>
  )
}

export default EmptyBoard