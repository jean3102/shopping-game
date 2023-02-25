import GamesList from "./components/GamesList";
import NavBar from "./components/NavBar";
import CartProvider from "./context/CartProvider";
function App() {
	return (
		<>
			<CartProvider>
				<NavBar />
				<GamesList />
			</CartProvider>
		</>
	);
}

export default App;
