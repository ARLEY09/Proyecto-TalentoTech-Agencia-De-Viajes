import express from 'express';
import dotenv from 'dotenv';
import router from './routes/index.js';
import mongoose from 'mongoose';

dotenv.config()

const app = express();

app.use(express.json())//middleware que permite parsear json en las solicitudes


//Definir puerto
const port = process.env.PORT || 4000;
const db_url = process.env.DB_URL

console.log(db_url)

/*
mongoose.connect(db_url)
    .then(() => console.log('Conexión exitosa a MongoDB'))
    .catch((error) => {
        console.log('Error detallado de conexión:');
        console.error(error); // Esto te dirá exactamente QUÉ falló
    });
*/
 const conectar = async()=>{ 
    try{
        mongoose.connect(process.env.DB_URL)
        console.log('Conexión exitosa a MongoDB')
    }catch(error) {
        console.log('Error detallado de conexión:');
        console.error(error); // Esto te dirá exactamente QUÉ falló
    };
 }

 conectar.apply();


//Habilitar PUG
app.set('view engine', 'pug');

//Obtener el año actual
app.use( (req, res, next) => {
    const year = new Date();

    res.locals.actualYear = year.getFullYear();
    res.locals.nombresitio = "Agencia de Viajes";
    next();
});

//Agregar Router
app.use('/', router);  

//Definir la carpeta publica
app.use(express.static('public'))


app.listen(port,() => {
    console.log(`El Servidor esta funcionando en el puerto ${port}`)
})