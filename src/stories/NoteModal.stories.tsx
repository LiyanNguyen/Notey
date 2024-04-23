import type { Meta, StoryObj } from '@storybook/react'
import { NoteModal } from '../components'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Note } from '../types/Note';

const queryClient = new QueryClient()

const sampleData: Note = {
  _id: "123456",
  title: "Sample Title",
  description: "Sample Description",
  rating: 8,
  color: "green",
  createdAt: new Date(),
  updatedAt: new Date()
};

const meta = {
  title: 'Components/NoteModal',
  component: NoteModal,
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient} >
        <Story />
      </QueryClientProvider>
    ),
  ],
  // tags: ['autodocs'],

} satisfies Meta<typeof NoteModal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    data: sampleData,
    isOpen: true,
    setIsOpen: () => null
  }
}