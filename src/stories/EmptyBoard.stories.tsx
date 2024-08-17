import type { Meta, StoryObj } from "@storybook/react";
import { EmptyBoard } from "../components";
import { Provider } from "react-redux";
import { store } from "../store";

const meta = {
  title: "Components/EmptyBoard",
  component: EmptyBoard,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
  // tags: ['autodocs'],
} satisfies Meta<typeof EmptyBoard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
