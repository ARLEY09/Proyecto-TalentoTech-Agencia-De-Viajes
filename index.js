import express from 'express';
import router from './routes/index.js'

const app = express();


//Definimos el puesto que vamos a usar
const port = process.env.PORT || 4000;

// habilitar pug (lo usamos para tamplates o vistas)
app.set('view engine','pug')

//Definimos la carpeta publica
app.use(express.static('public'));

//Agregamos las rutas
app.use('/',router)


app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`)
})