import { colorOptions, ratingOptions } from '../data'

const FIlters = () => {
  return (
    <div className='flex items-center gap-2'>
      <label htmlFor='color' className='text-white'>Color</label>
      <select id='color' className='w-28 border border-slate-400 rounded-within:outline-2 rounded focus-within:outline-violet-500 capitalize'>
        {colorOptions.map(item => <option className='capitalize' key={item} value={item}>{item}</option>)}
      </select>
      <label htmlFor='color' className='text-white'>Rating</label>
      <select id='color' className='w-28 border border-slate-400 rounded-within:outline-2 rounded focus-within:outline-violet-500 capitalize'>
        {ratingOptions.map(item => <option className='capitalize' key={item} value={item}>{item}</option>)}
      </select>
    </div>
  )
}

export default FIlters