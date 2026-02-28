# AI Integrated Dating App – Backend
Secure API & AI Orchestration Layer for Intelligent Date Planning

## Overview
This repository contains the backend infrastructure for the AI Integrated Dating App.  
The backend is responsible for secure authentication, orchestration of AI-powered date plan generation, business logic enforcement, and persistent data storage.

It acts as the system’s source of truth, ensuring that all AI outputs are validated, structured, filtered, and safely stored before being exposed to the mobile client.

The backend is designed to be secure, scalable, and explainable, prioritizing clarity of data flow and explicit user control over AI-driven decisions.

---

## Core Responsibilities
The backend enables intelligent date planning by combining:

- Secure user authentication & authorization  
- Structured preference intake and validation  
- AI-based date plan generation  
- Budget constraint enforcement  
- Persistent plan storage and retrieval  

It serves as the control layer between the mobile frontend, AI services, and the database.

image alt

---

## System Capabilities

### Authentication & Authorization
- Email-based user registration and login  
- JWT-based authentication middleware  
- Secure request validation for protected routes  
- User-scoped access control for plans and history  

### Date Plan Generation API
- Receives structured date preferences from the client:
  - Location
  - Intent
  - Budget range
  - Interests
- Transforms input into AI-ready prompts  
- Invokes AI service for structured plan generation  
- Normalizes AI output into deterministic JSON  

### Budget Validation & Filtering
- Enforces budget constraints on AI-generated plans  
- Allows controlled relaxation with explicit reasoning  
- Ensures consistency across all stored plans  

---

## Budget Modeling Logic
Budget is modeled as a bounded interval rather than a fixed value.

Let:
- $\( B_{min} \)$ = minimum acceptable budget  
- $\( B_{max} \)$ = maximum acceptable budget  

The effective budget constraint is:

$\[B = [B_{min}, B_{max}]\]$

Each date plan consists of activities $\( a_i \)$, each with estimated cost $\( c_i \)$.

Total plan cost:

$\[C_{plan} = \sum_{i=1}^{n} c_i\]$

A plan is considered valid if:

$\[B_{min} \leq C_{plan} \leq B_{max}\]$

Plans slightly exceeding $\( B_{max} \)$ may be stored with metadata explaining the trade-off.

---

## Plan Lifecycle Management

### Plan Creation
- AI-generated plans are stored with:
  - `accepted = false`
  - Full structured plan JSON
  - User association  

### Plan Acceptance
- Users explicitly accept a plan  
- Backend updates plan state to `accepted = true`  
- Accepted plans become immutable historical records  

### Plan History
- Fetch all plans scoped to authenticated user  
- Maintain chronological ordering  
- Distinguish accepted vs non-accepted plans  

---

## Data Model

### USER
| Field | Type |
|------|------|
| id | string |
| email | string |
| location | string |
| intent | string |
| createdAt | datetime |

### DATEPLAN
| Field | Type |
|------|------|
| id | string |
| userId | string |
| planJson | json |
| accepted | boolean |
| createdAt | datetime |

---

## High-Level Architecture
The backend follows a layered architecture designed for clarity, security, and maintainability.

![image alt](

---

## Core Layers

### API Layer
- Express.js REST APIs  
- Route-based separation of concerns  
- Request validation & response normalization  

### Authentication Layer
- JWT middleware  
- Token verification and user extraction  
- Route-level access control  

### AI Orchestration Layer
- Prompt construction and validation  
- AI service invocation  
- Structured response parsing  
- Safety and consistency checks  

### Persistence Layer
- Prisma ORM for database interaction  
- PostgreSQL as primary data store  
- Strong relational integrity  

This layered approach ensures predictable data flow and minimizes coupling between system components.

---

## API Endpoints

### Authentication
- `POST /auth/register`
- `POST /auth/login`

### Date Planning
- `POST /date-plan`  
  Generates AI-powered date plans

- `POST /date-plan/accept`  
  Accepts a generated plan

- `GET /date-plan/history`  
  Retrieves user plan history

All protected routes require a valid JWT.

---

## Technology Stack
- **Runtime:** Node.js  
- **Framework:** Express.js  
- **Authentication:** JWT  
- **AI Integration:** LLM-based service  
- **Database:** PostgreSQL  
- **ORM:** Prisma  
- **Architecture Style:** Layered backend application  

---

## Security Considerations
- No AI output is trusted blindly  
- All requests are authenticated and user-scoped  
- Sensitive data never exposed to AI services  
- Explicit acceptance required before persistence  

---

## Intended Use Cases
- AI-powered consumer backend systems  
- Secure orchestration of generative AI  
- Product-grade API architecture  
- Portfolio and system design demonstrations  
- Hackathon-ready backend infrastructure  

---

## MVP Status
- Authentication implemented  
- AI plan generation functional  
- Budget enforcement in place  
- Persistent storage validated  
- End-to-end API flow tested  

---

## Future Enhancements
- Rate limiting & abuse prevention  
- AI response confidence scoring  
- Cost optimization and caching  
- Webhooks & async processing  
- Observability & monitoring  

---

## License
This backend is intended for educational, demonstration, and portfolio use.
