import "../css/cart.css";
import CartList from "./CartList";
import "../css/cart.css";
import { useContext, useEffect, useRef, useState } from "react";
import { GameContext } from "../context/CartProvider";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
export default function Cart() {
	const cartRef = useRef<HTMLDivElement>(null!);
	const cart = useContext(GameContext);
	const [showCart, setShowCart] = useState<boolean>(false);
	const [quantity, setQuantity] = useState<number>(0);

	useEffect(() => {
		if (cart?.cartList.length) setShowCart(true);
		bubbleCart();
	}, [cart?.cartList]);

	const viewCart = () => {
		if (cartRef.current.style.display === "block") return hideCart();
		cartRef.current.style.display = "block";
	};
	const hideCart = () => (cartRef.current.style.display = "none");

	const bubbleCart = () => {
		const value = cart?.cartList.reduce((acc, el) => acc + el.quantity, 0);
		setQuantity(value || 0);
	};

	return (
		<>
			<div className="cart">
				{showCart && quantity > 0 ? (
					<>
				
							<p className="count">{quantity > 9 ? "9+" : quantity}</p>
							<AddShoppingCartIcon onClick={viewCart} className="viewCart cartIcon"/>
						

						<div
							className="bodyCardList"
							onMouseLeave={hideCart}
							ref={cartRef}
						>
							<CartList />
						</div>
					</>
				) : (
					""
				)}
			</div>
		</>
	);
}
