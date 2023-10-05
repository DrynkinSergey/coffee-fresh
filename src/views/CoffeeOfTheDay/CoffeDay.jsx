import Card from '../../components/Card/Card'
import Title from '../../components/Title'

const CoffeDay = () => {
	return (
		<div>
			<Title title='Сoffee of the day' />
			<p className='font-alegreya mt-6'>
				Americano coffee (Italian: Caffè Americano) is an espresso diluted with hot water. The presence of foam (cream)
				depends on how coffee and water are mixed. Attention! The concepts of “American” and “American coffee” should
				not be confused. n the second case, this refers not to diluted espresso, but to a drink prepared through a
				filter system.
			</p>
			<div className='mt-20 gap-5 grid'>
				<Card
					title='Espresso'
					desc='Espresso - black coffee made in a coffee machine or a special coffee machine, where hot water is passed through pressed ground beans at a pressure.'
					buttonTitle='Add to cart'
				/>
				<Card
					title='Latte'
					desc='The name Latte (from Italian “milk”) speaks about the main ingredient of the drink. It is recommended to take fat milk - at least 3.2%. In addition to it, milk foam.'
					buttonTitle='Add to cart'
				/>
				<Card
					title='Americano'
					desc='The name Latte (from Italian “milk”) speaks about the main ingredient of the drink. It is recommended to take fat milk - at least 3.2%. In addition to it, milk foam.'
					buttonTitle='Add to cart'
				/>
			</div>
		</div>
	)
}

export default CoffeDay
