import { useState } from "react";
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
    addProductInCart(product: IProduct): void,
	cart: IProduct[],
	totalPrice: number
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

	const cartProductsAmount = cart.length;
	const totalPrice = cart.reduce((acc, cur) => {
		return acc + cur.productPrice;
	}, 0);

	return (
		<CartContext.Provider value={{cartProductsAmount, addProductInCart, cart, totalPrice}}>
			{children}
		</CartContext.Provider>
	);
}