import type { Meta, StoryObj } from '@storybook/react'
import NoteCardContent from '../components/NoteCardContent'

const borderColorOptions = [
  'border-t-blue-400',
  'border-t-red-400',
  'border-t-yellow-400',
  'border-t-green-400',
  'border-t-slate-400'
]

const ratingColorOptions = [
  'bg-blue-400',
  'bg-red-400',
  'bg-yellow-400',
  'bg-green-400',
  'bg-slate-400',
]

const meta = {
  title: 'Components/NoteCard',
  component: NoteCardContent,
  // tags: ['autodocs'],
  argTypes: {
    borderColor: { control: 'inline-radio', options: borderColorOptions },
    ratingColor: { control: 'inline-radio', options: ratingColorOptions },
    rating: { control: { type: 'range', min: 1, max: 10, step: 1 } },
  }

} satisfies Meta<typeof NoteCardContent>

export default meta
type Story = StoryObj<typeof meta>

export const Blue: Story = {
  args: {
    borderColor: 'border-t-blue-400',
    ratingColor: 'bg-blue-400',
    title: 'Sample Blue Note',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ipsam itaque vel fuga doloremque ducimus.',
    rating: 8,
    createdDate: '18-07-2023',
    openEditModal: () => null,
    openDeleteModal: () => null,
  }
}

export const Red: Story = {
  args: {
    borderColor: 'border-t-red-400',
    ratingColor: 'bg-red-400',
    title: 'Sample Red Note',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ipsam itaque vel fuga doloremque ducimus.',
    rating: 8,
    createdDate: '18-07-2023',
    openEditModal: () => null,
    openDeleteModal: () => null,
  }
}

export const Yellow: Story = {
  args: {
    borderColor: 'border-t-yellow-400',
    ratingColor: 'bg-yellow-400',
    title: 'Sample Yelow Note',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ipsam itaque vel fuga doloremque ducimus.',
    rating: 8,
    createdDate: '18-07-2023',
    openEditModal: () => null,
    openDeleteModal: () => null,
  }
}

export const Green: Story = {
  args: {
    borderColor: 'border-t-green-400',
    ratingColor: 'bg-green-400',
    title: 'Sample Green Note',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ipsam itaque vel fuga doloremque ducimus.',
    rating: 8,
    createdDate: '18-07-2023',
    openEditModal: () => null,
    openDeleteModal: () => null,
  }
}

export const Slate: Story = {
  args: {
    borderColor: 'border-t-slate-400',
    ratingColor: 'bg-slate-400',
    title: 'Sample Slate Note',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ipsam itaque vel fuga doloremque ducimus.',
    rating: 8,
    createdDate: '18-07-2023',
    openEditModal: () => null,
    openDeleteModal: () => null,
  }
}