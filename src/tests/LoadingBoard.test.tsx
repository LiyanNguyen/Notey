import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LoadingBoard } from '../components'

describe('LoadingBoard', () => {
  it('renders corectly showing information', () => {
    render(<LoadingBoard />)

    const loadingNotes = screen.getByText("Loading Notes...")

    expect(loadingNotes).toBeInTheDocument()
  })
})