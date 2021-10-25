'use strict'

//Basandonos en libreria mongoose
var mongoose = require('mongoose');
const { Double } = require('bson');
//Obtenemos el esquema
var Schema = mongoose.Schema;

//Definimos el esquema JSON del usuario
var ComentarioSchema = Schema({

    usuario: {type: Schema.ObjectId, ref: 'Usuario'},
    video: {type: Schema.ObjectId, ref: 'Video'},
    comentario: String
})

// Lo exportamos, dandole un nombre al modelo y pasandole el esquema creado
module.exports = mongoose.model('Comentario', ComentarioSchema);