# Nextoria Client Project Dashboard

This is a **Frontend Technical Assignment** for Nextoria.  
The project is a small **client project dashboard** built with **React (Vite)** to manage projects for different clients.

## 🚀 Features

- View a list of projects on the **Dashboard**
- Create a new project (stored in **localStorage**)
- Display **project status** (Pending, In Progress, Completed)
- Show **progress percentage** 
- Fetch initial projects from a **public API** (`https://dummyjson.com/todos?limit=5`)

## 🛠 Technologies

- React (Vite)
- React Router DOM
- Axios (for API requests)
- LocalStorage (for data persistence)
- Plain CSS 

## 🗂 Project Structure

```
src/
│
├─ components/
│   └─ ProjectCard.jsx
├─ pages/
│   ├─ Dashboard.jsx
│   └─ CreateProject.jsx
├─ services/
│   └─ api.js
├─ App.jsx
└─ main.jsx
```


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

- Enhance **UI design & responsiveness**
- Implement **filters** by status
- Add **unique IDs** for created projects
- Replace localStorage with a **backend API** in real applications

---

## 🔗 Author

**Imane EL Laouzi** – Full-stack Web Developer  
[Portfolio](https://imaneellaouzi-portfolio.vercel.app) | [GitHub](https://github.com/ImaneElla) | [LinkedIn](https://www.linkedin.com/in/imaneellaouzi)
