import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, Checkbox, CheckboxProps } from '@mthom-ui/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            gap: '$2',
          }}
        >
          {Story()}
          <Text size="sm">Label</Text>
        </Box>
      )
    },
  ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {
  args: {},
}

export const Disabled: StoryObj<CheckboxProps> = {
  args: {
    disabled: true,
  },
}
