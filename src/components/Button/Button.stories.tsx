import * as React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button, { IButton } from './Button'

export default {
	title: 'Unreal-UI/Button',
	component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args: IButton) => (
	<Button {...args} />
)

export const HelloWorld = Template.bind({})
HelloWorld.args = {
	onClick: () => alert('Clicked'),
	size: 'medium',
	type: 'primary',
	text: 'Hello world!',
}
