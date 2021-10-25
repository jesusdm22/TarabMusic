'use strict'

//Basandonos en libreria mongoose
var mongoose = require('mongoose');
const { Double } = require('bson');
//Obtenemos el esquema
var Schema = mongoose.Schema;

//Definimos el esquema JSON del usuario
var TarifaSchema = Schema({
    descipcion: String,
    precio: Double
})

// Lo exportamos, dandole un nombre al modelo y pasandole el esquema creado
module.exports = mongoose.model('Tarifa', TarifaSchema);