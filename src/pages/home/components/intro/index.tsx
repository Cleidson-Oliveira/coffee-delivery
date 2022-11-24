import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { useTheme } from "styled-components";

import Image from "../../../../assets/coffee-delivery-hero-image.png";
import { Card, Conteiner, TextContent } from "./style";

export function Intro () {

	const { colors } = useTheme();

	return (
		<Conteiner>
			<TextContent>
				<div>
					<h1>Encontre o café perfeito para qualquer hora do dia</h1>
					<p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
				</div>
				<div>
					<Card color={colors.yellow.dark}>
						<div><ShoppingCart size={16} color="white"/></div>
						<p>Compra simples e segura</p>
					</Card>
					<Card color={colors.base.text}>
						<div><Package size={16} color="white"/></div>
						<p>Embalagem mantém o café intacto</p>
					</Card>
					<Card color={colors.yellow.mid}>
						<div><Timer size={16} color="white"/></div>
						<p>Entrega rápida e rastreada</p>
					</Card>
					<Card color={colors.purple.mid}>
						<div><Coffee size={16} color="white"/></div>
						<p>O café chega fresquinho até você</p>
					</Card>
				</div>
			</TextContent>
			<img src={Image} />
		</Conteiner>
	);
}