# RedBus Application Documentation

## Overview

This documentation provides an overview of the RedBus application, including API endpoints, responses, and role-based navigation.

## User Roles

1. **User**: Regular customers who book and manage their trips.
2. **Bus Driver**: Personnel who manage bus schedules and routes.
3. **Admin**: Administrative users who oversee the entire system, including users, buses, routes, and schedules.

## API Endpoints

### 1. User Role

#### Authentication

- **POST /api/auth/register**
  - **Description**: Register a new user.
  - **Request Body**: `{ "name": "string", "email": "string", "password": "string" }`
  - **Response**: 
    ```json
    {
      "id": "number",
      "name": "string",
      "email": "string",
      "role": "user"
    }
    ```

- **POST /api/auth/login**
  - **Description**: Login a user.
  - **Request Body**: `{ "email": "string", "password": "string" }`
  - **Response**: 
    ```json
    {
      "token": "string"
    }
    ```

#### Booking Management

- **POST /api/bookings**
  - **Description**: Create a new booking.
  - **Request Body**: `{ "seatNumber": "string", "userId": "number", "scheduleId": "number" }`
  - **Response**: 
    ```json
    {
      "id": "number",
      "seatNumber": "string",
      "userId": "number",
      "scheduleId": "number"
    }
    ```

- **GET /api/bookings/:id**
  - **Description**: Retrieve a booking by ID.
  - **Response**: 
    ```json
    {
      "id": "number",
      "seatNumber": "string",
      "userId": "number",
      "scheduleId": "number"
    }
    ```

### 2. Bus Driver Role

#### Schedule Management

- **GET /api/schedules**
  - **Description**: Retrieve all schedules.
  - **Response**: 
    ```json
    [
      {
        "id": "number",
        "departureTime": "string",
        "arrivalTime": "string",
        "busId": "number",
        "routeId": "number"
      }
    ]
    ```

- **POST /api/schedules**
  - **Description**: Create a new schedule.
  - **Request Body**: `{ "departureTime": "string", "arrivalTime": "string", "busId": "number", "routeId": "number" }`
  - **Response**: 
    ```json
    {
      "id": "number",
      "departureTime": "string",
      "arrivalTime": "string",
      "busId": "number",
      "routeId": "number"
    }
    ```

### 3. Admin Role

#### Bus Management

- **POST /api/buses**
  - **Description**: Add a new bus.
  - **Request Body**: `{ "number": "string", "make": "string", "model": "string", "capacity": "number" }`
  - **Response**: 
    ```json
    {
      "id": "number",
      "number": "string",
      "make": "string",
      "model": "string",
      "capacity": "number"
    }
    ```

#### Route Management

- **POST /api/routes**
  - **Description**: Add a new route.
  - **Request Body**: `{ "startPoint": "string", "endPoint": "string", "distance": "number" }`
  - **Response**: 
    ```json
    {
      "id": "number",
      "startPoint": "string",
      "endPoint": "string",
      "distance": "number"
    }
    ```

#### User Management

- **GET /api/users**
  - **Description**: Retrieve all users.
  - **Response**: 
    ```json
    [
      {
        "id": "number",
        "name": "string",
        "email": "string",
        "role": "string"
      }
    ]
    ```

- **DELETE /api/users/:id**
  - **Description**: Delete a user by ID.
  - **Response**: 
    ```json
    {
      "message": "User deleted successfully."
    }
    ```

## Navigation and Role-Based Access

### User
- **Home Page**: View available routes and buses.
- **Booking Page**: Create and manage bookings.
- **Profile Page**: View and update personal information.

### Bus Driver
- **Schedule Management**: Create and view schedules.
- **Bus Management**: View and update bus details.

### Admin
- **User Management**: View, update, and delete users.
- **Bus Management**: Add and update buses.
- **Route Management**: Add and update routes.
- **Schedule Management**: View and manage schedules.

### Summary

This documentation provides a comprehensive overview of the RedBus application, including role-based API endpoints, responses, and navigation. It ensures that users, bus drivers, and admins have the appropriate access and functionality required for their roles.

