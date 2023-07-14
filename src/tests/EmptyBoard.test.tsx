import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { EmptyBoard } from '../components'

describe('EmptyBoard', () => {
  it('renders corectly showing information' , () => {
    render(<EmptyBoard />)

    const noNotes = screen.getByText("You don't have any notes...")
    const reminder = screen.getByText("Create a new note to get started")

    expect(noNotes).toBeInTheDocument()
    expect(reminder).toBeInTheDocument()
  })
})