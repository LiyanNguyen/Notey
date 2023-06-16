import { useEffect, useState } from "react"
import { TrashIcon, PencilIcon } from "@heroicons/react/24/outline";
import { faker } from '@faker-js/faker';

type Props = {
  data: {
    id: string
    title: string
    description: string
    rating: number
    color: string
    createdAt: string
    updatedAt: string
  }
}

const Note = (props: Props) => {
  const { color } = props.data
  const [borderColor, setBorderColor] = useState<string>('')
  const [ratingColor, setRatingColor] = useState<string>('')

  // WE HAVE TO DO THIS CUZ TAILWIND DOES NOT ALLOW DYNAMIC CLASSES LOL
  // https://tailwindcss.com/docs/content-configuration#dynamic-class-names
  useEffect(() => {
    if (color === 'blue') {
      setBorderColor(`border-t-blue-400`)
      setRatingColor(`bg-blue-400`)      
    }
    else if (color === 'red') {
      setBorderColor(`border-t-red-400`)
      setRatingColor(`bg-red-400`)      
    }
    else if (color === 'yellow') {
      setBorderColor(`border-t-yellow-400`)
      setRatingColor(`bg-yellow-400`)      
    }
    else if (color === 'green') {
      setBorderColor(`border-t-green-400`)
      setRatingColor(`bg-green-400`)      
    }
    else if (color === 'slate') {
      setBorderColor(`border-t-slate-400`)
      setRatingColor(`bg-slate-400`)      
    }
  }, [color])
      
  return (
    <div className={`bg-white border border-violet-100 shadow-md w-72 max-h-64 overflow-y-auto ${borderColor} border-t-2`}>
      <div className='flex flex-col gap-2 p-4 pt-2'>
        <div className="flex justify-between items-center">
          <h3 className='font-bold text-lg break-all'>{faker.commerce.product()}</h3>
          <p className={`w-7 h-7 flex items-center justify-center ${ratingColor} rounded text-white`}>8</p>
        </div>
        <p className='text-slate-500'>{faker.commerce.productDescription()}</p>
        <div className='flex justify-between items-center'>
          <p className='text-slate-400 text-xs'>16-06-2023</p>
          <div className="flex gap-2">
            <button className=" p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-all">
              <PencilIcon className="h-4 w-4 text-gray-500" />
            </button>
            <button className=" p-2 rounded-full bg-slate-100 hover:bg-slate-200">
              <TrashIcon className="h-4 w-4 text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Note