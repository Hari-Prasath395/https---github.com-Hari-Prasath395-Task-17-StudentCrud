import { useEffect, useState } from "react";
import { Courses } from "../Utils/courses";

const EditUserForm = (props) => {
  const initialFormState = { id: null, name: "", email: "",course:"" };
  const [user, setUser] = useState(props.currentUser);

  useEffect(()=>{
        setUser(props.currentUser)
  },[props.currentUser])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!user.name || !user.email || !user.course) return;
        props.updateUser(user.id, user);
        setUser({...initialFormState});
      }}
    >
      <label className="form-label">Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        className="form-control"
        onChange={handleInputChange}
      />
      <label className="form-label">Username</label>
      <input
        type="text"
        name="email"
        value={user.email}
        className="form-control"
        onChange={handleInputChange}
      />
      <label className="form-label">Courses</label>
      <select className="form-select" aria-label="Default select example" 
      name="course"
        value={user.course}
        onChange={handleInputChange}>
        <option selected>Select Course</option>
        {Courses.map((course, index) => {
          return (
            <option key={`unique-courses ${index}`} value={course}>
              {course}
            </option>
          );
        })}
      </select>
      <button className="btn btn-outline-primary mt-3">Update User</button>
      <button
        className="btn btn-outline-warning mt-3 mx-3"
        onClick={() => {
          props.setEditing(false);
        }}
      >
        Cancel
      </button>
    </form>
  );
};

export default EditUserForm;







































