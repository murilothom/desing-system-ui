import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@mthom-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <Text>Test Box</Text>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
