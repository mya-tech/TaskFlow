import { useEffect, useState } from "react";
import { getTasks } from "./api/TaskApi";
import type { Task } from "./types/Task";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    getTasks().then(setTasks);
  }, []);

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <Column title="TODO" tasks={tasks.filter((t) => t.status === "TODO")} />
      <Column title="DOING" tasks={tasks.filter((t) => t.status === "DOING")} />
      <Column title="DONE" tasks={tasks.filter((t) => t.status === "DONE")} />
    </div>
  );
}

function Column({ title, tasks }: { title: string; tasks: Task[] }) {
  return (
    <div style={{ width: "200px" }}>
      <h2>{title}</h2>
      {tasks.map((t: Task) => (
        <div key={t.id} style={{ padding: "8px", border: "1px solid gray" }}>
          {t.title}
        </div>
      ))}
    </div>
  );
}

export default App;
