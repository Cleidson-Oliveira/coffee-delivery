import { Conteiner } from "./style";

import coffee from "../../../../assets/expresso.svg";
import { InputNumber } from "../../../../components/inputNumber";

interface CardCoffeeProps {
    name: string,
    image?: string,
    price: number,
}

export function CardCoffee ({ name, price }: CardCoffeeProps) {

	return (
		<Conteiner>
			<div>
				<img src={coffee}/>
			</div>
			<div>
				{name}
				<InputNumber />
				<button>remover</button>
			</div>
			<div>{price}</div>
		</Conteiner>
	);
}