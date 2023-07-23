import React, { createContext } from "react";
import useGame from "../hooks/useGame";
import { ICartGames, IGames } from "../interfaces/games";

interface GameProviderProps {
	children: React.ReactNode;
}

interface IGameContext {
	games: IGames[];
	cartList: ICartGames[];
	addCart: (game: IGames) => void;
	purchase: () => void;
	removeCart: (game: ICartGames) => void;
	clearCart: () => void;
}

export const GameContext = createContext<IGameContext | null>(null);
export default function cartProvider({ children }: GameProviderProps) {
	const { games, cartList, addCart, removeCart, clearCart, purchase } =
		useGame();
	return (
		<GameContext.Provider
			value={{ games, cartList, addCart, removeCart, clearCart, purchase }}
		>
			{children}
		</GameContext.Provider>
	);
}
