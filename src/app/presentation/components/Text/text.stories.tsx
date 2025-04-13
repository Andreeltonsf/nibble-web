import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextAs } from '.';


const meta:Meta <typeof Text> = {
  title: 'Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  args:{
    children: 'Text',
  },

  render: (props) => <Text {...props} />,

  decorators:[
    (Story) => (
      <div className="flex flex-wrap w-[600px] h-auto p-4 bg-sky-100">
        <Story />
      </div>
    ),
  ]
}



export default meta;

type Story = StoryObj<typeof Text>;

export const Heading1: Story = {
  args:{
    children: 'Titulo da Historia',
    as: TextAs.h1,
  }
}
