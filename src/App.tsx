import { ThemeProvider } from "styled-components";
import { Home } from "./pages/home";
import { theme } from "./theme";
import { GlobalStyle } from "./style";

function App() {

	return (
		<ThemeProvider theme={theme}>
			<Home />
			<GlobalStyle />
		</ThemeProvider>
	);
}

export default App;
