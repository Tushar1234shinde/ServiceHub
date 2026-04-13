# ServiceHub

ServiceHub is a full-stack home services marketplace built with Spring Boot and React. It helps clients discover trusted vendors for painting, plastering, window making, POP work, renovation, cleaning, and maintenance services.

Live link : https://service-hub-self-eta.vercel.app

The app includes:
- A public landing page for logged-out users
- Role-based authentication for `CLIENT`, `VENDOR`, and `ADMIN`
- Service listing, search, filtering, and saved services
- Order booking with a mock escrow payment flow
- Vendor dashboards for managing services and jobs
- Client dashboards for reviews and saved providers
- Admin tools for vendor approval and escrow release

## Tech Stack

- Backend: Java 17, Spring Boot 3, Spring Security, JWT, Spring Data JPA
- Frontend: React 18, Vite, React Router, Three.js
- Database: PostgreSQL
- API Docs: Springdoc Swagger UI

## Project Structure

- `backend/` Spring Boot REST API
- `frontend/` React frontend
- `db/schema.sql` database schema reference
- `docs/api.md` API request examples

## Main User Flows

### Logged-out user
- Sees the animated ServiceHub home page at `/`
- Can browse the landing sections and navigate to login or register

### Client
- Browse and filter live services
- Save favorite services
- Book a vendor and fund escrow
- Approve completed work
- Leave reviews

### Vendor
- Create and edit service listings
- Accept orders and submit work
- View vendor analytics

### Admin
- Approve vendors
- View users and transaction ledger
- Release escrow after client approval

## Default Local URLs

- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:8080`
- Swagger UI: `http://localhost:8080/swagger-ui.html`

Note:
- There is also a local backend profile that runs on port `8081`.
- If you use port `8081`, update `frontend/.env` to `VITE_API_URL=http://localhost:8081`.

## Prerequisites

Before running the project, install:
- Java 17
- Maven
- Node.js 18+ and npm
- PostgreSQL 14+ recommended

## Database Setup

1. Create a PostgreSQL database named `marketplace_db`.
2. Keep the default credentials from `backend/src/main/resources/application.yml`, or override them with environment variables.

Default backend database settings:
- Database URL: `jdbc:postgresql://localhost:5432/marketplace_db`
- Username: `postgres`
- Password: `postgres`

## Backend Configuration

The backend reads these environment variables if you want to override defaults:
- `DB_URL`
- `DB_USERNAME`
- `DB_PASSWORD`
- `DB_DRIVER`
- `JWT_SECRET`
- `ALLOWED_ORIGINS`
- `SERVER_PORT`

Default values are already defined in `backend/src/main/resources/application.yml`, so you can run locally without setting them if your database matches the defaults.

## How To Run The Entire Project

### 1. Start PostgreSQL

Make sure PostgreSQL is running and the `marketplace_db` database exists.

### 2. Run the backend

From the project root:

```bash
cd backend
mvn spring-boot:run
```

The backend will start on:

```text
http://localhost:8080
```

Optional local profile on port `8081`:

```bash
cd backend
mvn spring-boot:run "-Dspring-boot.run.profiles=local"
```

### 3. Configure the frontend API URL

The frontend currently uses:

```env
VITE_API_URL=http://localhost:8080
```

This is already set in `frontend/.env`.

If you run the backend on `8081`, change it to:

```env
VITE_API_URL=http://localhost:8081
```

### 4. Install frontend dependencies

```bash
cd frontend
npm install
```

### 5. Run the frontend

```bash
cd frontend
npm run dev
```

### 6. Open the app

Visit:

```text
http://localhost:5173
```

## Default Admin Account

A default admin user is automatically seeded on backend startup:
- Email: `admin@marketplace.local`
- Password: `Admin@123`

## Useful Commands

### Backend

```bash
cd backend
mvn spring-boot:run
```

```bash
cd backend
mvn test
```

### Frontend

```bash
cd frontend
npm install
```

```bash
cd frontend
npm run dev
```

```bash
cd frontend
npm run build
```

## Key API Areas

### Auth
- `POST /auth/register`
- `POST /auth/login`
- `POST /auth/refresh`

### Services
- `GET /services`
- `GET /services/mine`
- `POST /services`
- `PUT /services/{id}`

### Orders
- `POST /orders`
- `GET /orders`
- `PUT /orders/{id}/status`

### Payments
- `POST /payments/create`
- `POST /payments/release`
- `GET /payments/order/{orderId}`

### Reviews
- `POST /reviews`

### Admin
- `GET /admin/users`
- `PATCH /admin/vendors/{userId}/approve`
- `GET /admin/transactions`

## Notes

- Escrow is currently a mock flow designed for later Stripe or Razorpay integration.
- The backend uses `ddl-auto=update` for local development.
- Generated files like logs, `target/`, `dist/`, and `node_modules/` are now ignored by `.gitignore`.
