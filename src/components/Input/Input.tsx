import * as React from 'react'
import s from './input.module.scss'

const PasswordIcon = React.lazy(() => import('./pass-icon'))

export interface IInput {
	type: 'text' | 'tel' | 'time' | 'email' | 'number' | 'checkbox' | 'password'
	value?: string | number
	name?: string
	defaultValue?: string | number
	label?: string | React.ReactNode
	onChange?: (e: any) => void
	className?: string
	checked?: boolean
	autoFocus?: boolean
}

const Input = ({
	label,
	type,
	value,
	defaultValue,
	onChange,
	name,
	checked,
}: IInput) => {
	const [visible, setVisible] = React.useState(false)

	const ID = `input-${name ? name : type}`

	const handleChangeVisible = () => {
		setVisible(v => !v)
	}

	const showPasswordAsText = type === 'password' && visible

	return (
		<div className={`${s.wrapper} ${type === 'checkbox' ? s.wrapper__row : ''}`}>
			{label && (
				<label htmlFor={ID} className={s.wrapper__label}>
					{label}
				</label>
			)}
			<input
				className={s.wrapper__input}
				type={type === 'password' && showPasswordAsText ? 'text' : type}
				value={value}
				defaultValue={defaultValue}
				onChange={onChange}
				id={ID}
				checked={checked}
				name={name ? name : ''}
			/>
			{type === 'password' && (
				<div
					className={s.wrapper__password_icon}
					role="button"
					onClick={handleChangeVisible}
				>
					<PasswordIcon visible={visible} />
				</div>
			)}
		</div>
	)
}

Input.displayName = 'Input'
export default React.memo(Input)
