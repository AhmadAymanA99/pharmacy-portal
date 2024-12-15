import React from "react";
import { Modal, Button } from "react-bootstrap";

function EditModal({ showModal, setShowModal, currentMedication, setCurrentMedication, handleSave }) {
    return (
        <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Medication</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {currentMedication && (
                    <form>
                        <div className="mb-3">
                            <label htmlFor="medicationTitle" className="form-label">
                                Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="medicationTitle"
                                value={currentMedication.title}
                                onChange={(e) =>
                                    setCurrentMedication({
                                        ...currentMedication,
                                        title: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="medicationDescription" className="form-label">
                                Description
                            </label>
                            <textarea
                                className="form-control"
                                id="medicationDescription"
                                rows="3"
                                value={currentMedication.body}
                                onChange={(e) =>
                                    setCurrentMedication({
                                        ...currentMedication,
                                        body: e.target.value,
                                    })
                                }
                            ></textarea>
                        </div>
                    </form>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowModal(false)}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSave}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default EditModal;
