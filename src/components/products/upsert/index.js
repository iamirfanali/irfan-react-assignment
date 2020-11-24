import React, { useEffect } from 'react';
import Modal from 'react-modal';
import UpsertForm from './form';
import PropTypes from 'prop-types';
import { useFormHoc } from './form-hoc';

const UpsertModal = ({ isModalOpen, handleModalClose }) => {
	const formHoc = useFormHoc(handleModalClose);

	useEffect(() => {
		Modal.setAppElement('body');
	}, []);

	return (
		<Modal isOpen={isModalOpen} onRequestClose={handleModalClose} style={formHoc.modalStyles}>
			<UpsertForm handleModalClose={handleModalClose} />
		</Modal>
	);
};

UpsertModal.propTypes = {
	isModalOpen: PropTypes.bool.isRequired,
	handleModalClose: PropTypes.func.isRequired,
};

export default UpsertModal;
