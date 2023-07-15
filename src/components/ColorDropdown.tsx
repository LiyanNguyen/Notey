import { useRecoilState } from 'recoil'
import { colorState } from '../global'
import { colorOptions } from '../data'
import { ChangeEvent } from 'react'

const ColorDropdown = () => {
  const [, setColor] = useRecoilState(colorState)

  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setColor(e.target.value)
  }

  return (
    <select role='combobox' className='w-32 border border-slate-400 rounded-sm-within:outline-2 p-0.5 rounded-sm focus-within:outline-violet-500 capitalize' onChange={handleOnChange} defaultValue='all'>
      <option role='option' value="all" className='capitalize'>all</option>
      {colorOptions.map(item =>
        <option role='option' key={item} value={item} className='capitalize'>{item}</option>
      )}
    </select>
  )
}

export default ColorDropdown