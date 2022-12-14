import { Actions, ButtonCart, Conteiner, Content, Logo } from "./style";
import logo from "../../assets/logo.svg";
import { ShoppingCart } from "phosphor-react";
import { useTheme } from "styled-components";
import { useContext } from "react";
import { CartContext } from "@/contexts/cart";
import { Link } from "react-router-dom";

export function Header () {

	const { cartProductsAmount } = useContext(CartContext);
	const { colors } = useTheme();

	return (
		<Conteiner>
			<Content>
				<Link to={"/"}>
					<Logo src={logo}/>
				</Link>
				<Actions>
					<ButtonCart productsamount={cartProductsAmount} to={"/checkout"}>
						<ShoppingCart size={20} weight="fill" color={colors.yellow.dark}/>
					</ButtonCart>
				</Actions>
			</Content>
		</Conteiner>
	);
}