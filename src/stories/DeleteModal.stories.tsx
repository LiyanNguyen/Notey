import type { Meta, StoryObj } from '@storybook/react';
import { DeleteModal } from '../components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

const meta: Meta<typeof DeleteModal> = {
  component: DeleteModal,
  decorators: [
    (DeleteModal) =>
      <QueryClientProvider client={queryClient}>
        <DeleteModal />
      </QueryClientProvider>
  ]
}

export default meta

type Story = StoryObj<typeof DeleteModal>

export const Primary: Story = {  
  args: {
    title: 'Note Title',
    isOpen: true,
  },
};

