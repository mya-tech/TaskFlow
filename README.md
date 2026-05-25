# TaskFlow Backend

TaskFlow Backend is a Spring Boot REST API powering a drag-and-drop task management application.  
This project is the evolution of a Java CLI task manager into a modern full-stack web application architecture.

The backend exposes RESTful endpoints used by a TypeScript frontend to manage tasks dynamically.

---

# Features

- Create tasks
- View all tasks
- View single task
- Delete tasks
- Update task status
- Drag-and-drop ready architecture
- REST API design
- Layered architecture (Controller / Service / Model)
- In-memory task management using ArrayList (temporary storage before database integration)

---

# Tech Stack

## Backend
- Java 21
- Spring Boot
- Maven

## Frontend
- TypeScript
- Vite

---

# Project Structure

```txt
src/main/java/com/example/demo
├── controller
│   └── TaskController.java
├── model
│   ├── Task.java
│   ├── Priority.java
│   └── TaskStatus.java
├── service
│   └── TaskService.java
└── DemoApplication.java
```

---

# Architecture

```txt
Frontend (TypeScript)
        ↓
REST API (Spring Boot Controller)
        ↓
Service Layer
        ↓
In-Memory Storage (ArrayList)
```

---

# Current State

The application currently uses in-memory storage with `ArrayList` for rapid development and architecture validation.

Next major milestone:
- PostgreSQL integration
- Spring Data JPA repositories
- Persistent task storage

---

# API Endpoints

## Get all tasks

```http
GET /api/tasks
```

---

## Get task by ID

```http
GET /api/tasks/{id}
```

---

## Create task

```http
POST /api/tasks
```

Example body:

```json
{
  "title": "Build Spring Boot API",
  "completed": false
}
```

---

## Delete task

```http
DELETE /api/tasks/{id}
```

---

# Running the Project

## Clone the repository

```bash
git clone <your-repository-url>
cd backend
```

---

## Run the backend

```bash
./mvnw spring-boot:run
```

Backend runs on:

```txt
http://localhost:8080
```

---

# Frontend Connection

The frontend communicates with the backend through REST API calls.

CORS is configured for:

```txt
http://localhost:5173
```

---

# Learning Goals

This project was built to:
- Transition from CLI Java development to full-stack architecture
- Learn Spring Boot fundamentals
- Understand REST API design
- Practice layered backend architecture
- Prepare for database integration and scalable application design

---

# Future Improvements

- PostgreSQL integration
- Spring Data JPA
- Authentication & Authorization
- JWT security
- Task persistence
- User accounts
- Project boards
- Real-time updates
- Docker deployment

---

# Author

Mariam Touré
