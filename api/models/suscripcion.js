'use strict'

//Basandonos en libreria mongoose
var mongoose = require('mongoose');
const { Double } = require('bson');
//Obtenemos el esquema
var Schema = mongoose.Schema;

//Definimos el esquema JSON del usuario
var SuscripcionSchema = Schema({

    usuario: {type: Schema.ObjectId, ref: 'Usuario'},
    tarifa: {type: Schema.ObjectId, ref: 'Tarifa'},
    estado: String
})

// Lo exportamos, dandole un nombre al modelo y pasandole el esquema creado
module.exports = mongoose.model('Suscripcione', SuscripcionSchema);