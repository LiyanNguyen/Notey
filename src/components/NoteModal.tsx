import { Dialog, Transition } from '@headlessui/react'
import { Dispatch, Fragment, SetStateAction, memo, useRef } from 'react'
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Note } from '../types/Note';
import { colorOptions, ratingOptions } from '../data';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { POST_NewNote, PUT_updateNote } from '../api';
import { Spinner } from '.';

type Props = {
  data? :Note
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const NoteModal = memo((props: Props) => {
  const { data, isOpen, setIsOpen, } = props  
  const titleInputRef = useRef<HTMLInputElement>(null)  
  const descriptionInputRef = useRef<HTMLTextAreaElement>(null)
  const colorDropdownRef = useRef<HTMLSelectElement>(null)
  const ratingDropdownRef = useRef<HTMLSelectElement>(null)
  const queryClient = useQueryClient()
  
  // FUNCTIONS
  const closeModal = () => setIsOpen(false)
  const refetchNotes = () => queryClient.invalidateQueries({ queryKey: ['Notes'] })
  const createNewNote = () => POSTMutate()
  const updateNote = () => PUTMutate()

  // HTTP POST
  const { mutate: POSTMutate, isLoading: POSTLoading } = useMutation({
    mutationFn: async () => {
      if (titleInputRef.current && descriptionInputRef.current && colorDropdownRef.current && ratingDropdownRef.current)
        POST_NewNote(
          titleInputRef.current.value,
          descriptionInputRef.current.value,
          colorDropdownRef.current.value,
          parseInt(ratingDropdownRef.current.value)
        )
    },
    onSuccess: () => { refetchNotes(); closeModal(); },
  })

  // HTTP PUT
  const { mutate: PUTMutate, isLoading: PUTLoading } = useMutation({
    mutationFn: async () => {
      if (props.data && titleInputRef.current && descriptionInputRef.current && colorDropdownRef.current && ratingDropdownRef.current)
        PUT_updateNote(
          props.data.id,
          titleInputRef.current.value,
          descriptionInputRef.current.value,
          colorDropdownRef.current.value,
          parseInt(ratingDropdownRef.current.value)
        )
    },
    onSuccess: () => { refetchNotes(); closeModal(); },
  })

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
                  {data === undefined ? 'Create New' : 'Edit'} Note
                </Dialog.Title>
                <div>
                  <label htmlFor="title" className='text-slate-500 text-sm'>Title</label>
                  <input ref={titleInputRef} maxLength={25} defaultValue={data ? data.title : ''} id='title' type="text" className='w-full border border-slate-400 rounded-sm px-2 py-1 focus-within:outline-2 focus-within:outline-violet-500' />
                </div>
                <div>
                  <label htmlFor="description" className='text-slate-500 text-sm'>Description</label>
                  <textarea ref={descriptionInputRef} maxLength={250} defaultValue={data ? data.description : ''} id='description' rows={4} className='w-full border border-slate-400 rounded-sm px-2 py-1 focus-within:outline-2 focus-within:outline-violet-500 resize-none' />
                </div>
                <div className='flex gap-5'>
                  <div className='flex flex-col w-full'>
                    <label htmlFor="color" className='text-slate-500 text-sm'>Color</label>
                    <select ref={colorDropdownRef} defaultValue={data ? data.color : 'blue'} name="color" id="color" className='w-full border border-slate-400 rounded-sm-within:outline-2 p-1 rounded-sm focus-within:outline-violet-500 capitalize'>
                      {colorOptions.map(item => <option className='capitalize' key={item} value={item}>{item}</option>)}
                    </select>
                  </div>
                  <div className='flex flex-col w-full'>
                    <label htmlFor="rating" className='text-slate-500 text-sm'>Rating</label>
                    <select ref={ratingDropdownRef} defaultValue={data ? data.rating : '1'} name="rating" id="rating" className='w-full border border-slate-400 rounded-sm-within:outline-2 p-1 rounded-sm focus-within:outline-violet-500'>
                      {ratingOptions.map(item => <option key={item} value={item}>{item}</option>)}
                    </select>
                  </div>
                </div>
                <div className='h-0.5 bg-gray-200 mt-4'/>
                <button
                  disabled={titleInputRef.current?.value === '' || descriptionInputRef.current?.value === '' ? true : false}
                  type="button"
                  className="inline-flex justify-center rounded-md border border-transparent bg-violet-100 px-4 py-2 text-sm font-medium text-violet-900 hover:bg-violet-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 self-center w-28 disabled:bg-slate-200 disabled:text-gray-400"
                  onClick={data === undefined ? createNewNote : updateNote}
                >
                  {POSTLoading || PUTLoading ? 
                    <Spinner className='h-6 w-6 border-[3px]'/> :
                    data === undefined ? 'Create' : 'Update'
                  }
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
})

export default NoteModal

