package com.example.demo.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import com.example.demo.model.Task;
import com.example.demo.model.Priority;
import com.example.demo.model.Status;

@Service
public class TaskService {

    private final List<Task> tasks = new ArrayList<>();

    // Getter for tasks (needed by controller)
    public List<Task> getTasks() {
        return tasks;
    }

    public Task getTaskById(Long id) {
        for (Task task : tasks) {
            if (task.getId() == id) {
                return task;
            }
        }
        return null; // or throw an exception
    }

    public List<Task> getTasksByPriority(Priority priority) {
        List<Task> filteredTasks = new ArrayList<>();
        for (Task task : tasks) {
            if (task.getPriority() == priority) {
                filteredTasks.add(task);
            }
        }
        return filteredTasks;
    }

    public List<Task> getTasksByStatus(Status status) {
        List<Task> filteredTasks = new ArrayList<>();
        for (Task task : tasks) {
            if (task.getStatus() == status) {
                filteredTasks.add(task);
            }
        }
        return filteredTasks;
    }

    // READ ONE

    public Task createTask(Task task) {
        tasks.add(task);
        return task;
    }

    public Task updateTask(Long id, Task updatedTask) {

        Task existing = getTaskById(id);

        if (existing != null) {
            existing.setTitle(updatedTask.getTitle());
            existing.setDescription(updatedTask.getDescription());
            existing.setStatus(updatedTask.getStatus());
            existing.setPriority(updatedTask.getPriority());
            existing.setDueDate(updatedTask.getDueDate());
        }

        return existing;
    }

    public void moveTask(Long id, Status newStatus) {
        Task task = getTaskById(id);
        if (task != null) {
            task.moveTo(newStatus);
        }
    }

    public void movePriority(Long id, Priority newPriority) {
        Task task = getTaskById(id);
        if (task != null) {
            task.changePriority(newPriority);
        }
    }

    public void changeDueDate(Long id, LocalDate dueDate) {
        Task task = getTaskById(id);
        if (task != null) {
            task.setDueDate(dueDate);
        }
    }

    public void deleteTask(Long id) {
        Task task = getTaskById(id);
        if (task != null) {
            tasks.remove(task);
        }
    }

}
