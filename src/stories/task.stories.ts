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
      onPinTask: actionsData.onPinTask,
      onArchiveTask: actionsData.onArchiveTask,
    },
    template: `<task ${argsToTemplate(args)}></task>`,
  }),
};
export default meta;
type Story = StoryObj<TaskComponent>;

export const Default: Story = {
  args: {
    id: '0',
    task: 'Make dinner',
  },
};
