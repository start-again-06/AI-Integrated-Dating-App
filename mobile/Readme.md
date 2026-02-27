# AI Date Planner – Frontend
AI-Powered Mobile Experience for Personalized Date Planning

## Overview

This repository contains the frontend mobile application for an AI-powered Date Planning platform.  
The app provides users with a simple, guided interface to generate, evaluate, and save personalized date plans using artificial intelligence.

The frontend is designed as a clean, secure, and user-centric mobile experience, abstracting away backend complexity while delivering fast, meaningful recommendations tailored to user intent.

The application focuses on clarity, trust, and usability, making AI-assisted planning feel natural and actionable rather than overwhelming.

---

## Core Idea

The AI Date Planner Frontend enables users to plan meaningful dates by combining:

- Secure authentication
- Structured preference input
- AI-generated recommendations
- User-driven plan selection
- Persistent plan history

The frontend acts as the decision-making layer, transforming raw AI output into an experience that feels intentional, safe, and easy to use.

---

## System Capabilities

### Authentication & Session Management
- Email-based login and registration
- Secure JWT storage using encrypted device storage
- Automatic session restoration (auto-login)
- Explicit logout and session clearing

### Date Planning Interface
- Guided form for collecting date preferences:
  - Location
  - Intent (casual / serious)
  - Budget range
  - Personal interests
- One-tap AI plan generation
- Clear presentation of multiple AI-generated options

---

### Budget Modeling & Constraints

The budget input is treated as a **bounded numerical constraint** rather than a fixed value.

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

Plans that slightly exceed the upper bound may still be surfaced with an explanation, allowing the user to trade off cost versus experience quality.

This formulation enables:
- Flexible budget handling
- Transparent cost reasoning
- Consistent filtering of AI-generated plans
- Clear user control over financial constraints

---

### Plan Selection & Persistence
- User-driven acceptance of a chosen plan
- Explicit confirmation of saved plans
- Persistent storage of accepted plans via backend integration

### History & Recall
- Chronological view of past plans
- Accepted vs non-accepted plan visibility
- Consistent data across sessions and app restarts

### User Experience
- Minimal, distraction-free UI
- Clear action hierarchy (Generate → Review → Accept)
- Predictable navigation flow
- Mobile-first layout optimized for real-world usage

---

## High-Level Architecture

The frontend follows a layered mobile architecture optimized for clarity, scalability, and maintainability.

### Core Layers

**UI Layer**
- Screens for Login, Home, Plan Creation, and History
- Stateless, reusable UI components
- Navigation-driven user flow

**Service Layer**
- Centralized API interaction logic
- Authentication-aware request handling
- Clear separation between UI and backend communication

**State & Session Layer**
- Local session state management
- Secure token persistence
- Auto-login and logout control

**Utility Layer**
- Secure storage helpers
- Reusable async utilities
- Error-safe abstractions

This structure ensures the frontend remains simple to reason about, even as features grow.

---

## Design Principles

- User-first AI experience
- Explicit user control over AI decisions
- No hidden automation or opaque behavior
- Clear separation of concerns
- Minimal but scalable abstractions
- Mobile-native interaction patterns

---

## Workflow Summary

1. User opens the mobile application  
2. User logs in or registers  
3. Session is securely stored on-device  
4. User enters date preferences  
5. AI generates structured date plans  
6. Plans are filtered using budget constraints  
7. User reviews and accepts a plan  
8. Plan is saved and visible in history  
9. App restores session automatically on restart  

---

## Technology Stack

- Platform: React Native (Expo)
- Language: JavaScript
- Navigation: React Navigation
- Networking: Axios
- Security: Expo SecureStore (encrypted storage)
- Architecture Style: Layered mobile application

---

## Intended Use Cases

- AI-assisted lifestyle planning
- Consumer AI product demonstrations
- Product management case studies
- Portfolio-grade mobile applications
- AI + UX experimentation
- Hackathon-ready AI consumer apps

---

## MVP Status

- Core user journey implemented
- Authentication and persistence complete
- AI integration functional
- End-to-end flow validated
- Ready for demo, iteration, or deployment

---

## Future Enhancements

- Probabilistic cost estimation
- Dynamic budget relaxation based on user behavior
- Cost–experience optimization objectives
- UI/UX polish and animations
- Push notifications
- App Store / Play Store distribution

---

## License

This project is intended for educational, demonstration, and portfolio use.
