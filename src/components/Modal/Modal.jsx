import { AiOutlineClose } from 'react-icons/ai'
import SocialIcons from '../SocialIcons/SocialIcons'
import { Logo } from '../Logo/Logo'

export const Modal = ({ close }) => {
	return (
		<div className='fixed inset-0 bg-white items-center  flex flex-col  py-10 '>
			<div className='flex justify-between w-full px-4'>
				<Logo />
				<button onClick={close}>
					<AiOutlineClose className='text-3xl' />
				</button>
			</div>

			<ul className=' flex-grow grid gap-8 text-2xl font-semibold text-center mt-14 mb-8'>
				<li>
					<a href='#'>Home</a>
				</li>
				<li>
					<a href='#'>About us</a>
				</li>
				<li>
					<a href='#'>Promotion</a>
				</li>
				<li>
					<a href='#'>Shop</a>
				</li>
				<li>
					<a href='#'>Contacts</a>
				</li>
			</ul>
			<div className=''>
				<SocialIcons />
			</div>
		</div>
	)
}
