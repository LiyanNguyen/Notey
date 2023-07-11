import type { Meta, StoryObj } from '@storybook/react';
import { NoteCard } from '../components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

const meta: Meta<typeof NoteCard> = {
  component: NoteCard,
  decorators: [
    (NoteCard) =>
      <QueryClientProvider client={queryClient}>
        <NoteCard />
      </QueryClientProvider>
  ]
}

export default meta

type Story = StoryObj<typeof NoteCard>

export const BlueNote: Story = {
  args: {
    data: {
      id: 'fakeID',
      title: 'Blue Note',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, expedita.',
      rating: 5,
      color: 'blue',
      createdAt: '11-07-2023'
    }
  }
}

export const RedNote: Story = {
  args: {
    data: {
      id: 'fakeID',
      title: 'Green Note',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, expedita.',
      rating: 5,
      color: 'red',
      createdAt: '11-07-2023'
    }
  }
}

export const YellowNote: Story = {
  args: {
    data: {
      id: 'fakeID',
      title: 'Yellow Note',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, expedita.',
      rating: 5,
      color: 'yellow',
      createdAt: '11-07-2023'
    }
  }
}

export const GreenNote: Story = {
  args: {
    data: {
      id: 'fakeID',
      title: 'Red Note',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, expedita.',
      rating: 5,
      color: 'green',
      createdAt: '11-07-2023'
    }
  }
}

export const SlateNote: Story = {
  args: {
    data: {
      id: 'fakeID',
      title: 'Slate Note',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, expedita.',
      rating: 5,
      color: 'slate',
      createdAt: '11-07-2023'
    }
  }
}
