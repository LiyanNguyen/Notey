import type { Meta, StoryObj } from '@storybook/react'
import { DeleteModal } from '../components'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RecoilRoot } from 'recoil'

const queryClient = new QueryClient()

const meta = {
  title: 'Components/DeleteModal',
  component: DeleteModal,
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient} >
        <RecoilRoot>
          <Story />
        </RecoilRoot>
      </QueryClientProvider>
    ),
  ],
  // tags: ['autodocs'],

} satisfies Meta<typeof DeleteModal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { id: '123456', title: 'Sample Title', isOpen: true, setIsOpen: () => null },
}