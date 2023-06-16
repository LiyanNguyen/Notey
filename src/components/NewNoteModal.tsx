import { Dialog, Transition } from '@headlessui/react'
import { Dispatch, Fragment, SetStateAction, useState } from 'react'
import { XMarkIcon } from "@heroicons/react/24/outline";

type Props = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const NewNoteModal = (props: Props) => {
  const { isOpen, setIsOpen } = props
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [color, setColor] = useState<string>('Blue')
  const [rating, setRating] = useState<number>(1)

  const closeModal = () => {
    setIsOpen(false)
  }

  const createNewNote = () => {
    console.log({
      title: title,
      description: description,
      color: color,
      rating: rating,
    })

    setTitle('')
    setDescription('')
    closeModal()
  }

  const colorOptions = ['Blue', 'Red', 'Yellow', 'Green', 'Gray']
  const ratingOptions = [1,2,3,4,5]
  
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-150"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-150"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-150"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-md bg-white px-6 py-4 text-left align-middle transition-all flex flex-col gap-3">
                <button onClick={closeModal} className='absolute right-3 top-3 p-1.5 rounded-full bg-slate-50 hover:bg-slate-200 transition-all'>
                  <XMarkIcon className="h-5 w-5 text-gray-500" />
                </button>
                <Dialog.Title as="h3" className="text-lg font-medium text-center">
                  Create New Note
                </Dialog.Title>
                <div>
                  <label htmlFor="title" className='text-slate-500 text-sm'>Title</label>
                  <input value={title} onChange={(e) => setTitle(e.target.value)} id='title' type="text" className='w-full border border-slate-400 rounded-sm px-2 py-1 focus-within:outline-2 focus-within:outline-violet-500' />
                </div>
                <div>
                  <label htmlFor="description" className='text-slate-500 text-sm'>Description</label>
                  <textarea value={description} onChange={(e) => setDescription(e.target.value)} id='description' rows={4} className='w-full border border-slate-400 rounded-sm px-2 py-1 focus-within:outline-2 focus-within:outline-violet-500 resize-none' />
                </div>
                <div className='flex gap-5'>
                  <div className='flex flex-col w-full'>
                    <label htmlFor="color" className='text-slate-500 text-sm'>Color</label>
                    <select value={color} onChange={(e) => setColor(e.target.value)} name="color" id="color" className='w-full border border-slate-400 rounded-sm-within:outline-2 p-1 rounded-sm focus-within:outline-violet-500'>
                      {colorOptions.map(item => <option key={item} value={item}>{item}</option>)}
                    </select>
                  </div>
                  <div className='flex flex-col w-full'>
                    <label htmlFor="rating" className='text-slate-500 text-sm'>Rating</label>
                    <select value={rating} onChange={(e) => setRating(Number(e.target.value))} name="rating" id="rating" className='w-full border border-slate-400 rounded-sm-within:outline-2 p-1 rounded-sm focus-within:outline-violet-500'>
                      {ratingOptions.map(item => <option key={item} value={item}>{item}</option>)}
                    </select>
                  </div>
                </div>
                <div className='h-0.5 bg-gray-200 mt-4'/>
                <button
                  disabled={title === '' || description === '' ? true : false}
                  type="button"
                  className="inline-flex justify-center rounded-md border border-transparent bg-violet-100 px-4 py-2 text-sm font-medium text-violet-900 hover:bg-violet-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 self-center w-28 disabled:bg-slate-200 disabled:text-gray-400"
                  onClick={createNewNote}
                >
                  Create
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )

}

export default NewNoteModal

