import { useRecoilState } from 'recoil'
import { colorState } from '../global'

const ColorDropdown = () => {
  const [, setColor] = useRecoilState(colorState)

  return (
    <select onChange={(e) => setColor(e.target.value)} defaultValue='all'>
      <option value="all">All</option>
      <option value="blue">Blue</option>
      <option value="red">Red</option>
    </select>
  )
}

export default ColorDropdown