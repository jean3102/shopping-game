export interface IGames {
	id: number;
	img: string;
	name: string;
	lastPrice: number;
	currentPrices: number;
	stock: number;
};

export interface ICartGames {
	id: number;
	img: string;
	name: string;
	lastPrice: number;
	currentPrices: number;
	stock: number;
    quantity: number
};
