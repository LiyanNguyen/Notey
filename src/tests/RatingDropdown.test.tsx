import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { RatingDropdown } from '../components'
import { RecoilRoot } from 'recoil'

describe('RatingDropdown', () => {
  it('renders correctly with the color options', () => {
    render(<RatingDropdown />, { wrapper: RecoilRoot })
    const selectElement = screen.getByRole('combobox')
    const allRatingOptions = ['descending', 'ascending']
    const optionElements = screen.getAllByRole('option')

    expect(selectElement).toBeInTheDocument()
    optionElements.forEach((item, index) => expect(item).toHaveValue(allRatingOptions[index]))
  })
})