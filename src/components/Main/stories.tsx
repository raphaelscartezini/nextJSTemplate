import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  conponent: Main
} as Meta

export const Basic: Story = (args) => <Main {...args} />
Basic.args = {
  title: 'sdfgsdfgsdfgsdf',
  description: 'asdf asdfasdfadfg'
}

export const Default: Story = (args) => <Main {...args} />
Basic.args = {
  title: '4563576456745674567',
  description: 'fghdfghdfghdfgh'
}
