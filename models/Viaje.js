import mongoose from 'mongoose';

const viajeSchema = new mongoose.Schema({
    titulo: String,
    precio: String,
    fecha_ida: String,
    fecha_vuelta: String,
    imagen: String,
    descripcion: String,
    disponibles: String,
    slug: String
});

// Definimos el modelo y lo exportamos por defecto
const Viaje = mongoose.model('Viaje', viajeSchema);
export default Viaje;