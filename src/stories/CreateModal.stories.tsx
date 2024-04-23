import type { Meta, StoryObj } from "@storybook/react";
import { CreateModal } from "../components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();


const meta = {
  title: "Components/CreteModal",
  component: CreateModal,
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
  // tags: ['autodocs'],
} satisfies Meta<typeof CreateModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    setIsOpen: () => null,
  },
};
