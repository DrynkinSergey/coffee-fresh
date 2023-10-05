import { AlignJustify } from 'lucide-react'
import useModal from '../hooks/useModal'
import { Modal } from './Modal/Modal'
import { Logo } from './Logo/Logo'
import React from 'react'
import { Nav } from './Nav/Nav'

export const Header = () => {
	const { isOpen, toggle } = useModal()
	return (
		<>
			<div className=' sticky top-0 bg-white z-50 px-5 py-2 flex sm:hidden gap-6 items-center'>
				<button onClick={toggle}>
					<AlignJustify />
				</button>
				<Logo />
				{isOpen ? <Modal close={toggle} /> : null}
			</div>
			<div className='hidden sm:flex sticky top-0 items-center px-5 py-5 w-full gap-10 justify-between bg-white z-50'>
				<Logo />
				<Nav />
			</div>
		</>
	)
}
