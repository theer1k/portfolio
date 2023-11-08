import type { Meta, StoryObj } from '@storybook/react';

import { Main } from './Main';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: 'Example/Main',
  component: Main,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Main>;

export default meta;
type Story = StoryObj<typeof Main>;

export const MainWithReactComponent = {
  args: {
    children: <div>Children node</div>,
  },
} satisfies Story;

export const MainWithString = {
  args: {
    children: 'String',
  },
} satisfies Story;
