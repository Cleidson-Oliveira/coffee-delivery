import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyle } from "./style";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./routes";
import { CartProvider } from "./contexts/cart";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {

	return (
		<ThemeProvider theme={theme}>
			<ToastContainer
				position="top-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>				
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
