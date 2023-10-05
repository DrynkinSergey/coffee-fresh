import { AlignJustify } from 'lucide-react'

export const Header = () => {
	return (
		<div className=' flex gap-6 items-center'>
			<AlignJustify />
			<div className='flex  items-center'>
				<img src='/images/logo.svg' width={34} />
				<h2 className='font-cedarville text-xl'> Samwayle</h2>
			</div>
		</div>
	)
}
