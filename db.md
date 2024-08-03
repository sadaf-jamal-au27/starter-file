# Design Document

## Overview

This document outlines the design of the RedBus application backend, including the architecture, database schema, and key components.

## Architecture Diagram

![Architecture Diagram](./docs/architecture-diagram.png)

## Database Schema

![Database Schema](./docs/database-schema.png)

## Key Components

### User
- **Attributes**: id, name, email, password, role
- **Relationships**: Has many bookings.

### Bus
- **Attributes**: id, number, make, model, capacity
- **Relationships**: Has many schedules.

### Route
- **Attributes**: id, startPoint, endPoint, distance
- **Relationships**: Has many schedules.

### Schedule
- **Attributes**: id, departureTime, arrivalTime, busId, routeId
- **Relationships**: Belongs to bus and route; Has many bookings.

### Booking
- **Attributes**: id, seatNumber, userId, scheduleId
- **Relationships**: Belongs to user and schedule; Has many payments.

### Payment
- **Attributes**: id, amount, paymentDate, bookingId, status
- **Relationships**: Belongs to booking.

## Model Relationships

Refer to the `models/index.js` file for Sequelize model associations.
