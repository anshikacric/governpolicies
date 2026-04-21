# 🎓 StudentFirst — Government Policies for Students

This repository contains a modern student-policy portal frontend and a production-ready backend API.

## Backend (Implemented)

The backend is now available in `backend/` with:
- Node.js + Express REST API
- MongoDB + Mongoose data model
- Category + search filtering
- Seed script with starter policies for all required categories

### API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/health` | Health check |
| GET | `/policies` | List policies (supports `category` and `search` query params) |
| POST | `/policies` | Create a new policy |
| GET | `/policies/:category` | List policies by exact category |

### Policy Categories

- Scholarships
- Skill Development Programs
- Internship Schemes
- Digital Education Policies
- Loan & Financial Aid Schemes

### Backend Structure

```text
backend/
├── .env.example
├── package.json
└── src
    ├── app.js
    ├── server.js
    ├── config
    │   └── db.js
    ├── controllers
    │   └── policyController.js
    ├── data
    │   └── seedPolicies.js
    ├── models
    │   └── Policy.js
    ├── routes
    │   └── policyRoutes.js
    └── scripts
        └── seed.js
```

## Run Backend Locally

### 1) Install dependencies

```bash
cd backend
npm install
```

### 2) Configure environment

```bash
cp .env.example .env
# Update MONGO_URI if needed
```

### 3) Seed database (optional but recommended)

```bash
npm run seed
```

### 4) Start server

```bash
npm run dev
```

Server runs at `http://localhost:5000` by default.

## Sample Requests

```bash
curl http://localhost:5000/health
curl http://localhost:5000/policies
curl "http://localhost:5000/policies?category=Scholarships"
curl "http://localhost:5000/policies?search=internship"
```
