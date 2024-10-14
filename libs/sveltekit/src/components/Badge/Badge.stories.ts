import Badge from './Badge.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';

const meta: Meta<Badge> = {
  title: 'component/Indicators/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    type: { 
      control: { type: 'select' },
      options: ['default', 'notification', 'status']
    },
    label: { control: 'text' },
  },
  parameters: {
    layout: 'centered',
    viewport: {
      viewports: {
        smallMobile: { name: 'Small Mobile', styles: { width: '320px', height: '568px' } },
        largeMobile: { name: 'Large Mobile', styles: { width: '414px', height: '896px' } },
        tablet: { name: 'Tablet', styles: { width: '768px', height: '1024px' } },
        desktop: { name: 'Desktop', styles: { width: '1024px', height: '768px' } },
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'default',
    label: 'Default Badge',
  }
};

export const Notification: Story = {
  args: {
    type: 'notification',
    label: '3',
  }
};

export const StatusIndicator: Story = {
  args: {
    type: 'status',
    label: 'Online',
  }
};