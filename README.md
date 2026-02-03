# Nextoria Client Project Dashboard

This is a **Frontend Technical Assignment** for Nextoria.  
The project is a small **client project dashboard** built with **React (Vite)** to manage projects for different clients.

## 🚀 Features

- View a list of projects on the **Dashboard**
- Click on a project to see **Project Details**
- Create a new project (stored in **localStorage**)
- Display **project status** (Pending, In Progress, Completed)
- Show **progress percentage** with a progress bar
- Fetch initial projects from a **public API** (`https://dummyjson.com/todos?limit=5`)

## 🛠 Technologies

- React (Vite)
- React Router DOM
- Axios (for API requests)
- LocalStorage (for data persistence)
- Plain CSS (can use Tailwind or other libraries)

## 🗂 Project Structure

```
src/
│
├─ components/
│   └─ ProjectCard.jsx
│   └─ ProjectForm.jsx
├─ pages/
│   ├─ Dashboard.jsx
│   ├─ ProjectDetails.jsx
│   └─ CreateProject.jsx
├─ services/
│   └─ api.js
├─ App.jsx
└─ main.jsx
```

## 💻 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/ImaneElla/nextoria-dashboard.git
```

2. Install dependencies:

```bash
npm install
```

3. Run the project:

```bash
npm run dev
```

Open the browser at `http://localhost:5173` (default Vite port).

---

## 🧠 Notes

- The project uses **localStorage** to store projects locally.
- Initial projects are fetched from a **public API**.
- Each project has:
  - `name`
  - `description`
  - `status`
  - `deadline`
  - `progress percentage`
- Routing is implemented with **React Router DOM**.

---

## 📌 Next Steps / Improvements

- Add **edit & delete project**
- Enhance **UI design & responsiveness**
- Implement **filters** by status
- Add **unique IDs** for created projects
- Replace localStorage with a **backend API** in real applications

---

## 🔗 Author

**Imane EL Laouzi** – Full-stack Web Developer  
[Portfolio](https://imaneellaouzi-portfolio.vercel.app) | [GitHub](https://github.com/ImaneElla) | [LinkedIn](https://www.linkedin.com/in/imaneellaouzi)
