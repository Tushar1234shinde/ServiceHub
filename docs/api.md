# API Documentation

Base URL: `http://localhost:8080`

## Authentication

### `POST /auth/register`

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

Returns the real homepage aggregate payload:
- top vendors
- recent vendor works
- testimonial reviews

## Services

### `GET /services`

Optional query params: `search`, `category`

### `POST /services`

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

## Vendor Workspace

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

### `PUT /orders/{id}/status`

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

### `POST /reviews/{reviewId}/reply`

```json
{
  "comment": "Thank you for the detailed feedback."
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
