import type { Meta, StoryObj } from '@storybook/angular';

import { argsToTemplate } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import TaskComponent from '../app/components/task/task.component';

export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

const meta: Meta<TaskComponent> = {
  title: 'Task',
  component: TaskComponent,
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  render: (args: TaskComponent) => ({
    props: {
      ...args,
    },
    template: `<div style="border-radius:10px; box-shadow: 0px 0px 10px lightgray;overflow: hidden;"><task ${argsToTemplate(args)}></task></div>`,
  }),
};
export default meta;
type Story = StoryObj<TaskComponent>;

export const Default: Story = {
  args: {
    id: '0',
    task: 'Make dinner',
    status: 'active',
  },
};

export const Completed: Story = {
  args: {
    id: '0',
    task: 'Make dinner',
    status: 'completed',
  },
};
