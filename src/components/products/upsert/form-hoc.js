import moment from 'moment';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../redux/actions';

export const useFormHoc = () => {
	const dispatch = useDispatch();

	// Form initial values
	const initialValues = {
		name: '',
		description: '',
		price: 0,
		date: moment().format(),
	};

	// Form validation
	const ValidationSchema = Yup.object().shape({
		name: Yup.string().required('Name is required'),
		description: Yup.string().required('Description is required'),
		price: Yup.number().moreThan(0, 'Price should be greater than 0').required('Price is required'),
	});

	// Form submit hanlder
	const handleSubmit = (payload) => {
		dispatch(addProduct(payload));
	};

	// Modal styles
	const modalStyles = {
		content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%',
			transform: 'translate(-50%, -50%)',
			width: '600px',
		},
	};

	return {
		initialValues,
		handleSubmit,
		modalStyles,
		ValidationSchema,
	};
};
