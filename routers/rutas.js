import express from 'express'


//variable para personalizar las rutas (ENDPOINTS) de mis servicios

export let rutas= express.Router()

//escribo mis rutas(cada ruta es un servicio)
rutas.get('viajescomfama/v1/habitaciones',function (req, res) {
    res.send('Hello World')
})
rutas.get('viajescomfama/v1/habitacion/id',function (req, res) {
    res.send('Hello World')
})
rutas.post('viajescomfama/v1/reserva',function (req, res) {
    res.send('Hello World')
})
rutas.put('viajescomfama/v1/reserva/id',function (req, res) {
    res.send('Hello World')
})
rutas.delete('viajescomfama/v1/cancelar/id',function (req, res) {
    res.send('Hello World')
})
