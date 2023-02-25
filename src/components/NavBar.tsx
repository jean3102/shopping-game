import "../css/navBar.css";
import Cart from "./Cart";
export default function NavBar() {
	return (
		<header className="header">
			<nav>
				<ul>
					<li>
						<span>Game Store</span>
					</li>
					<li>
						<Cart />
					</li>
				</ul>
			</nav>
		</header>
	);
}
