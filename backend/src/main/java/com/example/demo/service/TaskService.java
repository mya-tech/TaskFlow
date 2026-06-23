package com.example.demo.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;
import com.example.demo.model.Task;
import com.example.demo.repository.TaskRepository;
import com.example.demo.model.Priority;
import com.example.demo.model.Status;

@Service
public class TaskService {

    // private final List<Task> tasks = new ArrayList<>();
    private final TaskRepository taskRepository;

    // Constructeur pour l'injection de dépendance
    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    // Getter for tasks (needed by controller)
    public List<Task> getTasks() {
        return taskRepository.findAll();
    }

    public Task getTaskById(Long id) {
        return taskRepository.findById(id).orElse(null);
    }

    public List<Task> getTasksByPriority(Priority priority) {
        return taskRepository.findByPriority(priority);
    }

    public List<Task> getTasksByStatus(Status status) {
        return taskRepository.findByStatus(status);
    }

    // READ ONE

    public Task createTask(Task task) {
        return taskRepository.save(task);
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
            taskRepository.delete(task);
        }
    }

}
