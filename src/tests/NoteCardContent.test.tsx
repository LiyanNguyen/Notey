import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import NoteCardContent from '../components/NoteCardContent'

describe('NoteCardContent', () => {
  it('renders correctly with props and styling', () => {
    render(
      <NoteCardContent
        borderColor='border-t-blue-400'
        ratingColor='bg-blue-400'
        title='Sample Title'
        description='Sample Description'
        dateDisplay='11-07-2023'
        rating={8}
        openEditModal={() => null}
        openDeleteModal={() => null}
      />
    )
    
    const containerDiv = screen.getByTestId('container')
    const titleText = screen.getByRole('heading')
    const descriptionText = screen.getByTestId('description')
    const dateText = screen.getByTestId('date')
    const ratingText = screen.getByTestId('rating')
    
    expect(containerDiv).toHaveClass('border-t-blue-400')
    expect(titleText).toHaveTextContent('Sample Title')
    expect(descriptionText).toHaveTextContent('Sample Description')
    expect(dateText).toHaveTextContent('11-07-2023')
    expect(ratingText).toHaveTextContent('8')
    expect(ratingText).toHaveClass('bg-blue-400')
  })

  it('opens modal when the pencil icon is clicked', async () => {
    const openEditModal = vi.fn()
    render(
      <NoteCardContent
        borderColor='border-t-blue-400'
        ratingColor='bg-blue-400'
        title='Sample Title'
        description='Sample Description'
        dateDisplay='11-07-2023'
        rating={8}
        openEditModal={openEditModal}
        openDeleteModal={() => null}
      />
    )

    const editNoteButton = screen.getByTestId('edit-note')
    await user.click(editNoteButton)
    
    expect(editNoteButton).toBeInTheDocument()
    expect(openEditModal).toHaveBeenCalledTimes(1)
  })

  it('opens delete confirmation modal when the trash icon is clicked', async () => {
    const openDeleteModal = vi.fn()
    render(
      <NoteCardContent
        borderColor='border-t-blue-400'
        ratingColor='bg-blue-400'
        title='Sample Title'
        description='Sample Description'
        dateDisplay='11-07-2023'
        rating={8}
        openEditModal={() => null}
        openDeleteModal={openDeleteModal}
      />
    )

    const deleteNoteButton = screen.getByTestId('delete-note')
    await user.click(deleteNoteButton)

    expect(deleteNoteButton).toBeInTheDocument()
    expect(openDeleteModal).toHaveBeenCalledTimes(1)
  })

})
