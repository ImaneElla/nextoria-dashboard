export default function ProjectCard({ project, onEdit, onDelete }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        margin: "10px",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <p>Status: {project.status}</p>
      <p>Deadline: {project.deadline}</p>
      <p>Progress: {project.progress}%</p>

      <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
        <button
          style={{
            padding: "5px 10px",
            backgroundColor: "#4caf50",
            color: "white",
            border: "none",
            borderRadius: "3px",
          }}
          onClick={() => onEdit(project.id)}
        >
          Edit
        </button>
        <button
          style={{
            padding: "5px 10px",
            backgroundColor: "#f44336",
            color: "white",
            border: "none",
            borderRadius: "3px",
          }}
          onClick={() => onDelete(project.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
