import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Spinner } from '../components'

describe('Spinner', () => {
  it('renders correctly with props and styling', () => {
    const customClassName = 'h-6 w-6 border-[3px]'
    render(<Spinner className={customClassName} />)
    const spinnerElement = screen.getByRole('progressbar')

    expect(spinnerElement).toBeInTheDocument()
    expect(spinnerElement).toHaveClass(customClassName)
  })
})