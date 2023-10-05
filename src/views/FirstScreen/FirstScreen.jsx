import { BsArrowRight } from 'react-icons/bs'
import SvgBG from '../../components/SvgBG/SvgBG'

const FirstScreen = () => {
	return (
		<div>
			<div className='mt-[120px] text-center grid gap-3'>
				<h2 className='font-cedarville text-lg font-normal'>Drink coffee, enjoy with Samwyle</h2>
				<h1 className='font-josefin font-normal text-4xl'>Coffee Shop</h1>
				<a
					className='font-josefin mt-4 flex items-center gap-4  mx-auto  justify-between text-white text-left px-4 py-3 bg-[#2D635E] '
					href='#'
				>
					Order Here <BsArrowRight />
				</a>
			</div>
			<SvgBG color='#FAE9E0' img='./images/img_mug.svg' />
		</div>
	)
}

export default FirstScreen
