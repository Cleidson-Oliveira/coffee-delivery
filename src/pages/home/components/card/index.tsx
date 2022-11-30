import { CardFooter, CoffeeDesc, CoffeeImage, CoffeeName, Conteiner, Tag } from "./style";

import expresso from "@/assets/expresso.svg";
import { InputNumber } from "@/components/inputNumber";
import { ButtonIcon } from "@/components/buttonWithIcon";
import { CartContext, IProduct } from "@/contexts/cart";
import { useContext } from "react";

type CoffeeCardProps = Omit<IProduct, "productAmount">;

export function CoffeeCard (props: CoffeeCardProps) {

	const { addProductInCart } = useContext(CartContext);

	const handleAddProductInCart = () => {
		addProductInCart({
			...props,
			productAmount: 1
		});
	};

	return (
		<Conteiner>
			<CoffeeImage src={expresso}/>
			{props.productTags.map(tag => (
				<Tag key={tag}>{tag}</Tag>
			))}
			<CoffeeName>{props.productName}</CoffeeName>
			<CoffeeDesc>{props.productDescription}</CoffeeDesc>
			<CardFooter>
				<p>R$ <span>{(props.productPrice / 100).toFixed(2).replace(".", ",")}</span></p>
				<InputNumber />
				<ButtonIcon onClick={handleAddProductInCart}/>
			</CardFooter>
		</Conteiner>
	);
}