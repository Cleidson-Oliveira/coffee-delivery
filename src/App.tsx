import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyle } from "./style";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./routes";

function App() {

	return (
		<ThemeProvider theme={theme}>
			<Router>
				<AppRoutes />
			</Router>
			<GlobalStyle />
		</ThemeProvider>
	);
}

export default App;
