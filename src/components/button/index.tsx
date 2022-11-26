import { ButtonHTMLAttributes } from "react";
import { Conteiner } from "./style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string
}

export function Button ({ title, ...rest }: ButtonProps) {

	return (
		<Conteiner {...rest}>
			{title}
		</Conteiner>
	);
}