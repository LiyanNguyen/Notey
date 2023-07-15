import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import NoteCardContent from '../components/NoteCardContent'

describe('NoteCardContent', () => {
  it('renders correctly with props and styling', () => {
    const borderColor = 'border-t-blue-400'
    const ratingColor = 'bg-blue-400'
    const title = 'Sample Title'
    const description = 'Sample Description'
    const dateDisplay = '11-07-2023'
    const rating = 8

    render(
      <NoteCardContent
        borderColor={borderColor}
        ratingColor={ratingColor}
        title={title}
        description={description}
        dateDisplay={dateDisplay}
        rating={rating}
        openEditModal={() => null}
        openDeleteModal={() => null}
      />
    )
    
    const containerDiv = screen.getByRole('group')
    const titleText = screen.getByRole('heading')
    const descriptionText = screen.getByRole('contentinfo')
    const dateText = screen.getByRole('time')
    const ratingBox = screen.getByRole('note')
    
    expect(containerDiv).toHaveClass(borderColor)
    expect(titleText).toHaveTextContent(title)
    expect(descriptionText).toHaveTextContent(description)
    expect(dateText).toHaveTextContent(dateDisplay)
    expect(ratingBox).toHaveTextContent(String(rating))
    expect(ratingBox).toHaveClass(ratingColor)
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

    const editNoteButton = screen.getByRole('button', { name: 'Edit' })
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

    const deleteNoteButton = screen.getByRole('button', { name: 'Delete' })
    await user.click(deleteNoteButton)

    expect(deleteNoteButton).toBeInTheDocument()
    expect(openDeleteModal).toHaveBeenCalledTimes(1)
  })

})
