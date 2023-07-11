import { describe, it, expect } from 'vitest'
import formatDate from "../utils/formatDate"

describe('Format date function', () => {
  const newDate = new Date("2022-03-25");
  it('Returns the date in dd-mm-yyyy format', () => {
    const formattedDate = formatDate(newDate)
    expect(formattedDate).toBe('25-03-2022')
  })
})