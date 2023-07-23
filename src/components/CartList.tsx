const imagePath = `${window.location}assets/`;
import { useContext } from "react";
import { GameContext } from "../context/CartProvider";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import "../css/cartList.css";
import Swal from "sweetalert2";
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
										<DeleteForeverIcon
											color="error"
											onClick={() => cart.removeCart(item)}
										/>
										<p>{item.quantity}</p>
										<AddCircleIcon
											color="success"
											onClick={() => cart.addCart(item)}
										/>
									</div>
								</section>
							</li>
						) : (
							""
						)
					)}
				</ul>
				<section>
					<button
						onClick={() => {
							Swal.fire("Purchased!", "Thanks for shopping with us", "success");
							cart?.purchase();
						}}
					>
						Purchase
					</button>
					<button
						onClick={() => {
							Swal.fire({
								title: "Are you sure?",
								text: "You won't be able to revert this!",
								icon: "warning",
								showCancelButton: true,
								confirmButtonColor: "#3085d6",
								cancelButtonColor: "#d33",
								confirmButtonText: "Yes, clear!",
							}).then((result) => {
								if (result.isConfirmed) {
									cart?.clearCart();
									Swal.fire(
										"Deleted!",
										"Your file has been deleted.",
										"success"
									);
								}
							});
						}}
					>
						Clear Cart
					</button>
				</section>
			</div>
		</>
	);
}
