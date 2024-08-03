# User Stories

## Guest User Story 6: View Bus Details

### Description
As a guest, I want to view detailed information about a specific bus so that I can decide whether it meets my needs.

### Acceptance Criteria
1. The guest should be able to view details such as bus number, make, model, and capacity for a specific bus.

### API Endpoints

- **GET /api/buses/:id**
  - **Response**:
    ```json
    {
      "id": 1,
      "number": "ABC123",
      "make": "Volvo",
      "model": "B9R",                                                                          
      "capacity": 50
    }
    ```
  - **Logic**:
    1. Retrieve the bus details from the database using the bus ID.
    2. Return the bus information.

## Registered User Story 3: View Booking History

### Description
As a registered user, I want to view my booking history so that I can keep track of my past reservations.

### Acceptance Criteria
1. The user should be able to view a list of their past bookings with details such as booking date, bus number, and status.

### API Endpoints

- **GET /api/users/:id/bookings**
  - **Response**:
    ```json
    [
      {
        "id": 1,
        "busNumber": "ABC123",
        "seatNumber": "12A",
        "bookingDate": "2024-07-20",
        "status": "confirmed"
      },
      {
        "id": 2,
        "busNumber": "XYZ456",
        "seatNumber": "8B",
        "bookingDate": "2024-07-22",
        "status": "cancelled"
      }
    ]
    ```
  - **Logic**:
    1. Retrieve all bookings associated with the user ID from the database.
    2. Return the list of bookings.

## Registered User Story 4: Request Refund

### Description
As a registered user, I want to request a refund for a cancelled booking so that I can get my money back.

### Acceptance Criteria
1. The user should be able to request a refund for a cancelled booking.
2. The system should process the refund and update the booking status.

### API Endpoints

- **POST /api/refunds**
  - **Request Body**:
    ```json
    {
      "bookingId": 2,
      "amount": 150.00
    }
    ```
  - **Response**:
    ```json
    {
      "id": 1,
      "bookingId": 2,
      "amount": 150.00,
      "status": "processed"
    }
    ```
  - **Logic**:
    1. Validate the refund request.
    2. Update the booking status and process the refund.
    3. Return refund details.

## Admin User Story 4: Manage Bus Schedules

### Description
As an admin, I want to manage bus schedules so that I can add, update, or remove schedules as needed.

### Acceptance Criteria
1. The admin should be able to create, update, or delete bus schedules.

### API Endpoints

- **POST /api/schedules**
  - **Request Body**:
    ```json
    {
      "busId": 1,
      "departureTime": "2024-08-01T10:00:00Z",
      "arrivalTime": "2024-08-01T12:00:00Z",
      "routeId": 2
    }
    ```
  - **Response**:
    ```json
    {
      "id": 1,
      "busId": 1,
      "departureTime": "2024-08-01T10:00:00Z",
      "arrivalTime": "2024-08-01T12:00:00Z",
      "routeId": 2
    }
    ```
  - **Logic**:
    1. Validate schedule data.
    2. Create a new schedule record in the database.
    3. Return the schedule details.

- **PUT /api/schedules/:id**
  - **Request Body**:
    ```json
    {
      "departureTime": "2024-08-01T11:00:00Z",
      "arrivalTime": "2024-08-01T13:00:00Z"
    }
    ```
  - **Response**:
    ```json
    {
      "id": 1,
      "departureTime": "2024-08-01T11:00:00Z",
      "arrivalTime": "2024-08-01T13:00:00Z"
    }
    ```
  - **Logic**:
    1. Validate updated schedule data.
    2. Update the schedule record in the database.
    3. Return the updated schedule details.

- **DELETE /api/schedules/:id**
  - **Response**:
    ```json
    {
      "message": "Schedule deleted successfully."
    }
    ```
  - **Logic**:
    1. Delete the schedule record from the database.
    2. Return a success message.

## Admin User Story 5: Manage Users

### Description
As an admin, I want to manage users so that I can view, update, or delete user accounts.

### Acceptance Criteria
1. The admin should be able to view, update, or delete user accounts.

### API Endpoints

- **GET /api/users**
  - **Response**:
    ```json
    [
      {
        "id": 1,
        "name": "John Doe",
        "email": "john.doe@example.com",
        "role": "user"
      },
      {
        "id": 2,
        "name": "Jane Smith",
        "email": "jane.smith@example.com",
        "role": "admin"
      }
    ]
    ```
  - **Logic**:
    1. Retrieve all user records from the database.
    2. Return the list of users.

- **PUT /api/users/:id**
  - **Request Body**:
    ```json
    {
      "name": "John Doe Updated",
      "email": "john.doe.updated@example.com",
      "role": "admin"
    }
    ```
  - **Response**:
    ```json
    {
      "id": 1,
      "name": "John Doe Updated",
      "email": "john.doe.updated@example.com",
      "role": "admin"
    }
    ```
  - **Logic**:
    1. Validate updated user data.
    2. Update the user record in the database.
    3. Return the updated user details.

- **DELETE /api/users/:id**
  - **Response**:
    ```json
    {
      "message": "User deleted successfully."
    }
    ```
  - **Logic**:
    1. Delete the user record from the database.
    2. Return a success message.

## User Story 9: Rate and Review Bus Services

### Description
As a registered user, I want to rate and review bus services so that other users can benefit from my feedback.

### Acceptance Criteria
1. The user should be able to submit a rating and review for a bus service.
2. The review should be associated with the user and bus.

### API Endpoints

- **POST /api/reviews**
  - **Request Body**:
    ```json
    {
      "busId": 1,
      "userId": 1,
      "rating": 4,
      "review": "The journey was comfortable and on time."
    }
    ```
  - **Response**:
    ```json
    {
      "id": 1,
      "busId": 1,
      "userId": 1,
      "rating": 4,
      "review": "The journey was comfortable and on time."
    }
    ```
  - **Logic**:
    1. Validate the review data.
    2. Create a new review record in the database.
    3. Return the review details.

## Admin User Story 6: View System Metrics

### Description
As an admin, I want to view system metrics such as user activity and booking statistics to monitor system performance.

### Acceptance Criteria
1. The admin should be able to view metrics such as total users, total bookings, and system usage trends.

### API Endpoints

- **GET /api/metrics**
  - **Response**:
    ```json
    {
      "totalUsers": 1000,
      "totalBookings": 5000,
      "totalRevenue": 750000.00,
      "systemUsage": [
        { "month": "July", "bookings": 2000 },
        { "month": "August", "bookings": 3000 }
      ]
    }
    ```
  - **Logic**:
    1. Aggregate data from the database.
    2. Calculate total users, bookings, and revenue.
    3. Return the metrics data.

## User Story 10: Contact Support

### Description
As a registered user, I want to contact support for assistance with issues or inquiries related to my bookings or account.

### Acceptance Criteria
1. The user should be able to submit a support request with details about their issue or inquiry.
2. The system should acknowledge the request and provide a reference number.

### API Endpoints

- **POST /api/support**
  - **Request Body**:
    ```json
    {
      "userId": 1,
      "subject": "Issue with Booking",
      "message": "I encountered a problem with my recent booking and need assistance."
    }
    ```
  - **Response**:
    ```json
    {
      "id": 1,
      "userId": 1,
      "subject": "Issue with Booking",
      "message": "I encountered a problem with my recent booking and need assistance.",
      "status": "received"
    }
    ```
  - **Logic**:
    1. Validate the support request data.
    2. Create a support ticket record in the database.
    3. Return the support request details.

