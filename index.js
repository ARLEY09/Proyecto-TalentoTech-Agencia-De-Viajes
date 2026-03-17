// const express = require('express');
import express from 'express';
import router from './routes/index.js'

const app = express();


//Definimos el puesto que vamos a usar
const port = process.env.PORT || 4000;

// habilitar pug (lo usamos para tamplates o vistas)
app.set('view engine','pug')

//Agregamos las rutas
app.use('/',router)

app.listen(() => {
    console.log(`El servidor esta funcionando en el puerto ${port}`)
})