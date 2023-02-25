const imagePath = `${window.location}src/assets/`;
import { useContext } from "react";
import { GameContext } from "../context/CartProvider";
import "../css/cartList.css";
export default function CartList() {
	const cart = useContext(GameContext);
	return (
		<>
			<div className="cartList">
				<ul>
					{cart?.cartList.map((item) =>
						item.quantity > 0 ? (
							<li key={item.id}>
								<section>
									<img
										src={`${imagePath}${item.img}.jpg`}
										alt={item.name}
									/>
									<p>{item.name}</p>
									<div>
										<span
											onClick={() => cart.removeCart(item)}
											className="material-symbols-outlined"
										>
											remove
										</span>
										<p>{item.quantity}</p>
										<span
											onClick={() => cart.addCart(item)}
											className="material-symbols-outlined"
										>
											add
										</span>
									</div>
								</section>
							</li>
						) : (
							""
						)
					)}
				</ul>
				<section>
					<button>Finish Order</button>
					<button>Clear Cart</button>
				</section>
			</div>
		</>
	);
}
