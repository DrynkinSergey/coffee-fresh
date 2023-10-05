import { AlignJustify } from 'lucide-react'
import useModal from '../hooks/useModal'
import { Modal } from './Modal/Modal'
import { Logo } from './Logo/Logo'

export const Header = () => {
	const { isOpen, toggle } = useModal()
	return (
		<div className='sticky top-0 bg-white z-50 px-5 py-2 flex gap-6 items-center'>
			<button onClick={toggle}>
				<AlignJustify />
			</button>
			<Logo />
			{isOpen ? <Modal close={toggle} /> : null}
		</div>
	)
}
