import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "../components";
import { Provider } from "react-redux";
import { store } from "../store";

const meta = {
  title: "Components/Pagination",
  component: Pagination,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
  // tags: ['autodocs'],
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    totalPages: 10
  },
};
