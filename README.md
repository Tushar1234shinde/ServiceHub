# Full Stack Freelancing Marketplace Platform with Escrow

Production-oriented starter platform for a Fiverr/Upwork-style marketplace where clients book vendor services, payments are held in escrow, and admins supervise releases.

## Stack

- Backend: Spring Boot 3, Java 17, Spring Security, JWT, JPA/Hibernate
- Frontend: React 18, Vite, React Router
- Database: PostgreSQL by default, MySQL-compatible dependency included
- Payments: mock escrow flow designed for Stripe/Razorpay adapter integration

## Repository Layout

- `backend/` Spring Boot REST API
- `frontend/` React application
- `db/schema.sql` SQL schema

## Backend Setup

1. Create a PostgreSQL database named `marketplace_db`.
2. Update environment variables if needed:
   - `DB_URL`
   - `DB_USERNAME`
   - `DB_PASSWORD`
   - `DB_DRIVER`
   - `JWT_SECRET`
   - `ALLOWED_ORIGINS`
3. Start the backend:

```bash
cd backend
mvn spring-boot:run '-Dspring-boot.run.profiles=local'
```

Default admin account:

- Email: `admin@marketplace.local`
- Password: `Admin@123`

Swagger UI:

- `http://localhost:8081/swagger-ui.html` (when running local profile)

## Frontend Setup

1. Install dependencies:

```bash
cd frontend
npm install
```

2. Optional env file:

```bash
echo VITE_API_URL=http://localhost:8081 > .env
```

3. Start the app:

```bash
npm run dev
```

## Escrow Flow

1. Client registers and books a service.
2. Client funds escrow through `POST /payments/create`.
3. Vendor accepts the order and moves it to `IN_PROGRESS`.
4. Vendor submits work.
5. Client approves the submission.
6. Admin releases escrow through `POST /payments/release`.
7. System writes debit/credit records to the transaction ledger.

## API Summary

### Auth

- `POST /auth/register`
- `POST /auth/login`
- `POST /auth/refresh`

### Services

- `GET /services`
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
- `GET /reviews?vendorId={vendorId}`

### Admin

- `GET /admin/users`
- `PATCH /admin/vendors/{userId}/approve`
- `PATCH /admin/users/{userId}/suspend`
- `GET /admin/transactions`

## Production Notes

- Replace the mock payment implementation with a dedicated gateway adapter service for Stripe/Razorpay webhooks.
- Move refresh token storage to Redis or a hardened token store for horizontal scale.
- Use Flyway/Liquibase instead of `ddl-auto=update` in production.
- Add tests for escrow transitions, idempotency, and authorization boundaries before deployment.


