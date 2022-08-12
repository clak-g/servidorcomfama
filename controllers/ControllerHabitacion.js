class ControllerHabitacion{


        constructor(){}

        //buscar habitaciones
        buscarHabitacion(request, response){

            //intento resolver la peticion
            try{
                response.status(200).json({
                    
                })
            }catch(error){ //fallo resolviendo la peticion
                
                response(400).json({})
            }
        }
        //buscar habicacion por id
        buscarHabitacionPorId(request, response){
            try{
                response.status(200).json({
                    
                })
            }catch(error){ //fallo resolviendo la peticion
                
                response(400).json({})
            }
        }
        //agregar habitacion
        agregarHabitacion(request, response){
            try{
                response.status(200).json({
                    
                })
            }catch(error){ //fallo resolviendo la peticion
                
                response(400).json({})
            }
        }
    
        //editar habitacion
        editarHabitacion(request, response){try{
            response.status(200).json({
                
            })
        }catch(error){ //fallo resolviendo la peticion
            
            response(400).json({})
        }}

        //eliminar habitacion
        eliminarHabitacion(request, response){
            try{
            response.status(200).json({
                
            })
        }catch(error){ //fallo resolviendo la peticion
            
            response(400).json({})
        }}
}