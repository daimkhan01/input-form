import React from "react";

const Table = ({ data, updateData, deleteData, indexOfFirstItem }) => (
  <table>
    <thead>
      <tr>
        <th>Sr. No</th>
        <th>Name</th>
        <th>Age</th>
        <th>Gender</th>
        <th>Hobbies</th>
        <th>Nationality</th>
        <th>Message</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item, i) => (
        <tr key={item.id}>
          <td>{indexOfFirstItem + i + 1}</td>
          <td>{item.name}</td>
          <td>{item.age}</td>
          <td>{item.gender}</td>
          <td>{item.hobbies.join(", ")}</td>
          <td>{item.nationality}</td>
          <td>{item.message}</td>
          <td className="btn-edit">
            <i onClick={() => updateData(item.id)} className="fas fa-edit"></i>
            <i
              onClick={() => deleteData(item.id)}
              className="fa-solid fa-trash-can"
            ></i>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
