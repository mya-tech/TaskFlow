# TaskFlow - Multi-User Kanban Board

TaskFlow is a modern, full-stack task management application where teams can collaborate on shared boards with drag-and-drop tasks, real-time updates, and JWT-based authentication.

**Status:** Milestone 1 (Authentication System) ✅ Complete

---

## 🎯 Project Vision

Build a production-grade, multi-user task management board (like Trello) with:
- User authentication & authorization
- Shared boards with team collaboration
- Real-time drag-and-drop task management
- User presence indicators
- Cloud deployment (AWS + Docker)

---

## ✨ Current Features (Milestone 1)

### Authentication System
- ✅ User registration with BCrypt password hashing
- ✅ User login with JWT token generation
- ✅ Token-based authentication on all protected endpoints
- ✅ Secure token validation on every request
- ✅ CORS configured for frontend communication

### Task Management (Pre-Auth)
- ✅ Create, read, update, delete tasks
- ✅ Task status management (TODO, DOING, DONE)
- ✅ Task priority levels
- ✅ Drag-and-drop ready architecture

---

## 🛠 Tech Stack

### Backend
- **Java 17** - Language
- **Spring Boot 4.0.6** - Framework
- **Spring Security 7.0.5** - Authentication
- **JWT (JJWT 0.12.3)** - Token management
- **Spring Data JPA** - Database abstraction
- **H2 Database** - In-memory (development)
- **Maven** - Build tool

### Frontend
- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **dnd-kit** - Drag-and-drop library

---

## 📁 Project Structure

```
my-project/
├── backend/
│   ├── src/main/java/com/example/demo/
│   │   ├── config/
│   │   │   └── SecurityConfig.java          (Spring Security setup)
│   │   ├── controller/
│   │   │   ├── AuthController.java          (Auth endpoints)
│   │   │   └── TaskController.java          (Task endpoints)
│   │   ├── model/
│   │   │   ├── User.java                    (User entity)
│   │   │   ├── Task.java                    (Task entity)
│   │   │   ├── Priority.java                (Enum)
│   │   │   └── Status.java                  (Enum)
│   │   ├── repository/
│   │   │   ├── UserRepository.java          (User queries)
│   │   │   └── TaskRepository.java          (Task queries)
│   │   ├── security/
│   │   │   ├── JwtTokenProvider.java        (Token generation/validation)
│   │   │   └── JwtAuthenticationFilter.java (Token validation filter)
│   │   ├── service/
│   │   │   ├── AuthService.java             (Auth business logic)
│   │   │   └── TaskService.java             (Task business logic)
│   │   ├── dto/
│   │   │   ├── RegisterRequest.java
│   │   │   ├── LoginRequest.java
│   │   │   └── AuthResponse.java
│   │   └── DemoApplication.java
│   ├── pom.xml                              (Dependencies)
│   └── src/main/resources/application.properties
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   │   ├── AuthApi.ts                   (Auth API client)
│   │   │   └── TaskApi.ts                   (Task API client)
│   │   ├── components/
│   │   │   └── Login.tsx                    (Login form)
│   │   ├── types/
│   │   └── App.tsx
│   └── package.json
└── README.md
```

---

## 🚀 Running the Project

### Prerequisites
- Java 17+
- Node.js 18+
- Maven 3.8+

### Backend Setup

```bash
cd backend

# Install dependencies
mvn clean install

# Run the application
./mvnw spring-boot:run
```

Backend runs on: `http://localhost:8080`

Database Console (H2): `http://localhost:8080/h2-console`

### Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Run development server
npm run dev
```

Frontend runs on: `http://localhost:5173`

---

## 📡 API Endpoints

### Authentication

```http
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "secure-password",
  "name": "John Doe"
}

Response: { token, userId, email, name }
```

```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "secure-password"
}

Response: { token, userId, email, name }
```

### Tasks (Protected - Requires Token)

```http
GET /api/tasks
Authorization: Bearer {token}

Response: [{ id, title, description, status, priority, dueDate }, ...]
```

