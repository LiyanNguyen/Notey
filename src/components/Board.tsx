import { Note } from "."

const fakeArray = [
  {
    id: 'string',
    title: 'string',
    description: 'string',
    rating: 123,
    color: 'blue',
    createdAt: 'string',
    updatedAt: 'string',
  },
  {
    id: 'string',
    title: 'string',
    description: 'string',
    rating: 123,
    color: 'red',
    createdAt: 'string',
    updatedAt: 'string',
  },
  {
    id: 'string',
    title: 'string',
    description: 'string',
    rating: 123,
    color: 'yellow',
    createdAt: 'string',
    updatedAt: 'string',
  },
  {
    id: 'string',
    title: 'string',
    description: 'string',
    rating: 123,
    color: 'green',
    createdAt: 'string',
    updatedAt: 'string',
  },
  {
    id: 'string',
    title: 'string',
    description: 'string',
    rating: 123,
    color: 'slate',
    createdAt: 'string',
    updatedAt: 'string',
  },
]

const Board = () => {
  return (
    <div className="bg-violet-50">
      <div className="mx-auto container h-[calc(100vh-80px)] overflow-auto">
        <div className='px-3 sm:px-10 py-3 sm:py-5 flex flex-wrap items-start gap-5'>
          {fakeArray.map((item, index) => 
            <Note key={index} data={item} />
          )}
        </div>
      </div>
    </div>
  ) 
}

export default Board