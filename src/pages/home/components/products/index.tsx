import { CoffeeCard } from "../card";
import { CardsContent, Conteiner, Title } from "./style";

import coffees from "@/utils/productList.json";

export function Products () {

	return (
		<Conteiner>
			<Title>Nossos cafés</Title>
			<CardsContent>
				{coffees.map(product => (
					<CoffeeCard {...product} key={product.productId}/>
				))}
			</CardsContent>
		</Conteiner>
	);
}

