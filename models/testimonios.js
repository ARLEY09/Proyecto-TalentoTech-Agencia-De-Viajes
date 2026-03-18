import mongoose from 'mongoose';

const testimonioSchema = new mongoose.Schema({
    nombre: String,
    correo: String,
    mensaje: String,
});

// Definimos el modelo y lo exportamos por defecto
const Testimonio = mongoose.model('Testimonio', testimonioSchema);
export default Testimonio;