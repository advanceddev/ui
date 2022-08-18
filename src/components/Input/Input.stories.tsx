import * as React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Input, { IInput } from './Input'

export default {
	title: 'Unreal-UI/Input',
	component: Input,
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args: IInput) => <Input {...args} />

export const Text = Template.bind({})
Text.args = {
	type: 'text',
	label: 'Enter your name',
}

export const Password = Template.bind({})
Password.args = {
	type: 'password',
	label: 'Enter password',
}

export const Checkbox = Template.bind({})
Checkbox.args = {
	type: 'checkbox',
	label: 'Subscribe',
}
