import { ShoppingCart } from "phosphor-react";
import { ButtonHTMLAttributes } from "react";
import { Conteiner } from "./style";

type TButton = ButtonHTMLAttributes<HTMLButtonElement>

export function ButtonIcon (props: TButton) {

	return (
		<Conteiner { ...props}>
			<ShoppingCart size={22} color="white" weight="fill" />
		</Conteiner>
	);
}