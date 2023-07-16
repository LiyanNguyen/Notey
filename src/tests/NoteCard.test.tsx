import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { NoteCard } from '../components'
import { Note } from '../types/Note'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import formatDate from '../utils/formatDate'

const queryClient = new QueryClient()

describe('NoteCard', () => {
  it('renders corectly showing information', async () => {
    const sampleData: Note = {
      id: '123456',
      title: 'Sample Title',
      description: 'Sample Description',
      rating: 8,
      color: 'blue',
      createdAt: '16-07-2023',
    }

    const dateDisplay = formatDate(new Date('16-07-2023'))

    render(
      <QueryClientProvider client={queryClient} >
        <NoteCard data={sampleData} />
      </QueryClientProvider>
    )
    
    const titleText = await screen.findByRole('heading')
    const descriptionText = await screen.findByRole('contentinfo')
    const dateText = await screen.findByRole('time')
    const ratingBox = await screen.findByRole('note')

    expect(titleText).toHaveTextContent(sampleData.title)
    expect(descriptionText).toHaveTextContent(sampleData.description)
    expect(dateText).toHaveTextContent(dateDisplay)
    expect(ratingBox).toHaveTextContent(String(sampleData.rating))
  })

  it('renders a color blue card', async () => {
    const sampleData: Note = {
      id: '123456',
      title: 'Sample Title',
      description: 'Sample Description',
      rating: 8,
      color: 'blue',
      createdAt: '16-07-2023',
    }

    render(
      <QueryClientProvider client={queryClient} >
        <NoteCard data={sampleData} />
      </QueryClientProvider>
    )

    const containerDiv = await screen.findByRole('group')
    const ratingBox = await screen.findByRole('note')
    
    expect(ratingBox).toHaveClass('bg-blue-400')
    expect(containerDiv).toHaveClass('border-t-blue-400')
  })

  it('renders a color red card', async () => {
    const sampleData: Note = {
      id: '123456',
      title: 'Sample Title',
      description: 'Sample Description',
      rating: 8,
      color: 'red',
      createdAt: '16-07-2023',
    }

    render(
      <QueryClientProvider client={queryClient} >
        <NoteCard data={sampleData} />
      </QueryClientProvider>
    )

    const containerDiv = await screen.findByRole('group')
    const ratingBox = await screen.findByRole('note')

    expect(ratingBox).toHaveClass('bg-red-400')
    expect(containerDiv).toHaveClass('border-t-red-400')
  })

  it('renders a color yellow card', async () => {
    const sampleData: Note = {
      id: '123456',
      title: 'Sample Title',
      description: 'Sample Description',
      rating: 8,
      color: 'yellow',
      createdAt: '16-07-2023',
    }

    render(
      <QueryClientProvider client={queryClient} >
        <NoteCard data={sampleData} />
      </QueryClientProvider>
    )

    const containerDiv = await screen.findByRole('group')
    const ratingBox = await screen.findByRole('note')

    expect(ratingBox).toHaveClass('bg-yellow-400')
    expect(containerDiv).toHaveClass('border-t-yellow-400')
  })

  it('renders a color green card', async () => {
    const sampleData: Note = {
      id: '123456',
      title: 'Sample Title',
      description: 'Sample Description',
      rating: 8,
      color: 'green',
      createdAt: '16-07-2023',
    }

    render(
      <QueryClientProvider client={queryClient} >
        <NoteCard data={sampleData} />
      </QueryClientProvider>
    )

    const containerDiv = await screen.findByRole('group')
    const ratingBox = await screen.findByRole('note')

    expect(ratingBox).toHaveClass('bg-green-400')
    expect(containerDiv).toHaveClass('border-t-green-400')
  })

  it('renders a color slate card', async () => {
    const sampleData: Note = {
      id: '123456',
      title: 'Sample Title',
      description: 'Sample Description',
      rating: 8,
      color: 'slate',
      createdAt: '16-07-2023',
    }

    render(
      <QueryClientProvider client={queryClient} >
        <NoteCard data={sampleData} />
      </QueryClientProvider>
    )

    const containerDiv = await screen.findByRole('group')
    const ratingBox = await screen.findByRole('note')

    expect(ratingBox).toHaveClass('bg-slate-400')
    expect(containerDiv).toHaveClass('border-t-slate-400')
  })

})