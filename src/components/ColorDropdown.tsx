import { useRecoilState } from 'recoil'
import { colorState } from '../global'
import { colorOptions } from '../data'
import { ChangeEvent, memo } from 'react'

const ColorDropdown = memo(() => {
  const [, setColor] = useRecoilState(colorState)

  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setColor(e.target.value)
  }

  return (
    <select className='w-32 border border-slate-400 rounded-sm-within:outline-2 p-0.5 rounded-sm focus-within:outline-violet-500 capitalize' onChange={handleOnChange} defaultValue='all'>
      <option value="all" className='capitalize'>all</option>
      {colorOptions.map(item =>
        <option key={item} value={item} className='capitalize'>{item}</option>
      )}
    </select>
  )
})

export default ColorDropdown