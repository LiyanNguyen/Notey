import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ErrorBoard } from '../components'

describe('ErrorBoard', () => {
  it('renders corectly showing information', () => {
    render(<ErrorBoard />)

    const serverInfo = screen.getByText("Something went wrong with the server...")
    const contact = screen.getByText("Contact me at https://github.com/LiyanNguyen")

    expect(serverInfo).toBeInTheDocument()
    expect(contact).toBeInTheDocument()
  })
})