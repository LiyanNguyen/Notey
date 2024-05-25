import type { Meta, StoryObj } from "@storybook/react";
import { EmptyBoard } from "../components";
import { RecoilRoot } from "recoil";

const meta = {
  title: "Components/EmptyBoard",
  component: EmptyBoard,
  decorators: [
    (Story) => (
      <RecoilRoot>
        <Story />
      </RecoilRoot>
    ),
  ],
  // tags: ['autodocs'],
} satisfies Meta<typeof EmptyBoard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
