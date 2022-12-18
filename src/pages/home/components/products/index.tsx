import { useEffect, useState } from "react";
import { getProductsInfo } from "@/service/dato-cms";
import { IProduct } from "@/contexts/cart";
import { CoffeeCard } from "../card";
import { CardsContent, Conteiner, Title } from "./style";

type Iproducts = Omit<IProduct, "productAmount">;

export function Products () {

	const [ allProducts, setAllProducts ] = useState<Iproducts[]>([]);

	useEffect(() => {
		getProductsInfo()
			.then(products => setAllProducts(products));
	}, []);

	return (
		<Conteiner>
			<Title>Nossos cafés</Title>
			<CardsContent>
				{allProducts.map(product => (
					<CoffeeCard {...product} key={product.productId}/>
				))}
			</CardsContent>
		</Conteiner>
	);
}

