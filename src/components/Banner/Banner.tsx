import * as React from 'react'
import s from './banner.module.scss'

export interface IBanner {
	imageSrc: string
	imageAlt: string
	children?: React.ReactNode
}

const Banner = ({ imageSrc, imageAlt, children }: IBanner) => {
	const imgRef = React.useRef<HTMLImageElement>(null)

	const onImageError = () => {
		if (imgRef.current) imgRef.current.src = ''
	}

	return (
		<div className={s.wrapper}>
			<img
				className={s.wrapper__image}
				src={imageSrc}
				ref={imgRef}
				alt={imageAlt}
				onError={onImageError}
			/>
			{children && <div className={s.wrapper__content}>{children}</div>}
		</div>
	)
}

Banner.displayName = 'Banner'
export default React.memo(Banner)
