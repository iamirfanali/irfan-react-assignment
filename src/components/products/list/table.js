import React from 'react';
import moment from 'moment';
import { Flex } from 'rebass';
import PropTypes from 'prop-types';
import { Table } from '../../../shared/table';

const ProductsTable = ({ products }) => {
	return (
		<Flex my={20}>
			<Table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Description</th>
						<th>Price</th>
						<th>Inventory Date</th>
					</tr>
				</thead>
				<tbody>
					{products.map((product, index) => {
						return (
							<tr key={index}>
								<td>{product.name}</td>
								<td>{product.description}</td>
								<td>$ {product.price}</td>
								<td>{moment(product.date).format('MM-DD-YYYY')}</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
		</Flex>
	);
};

ProductsTable.propTypes = {
	products: PropTypes.array.isRequired,
};

export default ProductsTable;
