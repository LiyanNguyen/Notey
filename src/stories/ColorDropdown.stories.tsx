import type { Meta, StoryObj } from '@storybook/react'
import { ColorDropdown } from '../components'
import { RecoilRoot } from 'recoil';

const meta = {
  title: 'Components/ColorDropdown',
  component: ColorDropdown,
  decorators: [
    (Story) => (
      <RecoilRoot>
        <Story />
      </RecoilRoot>
    ),
  ],
  // tags: ['autodocs'],

} satisfies Meta<typeof ColorDropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  
}