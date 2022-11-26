import { ReactNode } from "react";
import { Conteiner } from "./style";

interface HeaderProps {
    title: string,
    subtitle: string,
    children: ReactNode
}

export function Header ({title, subtitle, children}: HeaderProps) {

	return (
		<Conteiner>
			<div>{children}</div>
			<div>
				<span>{title}</span>
				<span>{subtitle}</span>
			</div>
		</Conteiner>
	);
}