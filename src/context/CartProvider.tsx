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
	removeCart: (game: ICartGames) => void;
}

export const GameContext = createContext<IGameContext | null>(null);
export default function cartProvider({ children }: GameProviderProps) {
	const { games, cartList, addCart, removeCart } = useGame();
	return (
		<GameContext.Provider value={{ games, cartList, addCart, removeCart }}>
			{children}
		</GameContext.Provider>
	);
}
