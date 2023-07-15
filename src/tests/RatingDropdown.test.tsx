import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { RatingDropdown } from '../components'
import { RecoilRoot } from 'recoil'
import userEvent from '@testing-library/user-event'

describe('RatingDropdown', () => {
  it('renders correctly with the color options', () => {
    render(<RatingDropdown />, { wrapper: RecoilRoot })
    const selectElement = screen.getByRole('combobox')
    const allRatingOptions = ['descending', 'ascending']
    const optionElements = screen.getAllByRole('option')

    expect(selectElement).toBeInTheDocument()
    optionElements.forEach((item, index) => {
      expect(item).toBeInTheDocument()
      expect(item).toHaveValue(allRatingOptions[index])
    })
  })

  it('changes sorting order to ascending', async () => {
    render(<RatingDropdown />, { wrapper: RecoilRoot })
    const selectElement = screen.getByRole('combobox')
    const ascendingOption: HTMLOptionElement = screen.getByRole('option', { name: 'Ascending' })

    await userEvent.selectOptions(selectElement, ascendingOption)

    expect(ascendingOption.selected).toBe(true)
  })

  it('changes sorting order to descending', async () => {
    render(<RatingDropdown />, { wrapper: RecoilRoot })
    const selectElement = screen.getByRole('combobox')
    const descendingOption: HTMLOptionElement = screen.getByRole('option', { name: 'Descending' })

    await userEvent.selectOptions(selectElement, descendingOption)

    expect(descendingOption.selected).toBe(true)
  })
})