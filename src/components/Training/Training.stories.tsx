import {Training as Component} from './Training';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'Training',
  component: Component,
};

export const Training: Story = {
  // ...
};

export default meta;
