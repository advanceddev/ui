import * as React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Tabs from './Tabs'

export default {
	title: 'Unreal-UI/Tabs',
	component: Tabs,
} as ComponentMeta<typeof Tabs>

const Template: ComponentStory<typeof Tabs> = () => {
	const tabs = [
		{ title: 'Купить', value: 'buy' },
		{ title: 'Продать', value: 'sell' },
		{ title: 'Обменять', value: 'exchange' },
	]

	const [activeTab, setActiveTab] = React.useState(tabs[0].value)

	const handleChangeTab = (tab: string) => {
		setActiveTab(tab)
	}

	return (
		<>
			<Tabs activeTab={activeTab} onChange={handleChangeTab} tabs={tabs} />
			Текущая вкладка: {activeTab}
		</>
	)
}

export const TabsComponent = Template.bind({})
