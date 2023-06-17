import { useRecoilState } from 'recoil'
import { ascendingState } from '../global'

const RatingDropdown = () => {
  const [, setAscending] = useRecoilState(ascendingState)

  const handleChange = (value: string) => {
    value === 'ascending' ? setAscending(true) : setAscending(false)
  }
  
  return (
    <select onChange={(e) => handleChange(e.target.value)} defaultValue='descending'>
      <option value="descending">Descending</option>
      <option value="ascending">Ascending</option>
    </select>
  )
}

export default RatingDropdown