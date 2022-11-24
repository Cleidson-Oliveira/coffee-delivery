import { Header } from "../../components/header";
import { Intro } from "./components/intro";
import { Products } from "./components/products";

export function Home () {

	return (
		<>
			<Header />
			<Intro />
			<Products />
		</>
	);
}