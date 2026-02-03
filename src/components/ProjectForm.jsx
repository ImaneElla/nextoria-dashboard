import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProjectForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    description: "",
    status: "Pending",
    deadline: "",
    progress: 0,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const stored = JSON.parse(localStorage.getItem("projects")) || [];
    const newProject = { ...form, id: Date.now() };
    localStorage.setItem("projects", JSON.stringify([...stored, newProject]));
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Project name" onChange={handleChange} />
      <input
        name="description"
        placeholder="Description"
        onChange={handleChange}
      />
      <input name="deadline" type="date" onChange={handleChange} />
      <input name="progress" type="number" onChange={handleChange} />
      <button>Create</button>
    </form>
  );
}
