//LLAMAMOS A EXPRESS
//const express = require('express')
import express from 'express'
//llamamos a las rutas
import {rutas} from '../routers/rutas.js'

export class servidor{

    constructor(){
        this.app = express() //atributo, una variable
        this.habilitarBody()
        this.atenderPeticiones()
    }

    atenderPeticiones(){    //enrutar peticiones
        
        this.app.use('/',rutas)
    }

    habilitarBody(){
        this.app.use(express.json())
    }

    encenderServidor(){
        this.app.listen(process.env.PORT,function(){
            console.log("servidor encendido"+process.env.PORT)
        })
    }
}