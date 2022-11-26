import { Actions, ButtonCart, Conteiner, Content, Logo } from "./style";
import logo from "../../assets/logo.svg";
import { ShoppingCart } from "phosphor-react";
import { useTheme } from "styled-components";

export function Header () {

	const { colors } = useTheme();

	return (
		<Conteiner>
			<Content>
				<Logo src={logo}/>
				<Actions>
					<ButtonCart productsAmount={3} to={"/checkout"}>
						<ShoppingCart size={20} weight="fill" color={colors.yellow.dark}/>
					</ButtonCart>
				</Actions>
			</Content>
		</Conteiner>
	);
}