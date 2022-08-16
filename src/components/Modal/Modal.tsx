import * as React from 'react'
import ReactDOM from 'react-dom'
import s from './modal.module.css'

export interface IModal {
	show: boolean
	onClose: () => void
	children: React.ReactNode
	closeButton?: React.ReactNode
	title?: string
	modalStyle?: string
	modalHeaderStyle?: string
	modalWrapperStyle?: string
}

type ReturnType = [boolean, (locked: boolean) => void]

function useLockedBody(initialLocked = false): ReturnType {
	const [locked, setLocked] = React.useState(initialLocked)
	const useIsomorphicLayoutEffect =
		typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect

	useIsomorphicLayoutEffect(() => {
		if (!locked) {
			return
		}

		const originalOverflow = document.body.style.overflow
		const originalPaddingRight = document.body.style.paddingRight

		document.body.style.overflow = 'hidden'

		const root = document.getElementById('modal-root')
		const scrollBarWidth = root ? root.offsetWidth - root.scrollWidth : 0

		if (scrollBarWidth) {
			document.body.style.paddingRight = `${scrollBarWidth}px`
		}

		return () => {
			document.body.style.overflow = originalOverflow

			if (scrollBarWidth) {
				document.body.style.paddingRight = originalPaddingRight
			}
		}
	}, [locked])

	React.useEffect(() => {
		if (locked !== initialLocked) {
			setLocked(initialLocked)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [initialLocked])

	return [locked, setLocked]
}



const Modal = ({
	show,
	onClose,
	children,
	title,
	closeButton,
	modalStyle,
	modalHeaderStyle,
	modalWrapperStyle,
}: IModal) => {
	const [isBrowser, setIsBrowser] = React.useState<boolean>(false)
	const [locked, setLocked] = useLockedBody()

	const wrapperRef = React.useRef<HTMLDivElement>(null)

	React.useEffect(() => {
		setIsBrowser(true)
		const handleClickOutside = (e: any) => {
			if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
				onClose()
				setLocked(false)
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [locked, onClose, setLocked])

	React.useEffect(() => {
		if (show) {
			setLocked(true)
		} else {
			setLocked(false)
		}
	}, [locked, setLocked, show])

	const handleCloseClick = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault()
		setLocked(false)
		onClose()
	}

	const defaultCloseButton = (
		<a className={s.modal_close_btn} href="#" onClick={handleCloseClick}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
				id="Layer_1"
				x="0px"
				y="0px"
				viewBox="0 0 378.303 378.303"
				style={{ width: 18, height: 18 }}
			>
				<polygon
					style={{ fill: '#fff' }}
					points="378.303,28.285 350.018,0 189.151,160.867 28.285,0 0,28.285 160.867,189.151 0,350.018   28.285,378.302 189.151,217.436 350.018,378.302 378.303,350.018 217.436,189.151 "
				/>
			</svg>
		</a>
	)

	const modalContent = show ? (
		<div className={s.modal_overlay}>
			<div
				className={modalWrapperStyle ? modalWrapperStyle : s.modal_wrapper}
				ref={wrapperRef}
			>
				<div className={modalStyle ? modalStyle : s.modal}>
					<div className={modalHeaderStyle ? modalHeaderStyle : s.modal_header}>
						{title && <span className={s.modal_title}>{title}</span>}
						{closeButton ? (
							<span
								className={s.modal_close_btn}
								role="button"
								onClick={handleCloseClick}
							>
								{closeButton}
							</span>
						) : (
							defaultCloseButton
						)}
					</div>
					<div className={s.modal_body}>{children}</div>
				</div>
			</div>
		</div>
	) : null

	if (isBrowser) {
		return ReactDOM.createPortal(
			modalContent, document.getElementById('modal-root') as HTMLDivElement
		)
	} else {
		return null
	}
}

export default React.memo(Modal)
