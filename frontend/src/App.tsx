import { useEffect, useState } from "react";
import { getTasks } from "./api/TaskApi";
import { isLoggedIn, clearToken } from "./api/AuthApi";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import type { Task } from "./types/Task";

type AuthMode = "login" | "register";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loggedIn, setLoggedIn] = useState(isLoggedIn());
  const [authMode, setAuthMode] = useState<AuthMode>("login");

  useEffect(() => {
    if (loggedIn) {
      getTasks().then(setTasks).catch(() => setTasks([]));
    }
  }, [loggedIn]);

  const handleLoginSuccess = () => {
    setLoggedIn(true);
  };

  const handleRegisterSuccess = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    clearToken();
    setLoggedIn(false);
    setTasks([]);
  };

  if (!loggedIn) {
    return (
      <>
        {authMode === "login" ? (
          <Login onLoginSuccess={handleLoginSuccess} />
        ) : (
          <Register onRegisterSuccess={handleRegisterSuccess} onSwitchToLogin={() => setAuthMode("login")} />
        )}
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          {authMode === "login" ? (
            <p>
              Don't have an account?{" "}
              <button
                onClick={() => setAuthMode("register")}
                style={{ background: "none", border: "none", color: "blue", cursor: "pointer", textDecoration: "underline" }}
              >
                Register here
              </button>
            </p>
          ) : null}
        </div>
      </>
    );
  }

  return (
    <div>
      <div style={{ padding: "20px", backgroundColor: "#f0f0f0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>TaskFlow</h1>
        <button onClick={handleLogout} style={{ padding: "10px 20px", cursor: "pointer" }}>
          Logout
        </button>
      </div>
      <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
        <Column title="TODO" tasks={tasks.filter((t) => t.status === "TODO")} />
        <Column title="DOING" tasks={tasks.filter((t) => t.status === "DOING")} />
        <Column title="DONE" tasks={tasks.filter((t) => t.status === "DONE")} />
      </div>
    </div>
  );
}

function Column({ title, tasks }: { title: string; tasks: Task[] }) {
  return (
    <div style={{ width: "300px", backgroundColor: "#f9f9f9", padding: "10px", borderRadius: "5px" }}>
      <h2>{title}</h2>
      <div style={{ minHeight: "400px" }}>
        {tasks.map((t: Task) => (
          <div key={t.id} style={{ padding: "10px", marginBottom: "8px", backgroundColor: "white", border: "1px solid #ddd", borderRadius: "4px", cursor: "pointer" }}>
            <strong>{t.title}</strong>
            {t.description && <p style={{ fontSize: "12px", color: "#666", marginTop: "5px" }}>{t.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
