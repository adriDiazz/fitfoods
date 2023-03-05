import { Children } from 'react';
import Modal from 'react-modal';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		borderRadius: '16px',
		padding: '0',
		border: 'none'
	},
	overlay: {
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		zIndex: 1000
	}
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

function ModalComponent({ opened, setOpened, children }) {
	return (
		<div>
			<Modal
				isOpen={opened}
				onRequestClose={() => setOpened(false)}
				style={customStyles}
				contentLabel='Example Modal'
			>
				{children}
			</Modal>
		</div>
	);
}

export default ModalComponent;
