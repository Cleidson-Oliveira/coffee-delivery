import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AddressFormConteiner, Conteiner, PaymentFormConteiner, PurshaseResume, SelectedProducts, Title } from "./style";
import { Header } from "../header";
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { useTheme } from "styled-components";
import { Button } from "@/components/button";
import { CardCoffee } from "../cardCoffee";

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

type FormType = z.infer<typeof validationScheema>;

export function Form () {

	const { colors } = useTheme();

	const { register, handleSubmit } = useForm<FormType>({
		resolver: zodResolver(validationScheema)
	});

	const submitCoffeeData = (data: FormType) => {
		console.log(data);
	};

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
					<input placeholder="Complemento" {...register("complement")} />
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
					<CardCoffee name="Tradicional" price={990}/>
					<CardCoffee name="Tradicional" price={990}/>
					<CardCoffee name="Tradicional" price={990}/>
					<PurshaseResume>
						<div>
							<span>Total de itens</span>
							<span>R$ 29,90</span>
						</div>
						<div>
							<span>Entrega</span>
							<span>R$ 5,00</span>
						</div>
						<div>
							<span>Total</span>
							<span>R$ 34,90</span>
						</div>

					</PurshaseResume>
					<Button type="submit" title="Confirmar pedido" />
				</SelectedProducts>
			</div>
		</Conteiner>
	);
}