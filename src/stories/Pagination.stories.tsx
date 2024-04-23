import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "../components";
import { RecoilRoot } from "recoil";

const meta = {
  title: "Components/Pagination",
  component: Pagination,
  decorators: [
    (Story) => (
      <RecoilRoot>
        <Story />
      </RecoilRoot>
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
