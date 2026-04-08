# API Documentation

Base URL: `http://localhost:8080`

## Authentication

### `POST /auth/register`

Client example:

```json
{
  "name": "Asha Client",
  "email": "asha@example.com",
  "password": "Password@123",
  "role": "CLIENT",
  "profileImage": "data:image/png;base64,..."
}
```

Vendor example:

```json
{
  "name": "Ravi Vendor",
  "email": "ravi@example.com",
  "password": "Password@123",
  "role": "VENDOR",
  "bio": "Painting and renovation specialist",
  "logoImage": "data:image/png;base64,..."
}
```

### `POST /auth/login`

```json
{
  "email": "asha@example.com",
  "password": "Password@123"
}
```

## Marketplace Homepage

### `GET /marketplace/homepage`

Returns:
- top vendors
- recent vendor works
- testimonial reviews

## Services

### `GET /services`

Optional query params:
- `search`
- `category`

### `GET /services/mine`

Authenticated vendor service list from the older service module.

### `POST /services`

Creates a service with initial pricing/material options.

```json
{
  "title": "Premium wall painting",
  "description": "Interior and exterior painting with inspection and cleanup.",
  "price": 180.00,
  "category": "Painting",
  "thumbnailImage": "data:image/png;base64,...",
  "pricingOptions": [
    {
      "label": "Without material",
      "price": 180.00,
      "materialIncluded": false,
      "defaultOption": true,
      "sortOrder": 0
    },
    {
      "label": "With material",
      "price": 260.00,
      "materialIncluded": true,
      "defaultOption": false,
      "sortOrder": 1
    }
  ],
  "materialOptions": [
    {
      "name": "Premium sealer",
      "description": "Moisture-resistant coat",
      "priceAdjustment": 35.00,
      "defaultSelected": false,
      "sortOrder": 0
    }
  ]
}
```

## Vendor Public Profile

### `GET /vendors/public/{vendorId}`

Returns:
- vendor profile summary
- live services
- published works
- client reviews

## Vendor Public Workspace Features

### `GET /vendors/me/analytics`

### `GET /vendors/me/works`

### `POST /vendors/me/works`

```json
{
  "title": "Villa repaint and texture finish",
  "description": "Exterior repaint with weatherproof coating and balcony repair.",
  "category": "Painting",
  "image": "data:image/png;base64,...",
  "featured": true
}
```

### `PUT /vendors/me/works/{workId}`

### `DELETE /vendors/me/works/{workId}`

### `GET /vendors/me/reviews`

## Vendor Portal API

All endpoints below require an authenticated `VENDOR` user and enforce vendor ownership.

### `GET /api/vendor/dashboard`

Returns:
- vendor profile summary
- overview stats
- recent orders

### `GET /api/vendor/me`

### `PUT /api/vendor/me`

```json
{
  "bio": "Painting and surface preparation specialist.",
  "logoImage": "data:image/png;base64,..."
}
```

### `GET /api/vendor/services`

### `GET /api/vendor/services/{id}`

### `POST /api/vendor/services`

Creates a service and its initial options.

### `PUT /api/vendor/services/{id}`

Updates only core service fields. Pricing and material options must be changed through their dedicated endpoints.

```json
{
  "title": "Premium wall painting",
  "description": "Updated copy for the listing.",
  "price": 180.00,
  "category": "Painting",
  "thumbnailImage": "data:image/png;base64,...",
  "pricingOptions": null,
  "materialOptions": null
}
```

### `DELETE /api/vendor/services/{id}`

### `GET /api/vendor/services/{id}/pricing-options`

### `POST /api/vendor/services/{id}/pricing-options`

### `PUT /api/vendor/pricing-options/{id}`

### `DELETE /api/vendor/pricing-options/{id}`

### `PATCH /api/vendor/pricing-options/reorder`

```json
{
  "items": [
    { "id": 10, "sortOrder": 0 },
    { "id": 11, "sortOrder": 1 }
  ]
}
```

### `GET /api/vendor/services/{id}/material-options`

### `POST /api/vendor/services/{id}/material-options`

### `PUT /api/vendor/material-options/{id}`

### `PATCH /api/vendor/material-options/{id}/status`

```json
{
  "active": true
}
```

### `PATCH /api/vendor/material-options/reorder`

### `GET /api/vendor/orders`

Optional query param:
- `status`

### `GET /api/vendor/orders/{id}`

### `PATCH /api/vendor/orders/{id}/status`

```json
{
  "status": "IN_PROGRESS",
  "statusNote": "Crew assigned and work started."
}
```

### `PATCH /api/vendor/orders/{id}/note`

```json
{
  "statusNote": "Need one more day for drying and touch-up."
}
```

### `PATCH /api/vendor/orders/{id}/work-submission`

```json
{
  "workSubmission": "Final coat completed and site cleaned."
}
```

### `GET /api/vendor/earnings`

Returns:
- total earnings
- completed-order breakdown

## Orders

### `POST /orders`

```json
{
  "serviceId": 1,
  "pricingOptionId": 3,
  "materialOptionIds": [5, 7],
  "preferredDate": "2026-04-20",
  "clientNote": "Living room and hallway need repainting.",
  "attachments": [
    {
      "imageData": "data:image/png;base64,...",
      "caption": "Current wall condition"
    }
  ]
}
```

### `GET /orders`

Returns orders scoped by role:
- client: own orders
- vendor: assigned orders
- admin: all orders

### `PUT /orders/{id}/status`

Legacy shared order-status endpoint.

```json
{
  "status": "SUBMITTED",
  "submissionNote": "Final work uploaded for review",
  "statusNote": "Please inspect the finish and approve if it looks good."
}
```

Vendor decline example:

```json
{
  "status": "CANCELLED",
  "statusNote": "Unable to serve this area on the requested date."
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

Admin only.

```json
{
  "orderId": 1
}
```

### `GET /payments/order/{orderId}`

Only the client who paid, the assigned vendor, or an admin can view this payment.

## Reviews

### `POST /reviews`

```json
{
  "orderId": 1,
  "rating": 5,
  "comment": "Excellent delivery and communication."
}
```

### `POST /reviews/{reviewId}/reply`

```json
{
  "comment": "Thank you for the detailed feedback."
}
```

## Saved Services

### `GET /clients/me/saved-services`

### `GET /clients/me/saved-service-ids`

### `POST /clients/me/saved-services/{serviceId}`

### `DELETE /clients/me/saved-services/{serviceId}`

## Admin

### `GET /admin/users`

### `PATCH /admin/vendors/{userId}/approve`

Only vendor accounts can be approved.

### `PATCH /admin/users/{userId}/suspend`

### `GET /admin/transactions`

## Order State Machine

- `CREATED`
- `PAID`
- `IN_PROGRESS`
- `SUBMITTED`
- `APPROVED`
- `COMPLETED`
- `CANCELLED`
- `DISPUTE`
