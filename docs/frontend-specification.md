# Frontend Specification Document

## Overview
The frontend is a React 18 application built with Vite. It provides the public marketplace, authentication flows, and role-specific workspace pages for clients, vendors, and admins.

## Key Technologies
- React 18
- Vite 5
- React Router DOM 6
- Lucide React icons
- Three.js for landing page animation
- Native `fetch` API for backend communication
- Local storage for session persistence

## Routing
The app uses `BrowserRouter` and defines these main routes:
- `/` - public marketplace home page
- `/gallery` - public vendor work gallery
- `/services` - public service listings page
- `/about` - about page
- `/vendors/:vendorId` - public vendor profile
- `/login` - login page
- `/register` - registration page
- `/client` - authenticated client dashboard
- `/client/chat` - client messaging workspace
- `/admin` - authenticated admin dashboard
- `/vendor` - vendor workspace layout
  - `/vendor` (index) - vendor overview
  - `/vendor/profile` - vendor profile settings
  - `/vendor/services` - service management
  - `/vendor/gallery` - vendor portfolio works
  - `/vendor/chat` - vendor messaging workspace
  - `/vendor/orders` - vendor order view
  - `/vendor/earnings` - vendor earnings view

## Authentication Flow
- `AuthContext.jsx` manages user session state and stores session data under `marketplace-auth` in local storage.
- `login(payload)` and `register(payload)` call backend auth endpoints and store returned access and refresh tokens.
- `logout()` clears the session.
- `ProtectedRoute.jsx` blocks unauthenticated access and redirects unauthorized users to their fallback landing page.
- `roleRoutes.js` maps user roles to default paths:
  - `VENDOR` -> `/vendor`
  - `CLIENT` -> `/client`
  - `ADMIN` -> `/admin`

## API Layer
- `frontend/src/services/api.js` centralizes all backend requests.
- Requests include `Content-Type: application/json` headers and an optional `Authorization` header when a token exists.
- `VITE_API_URL` environment variable defines the API base URL.
- Public data fetches do not require auth tokens.
- Protected resources use `Authorization: Bearer <token>`.

## Page Components

### Public Pages
- `MarketplacePage.jsx`: homepage with search, category filters, service list, saved service actions, and booking modal.
- `GalleryPage.jsx`: vendor work gallery display.
- `ServicesPage.jsx`: service listing search and detail browsing.
- `VendorProfilePage.jsx`: vendor public profile and service overview.
- `AboutPage.jsx`: about/company content.
- `LoginPage.jsx` and `RegisterPage.jsx`: authentication forms.

### Client Pages
- `ClientDashboardPage.jsx`: client dashboard and booking overview.
- `ChatPage.jsx`: client messaging workspace.

### Vendor Pages
- `VendorLayout.jsx`: sidebar navigation and nested vendor routes.
- `VendorOverviewPage.jsx`: vendor summary dashboard.
- `VendorProfileSettingsPage.jsx`: vendor profile editing.
- `VendorServicesPage.jsx`: create/edit service listings, pricing, material options.
- `VendorGalleryPage.jsx`: vendor portfolio management.
- `VendorOrdersPage.jsx`: vendor order management.
- `VendorEarningsPage.jsx`: earnings summary.

### Admin Page
- `AdminDashboardPage.jsx`: admin control center with approvals, reports, ledger, and moderation.

## UI Pattern
- Global layout uses `Navbar` and `Footer` for public pages.
- Workspace pages use contextual workspace panels with admin or vendor-specific layout.
- Forms use client-side validation and show inline notices/errors.
- Loading and error states are handled with conditional UI messaging.

## Data Synchronization
- Marketplace and service pages fetch data from the backend on mount and when filters change.
- Vendor workspace fetches user-specific resources after authentication.
- Admin dashboard loads multiple datasets in parallel.
- Chat page refreshes conversations when selected or reloaded.

## Extensibility
- `api.js` is the single source of truth for service endpoints.
- Additional route components can be added under `/vendor/*` or `/admin`.
- The frontend supports optional Cloudinary file uploads via `VITE_CLOUDINARY_CLOUD_NAME` and `VITE_CLOUDINARY_UPLOAD_PRESET`.

## Environment Variables
- `VITE_API_URL` - backend API base URL
- `VITE_CLOUDINARY_CLOUD_NAME` - Cloudinary cloud name
- `VITE_CLOUDINARY_UPLOAD_PRESET` - Cloudinary upload preset

## Recommended Frontend Improvements
- Add form-level validation library for consistency.
- Use a global notification/toast system for success and error messages.
- Improve session refresh handling using the refresh token endpoint.
- Add loading skeleton states for heavy page content.
