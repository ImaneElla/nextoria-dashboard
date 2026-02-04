import { useParams } from "react-router-dom";

export default function ProjectDetails() {
  const { id } = useParams();
  const projects = JSON.parse(localStorage.getItem("projects")) || [];

  // Convert id to string for comparison (URL params are always strings)
  const project = projects.find((p) => String(p.id) === String(id));

  // Debug: Check what's happening
  console.log("URL ID:", id);
  console.log("All Projects:", projects);
  console.log("Found Project:", project);

  if (!project)
    return (
      <div className="project-details">
        <p className="not-found">❌ Project not found</p>
        <p style={{ fontSize: "14px", color: "#6b7280", marginTop: "12px" }}>
          Looking for project ID: {id}
        </p>
      </div>
    );

  return (
    <div className="project-details">
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <p>
        <strong>Status:</strong>
        <span className={`status ${project.status.toLowerCase()}`}>
          {project.status}
        </span>
      </p>
      <p className="deadline">
        <strong>Deadline:</strong> {project.deadline}
      </p>

      <div className="progress-container">
        <div className="progress-label">
          <span>Progress</span>
          <span>{project.progress}%</span>
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${project.progress}%` }}
          >
            {project.progress > 15 && `${project.progress}%`}
          </div>
        </div>
      </div>
    </div>
  );
}
