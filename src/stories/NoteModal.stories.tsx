import type { Meta, StoryObj } from '@storybook/react'
import { NoteModal } from '../components'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

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
    isOpen: true,
    setIsOpen: () => null
  }
}