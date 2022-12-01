import { Link } from "react-router-dom";
import { Conteiner } from "./style";

export function CartEmpyt () {

	return (
		<Conteiner>
			<h1>Carrinho vazio</h1>
			<p>Que tal adicionar itens no carrinho?</p>
			<Link to={"/"}>Adicionar itens</Link>
		</Conteiner>
	);
}