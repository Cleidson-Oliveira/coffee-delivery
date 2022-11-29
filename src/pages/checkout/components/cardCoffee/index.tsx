import { Conteiner, Content, Price } from "./style";

import coffee from "@/assets/expresso.svg";
import { InputNumber } from "@/components/inputNumber";
import { Trash } from "phosphor-react";
import { useTheme } from "styled-components";

interface CardCoffeeProps {
    name: string,
    image?: string,
    price: number,
}

export function CardCoffee ({ name, price }: CardCoffeeProps) {

	const { colors } = useTheme();

	return (
		<Conteiner>
			<div>
				<img src={coffee}/>
			</div>
			<Content>
				<span> {name} </span>
				<InputNumber />
				<button>
					<Trash size={16} color={colors.purple.mid}/>
					Remover
				</button>
			</Content>
			<Price>
				R$ {(price / 100).toFixed(2)}
			</Price>
		</Conteiner>
	);
}