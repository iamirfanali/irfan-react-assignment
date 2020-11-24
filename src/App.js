import React from 'react';
import ProductsList from './components/products/list';
import { GlobalStyle } from './shared/styles/global';

const App = () => {
	return (
		<>
			<GlobalStyle />
			<ProductsList />
		</>
	);
};

export default App;
