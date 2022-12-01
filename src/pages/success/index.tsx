import { Header } from "@/components/header";
import { Conteiner, DeliveryInfo, DeliveryInfoConteiner } from "./style";

import imageDeliveryIllustration from "@/assets/delivery-illustration.svg";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useEffect, useState } from "react";

import type { FormType as IAddress } from "../checkout/components/checkoutForm";
import type { IProduct } from "@/contexts/cart";

interface IOrder {
	addressData: IAddress
	products: IProduct
}

export function Success () {

	const [ deliveryData, setDeliveryData ] = useState<IAddress | null>(null);

	useEffect(() => {
		const lastOrderStoraged = localStorage.getItem("@coffee-delivery:last-order");

		if (!lastOrderStoraged) return;
		const lastOrder = JSON.parse(lastOrderStoraged) as IOrder;

		setDeliveryData(lastOrder.addressData);

	}, []);

	useEffect(() => {
		console.log(deliveryData);

	}, [deliveryData]);

	return (
		<>
			<Header />
			{ deliveryData && <Conteiner>
				<h1>Uhu! Pedido confirmado</h1>
				<p>Agora é só aguardar que logo o café chegará até você</p>
				<div>
					<DeliveryInfoConteiner>
						<div>
							<DeliveryInfo>
								<MapPin size={16} color={"white"} weight="fill" />
								<p>
									Entrega em 
									<b> {deliveryData.street}, {deliveryData.number}</b><br/> 
									{deliveryData.district} - {deliveryData.city}, {deliveryData.uf}
								</p>
							</DeliveryInfo>
							<DeliveryInfo>
								<Timer size={16} color={"white"} weight="fill" />
								<p>Previsão de entrega<br /> <b>20 min - 30 min</b> </p>
							</DeliveryInfo>
							<DeliveryInfo>
								<CurrencyDollar size={16} color={"white"} />
								<p>Pagamento na entrega <br /> 
									{deliveryData.paymentForm === "creditcard" && <b>Cartão de Crédito</b>}
									{deliveryData.paymentForm === "debitcard" && <b>Cartão de Débito</b>}
									{deliveryData.paymentForm === "money" && <b>Dinheiro</b>}
								</p>
							</DeliveryInfo>
						</div>
					</DeliveryInfoConteiner>
					<img src={imageDeliveryIllustration} />
				</div>
			</Conteiner>}
		</>
	);
}