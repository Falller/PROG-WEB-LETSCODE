const userService = require('../services/userService');

const postUser = async (req, res) => {
  const { telephone, password, name, email } = req.body;
  const response = await userService.createUser(name, telephone, email, password);
  return res.status(response.statusCode).json(response.data);
}

const getUser = async (req, res) => {
  const response = await userService.getUsers();
  return res.status(response.statusCode).json(response.data);
}

const getUserByTelephoneAndPassword = async (req, res) => {
  const { telephone, password } = req.params;
  const response = await userService.getUserByTelephoneAndPassword(telephone, password);
  return res.status(response.statusCode).json(response.data);
}

const getUserByEmail = async (req, res) => {
  const { email } = req.params;
  const response = await userService.getUserByEmail(email);
  return res.status(response.statusCode).json(response.data);
}

module.exports = {
  postUser,
  getUser,
  getUserByTelephoneAndPassword,
  getUserByEmail
}

