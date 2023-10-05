import Container from './components/Container'
import FirstScreen from './views/FirstScreen/FirstScreen'
import CoffeeShop from './views/CoffeeShop/CoffeeShop'
import CoffeDay from './views/CoffeeOfTheDay/CoffeDay'
import OurAddress from './views/OurAddress/OurAddress'
import { Header } from './components/Header'
const App = () => {
	return (
		<>
			<Header />
			<Container>
				<FirstScreen />
				<CoffeeShop />
				<CoffeDay />
				<OurAddress />
			</Container>
			<footer className='flex justify-center border-t-2 py-1 text-xs text-[gray]'>
				<p className='font-josefin'>{new Date().getFullYear()}&copy; | DS - Coffee Fresh</p>
			</footer>
		</>
	)
}

export default App
