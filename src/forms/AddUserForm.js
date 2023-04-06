import { useState } from "react";
import { Courses } from "../Utils/courses";

const AddUserForm = (props) => {
  const initialFormState = { id: null, name: "", email: "", course: "" };

  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!user.name || !user.email || !user.course) return;
        props.addUser(user);
        setUser(initialFormState);
      }}
    >
      <label className="form-label">Name</label>
      <input
        className="form-control"
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
        placeholder="Enter your name"
      ></input>
      <label className="form-label">Email</label>
      <input
        className="form-control"
        type="email"
        name="email"
        value={user.email}
        onChange={handleInputChange}
        placeholder="email@test.com"
      ></input>
      <label className="form-label">Courses</label>
      <select
        className="form-select"
        aria-label="Default select example"
        name="course"
        value={user.course}
        onChange={handleInputChange}
      >
        <option selected>Select Course</option>
        {Courses.map((course, index) => {
          return (
            <option key={`unique-courses ${index}`} value={course}>
              {course}
            </option>
          );
        })}
      </select>
      <button className="btn btn-outline-primary mt-3">Add new user</button>
    </form>
  );
};

export default AddUserForm;
