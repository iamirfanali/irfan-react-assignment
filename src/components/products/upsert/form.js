import React from 'react';
import { Flex, Box } from 'rebass';
import PropTypes from 'prop-types';
import { Formik, Form, ErrorMessage } from 'formik';
import { useFormHoc } from './form-hoc';
import { Label } from '../../../shared/label';
import { Button } from '../../../shared/button';
import { Separator } from '../../../shared/separator';
import { Input } from '../../../shared/input';
import { Error } from '../../../shared/error';
import { globals, colors } from '../../../shared/styles/settings';

const UpsertForm = ({ handleModalClose }) => {
	const formHoc = useFormHoc();

	const handleSubmit = (payload) => {
		formHoc.handleSubmit(payload);
		handleModalClose();
	};

	return (
		<Formik initialValues={formHoc.initialValues} onSubmit={handleSubmit} validationSchema={formHoc.ValidationSchema}>
			{({ handleChange, handleBlur }) => (
				<Form>
					<Flex py={globals.space}>
						<Label fontSize={globals.fontSizeBase} color={colors.primaryTextColor}>
							Add Product
						</Label>
					</Flex>
					<Separator />
					<Flex py={10} flexDirection='column'>
						<Flex flexDirection='column' width={1} mr={10}>
							<Label
								mb={10}
								fontSize={globals.fontSizeSmaller}
								lineHeight={globals.baseLineHeight}
								color={colors.primaryTextColor}
							>
								Name
							</Label>
							<Input type='text' name='name' onChange={handleChange} onBlur={handleBlur} />
							<ErrorMessage name='name' component={Error} />
						</Flex>
					</Flex>
					<Flex py={10} flexDirection='column'>
						<Flex flexDirection='column' width={1} mr={10}>
							<Label
								mb={10}
								fontSize={globals.fontSizeSmaller}
								lineHeight={globals.baseLineHeight}
								color={colors.primaryTextColor}
							>
								Description
							</Label>
							<Input type='text' name='description' onChange={handleChange} onBlur={handleBlur} />
							<ErrorMessage name='description' component={Error} />
						</Flex>
					</Flex>
					<Flex py={10} flexDirection='column'>
						<Flex flexDirection='column' width={1} mr={10}>
							<Label
								mb={10}
								fontSize={globals.fontSizeSmaller}
								lineHeight={globals.baseLineHeight}
								color={colors.primaryTextColor}
							>
								Price
							</Label>
							<Input type='number' name='price' onChange={handleChange} onBlur={handleBlur} />
							<ErrorMessage name='price' component={Error} />
						</Flex>
					</Flex>

					<Flex py={globals.space} justifyContent='flex-end'>
						<Box>
							<Button themestyle='secondary' onClick={handleModalClose}>
								Cancel
							</Button>
						</Box>
						<Box ml={globals.spaceSmall}>
							<Button type='submit' themestyle='primary'>
								Add
							</Button>
						</Box>
					</Flex>
				</Form>
			)}
		</Formik>
	);
};

UpsertForm.propTypes = {
	handleModalClose: PropTypes.func.isRequired,
};

export default UpsertForm;
