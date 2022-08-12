//LLAMAMOS A EXPRESS
//const express = require('express')
import express from 'express'
//llamamos a las rutas
import {rutas} from '../routers/rutas.js'

export class servidor{

    constructor(){
        this.app = express() //atributo, una variable
        this.atenderPeticiones()
    }

    atenderPeticiones(){    //enrutar peticiones
        this.app.use('/',rutas)
    }

    encenderServidor(){
        this.app.listen(process.env.port,function(){
            console.log("servidor encendido"+process.env.port)
        })
    }
}