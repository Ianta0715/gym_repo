import 'reflect-metadata';
import { AppDataSource } from './config/data-source';
import server from './server';
import { PORT } from './config/envs';


AppDataSource.initialize()
.then( async() => {
    console.log("Conexion a la base de datos realizada con exito");

    await AppDataSource.synchronize(true)
    server.listen(PORT , ()=> {
        console.log(`Servidor corriendo en PUERTO ${PORT}`);
        
    });
    
})
.catch((err)=>{
    console.error('Error al inicializar la BD ', err);
})



