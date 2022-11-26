import { Header } from "../../components/header";
import { Form } from "./components/checkoutForm";
import { Conteiner } from "./style";

export function Checkout () {

	return (
		<>
			<Header />
			<Conteiner>
				<Form />
			</Conteiner>
		</>
	);
}