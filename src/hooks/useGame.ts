import { ICartGames } from "./../interfaces/games";
import { IGames } from "../interfaces/games";
import { useState, useEffect } from "react";
import { callGames } from "../services/callGames";
import useAlert from "./useAlert";

export default function useGame() {
	const [games, setGames] = useState<IGames[]>([]);
	const [cartList, setCartList] = useState<ICartGames[]>([]);
	const { warning } = useAlert();

	useEffect(() => {
		setGames(callGames());
	}, []);

	const addCart = (game: IGames) => {
		if (validationStock(game.stock)) return warning(game.name," Without Stock");
		removeGameList(game.id);

		if (cartList.some((item) => item.id === game.id)) {
			const newGames = cartList.map((item) =>
				item.id === game.id
					? { ...item, stock: item.stock - 1, quantity: item.quantity + 1 }
					: item
			);
			setCartList(newGames);
		} else {
			setCartList([
				...cartList,
				{ ...game, stock: game.stock - 1, quantity: 1 },
			]);
		}
	};

	const removeCart = (game: ICartGames) => {
		const newCartList = cartList.map((item) =>
			item.id === game.id
				? { ...item, quantity: item.quantity - 1, stock: item.stock + 1 }
				: item
		);

		const newGames = games.map((item) =>
			item.id === game.id ? { ...item, stock: item.stock + 1 } : item
		);
		setCartList(newCartList);
		setGames(newGames);
	};

	const clearCart = () => {
		console.log('list',cartList)
	}

	const validationStock = (stock: number) => {
		return stock <= 0;
	};

	const removeGameList = (id: number) => {
		const newGames = games.map((item) =>
			item.id === id ? { ...item, stock: item.stock - 1 } : item
		);
		setGames(newGames);
	};
	return { games, cartList, addCart, removeCart,clearCart };
}
