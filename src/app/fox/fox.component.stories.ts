import { Story, Meta } from '@storybook/angular/types-7-0';
import { FoxComponent } from './fox.component';

export default {
  title: 'App',
  component: FoxComponent,
  argTypes: {
    name: { control: 'text' },
  },
  args: {
    name: 'Fox',
    setter: 'Setter',
  },
} as Meta;

export const Component: Story = {
  render: (args) => ({
    props: args,
  }),
};

export const Template: Story = {
  render: (args) => ({
    props: args,
    template: `<fox [name]="name" [setter]="setter | uppercase">`,
  }),
};
