import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ColorDropdown } from '../components'
import { RecoilRoot } from 'recoil'
import { colorOptions } from '../data'
import userEvent from '@testing-library/user-event'

describe('ColorDropdown', () => {
  it('renders correctly with the color options', () => {
    render(<ColorDropdown />, {wrapper: RecoilRoot})
    const selectElement = screen.getByRole('combobox')
    const allColorOptions = ['all', ...colorOptions]
    const optionElements = screen.getAllByRole('option')

    expect(selectElement).toBeInTheDocument()
    optionElements.forEach((item, index) => expect(item).toHaveValue(allColorOptions[index]))    
  })

  it('allows user to change selected color', async () => {
    render(<ColorDropdown />, { wrapper: RecoilRoot })
    const selectElement = screen.getByRole('combobox')
    const redDropdown: HTMLOptionElement = screen.getByRole('option', { name: 'red' })
    
    await userEvent.selectOptions(selectElement, redDropdown)
    
    expect(redDropdown).toBeInTheDocument()
    expect(redDropdown.selected).toBe(true)
  })
})