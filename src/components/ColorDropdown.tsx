import { useRecoilState } from 'recoil'
import { colorState } from '../global'
import { colorOptions } from '../data'

const ColorDropdown = () => {
  const [, setColor] = useRecoilState(colorState)

  return (
    <select className='w-32 border border-slate-400 rounded-sm-within:outline-2 p-0.5 rounded-sm focus-within:outline-violet-500 capitalize' onChange={(e) => setColor(e.target.value)} defaultValue='all'>
      <option value="all" className='capitalize'>all</option>
      {colorOptions.map(item =>
        <option key={item} value={item} className='capitalize'>{item}</option>
      )}
    </select>
  )
}

export default ColorDropdown