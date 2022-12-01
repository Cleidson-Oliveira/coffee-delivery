import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { InputNumber } from "@/components/inputNumber";
import { ButtonIcon } from "@/components/buttonWithIcon";
import { CartContext, IProduct } from "@/contexts/cart";
import { CardFooter, CoffeeDesc, CoffeeImage, CoffeeName, Conteiner, Tag } from "./style";

type CoffeeCardProps = Omit<IProduct, "productAmount">;

export function CoffeeCard (props: CoffeeCardProps) {

	const { addProductInCart } = useContext(CartContext);

	const [ productAmount, setProductAmount ] = useState(0);

	const handleAddProductInCart = () => {

		if ( productAmount <= 0) {
			return toast.error("Você deve adicionar ao menos um produto ao carrinho!");
		}

		addProductInCart({
			...props,
			productAmount
		});

		toast.success(`${props.productName} adicionado ao carrinho`);
	};

	return (
		<Conteiner>
			<CoffeeImage src={props.productImage} />
			<div>
				{props.productTags.map(tag => (
					<Tag key={tag}>{tag}</Tag>
				))}
			</div>
			<CoffeeName>{props.productName}</CoffeeName>
			<CoffeeDesc>{props.productDescription}</CoffeeDesc>
			<CardFooter>
				<p>R$ <span>{(props.productPrice / 100).toFixed(2).replace(".", ",")}</span></p>
				<InputNumber value={productAmount} modifier={setProductAmount}/>
				<ButtonIcon onClick={handleAddProductInCart}/>
			</CardFooter>
		</Conteiner>
	);
}