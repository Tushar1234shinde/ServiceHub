# Technical Architecture Document

## System Overview
ServiceHub is a two-tier architecture composed of:
- Frontend: React 18 application served by Vite.
- Backend API: Spring Boot 3 application exposing REST endpoints.
- Database: PostgreSQL as the primary relational datastore.

The frontend communicates with the backend using HTTP requests against a REST API. Authentication is handled via JWT tokens produced by the backend and stored in browser local storage.

## Backend Architecture

### Technology Stack
- Java 17
- Spring Boot 3
- Spring Security
- Spring Data JPA
- PostgreSQL
- JSON Web Tokens (JWT)
- Springdoc OpenAPI for API documentation

### Key Modules
- `auth`: user registration, login, refresh token
- `services`: public and authenticated service listing management
- `vendors`: vendor profile, analytics, works, and reviews
- `clients`: saved services for client users
- `orders`: order creation, retrieval, and status updates
- `payments`: escrow creation and release
- `conversations`: message threads between clients and vendors
- `admin`: user management, transactions, reports, and reviews

### Security
- JWT authentication with `Authorization: Bearer <token>` headers
- Stateless sessions using `SessionCreationPolicy.STATELESS`
- Role-based authorization via Spring Security and `@PreAuthorize`
- Public routes: `/auth/**`, `/swagger-ui/**`, `/v3/api-docs/**`, plus GETs for `/services/**`, `/reviews/**`, `/marketplace/**`, `/vendors/public/**`
- Admin-only routes: `/admin/**`

### Data Model
The relational model includes:
- `users`: user identity, role, status, profile image
- `vendors`: vendor-specific profile, verification, rating, earnings
- `services`: vendor service listings
- `service_pricing_options`: service level pricing modes
- `service_material_options`: optional service material add-ons
- `orders`: client booking orders with status workflow
- `payments`: payment/escrow records per order
- `transactions`: ledger entries for financial tracking
- `reviews`: order-based vendor reviews
- `review_replies`: vendor replies to reviews
- `vendor_works`: vendor portfolio/gallery items
- `refresh_tokens`: persisted refresh tokens for session refresh
- `conversations` and `conversation_messages`: messaging threads

### API Design
- RESTful endpoint patterns grouped by resource
- JSON request and response payloads
- Consistent error handling via global exception handling
- Example URL patterns:
  - `POST /auth/login`
  - `GET /services`
  - `POST /orders`
  - `GET /vendors/public/{vendorId}`
  - `GET /vendor/me/works`
  - `GET /admin/users`

### Deployment Considerations
- Backend runs on `http://localhost:8080` by default
- Frontend runs on `http://localhost:5173`
- `frontend/.env` should point `VITE_API_URL` to the backend host
- Database credentials and JWT secret can be configured via environment variables and `application.yml`

## Frontend Architecture

### Technology Stack
- React 18
- Vite 5
- React Router DOM 6
- Lucide React for icons
- Three.js for interactive landing animations
- Native fetch for API calls

### Key Components
- `App.jsx`: app routes and protected route wrapper
- `AuthContext.jsx`: authentication state and session persistence
- `services/api.js`: API helper functions and auth header injection
- `ProtectedRoute.jsx`: route guard for authenticated and role-bound pages
- `roleRoutes.js`: role-based landing path mapping

### Page Structure
- Public pages: marketplace, gallery, services, about, vendor profile, login, register
- Client workspace: `/client`, `/client/chat`
- Vendor workspace: `/vendor/*` with nested pages for overview, profile, services, gallery, chat, orders, earnings
- Admin dashboard: `/admin`

### Data Flow
- User authenticates via `/auth/login` or `/auth/register`
- JWT access token saved in local storage and passed to API calls
- Protected API requests use `Authorization: Bearer <token>` headers
- Service and vendor listing pages fetch public data without auth
- Authenticated workspaces load user-specific dashboard data after login

## Infrastructure Notes
- CORS configured on backend using allowed origins from `AppProperties`
- Frontend supports Cloudinary file uploads when Cloudinary env vars are configured
- Backend uses BCrypt password hashing and JWT secret keys loaded from config

## Extensibility
The current architecture supports future extensions such as:
- payment gateway integration
- admin reporting workflows
- vendor social posts and media
- richer order negotiation and dispute resolution
- push notifications or email alerts
