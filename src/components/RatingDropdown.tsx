import { useRecoilState } from 'recoil'
import { ratingState } from '../global'
import { ChangeEvent } from 'react'

const RatingDropdown = () => {
  const [, setAscending] = useRecoilState(ratingState)

  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setAscending(e.target.value)
  }

  return (
    <select role='combobox' className='w-32 border border-slate-400 rounded-sm-within:outline-2 p-0.5 rounded-sm focus-within:outline-violet-500 capitalize' onChange={handleOnChange} defaultValue='descending'>
      <option value="descending">Descending</option>
      <option value="ascending">Ascending</option>
    </select>
  )
}

export default RatingDropdown