import { useContext } from "react";
import { useTheme } from "styled-components";
import { toast } from "react-toastify";
import { Trash } from "phosphor-react";
import { InputNumber } from "@/components/inputNumber";
import { CartContext, IProduct } from "@/contexts/cart";
import { Conteiner, Content, Price } from "./style";

type CardCoffeeProps = IProduct;

export function CardCoffee (props: CardCoffeeProps) {

	const { colors } = useTheme();

	const { handleProductAmount, removeProductFromCart } = useContext(CartContext);

	const changeProductsAmount = (value: number) => {
		handleProductAmount(props.productId, value);
	};

	const removeFromCart = () => {
		removeProductFromCart(props.productId);
		toast.success("Item removido do carrinho!");
	};

	return (
		<Conteiner>
			<div>
				<img src={props.productImage}/>
			</div>
			<Content>
				<span> {props.productName} </span>
				<InputNumber value={props.productAmount} modifier={changeProductsAmount}/>
				<button onClick={removeFromCart}>
					<Trash size={16} color={colors.purple.mid}/>
					Remover
				</button>
			</Content>
			<Price>
				R$ {(props.productPrice / 100).toFixed(2).replace(".", ",")}
			</Price>
		</Conteiner>
	);
}