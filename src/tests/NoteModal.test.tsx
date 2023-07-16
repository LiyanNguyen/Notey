import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { NoteModal } from '../components'
import userEvent from '@testing-library/user-event'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Note } from '../types/Note'

const queryClient = new QueryClient()

describe('NoteModal', () => {
  it('renders correctly when no data is passed', async () => {
    render(
      <QueryClientProvider client={queryClient} >
        <NoteModal isOpen setIsOpen={() => null} />
      </QueryClientProvider>
    )
    
    const headingElement = await screen.findByRole('heading', { level: 3, name: 'Create New Note' })
    const titleInputElement = await screen.findByRole('textbox', { name: 'Title'})
    const descriptionTextAreaElement = await screen.findByRole('textbox', { name: 'Description' })
    const colorSelectElement = await screen.findByRole('combobox', { name: 'Color' })
    const ratingSelectElement = await screen.findByRole('combobox', { name: 'Rating' })
    const createNoteButton = await screen.findByRole('button', { name: 'Create' })
    
    expect(headingElement).toBeInTheDocument()
    expect(titleInputElement).toBeInTheDocument()
    expect(titleInputElement).toHaveValue('')
    expect(descriptionTextAreaElement).toBeInTheDocument()
    expect(descriptionTextAreaElement).toHaveValue('')
    expect(colorSelectElement).toBeInTheDocument()
    expect(colorSelectElement).toHaveValue('blue')
    expect(ratingSelectElement).toBeInTheDocument()
    expect(ratingSelectElement).toHaveValue('1')
    expect(createNoteButton).toBeInTheDocument()
  })
  
  it('renders correctly when a data is passed', async () => {
    const sampleData: Note = {
      id: '123456',
      title: 'Sample Title',
      description: 'Sample Description',
      rating: 8,
      color: 'green',
      createdAt: '16-07-2023'
    }
    render(
      <QueryClientProvider client={queryClient} >
        <NoteModal data={sampleData} isOpen setIsOpen={() => null} />
      </QueryClientProvider>
    )

    const headingElement = await screen.findByRole('heading', { level: 3, name: 'Edit Note' })
    const titleInputElement = await screen.findByRole('textbox', { name: 'Title' })
    const descriptionTextAreaElement = await screen.findByRole('textbox', { name: 'Description' })
    const colorSelectElement = await screen.findByRole('combobox', { name: 'Color' })
    const ratingSelectElement = await screen.findByRole('combobox', { name: 'Rating' })
    const updateNoteButton = await screen.findByRole('button', { name: 'Update' })

    expect(headingElement).toBeInTheDocument()
    expect(titleInputElement).toBeInTheDocument()
    expect(titleInputElement).toHaveValue(sampleData.title)
    expect(descriptionTextAreaElement).toBeInTheDocument()
    expect(descriptionTextAreaElement).toHaveValue(sampleData.description)
    expect(colorSelectElement).toBeInTheDocument()
    expect(colorSelectElement).toHaveValue(sampleData.color)
    expect(ratingSelectElement).toBeInTheDocument()
    expect(ratingSelectElement).toHaveValue(String(sampleData.rating))
    expect(updateNoteButton).toBeInTheDocument()
  })

  it('closes the modal when the X button is clicked', async () => {
    const setIsOpen = vi.fn()
    
    render(
      <QueryClientProvider client={queryClient} >
        <NoteModal isOpen setIsOpen={setIsOpen} />
      </QueryClientProvider>
    )

    const XButton = await screen.findByRole('button', { name: 'Close' })
    expect(XButton).toBeInTheDocument()

    await userEvent.click(XButton)
    expect(setIsOpen).toHaveBeenCalledTimes(1)
  })


})