import { useState } from "react";
import "./App.css";
import UserTable from "./tables/userTable";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";
import Mentor from "./Mentors/Mentor";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const usersData = [
    {
      id: 1,
      name: "Rajesh",
      email: "rajesh@test.com",
      course: "MECH",
    },
    {
      id: 2,
      name: "Lokesh",
      email: "lokesh@test.com",
      course: "IT",
    },
    {
      id: 3,
      name: "Prem",
      email: "prem@test.com",
      course: "CSE",
    },
  ];

  const [users, setUsers] = useState(usersData);

  const [editing, setEditing] = useState(false);

  const [currentUser, setCurrentUser] = useState({
    id: null,
    name: "",
    email: "",
    course: "",
  });

  const [showTable, setShowTable] = useState(false);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    setEditing(false);
  };

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      name: user.name,
      email: user.email,
      course: user.course,
    });
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  const handleManageClick = () => {
    setShowTable(true);
  };

  const handleMentorClick = () => {
    setShowTable(false);
    setEditing(false);
    setCurrentUser({
      id: null,
      name: "",
      email: "",
      course: "",
    });
  };

  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <h2 className="header">Menu</h2>

            <ul>
              <li className="sidebar">
                <i className="fas fa-graduation-cap"></i>
                <b className="sidebar-text">Dashboard</b>
              </li>
              <li className="sidebar">
                <Link to="/mentor" onClick={handleMentorClick}>
                  <i className="fas fa-chalkboard-teacher"></i>
                 <b className="sidebar-text">Mentor</b>
                </Link>
              </li>
              <li className="sidebar">
                <i className="fas fa-book-open"></i>
                <b className="sidebar-text">Courses</b>
              </li>
              <li className="sidebar">
                <i className="fas fa-tasks"></i>
                <b className="sidebar-text">Assignments</b>
              </li>
              <li className="sidebar">
                <i className="fas fa-trophy"></i>
                <b className="sidebar-text">Grades</b>
              </li>

              <Routes>
                <Route path="/mentor" element={<Mentor />}></Route>
              </Routes>
            </ul>
          </div>
          <div className="col-md-10">
            <h2 className="header">Student's Dashboard</h2>
            <div className="welcome-board">
              <p>Welcome to student dashboard!</p>
              <button
                onClick={handleManageClick}
                className="btn btn-outline-primary"
              >
                <i className="fas fa-tasks"></i>
                Manage
              </button>
            </div>

            <div className="row">
              <div className="col-md-4">
                <h3>Profile</h3>
                <p>View and edit your profile information here.</p>

                {editing ? (
                  <div>
                    <h2>Edit User</h2>
                    <EditUserForm
                      setEditing={setEditing}
                      currentUser={currentUser}
                      updateUser={updateUser}
                    />
                  </div>
                ) : (
                  <div>
                    <h2>Add Student</h2>
                    <AddUserForm addUser={addUser} />
                  </div>
                )}
              </div>
              <div className="col-md-8">
                <h2>View Students</h2>
                {showTable ? (
                  <UserTable
                    editRow={editRow}
                    deleteUser={deleteUser}
                    users={users}
                  />
                ) : (
                  <p>
                    Click "Manage" to see existing records & clik edit or delete
                    for actions.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
