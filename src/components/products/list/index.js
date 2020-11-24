import React from 'react';
import { Flex } from 'rebass';
import { useSelector } from 'react-redux';
import Header from './header';
import { useTableHoc } from './table-hoc';
import UpsertModal from '../upsert';
import ProductsTable from './table';

const ProductsList = () => {
	const tableHoc = useTableHoc();
	const products = useSelector((state) => state.products);

	return (
		<Flex width='100%' justifyContent='center'>
			<Flex width={920} flexDirection='column' my={80}>
				<Header onEditModal={tableHoc.handleEditModal} />
				<ProductsTable products={products} />
				<UpsertModal isModalOpen={tableHoc.isModalOpen} handleModalClose={tableHoc.handleModalClose} />
			</Flex>
		</Flex>
	);
};

export default ProductsList;
