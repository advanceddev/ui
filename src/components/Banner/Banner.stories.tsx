import * as React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Banner, { IBanner } from './Banner'

export default {
	title: 'Unreal-UI/Banner',
	component: Banner,
} as ComponentMeta<typeof Banner>

const Template: ComponentStory<typeof Banner> = (args: IBanner) => (
	<Banner {...args} />
)

export const Default = Template.bind({})
Default.args = {
	imageSrc: 'https://picsum.photos/1000',
	imageAlt: 'https://picsum.photos/1000',
}

export const WithChildren = Template.bind({})
WithChildren.args = {
	imageSrc: 'https://picsum.photos/1000',
	imageAlt: 'https://picsum.photos/1000',
	children: (
		<h2 style={{ color: '#fff', background: '#000', padding: 4 }}>
			Any JSX children component
		</h2>
	),
}
