# AI Integrated Dating App  
AI-Powered Full-Stack Experience for Intelligent Dating & Personalized Date Planning

## Overview

This repository contains the complete full-stack implementation of an AI-powered Dating and Date Planning platform.  
The system combines a mobile-first frontend, a secure backend API, and an AI orchestration layer to generate, evaluate, and persist personalized date plans.

The application provides users with a guided, structured experience that abstracts away backend and AI complexity while delivering fast, meaningful, and budget-aware recommendations tailored to user intent.

The platform is designed with a strong emphasis on clarity, trust, and explicit user control, ensuring that AI-assisted dating feels intentional, transparent, and actionable rather than opaque or overwhelming.

---

## Core Idea

The AI Integrated Dating App enables users to plan meaningful dates by combining:

- Secure authentication
- Structured preference input
- AI-generated date recommendations
- User-driven plan selection
- Persistent plan history

Across the full stack, the system acts as a **decision-support platform**, transforming raw AI output into validated, explainable, and user-approved experiences.

---

## System Capabilities

### Authentication & Session Management
- Email-based login and registration
- JWT-based authentication
- Encrypted token storage on device
- Automatic session restoration (auto-login)
- Explicit logout and session clearing

### Date Planning Experience
- Guided preference collection:
  - Location
  - Intent (casual / serious)
  - Budget range
  - Personal interests
- One-tap AI-powered date plan generation
- Clear presentation of multiple structured AI-generated options
- Explicit user acceptance before persistence

---

## Budget Modeling & Constraints

The budget input is treated as a bounded numerical constraint rather than a fixed value.

Let the user-defined budget be represented as:

- **Lower bound:** $\( B_{min} \)$
- **Upper bound:** $\( B_{max} \)$

The effective budget interval is:

$\[B = [B_{min}, B_{max}]\]$

Each AI-generated plan consists of one or more activities $\( a_i \)$, each associated with an estimated cost $\( c_i \)$.

The total estimated plan cost is computed as:

$\[C_{plan} = \sum_{i=1}^{n} c_i\]$

A plan is considered **budget-feasible** if:

$\[B_{min} \leq C_{plan} \leq B_{max}\]$

Plans that slightly exceed the upper bound may still be surfaced with an explanation, allowing users to trade off cost versus experience quality.

This formulation enables:
- Flexible budget handling
- Transparent cost reasoning
- Deterministic filtering of AI-generated plans
- Explicit user control over financial constraints

---

## Plan Selection & Persistence

- User-driven acceptance of a chosen plan
- Explicit confirmation before saving
- Backend-enforced persistence of accepted plans

### History & Recall
- Chronological view of past plans
- Accepted vs non-accepted plan visibility
- Consistent data across sessions and app restarts

---

## User Experience

- Minimal, distraction-free UI
- Clear action hierarchy (Generate → Review → Accept)
- Predictable navigation flow
- Mobile-first layout optimized for real-world usage

---

## High-Level Architecture

The system follows a layered, full-stack architecture optimized for clarity, scalability, and maintainability.

```mermaid
flowchart LR
    Client[Mobile App (React Native)]
    subgraph Backend["Backend API (Node.js + Express)"]
        Auth[JWT Auth Middleware]
        Routes[API Routes]
        AIOrch[AI Orchestration]
        Prisma[Prisma ORM]
    end

    AI[AI Service]
    DB[(PostgreSQL)]

    Client -->|HTTPS + JWT| Auth
    Auth --> Routes
    Routes --> AIOrch
    AIOrch --> AI
    Routes --> Prisma
    Prisma --> DB
```

---

## Core Layers

### Mobile Frontend Layer
- Screens for Login, Home, Plan Creation, and History
- Stateless, reusable UI components
- Navigation-driven user flow

### Backend API Layer
- RESTful APIs using Express.js
- JWT-protected routes
- Request validation and response normalization

### AI Orchestration Layer
- Prompt construction and validation
- AI invocation and structured response parsing
- Budget and consistency enforcement

### Persistence Layer
- PostgreSQL database
- Prisma ORM
- User-scoped plan storage and retrieval

This structure ensures the system remains simple to reason about, even as features and scale increase.

---

## Design Principles

- User-first AI experience
- Explicit user control over AI decisions
- No blind trust in AI outputs
- Clear separation of concerns
- Minimal but scalable abstractions
- Mobile-native interaction patterns

---

## Workflow Summary

1. User opens the mobile application  
2. User logs in or registers  
3. Session is securely stored on-device  
4. User enters dating preferences  
5. Backend orchestrates AI plan generation  
6. Plans are filtered using budget constraints  
7. User reviews and accepts a plan  
8. Plan is saved and visible in history  
9. Session is restored automatically on restart  

---

## Technology Stack

### Frontend
- Platform: React Native (Expo)
- Language: JavaScript
- Navigation: React Navigation
- Networking: Axios
- Security: Expo SecureStore

### Backend
- Runtime: Node.js
- Framework: Express.js
- Authentication: JWT
- Database: PostgreSQL
- ORM: Prisma
- AI Integration: LLM-based service

---

## Intended Use Cases

- AI-assisted lifestyle and dating planning
- Consumer AI product demonstrations
- Product management and system design case studies
- Portfolio-grade full-stack applications
- AI + UX experimentation
- Hackathon-ready AI consumer products

---

## MVP Status

- Core user journey implemented
- Authentication and persistence complete
- AI integration functional
- Budget enforcement validated
- End-to-end flow verified
- Ready for demo, iteration, or deployment

---

## Future Enhancements

- Probabilistic cost estimation
- Dynamic budget relaxation based on user behavior
- Cost–experience optimization objectives
- UI/UX polish and animations
- Push notifications
- App Store / Play Store distribution
- Production deployment and monitoring

---

## License

This project is intended for educational, demonstration, and portfolio use.
