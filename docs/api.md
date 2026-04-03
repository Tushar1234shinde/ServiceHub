# API Documentation

Base URL: `http://localhost:8080`

## Authentication

### `POST /auth/register`

```json
{
  "name": "Asha Client",
  "email": "asha@example.com",
  "password": "Password@123",
  "role": "CLIENT"
}
```

Vendor example:

```json
{
  "name": "Ravi Vendor",
  "email": "ravi@example.com",
  "password": "Password@123",
  "role": "VENDOR",
  "bio": "Full stack freelancer"
}
```

### `POST /auth/login`

```json
{
  "email": "asha@example.com",
  "password": "Password@123"
}
```

### `POST /auth/refresh`

```json
{
  "refreshToken": "jwt-refresh-token"
}
```

## Services

### `GET /services`

Optional query params: `search`, `category`

### `POST /services`

```json
{
  "title": "Website Development",
  "description": "Responsive React and Spring Boot build",
  "price": 450.00,
  "category": "Development"
}
```

## Orders

### `POST /orders`

```json
{
  "serviceId": 1
}
```

### `PUT /orders/{id}/status`

```json
{
  "status": "SUBMITTED",
  "submissionNote": "Initial delivery uploaded"
}
```

## Payments

### `POST /payments/create`

```json
{
  "orderId": 1,
  "idempotencyKey": "escrow-ord-1-001"
}
```

### `POST /payments/release`

```json
{
  "orderId": 1
}
```

## Reviews

### `POST /reviews`

```json
{
  "orderId": 1,
  "rating": 5,
  "comment": "Excellent delivery and communication."
}
```

## Order State Machine

- `CREATED`
- `PAID`
- `IN_PROGRESS`
- `SUBMITTED`
- `APPROVED`
- `COMPLETED`
- `CANCELLED`
- `DISPUTE`
