# Product Requirements Document

## Project Overview
ServiceHub is a home services marketplace connecting clients with vendors that provide painting, plastering, window making, POP work, renovation, cleaning, maintenance, and related services.

The product delivers a public marketplace for browsing services, a client workflow for booking and escrow-backed payments, a vendor workspace for managing listings and orders, and an admin control center for approvals and dispute management.

## Goals
- Enable clients to discover and hire verified service providers quickly.
- Allow vendors to publish, manage, and promote service offerings.
- Provide a safe payment workflow with escrow and order tracking.
- Support role-based access and approval workflows for vendors and admins.
- Capture reviews, ratings, and messaging so clients can make informed decisions.

## Stakeholders
- Clients: browse services, save favorites, book vendors, review work.
- Vendors: create service listings, manage orders, share portfolio work.
- Admins: approve vendors, review reports, oversee transactions.
- Product owners: drive marketplace growth and quality.

## User Roles
- Guest: public marketplace, landing page, browse service listings, view vendor profiles.
- Client: authenticated buyer, can save services, book orders, fund escrow, chat with vendors, post reviews.
- Vendor: authenticated seller, can create/edit services, manage orders, publish work gallery, receive reviews.
- Admin: platform manager, can approve vendors, suspend users, review transactions, adjudicate reports, release escrow.

## Core Features

### Authentication & Onboarding
- Register account with role selection: `CLIENT`, `VENDOR`, or `ADMIN`.
- Login with email and password.
- Store authentication session in browser local storage.
- Redirect users to role-specific landing pages after sign in.

### Public Marketplace
- Landing page with hero, category grid, featured vendors, recent work, testimonials.
- Service listing page with search, category filters, and sorting.
- Vendor public profile page with live services, gallery works, and reviews.

### Client Experience
- Save and unsave service listings.
- Book a service with preferred date, pricing option, and optional material add-ons.
- Upload attachments or client notes with booking requests.
- Make escrow payment and view order status.
- Chat with vendors within a shared conversation model.
- Submit reviews after order completion.

### Vendor Experience
- Manage service listings, pricing options, and material add-ons.
- Add portfolio work items to a vendor gallery.
- View vendor analytics and order dashboard.
- Manage order statuses, work submissions, and communication with clients.
- View and respond to vendor reviews.

### Admin Experience
- Approve or reject vendor profiles.
- Suspend users and manage role-based access.
- View transactions, review logs, and reports.
- Investigate and resolve client-vendor reports.
- Release escrow payments when work is approved.

## Acceptance Criteria
- Guests can browse services and vendor profiles without logging in.
- Clients must authenticate before saving services or creating orders.
- Vendors must authenticate before accessing `/vendor/*` workspace routes.
- Admins must authenticate before accessing `/admin` pages.
- All protected backend endpoints require a valid JWT bearer token.
- Public GET endpoints remain accessible without authentication.
- The backend enforces role restrictions on `/admin/**` and vendor-specific routes.

## Non-functional Requirements
- Responsive UI built with React and Vite.
- REST API backend using Spring Boot and Spring Security.
- Data persistence in PostgreSQL.
- Secure password storage with BCrypt.
- Extensible service and order data models for pricing and material options.

## Assumptions
- The current backend is the canonical API provider.
- Cloudinary may be used for image uploads when configured.
- Local development uses `http://localhost:8080` for backend and `http://localhost:5173` for frontend.
