import { useEffect, useState } from "react";
import { createContext, ReactNode } from "react";

export interface IProduct {
    productId: string,
    productName: string,
    productDescription: string,
    productTags: string[],
    productAmount: number,
    productPrice: number,
    productImage: string
}

interface CartProviderProps {
    children: ReactNode
}

interface Provider {
    cartProductsAmount: number,
	totalPrice: number,
	cart: IProduct[],
    addProductInCart(product: IProduct): void,
	handleProductAmount(id: string, value: number): void,
	removeProductFromCart(id: string): void,
	clearCart(): void
}

export const CartContext = createContext({} as Provider);

export function CartProvider ({children}: CartProviderProps) {

	const [ cart, setCart ] = useState<IProduct[]>([]);

	const addProductInCart = (product: IProduct) => {
		const productAlreadyExistsOnCart = cart.some(value => value.productId === product.productId);
		if (productAlreadyExistsOnCart) {
			return setCart(prevState => {
				return prevState.map(item => item.productId === product.productId ? product : item);
			});
		}
		setCart(prevState => ([...prevState, product]));
	};

	const removeProductFromCart = (id: string) => {
		if (cart.length == 1) {
			localStorage.setItem("@coffee-delivery:cart", JSON.stringify([]));
		}

		setCart(prevState => prevState.filter(product => product.productId !== id));
	};

	const handleProductAmount = (id: string, value: number) => {
		if (value < 0) return;

		setCart(prevstate => {
			return prevstate.map(product => {
				return product.productId === id ? {...product, productAmount: value} : product;
			});
		});
	};

	const clearCart = () => {
		setCart([]);
		localStorage.setItem("@coffee-delivery:cart", JSON.stringify([]));
	};

	const saveCartInStorage = () => {
		localStorage.setItem("@coffee-delivery:cart", JSON.stringify(cart));
	};

	const cartProductsAmount = cart.length;
	const totalPrice = cart.reduce((acc, cur) => {
		return acc + (cur.productPrice * cur.productAmount);
	}, 0);

	useEffect(() => {
		if (cart.length == 0) return;

		saveCartInStorage();
	}, [cart]);
	
	useEffect(() => {
		const previousCartStorage = localStorage.getItem("@coffee-delivery:cart");
		if (!previousCartStorage) return;

		setCart(JSON.parse(previousCartStorage));
	}, []);

	return (
		<CartContext.Provider value={{
			addProductInCart,
			cart,
			cartProductsAmount,
			handleProductAmount,
			removeProductFromCart,
			totalPrice,
			clearCart,
		}}>
			{children}
		</CartContext.Provider>
	);
}