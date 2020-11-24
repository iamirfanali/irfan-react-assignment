import { useState } from 'react';

export const useTableHoc = () => {
	const [isModalOpen, setModalOpen] = useState(false);

	// Open Modal Handler
	const handleEditModal = () => {
		setModalOpen(true);
	};

	// Close Modal Handler
	const handleModalClose = () => {
		setModalOpen(false);
	};

	return {
		isModalOpen,
		handleEditModal,
		handleModalClose,
	};
};
