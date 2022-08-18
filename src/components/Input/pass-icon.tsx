import * as React from 'react'

interface IPasswordIcon {
	visible: boolean
}

const PasswordIcon = ({ visible }: IPasswordIcon) => {
	return (
		<svg
			viewBox="0 0 24 24"
			width="16"
			height="16"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
			fill="none"
			className="nextui-input-password-icon"
			shapeRendering="geometricPrecision"
			style={{ color: 'currentColor', background: '#fff' }}
		>
			{!visible ? (
				<>
					<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
					<circle cx="12" cy="12" r="3" />
				</>
			) : (
				<>
					<path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" />
					<path d="M1 1l22 22" />
				</>
			)}
		</svg>
	)
}

PasswordIcon.displayName = 'PasswordIcon'
export default React.memo(PasswordIcon)
