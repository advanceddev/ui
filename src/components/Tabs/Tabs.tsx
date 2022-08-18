import * as React from 'react'
import s from './tabs.module.scss'

export interface ITabItem {
	title: string
	value: string
}

export interface ITabs {
	activeTab: string
	onChange: (tab: ITabItem['value']) => void
	tabs: ITabItem[]
}

const Tabs = ({ activeTab, tabs, onChange }: ITabs) => {
	const items =
		tabs &&
		tabs.map(item => (
			<li
				className={`${s.tab} ${activeTab === item.value ? s.tab_active : ''}`}
				role="tab"
				onClick={() => onChange(item.value)}
				key={item.value}
			>
				{item.title}
			</li>
		))

	return (
		<div role="tabpanel" className={s.wrapper}>
			<ul role="tablist" className={s.tablist}>
				{items}
			</ul>
		</div>
	)
}

export default React.memo(Tabs)
