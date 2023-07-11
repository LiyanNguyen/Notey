import type { Meta, StoryObj } from '@storybook/react';
import { NoteModal } from '../components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

const meta: Meta<typeof NoteModal> = {
  component: NoteModal,
  decorators: [
    (NoteModal) =>
      <QueryClientProvider client={queryClient}>
        <NoteModal />
      </QueryClientProvider>
  ]
}

export default meta

type Story = StoryObj<typeof NoteModal>

export const Creating: Story = {
  args: {
    data: undefined,
    isOpen: true,
  },
};

export const Editing: Story = {
  args: {
    data: {
      id: '123',
      title: 'Lorem, ipsum dolor.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, reiciendis!',
      rating: 5,
      color: 'green',
      createdAt: '11-07-2023'
    },
    isOpen: true,
  },
};