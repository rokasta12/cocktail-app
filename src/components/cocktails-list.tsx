"use client";
import { services } from "@/common/services";
import { Cocktail } from "@/types/cocktail.type";
import { StarIcon } from "@heroicons/react/20/solid";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import ReactMarkdown from "react-markdown";

function CocktailList() {
	const query = useQuery({
		queryFn: services.cocktail.getCocktails,
		queryKey: ["cocktails"],
	});

	return (
		<div>
			<div>{query.isLoading && <>Loading</>}</div>
			<div className="-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
				{query.isSuccess &&
					query.data.data.data.map((cocktail) => {
						return (
							<CocktailCard
								key={cocktail.id}
								cocktail={cocktail}
							/>
						);
					})}
			</div>
		</div>
	);
}

type Props = {
	cocktail: Cocktail;
};
const CocktailCard = (props: Props) => {
	const { cocktail } = props;

	return (
		<div
			key={cocktail.id}
			className="group relative border-b border-r border-gray-200 p-4 sm:p-6"
		>
			<div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
				<img
					src={cocktail.attributes.hero_image.data.attributes.url}
					alt={cocktail.attributes.name}
					className="h-full w-full object-cover object-center"
				/>
			</div>
			<div className="pb-4 pt-10 text-left">
				<p className="mt-4 text-lg font-semibold text-gray-900">
					{cocktail.attributes.name}
				</p>
				<p className="mt-4 text-base font-medium text-gray-900">
					{cocktail.attributes.description}
				</p>
			</div>
			<div>
				<ReactMarkdown>{cocktail.attributes.recipe}</ReactMarkdown>
			</div>
		</div>
	);
};

export default CocktailList;
