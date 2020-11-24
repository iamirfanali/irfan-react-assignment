import { products } from '../../data/products';

const initialState = {
	products,
};

const ProductsReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_PRODUCT':
			return {
				...state,
				products: [...state.products, action.payload],
			};

		default:
			return state;
	}
};

export default ProductsReducer;
