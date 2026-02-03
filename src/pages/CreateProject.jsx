import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateProject() {
  const navigate = useNavigate();

  const [project, setProject] = useState({
    name: "",
    description: "",
    status: "Pending",
    deadline: "",
    progress: 0,
  });

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const projects = JSON.parse(localStorage.getItem("projects")) || [];
    localStorage.setItem("projects", JSON.stringify([...projects, project]));

    navigate("/");
  };

  return (
    <div className="container">
      <h2>Create New Project</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Project name"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="description"
          placeholder="Short description"
          onChange={handleChange}
          required
        />

        {/* STATUS */}
        <select name="status" onChange={handleChange}>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>

        <input type="date" name="deadline" onChange={handleChange} required />

        <input
          type="number"
          name="progress"
          min="0"
          max="100"
          placeholder="Progress (%)"
          onChange={handleChange}
        />

        <button type="submit">Create Project</button>
      </form>
    </div>
  );
}

export default CreateProject;
