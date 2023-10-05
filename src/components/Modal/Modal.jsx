import { AiOutlineClose } from 'react-icons/ai'
import SocialIcons from '../SocialIcons/SocialIcons'
import { Logo } from '../Logo/Logo'
import { Nav } from '../Nav/Nav'

export const Modal = ({ close }) => {
	return (
		<div className='fixed inset-0 bg-white items-center  flex flex-col  py-10 '>
			<div className='flex justify-between w-full px-4'>
				<Logo />
				<button onClick={close}>
					<AiOutlineClose className='text-3xl' />
				</button>
			</div>

			<Nav />
			<div className=''>
				<SocialIcons />
			</div>
		</div>
	)
}
