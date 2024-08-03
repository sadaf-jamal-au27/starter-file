# Database Design Documentation

## 1. Relationships and Associations

### User Model
- **Has Many**: Bookings
  - A user can have multiple bookings.

### Bus Model
- **Has Many**: Schedules
  - A bus can have multiple schedules.

### Route Model
- **Has Many**: Schedules
  - A route can have multiple schedules.

### Schedule Model
- **Belongs To**: Bus
  - A schedule is associated with one bus.
- **Belongs To**: Route
  - A schedule is associated with one route.

### Booking Model
- **Belongs To**: User
  - A booking is made by one user.
- **Belongs To**: Schedule
  - A booking is associated with one schedule.
- **Has Many**: Payments
  - A booking can have multiple payments.

### Payment Model
- **Belongs To**: Booking
  - A payment is associated with one booking.

## 2. ACID Properties

### Atomicity
- Ensures that a transaction is all-or-nothing.
- **Example**: Using Sequelize transactions to ensure that either all operations in a transaction are completed or none are applied.

  ```js
  const transaction = await sequelize.transaction();
  try {
    await User.create({ name: 'John Doe' }, { transaction });
    await Booking.create({ seatNumber: '1A', userId: 1, scheduleId: 1 }, { transaction });
    await transaction.commit();
  } catch (error) {
    await transaction.rollback();
  }
