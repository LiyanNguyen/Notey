import { useState } from 'react'
import { NewNoteModal } from '../components'

const Topbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className='bg-violet-950 h-20 flex'>
      <div className='px-10 mx-auto container w-full flex justify-between items-center'>
        <h1 className=' text-white font-medium text-3xl'>Notey</h1>
        <button onClick={() => setIsOpen(true)} className=' border border-slate-400 h-max py-1.5 px-2.5 rounded-md text-white hover:text-violet-950 hover:bg-white transition-all'>Create New Note</button>
      </div>
      <NewNoteModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}

export default Topbar 