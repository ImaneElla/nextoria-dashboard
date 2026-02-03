/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../services/api";
import ProjectCard from "../components/ProjectCard";

export default function Dashboard() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("projects");
    if (stored) {
      setProjects(JSON.parse(stored));
    } else {
      api.get("/todos?limit=5").then((res) => {
        const data = res.data.todos.map((todo) => ({
          id: todo.id,
          name: todo.todo,
          description: "Client project description",
          status: todo.completed ? "Completed" : "In Progress",
          deadline: "2026-03-01",
          progress: todo.completed ? 100 : 50,
        }));
        setProjects(data);
        localStorage.setItem("projects", JSON.stringify(data));
      });
    }
  }, []);

  const handleEdit = (id) => {
    const project = projects.find((p) => p.id === id);
    const newName = prompt("Edit project name:", project.name);
    if (newName) {
      const updated = projects.map((p) =>
        p.id === id ? { ...p, name: newName } : p,
      );
      setProjects(updated);
      localStorage.setItem("projects", JSON.stringify(updated));
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      const filtered = projects.filter((p) => p.id !== id);
      setProjects(filtered);
      localStorage.setItem("projects", JSON.stringify(filtered));
    }
  };

  return (
    <div className="container">
      <h1>Client Projects Dashboard</h1>
      <Link className="btn" to="/create">
        ➕ Create Project
      </Link>
      {projects.map((p) => (
        <ProjectCard
          key={p.id}
          project={p}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}
