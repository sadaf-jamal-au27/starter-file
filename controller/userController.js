const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const { generateToken } = require('../utils/auth');
const { NotFoundError, BadRequestError } = require('../utils/customErrors');
const { SUCCESS, CREATED, BAD_REQUEST, NOT_FOUND } = require('../utils/statusCodes');

exports.registerUser = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      throw new BadRequestError('Email already registered');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword, role });

    res.status(CREATED).json({ message: 'User registered successfully', user });
  } catch (error) {
    next(error);
  }
};

exports.loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user) {
      throw new NotFoundError('User not found');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new BadRequestError('Invalid password');
    }

    const token = generateToken(user);
    res.status(SUCCESS).json({ message: 'Login successful', token });
  } catch (error) {
    next(error);
  }
};

exports.getUserById = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      throw new NotFoundError('User not found');
    }
    res.status(SUCCESS).json(user);
  } catch (error) {
    next(error);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, email, role } = req.body;

    const user = await User.findByPk(id);
    if (!user) {
      throw new NotFoundError('User not found');
    }

    user.name = name || user.name;
    user.email = email || user.email;
    user.role = role || user.role;
    await user.save();

    res.status(SUCCESS).json({ message: 'User updated successfully', user });
  } catch (error) {
    next(error);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
      throw new NotFoundError('User not found');
    }
    await user.destroy();
    res.status(SUCCESS).json({ message: 'User deleted successfully' });
  } catch (error) {
    next(error);
  }
};


