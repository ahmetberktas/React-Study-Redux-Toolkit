import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { addTask, editTask } from "../redux/slices/crudSlice";
import { useDispatch } from "react-redux";

const FormModal = ({ isOpen, close, editItem }) => {
  const dispatch = useDispatch();
  /* Form Submit */
  const handleSubmit = (e) => {
    e.preventDefault();
    /* Form Input Verilerine Erişme */
    const form = new FormData(e.target);
    const formData = Object.fromEntries(form.entries());

    if (editItem) {
      dispatch(editTask({ ...formData, id: editItem.id }));
    } else {
      /* Store'a Yeni Elemen Dispatch */
      dispatch(addTask(formData));
    }
    close();
  };

  return (
    <Modal
      show={isOpen}
      onHide={close}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="text-black" closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {editItem ? "Görevi Düzenle" : "Yeni Görev Oluştur"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-black">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Görev Başlığı</Form.Label>
            <Form.Control
              defaultValue={editItem ? editItem.title : ""}
              autoComplete="off"
              required
              type="text"
              name="title"
              placeholder="Görev giriniz..."
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Görevi Yazan</Form.Label>
            <Form.Control
              defaultValue={editItem ? editItem.author : ""}
              autoComplete="off"
              required
              type="text"
              name="author"
              placeholder="Görevi yazan..."
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Göreve Atanan</Form.Label>
            <Form.Control
              defaultValue={editItem ? editItem.assigned_to : ""}
              autoComplete="off"
              required
              type="text"
              name="assigned_to"
              placeholder="Göreve atanan..."
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Bitiş Tarihi</Form.Label>
            <Form.Control
              defaultValue={editItem ? editItem.end_date : ""}
              autoComplete="off"
              required
              type="date"
              name="end_date"
            ></Form.Control>
          </Form.Group>
          <Modal.Footer className="mt-5">
            <Button
              variant="danger"
              onClick={() => {
                close();
              }}
            >
              Kapat
            </Button>
            <Button type="submit" variant="success">
              Kaydet
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FormModal;