```http
POST /api/tasks
Authorization: Bearer {token}
Content-Type: application/json

{
  "title": "Build feature X",
  "description": "Implement...",
  "status": "TODO",
  "priority": "HIGH"
}

Response: { id, title, description, status, priority, dueDate }
```

```http
PATCH /api/tasks/{id}/status
Authorization: Bearer {token}
Content-Type: application/json

{
  "status": "DOING"
}
```

```http
DELETE /api/tasks/{id}
Authorization: Bearer {token}
```

---

## 🔐 Security Details

### JWT Token Flow
1. User registers/logs in with email + password
2. Backend hashes password with BCrypt
3. Backend generates JWT token (24-hour expiration)
4. Frontend stores token in localStorage
5. Frontend includes token in all requests: `Authorization: Bearer {token}`
6. Backend validates token signature on each request

### Token Structure
```
Header: { "alg": "HS512", "typ": "JWT" }
Payload: { "sub": userId, "email": email, "iat": issued_at, "exp": expiration }
Signature: HMAC-SHA512(secret_key)
```

### Password Security
- Passwords never stored in plaintext
- BCrypt hashing with 10 rounds
- Password verified using BCrypt.matches() on login

---

## 📚 Learning Path

This project teaches:
- **Spring Boot & Spring Security** - Enterprise-grade authentication
- **JWT Tokens** - Stateless authentication for scalable systems
- **Database Design** - Entity relationships, JPA/Hibernate
- **REST API Design** - Clean, RESTful endpoint design
- **React & TypeScript** - Modern frontend development
- **Full-stack Architecture** - Backend + frontend integration

---

## 🎯 Milestone Roadmap

| # | Milestone | Status | Learning Focus |
|---|-----------|--------|---|
| 1 | Authentication System | ✅ Complete | Spring Security, JWT, password hashing |
| 2 | Boards & Ownership | ⏳ Next | One-to-Many relationships, access control |
| 3 | Team Collaboration | 🔄 Planned | Many-to-Many relationships, invitations |
| 4 | Real-Time Updates | 🔄 Planned | WebSocket, event broadcasting |
| 5 | Polish & UX | 🔄 Planned | DnD improvements, accessibility |
| 6 | Production Ready | 🔄 Planned | Validation, error handling, tests |
| 7 | Docker | 🔄 Planned | Containerization, local dev setup |
| 8 | AWS Deployment | 🔄 Planned | Cloud infrastructure, CI/CD |

---

## 🧪 Testing the API

### Option 1: Using curl

```bash
# Register
curl -X POST http://localhost:8080/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"pass123","name":"Test User"}'

# Login
curl -X POST http://localhost:8080/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"pass123"}'

# Get tasks (with token)
curl -X GET http://localhost:8080/api/tasks \
  -H "Authorization: Bearer {your-token-here}"
```

### Option 2: Using Postman
1. Register user at `POST /api/auth/register`
2. Copy the token from response
3. Set `Authorization` header to `Bearer {token}` for protected endpoints

---

## 📝 Environment Variables

Create `.env` files for sensitive config (not committed):

**Backend** (`backend/src/main/resources/application.properties`):
```properties
jwt.secret=your-secret-key-min-32-chars
jwt.expiration=86400000  # 24 hours in milliseconds
```

**Frontend** (`.env`):
```
VITE_API_URL=http://localhost:8080
```

---

## 🤝 Contributing

This is a learning project. Feel free to:
- Add features from the roadmap
- Improve code quality
- Add tests
- Optimize performance

---

## 📚 Resources

- [Spring Security Docs](https://spring.io/projects/spring-security)
- [JWT.io](https://jwt.io) - JWT debugger & info
- [Spring Data JPA Guide](https://spring.io/guides/gs/accessing-data-jpa/)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## 👨‍💻 Author

Mariam Touré

Building a full-stack, production-ready task management system as a learning project.

---

## 📄 License

MIT
