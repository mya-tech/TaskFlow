import type { Task } from "../types/Task";

const BASE_URL = "http://localhost:8080/api/tasks";

export async function getTasks() {
  const res = await fetch(BASE_URL);
  return res.json();
}

export async function updateTask(id: number, task: Task) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(task)
  });

  return res.json();
}