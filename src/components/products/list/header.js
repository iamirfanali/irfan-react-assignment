import React from 'react';
import { Flex } from 'rebass';
import PropTypes from 'prop-types';
import { globals } from '../../../shared/styles/settings';
import { Button } from '../../../shared/button';
import { Input } from '../../../shared/input';

const Header = ({ onEditModal }) => {
	return (
		<Flex flexDirection='column' px={[globals.spaceSmaller, globals.spaceSmaller, 0]}>
			<Flex justifyContent='space-between' alignItems='center' mb={globals.space}>
				<Flex width={3 / 5}>
					<Input placeholder='Search Products' onChange={(e) => console.log(e.target.value)} />
				</Flex>
				<Flex width={1 / 5}>
					<Button themestyle='primary' width='100%' onClick={() => onEditModal()}>
						Add Product
					</Button>
				</Flex>
			</Flex>
		</Flex>
	);
};

Header.propTypes = {
	onEditModal: PropTypes.func.isRequired,
};

export default Header;
