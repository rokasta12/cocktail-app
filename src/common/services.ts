import { GetCocktailResponse } from "@/types/cocktail.type";
import axiosClient from "./http";

const cocktail = {
	getCocktails: async () => {
		return await axiosClient.get<GetCocktailResponse>(
			`/cocktails?populate=*`
		);
	},
};

export const services = {
	cocktail,
};
