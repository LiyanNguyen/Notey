import { describe, it, expect } from 'vitest'
import formatDate from "../utils/formatDate"

describe('Format date function', () => {
  const testDate1 = new Date("2022-03-05")
  const testDate2 = new Date("2023-10-17")

  it('returns date string in dd-mm-yyyy format adding leading 0s if possible', () => {
    const formattedDate = formatDate(testDate1)
    expect(formattedDate).toBe('05-03-2022')
  })

  it('returns date string in dd-mm-yyyy format', () => {
    const formattedDate = formatDate(testDate2)
    expect(formattedDate).toBe('17-10-2023')
  })
})