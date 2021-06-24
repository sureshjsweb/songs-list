import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ModalWindow = ({ show, handleClose, onDelete }) => {
    return <>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete Song</Modal.Title>
            </Modal.Header>
            <Modal.Body>Do you want to delete this song?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={onDelete}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    </>;
}

export default ModalWindow;