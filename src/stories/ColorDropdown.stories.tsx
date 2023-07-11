import type { Meta, StoryObj } from '@storybook/react';
import { ColorDropdown } from '../components';
import { RecoilRoot } from 'recoil';

const meta: Meta<typeof ColorDropdown> = {
  component: ColorDropdown,
  decorators: [
    (ColorDropdown) =>
      <RecoilRoot>
        <ColorDropdown />
      </RecoilRoot>
  ]
}

export default meta

type Story = StoryObj<typeof ColorDropdown>

export const Primary: Story = {}

