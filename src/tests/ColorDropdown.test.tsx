import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ColorDropdown } from '../components'
import { RecoilRoot } from 'recoil'
import { colorOptions } from '../data'

describe('ColorDropdown', () => {
  it('renders correctly with the color options', () => {
    render(<ColorDropdown />, {wrapper: RecoilRoot})
    const selectElement = screen.getByRole('combobox')
    const allColorOptions = ['all', ...colorOptions]
    const optionElements = screen.getAllByRole('option')

    expect(selectElement).toBeInTheDocument()
    optionElements.forEach((item, index) => expect(item).toHaveValue(allColorOptions[index]))
  })
})