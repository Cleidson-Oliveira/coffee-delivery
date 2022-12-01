import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTheme } from "styled-components";
import { toast } from "react-toastify";
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { Button } from "@/components/button";
import { CartContext } from "@/contexts/cart";
import { Header } from "../header";
import { CardCoffee } from "../cardCoffee";
import { CartEmpyt } from "../cartEmpyt";
import { AddressFormConteiner, Conteiner, PaymentFormConteiner, PurshaseResume, SelectedProducts, Title } from "./style";

const validationScheema = z.object({
	cep: z.string().min(1),
	street: z.string().min(1),
	number: z.number(),
	complement: z.string().optional(),
	district: z.string().min(1), 
	city: z.string().min(1),
	uf: z.string().min(2),
	paymentForm: z.string(),
});

export type FormType = z.infer<typeof validationScheema>;

export function Form () {

	const { colors } = useTheme();
	const { cart, totalPrice, clearCart } = useContext(CartContext);
	const navigate = useNavigate();

	const { register, handleSubmit, formState: {errors} } = useForm<FormType>({
		resolver: zodResolver(validationScheema)
	});

	const submitCoffeeData = (data: FormType) => {
		console.log({addressData: data, products: cart});

		localStorage.setItem("@coffee-delivery:last-order", JSON.stringify({addressData: data, products: cart}));
		clearCart();
		navigate("/success");
	};

	useEffect(() => {
		if (Object.keys(errors).length === 0) return;

		toast.error("Todos os campos obrigatórios devem ser preenchidos!");
		
	}, [errors]);

	return (
		<Conteiner onSubmit={handleSubmit(submitCoffeeData)}>
			<div>
				<Title>Complete seu pedido</Title>
				<AddressFormConteiner>
					<Header
						title="Endereço de Entrega"
						subtitle="Informe o endereço onde deseja receber seu pedido"
					>
						<MapPinLine size={22} color={colors.yellow.dark}/>
					</Header>
					<input placeholder="CEP" {...register("cep")} />
					<input placeholder="Rua" {...register("street")} />
					<input placeholder="Número" type="number" {...register("number", {valueAsNumber:true})} />
					<input placeholder="Complemento Opcional"  {...register("complement")} />
					<input placeholder="Bairro" {...register("district")} />
					<input placeholder="Cidade" {...register("city")} />
					<input placeholder="UF" {...register("uf")} />
				</AddressFormConteiner>
				<PaymentFormConteiner>
					<Header
						title="Pagamento"
						subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar."
					>
						<CurrencyDollar size={22} color={colors.purple.dark}/>
					</Header>
					<div>
						<label>
							<input {...register("paymentForm")} type="radio" value="creditcard"  />
							<CreditCard size={22} color={colors.purple.dark} />
							Cartão de crédito
						</label>
						<label>
							<input {...register("paymentForm")} type="radio" value="debitcard"  />
							<Bank size={22} color={colors.purple.dark} />
							Cartão de débito
						</label>
						<label>
							<input {...register("paymentForm")} type="radio" value="money"  />
							<Money size={22} color={colors.purple.dark} />
							Dinheiro
						</label>
					</div>
				</PaymentFormConteiner>
			</div>
			<div>
				<Title>Cafés selecionados</Title>
				<SelectedProducts>
					{ cart.length == 0 
						? <CartEmpyt /> 
						: <>
							{ cart.map(product => (
								<CardCoffee 
									key={product.productId}
									{...product}
								/>
							))}
							
							<PurshaseResume>
								<div>
									<span>Total de itens</span>
									<span>R$ {(totalPrice / 100).toFixed(2).replace(".", ",")}</span>
								</div>
								<div>
									<span>Entrega</span>
									<span>R$ 5,00</span>
								</div>
								<div>
									<span>Total</span>
									<span>R$ {((totalPrice + 500) / 100).toFixed(2).replace(".", ",")}</span>
								</div>

							</PurshaseResume>
							<Button type="submit" title="Confirmar pedido" />
						</>
					}
				</SelectedProducts>
			</div>
		</Conteiner>
	);
}