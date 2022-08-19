export class ControllerHabitacion{


        constructor(){}

        //buscar habitaciones
        buscarHabitaciones(request, response){

            //intento resolver la peticion
            try{
                response.status(200).json({
                    mensaje:"exito en la consulta",
                    datos:["Habitacion1","200USD","tv por cable"]                    
                })
            }catch(error){ //fallo resolviendo la peticion
                
                response(400).json({
                    mensaje:"fallo en la consulta"+error,
                    datos:null   
                })
            }
        }
        //buscar habicacion por id
        buscarHabitacionPorId(request, response){
            let identificador=request.params.id
            console.log(identificador)
            try{
                response.status(200).json({
                    mensaje:"exito en la consulta "+identificador,
                    datos:["Habitacion1","200USD","tv por cable"]
                })
            }catch(error){ //fallo resolviendo la peticion
                
                response(400).json({
                    mensaje:"fallo en la consulta"+error,
                    datos:null
                })
            }
        }
        //agregar habitacion
        agregarHabitacion(request, response){
            let cuerpo = request.body
            console.log(cuerpo)
            try{
                response.status(200).json({
                    mensaje:"exito agregando habitacion",
                    datos:[cuerpo]
                })
            }catch(error){ //fallo resolviendo la peticion
                
                response(400).json({
                 mensaje:"fallo agregando habitacion"+error,
                datos:null})
            }
        }
    
        //editar habitacion
        editarHabitacion(request, response){
            

            //recibir id como parametro
            let id = request.params.id

            //recibir los datos con los que voy a editar
            let datos = request.body
            try{
            response.status(200).json({
                mensaje: "exito editando la habitacion" + id,
                datos: datos
                
            })
        }catch(error){ //fallo resolviendo la peticion
            
            response(400).json({mensaje:"fallo en resolviendo la peticion"+error,
            datos:null})
        }}

        //eliminar habitacion
        eliminarHabitacion(request, response){
            try{
            response.status(200).json({
                mensaje:"exito en la consulta",
                    datos:["Habitacion1","200USD","tv por cable"]
            })
        }catch(error){ //fallo resolviendo la peticion
            
            response(400).json({mensaje:"fallo en resolviendo la peticion"+error,
            datos:null})
        }}
}