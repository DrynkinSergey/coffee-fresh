import Container from './components/Container'
import FirstScreen from './views/FirstScreen/FirstScreen'
import CoffeeShop from './views/CoffeeShop/CoffeeShop'
import CoffeDay from './views/CoffeeOfTheDay/CoffeDay'
const App = () => {
	return (
		<Container>
			<FirstScreen />
			<CoffeeShop />
			<CoffeDay />
		</Container>
	)
}

export default App
