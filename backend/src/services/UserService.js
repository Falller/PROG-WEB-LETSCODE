// fazendo o uso da tabela de Usuario através do mongoose
const mongoose = require('mongoose');
const User = mongoose.model('User'); // acessando a tabela de usuario


const createUser = async (user) => {
  return await User.create(user);
}

const getUsers = async() =>{
  return await User.find();
}
// deixando os métodos disponíveis para uso
module.exports = {
  createUser, getUsers
}
