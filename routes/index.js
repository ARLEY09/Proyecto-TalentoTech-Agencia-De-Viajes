import express from 'express';
import Viaje from '../models/Viaje.js';

const router = express.Router();


router.get('/api/viajes', async (req, res) => {
    try {
        const viajes = await Viaje.find(); 
        res.status(200).json(viajes);
    } catch (error) { 
        res.status(500).json({ message: error.message });
    }
});

router.post('/api/viajes', async (req, res) => {
    try {
        const nuevo_viaje = new Viaje(req.body);
        await nuevo_viaje.save();
        res.status(201).json(nuevo_viaje);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


router.put('/id', async (req,res)=>{
    try{
        const actualizar_viaje = await Viaje.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.status(200).json(actualizar_viaje)
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
})

router.delete('/id', async (req,res)=>{
    try{
        await Viaje.findByIdAndDelete(req.params.id)
        res.status(200).json
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
})


router.get('/', (req, res) => {
    
    res.render('inicio', {
        pagina: 'Inicio'
    });

});

router.get('/nosotros', (req, res) => {

    res.render('nosotros', {
        pagina: 'Nosotros'

    });

});

router.get('/viajes', (req, res) => {

    res.render('viajes', {
        pagina: 'Viajes'

    });

});

router.get('/experiencias', (req, res) => {

    res.render('experiencias', {
        pagina: 'Experiencias'

    });

});

export default router;