import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyle } from "./style";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./routes";
import { CartProvider } from "./contexts/cart";

function App() {

	return (
		<ThemeProvider theme={theme}>
			<CartProvider>
				<Router>
					<AppRoutes />
				</Router>
			</CartProvider>
			<GlobalStyle />
		</ThemeProvider>
	);
}

export default App;
