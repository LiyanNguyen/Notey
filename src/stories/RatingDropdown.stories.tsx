import type { Meta, StoryObj } from '@storybook/react'
import { RatingDropdown } from '../components'
import { RecoilRoot } from 'recoil'

const meta = {
  title: 'Components/RatingDropdown',
  component: RatingDropdown,
  decorators: [
    (Story) => (
      <RecoilRoot>
        <Story />
      </RecoilRoot>
    ),
  ],
  // tags: ['autodocs'],

} satisfies Meta<typeof RatingDropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {

}