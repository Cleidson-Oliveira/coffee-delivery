import { Minus, Plus } from "phosphor-react";
import { useTheme } from "styled-components";
import { Conteiner } from "./style";

export function InputNumber () {

	const { colors } = useTheme();

	return (
		<Conteiner>
			<button>
				<Minus weight="bold" color={colors.purple.dark} size={14} />
			</button>
			<input type="text" defaultValue={0} />
			<button>
				<Plus weight="bold" color={colors.purple.dark} size={14} />
			</button>
		</Conteiner>
	);
}