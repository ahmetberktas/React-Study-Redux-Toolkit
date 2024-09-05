import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import FormModal from "../components/FormModal";
import { removeTask } from "../redux/slices/crudSlice";

const Crud = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.crudSlice);
  const [isOpen, setIsOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);
  return (
    <div className="px-3">
      <Button onClick={() => setIsOpen(true)}>Yeni Görev Ekle</Button>
      <FormModal
        editItem={editItem}
        isOpen={isOpen}
        close={() => {
          setIsOpen(false);
          setEditItem(null);
        }}
      ></FormModal>
      <Table className="mt-5" variant="dark" striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Görevler</th>
            <th>Yazan</th>
            <th>Atanan</th>
            <th>Tarih</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {state.tasks.map((task, i) => (
            <tr key={i}>
              <td>{i}</td>
              <td>{task.title}</td>
              <td>{task.author}</td>
              <td>{task.assigned_to}</td>
              <td>{task.end_date}</td>
              <td className="d-flex gap-2">
                <Button
                  onClick={() => dispatch(removeTask(task.id))}
                  variant="danger"
                >
                  Sil
                </Button>
                <Button
                  onClick={() => {
                    setEditItem(task);
                    setIsOpen(true);
                  }}
                  variant="warning"
                >
                  Düzenle
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Crud;
