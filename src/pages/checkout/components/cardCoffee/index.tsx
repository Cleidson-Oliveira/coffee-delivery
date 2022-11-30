import { Conteiner, Content, Price } from "./style";

import coffee from "@/assets/expresso.svg";
import { InputNumber } from "@/components/inputNumber";
import { Trash } from "phosphor-react";
import { useTheme } from "styled-components";
import { IProduct } from "@/contexts/cart";

type CardCoffeeProps = IProduct

export function CardCoffee (props: CardCoffeeProps) {

	const { colors } = useTheme();

	return (
		<Conteiner>
			<div>
				<img src={coffee}/>
			</div>
			<Content>
				<span> {props.productName} </span>
				<InputNumber />
				<button>
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