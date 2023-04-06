import React from "react";

const UserTable = (props) => {
  return (
    <div className="table-responsive">
    <table className="table  table-bordered table-striped text-center">
      <thead>
        <tr>
          <th className="col-2">Name</th>
          <th className="col-2">Email</th>
          <th className="col-1">Courses</th>
          <th className="col-3">Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ? (
          props.users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.course}</td>
              <td>
                <button  onClick={()=>{props.editRow(user)}} className="btn btn-outline-secondary  mx-3">Edit</button>
                <button onClick={()=>props.deleteUser(user.id)} className="btn btn-outline-danger  mx-3">Delete</button>
              </td>
            </tr>
          ))
        ) : (
          <tr col-span={4}>No Users</tr>
        )}
      </tbody>
    </table>
    </div>
  );
};

export default UserTable;
