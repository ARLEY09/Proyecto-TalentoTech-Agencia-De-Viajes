import express from 'express';


const router = express.Router();

router.get('/inicio', (req, res)=>{
    res.render('inicio')
});

router.get('/nosotros', (req, res)=>{

    const viajes ='Ando viajando manito';

    res.render('nosotros',{
        viajes: viajes
    })
});

router.get('/contacto', (req, res)=>{
    res.send('Contacto')
});


export default router;
