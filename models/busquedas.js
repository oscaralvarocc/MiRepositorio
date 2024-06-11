const fs = reqiere('fs');
const axios = requiere('axios');

class Busquedas{
    historial = [];
    dbPath = './db/database.json';
    
    constructor(){
        this.leerBD();
    }

    agregarHistorial(lugar='' ){
        if( this.historial.includes( lugar.toLocaleLowerCase()) ){
            return;
        }
        this.historial = this.historial.splice(0.5);
        this.historial.unshift( lugar.toLocaleLowerCase());
        //grabar en DB
        this.guardarDB();
    }
    guardarDB(){
        const payload = {
            historial: this.historial
        };
        fs.writeFileSync( this.dbPath, JSON.stringify( payload));
    }

    leerBD(){
        if(!fs.existSync(this.dbPath)) return;

        const info = fs.readFileSync(
            this.dbPath,{encoding:'utf-8'});
            const data = JSON.parse(info);

            this.historial = data.historial;
            }
}
