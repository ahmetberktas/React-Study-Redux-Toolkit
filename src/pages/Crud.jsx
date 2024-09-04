import React from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";

const Crud = () => {
  const state = useSelector((store) => store.crudSlice);
  return (
    <div className="px-3">
      <Button>Yeni Görev Ekle</Button>
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
          {state.tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.title}</td>
              <td>{task.author}</td>
              <td>{task.assigned_to}</td>
              <td>{task.end_date}</td>
              <td>
                <Button variant="danger">Sil</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Crud;
