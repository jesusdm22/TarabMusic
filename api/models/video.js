'use strict'

//Basandonos en libreria mongoose
var mongoose = require('mongoose');
const { Double } = require('bson');
//Obtenemos el esquema
var Schema = mongoose.Schema;

//Definimos el esquema JSON del usuario
var VideoSchema = Schema({

    usuario: {type: Schema.ObjectId, ref: 'Usuario'},
    video: String,
    descripcion: String,
    visitas: String,
    likes: String,
    created_at: String
})

// Lo exportamos, dandole un nombre al modelo y pasandole el esquema creado
module.exports = mongoose.model('Video', VideoSchema);