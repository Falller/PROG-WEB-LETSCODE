// aqui ficaria o esquema do banco se tivessemos conectado ao banco de dados
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const profissaoSchema = new Schema({
    nome: {
        type: String,
        required: true
    }
},
{ timestamps: true });

module.exports = mongoose.model('profissoes', profissaoSchema);