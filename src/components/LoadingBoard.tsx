import { Spinner } from '.'

const LoadingBoard = () => {
  return (
    <div className="w-full h-96 flex flex-col gap-4 items-center justify-center">
      <Spinner className='h-12 w-12 border-[6px]' />
      <p className='text-slate-500'>Loading Notes...</p>
    </div>
  )
}

export default LoadingBoard