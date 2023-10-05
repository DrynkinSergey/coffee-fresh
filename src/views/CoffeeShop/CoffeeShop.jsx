import SvgBG from '../../components/SvgBG/SvgBG'
import Title from '../../components/Title'

const CoffeeShop = () => {
	return (
		<div id='aboutUs' className='md:grid md:grid-cols-2 gap-20 items-center '>
			<div className='order-1'>
				<Title title='Coffee Shop Samwayle' />
				<p className='font-alegreya mt-4'>
					Only one moment - when the barista reaches out over the bar to transfer the cup to the outstretched hand of
					the buyer. But this is exactly the moment when a connection arises between us and our guests.
				</p>
				<p className='font-alegreya mt-4'>
					And we strive to do our best to maintain this connection - starting with our commitment to selecting the
					highest quality coffee in the world and ending with how we interact with guests and organizations to fulfill
					our obligations.
				</p>
			</div>
			<SvgBG className='order-2' img='./images/cup.svg' color='#E3EBE7' />
		</div>
	)
}

export default CoffeeShop
