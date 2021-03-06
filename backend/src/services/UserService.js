const userRepository = require('../repositories/userRepository');

//  Trabalhando com um objeto de retorno padrão
//  statusCode: armazena o código de status da requisição
//  data: armazena o conteúdo da requisição
//      pode ser um objeto, um array ou uma string

const createUser = async (name, telephone, email, password) => {

  //  Validar os parâmetros do usuário
  if (!name || !telephone || !email || !password) {
    return {
      statusCode: 400,
      data: 'Não foi possível criar o usuário. Os parâmetros não foram informados corretamente.'
    }
  }

  //  Depois da validação, verificar se o usuário já existe
  try {
    const userExists = await userRepository.getUserByEmail(email);
    if (userExists) {
      return {
        statusCode: 409,
        data: { message: 'Usuário já cadastrado.' }
      }
    }
  }
  catch (error) {
    return {
      statusCode: 500,
      data: error.message
    }
  }

  //  Se não existir, criar o usuário
  try {
    const user = { name, telephone, email, password };
    await userRepository.createUser(user);
    return {
      statusCode: 201,
      data: user
    }
  }
  catch (error) {
    return {
      statusCode: 500,
      data: {
        message: 'Não foi possível criar o usuário.',
        error: error.message
      }
    }
  }
}

const getUsers = async () => {
  try {
    const users = await userRepository.getUsers();
    return {
      statusCode: 200,
      data: users
    }
  }
  catch (error) {
    return {
      statusCode: 500,
      data: {
        message: 'Não foi possível obter os usuários.',
        error: error.message
      }
    }
  }
}

const getUserByTelephoneAndPassword = async (telephone, password) => {
  try {
    const user = await userRepository.getUserByTelephoneAndPassword(telephone, password);
    if (user) {
      return {
        statusCode: 200,
        data: user
      }
    }
    else {
      return {
        statusCode: 404,
        data: { message: 'Usuário não encontrado.' }
      }
    }
  }
  catch (error) {
    return {
      statusCode: 500,
      data: {
        message: 'Não foi possível obter o usuário.',
        error: error.message
      }
    }
  }
}

const getUserByEmail = async (email) => {
  try {
    const user = await userRepository.getUserByEmail(email);
    if(user) {
      return {
        statusCode: 200,
        data: user
      }
    } else {
      return {
        statusCode: 404,
        data: { message: 'Usuário não encontrado.' }
      }
    }
  } catch (error) {
    return {
      statusCode: 500,
      data: {
        message: 'Não foi possível obter o usuário.',
        error: error.message
      }
    }
  } 
}

//  Tornando as funções disponíveis para outros arquivos
module.exports = {
  createUser,
  getUsers,
  getUserByTelephoneAndPassword,
  getUserByEmail
}
