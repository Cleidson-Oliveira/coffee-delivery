import { Minus, Plus } from "phosphor-react";
import { useTheme } from "styled-components";
import { Conteiner } from "./style";

interface InputNumberProps {
	value: number,
	modifier(value: number): void
}

export function InputNumber ({value, modifier}: InputNumberProps) {

	const { colors } = useTheme();

	const increment = () => {
		modifier(value + 1);
	};
	
	const decrement = () => {
		const newValue = value - 1;
		if (newValue < 0 ) return;

		modifier(newValue);
	};

	return (
		<Conteiner>
			<button onClick={decrement}>
				<Minus weight="bold" color={colors.purple.dark} size={14} />
			</button>
			<input type="text" value={value} onChange={(e) => modifier(+e.target.value)}/>
			<button onClick={increment}>
				<Plus weight="bold" color={colors.purple.dark} size={14} />
			</button>
		</Conteiner>
	);
}