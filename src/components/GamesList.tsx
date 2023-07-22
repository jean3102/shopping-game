import { useContext } from "react";
import { GameContext } from "../context/CartProvider";
import "../css/gamesList.css";
const imagePath = `${window.location}src/assets`;

export default function GamesList() {
	const games = useContext(GameContext);
	return (
		<section className="listProducts">
			<ul>
				{games?.games.map((game) => (
					<li key={game.id}>
						<img
							src={`${imagePath}/${game.img}.jpg`}
							alt="resident evil"
						/>
						<h4>{game.name}</h4>
						<p>From {game.lastPrice > 0 ? <s>${game.lastPrice}</s> : ""}</p>
						<p>
							<span> Price: ${game.currentPrices}</span>
							{game.stock === 0 ? (
								<span style={{ color: "red" }}> Stock: {game.stock}</span>
							) : (
								<span> Stock: {game.stock}</span>
							)}
						</p>
						<section>
							<button
								className="addCard"
								onClick={() => games.addCart(game)}
							>
								Add to cart
							</button>
						</section>
					</li>
				))}
			</ul>
		</section>
	);
}
