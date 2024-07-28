import server from './server';
import { PORT } from './config/envs';
import 'reflect-metadata';
import { AppDataSource } from './config/data-source';


AppDataSource.initialize()
.then( () => {
    console.log("Conexion a la base de datos realizada con exito");
    server.listen(PORT , ()=> {
        console.log(`Servidor corriendo en PUERTO ${PORT}`);
        
    });
    
})
.catch((err)=>{
    console.error('Error al inicializar la BD ', err);
})



