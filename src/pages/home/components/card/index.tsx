import { CardFooter, CoffeeDesc, CoffeeImage, CoffeeName, Conteiner, Tag } from "./style";

import expresso from "../../../../assets/expresso.svg";
import { InputNumber } from "../../../../components/inputNumber";
import { ButtonIcon } from "../../../../components/buttonWithIcon";

export function CoffeeCard () {

	return (
		<Conteiner>
			<CoffeeImage src={expresso}/>
			<Tag>Tradicional</Tag>
			<CoffeeName>Expresso Tradicional</CoffeeName>
			<CoffeeDesc>O tradicional café feito com água quente e grãos moídos</CoffeeDesc>
			<CardFooter>
				<p>R$ <span>9.90</span></p>
				<InputNumber />
				<ButtonIcon />
			</CardFooter>
		</Conteiner>
	);
}