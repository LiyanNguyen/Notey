import type { Meta, StoryObj } from '@storybook/react'
import { NavbarContent } from '../components'
import { Provider } from "react-redux";
import { store } from "../store";

const meta = {
  title: 'Components/Navbar',
  component: NavbarContent,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
  // tags: ['autodocs'],

} satisfies Meta<typeof NavbarContent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {

}