import * as React from 'react'
import s from './button.module.css'

type ButtonTypes =
	| 'primary'
	| 'secondary'
	| 'danger'
	| 'text'

type ButtonSizes = 'small' | 'medium' | 'large'

export interface IButton {
	text: string
	type: ButtonTypes
	size?: ButtonSizes
	disabled?: boolean
	disabledText?: string
	className?: string
	onClick?: () => void
	submit?: boolean
	icon?: React.ReactNode
	iconPosition?: 'left' | 'right'
	iconClassName?: string
}

const Button = ({
	text,
	type,
	size,
	onClick,
	disabled,
	disabledText,
	className,
	submit,
	icon,
	iconPosition,
	iconClassName,
}: IButton) => {
	const buttonTypes = {
		action: s.action,
		primary: s.primary,
		secondary: s.secondary,
		danger: s.danger,
		text: s.text,
		signup: s.signup,
		inverse: s.inverse,
		glass: s.glass,
		xr: s.xr,
		report: s.report,
		private: s.private,
	}

	const buttonSizes = {
		small: s.small,
		medium: s.medium,
		large: s.large,
	}

	return (
		<button
			className={
				s.button +
				` ${buttonTypes[type]} ${className ? className : ''} ${
					size ? buttonSizes[size] : ''
				}`
			}
			onClick={onClick}
			disabled={disabled}
			type={submit ? 'submit' : 'button'}
		>
			{icon && iconPosition === 'left' && (
				<div className={`${s.icon} ${iconClassName ? iconClassName : ''}`}>
					{icon}
				</div>
			)}
			{disabled && disabledText ? disabledText : text}
			{icon && iconPosition === 'right' && (
				<div className={`${s.icon} ${iconClassName ? iconClassName : ''}`}>
					{icon}
				</div>
			)}
		</button>
	)
}

export default React.memo(Button)
