import type { Meta, StoryObj } from '@storybook/react'
import { NavbarContent } from '../components'
import { RecoilRoot } from 'recoil'

const meta = {
  title: 'Components/Navbar',
  component: NavbarContent,
  decorators: [
    (Story) => (
      <RecoilRoot>
        <Story />
      </RecoilRoot>
    ),
  ],
  // tags: ['autodocs'],

} satisfies Meta<typeof NavbarContent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {

}