# Release QA Checklist

## Test Environment

1. Run backend and frontend locally.
2. Prepare three accounts: `CLIENT`, `VENDOR`, and `ADMIN`.
3. Use separate browser sessions for each role.
4. Seed at least one approved vendor and one live service if you want faster regression checks.

## Guest Checks

1. Open the homepage.
2. Browse services without logging in.
3. Search by keyword.
4. Filter by category.
5. Open a vendor public profile.
6. Attempt to access `/dashboard` and `/vendor` directly and confirm redirect to login.
7. Attempt to start booking and confirm login gating.

## Authentication Checks

1. Register a client.
2. Register a vendor.
3. Log in as client and confirm normal dashboard flow.
4. Log in as vendor and confirm redirect to `/vendor`.
5. Log out and log back in.
6. Verify unauthorized routes are blocked for unauthenticated users.

## Admin Checks

1. Open user list.
2. Verify vendor accounts appear correctly.
3. Approve a pending vendor account.
4. Confirm non-vendor approval is rejected.
5. Suspend a user.
6. Open transaction list.
7. Confirm vendor and client cannot access admin endpoints.

## Vendor Checks

### Overview
1. Open `/vendor`.
2. Verify profile summary, verification, rating, earnings, service counts, and recent orders.

### Profile
1. Open `/vendor/profile`.
2. Update bio.
3. Update logo image.
4. Verify rating, verification, role, and total earnings remain read-only.

### Services
1. Open `/vendor/services`.
2. Create a new service.
3. Confirm it appears in the service list.
4. Edit only core service fields and save.
5. Confirm pricing/material options remain intact after edit.
6. Delete the service and confirm removal.

### Pricing Options
1. Create a pricing option.
2. Create a second pricing option.
3. Mark one as default.
4. Reorder options.
5. Delete one option.
6. Confirm deleting the last remaining pricing option is blocked.

### Material Options
1. Create a material option.
2. Edit the material option.
3. Reorder material options.
4. Deactivate and reactivate a material option.

### Orders
1. Open `/vendor/orders`.
2. Filter by status.
3. Add a status note.
4. Move an order from `PAID` to `IN_PROGRESS`.
5. Submit work from `IN_PROGRESS` to `SUBMITTED`.
6. Cancel an eligible order and confirm rule enforcement.
7. Verify attachments and client notes display correctly.

### Earnings
1. Open `/vendor/earnings`.
2. Confirm total earnings value renders.
3. Confirm completed-order breakdown renders.

## Client Checks

### Marketplace
1. Browse live services.
2. Save a service.
3. Unsave the service.
4. Open vendor public profile.

### Booking
1. Open booking panel for a service.
2. Choose pricing option.
3. Choose material options.
4. Add preferred date.
5. Add client note.
6. Upload attachments.
7. Submit order.
8. Fund escrow.

### Orders
1. Open client dashboard.
2. Verify new order appears.
3. Wait for vendor to submit work.
4. Approve submitted work.
5. Submit review if enabled.

## Payment Checks

1. Client funds escrow only for own order.
2. Duplicate idempotency key for same order returns consistent result.
3. Duplicate idempotency key for another order is rejected.
4. Admin releases payment only after `APPROVED` order state.
5. Client, vendor, and admin can view payment for the relevant order.
6. Unrelated users cannot view another order's payment.

## Security Checks

1. Vendor A cannot read Vendor B services, orders, earnings, pricing options, or material options.
2. Client cannot access `/api/vendor/*`.
3. Vendor cannot access `/admin/*`.
4. Guest cannot access protected routes.
5. Direct URL access is blocked the same way as UI navigation.

## Regression Risks To Watch

1. Editing a vendor service should not recreate pricing/material rows.
2. Existing orders should keep working after vendor updates service metadata.
3. Payment visibility should remain restricted to order participants and admins.
4. Admin approval should only work for actual vendor users.

## Release Recommendation

Ship only if:
- role-based authorization passes for guest, client, vendor, and admin
- service edit flow preserves pricing/material integrity
- payment visibility is scoped correctly
- order state transitions behave exactly as intended
