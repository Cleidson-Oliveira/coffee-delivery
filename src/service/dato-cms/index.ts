import { IProduct } from "@/contexts/cart";

const API_URL = "https://graphql.datocms.com/";
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

type TTag = { tagName: string };
  
export interface ProductsInfos {
    productDescription: string,
    productName: string,
    id: string,
    productImage: { url: string },
    productPrice: number,
    productTags: TTag[]
}

export interface ICoffeeData {
    allProductsInfos: ProductsInfos[]
}

type Iproducts = Omit<IProduct, "productAmount">;

async function fetchCmsAPI(query: string) {
	const res = await fetch(API_URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${API_TOKEN}`,
		},
		body: JSON.stringify({
			query,
		}),
	});

	const json = await res.json();
	if (json.errors) {
		throw new Error("Failed to fetch API");
	}

	return json.data;
}

export async function getProductsInfo () {
	const data: ICoffeeData = await fetchCmsAPI(`
        {
            allProductsInfos {
                id
                productDescription
                productImage { url }
                productName
                productPrice
                productTags { tagName }
            }
        }
    `);

	const products = data.allProductsInfos.map<Iproducts>(product => ({
		productDescription: product.productDescription,
		productId: product.id,
		productImage: product.productImage.url,
		productName: product.productName,
		productPrice: product.productPrice,
		productTags: product.productTags.map(tag => tag.tagName)
	}));

	return products;
}
