import { Button } from '../src/components/buttons';
export default {
  title: 'button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    variant: 'outline',
    size: 'sm',
    asChild: false,
    children: 'button',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    size: 'lg',
  },
};
