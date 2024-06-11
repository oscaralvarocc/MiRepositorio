const{inqirerMenu}= require('./helpers/inquirer')


const main = async() =>{
    do{
        opt=await inqirerMenu();
        switch(opt){
            case 1:
                console.log('Buscar Ciudad');
            break;
            case 2:
                console.log('Listar Ciudad');
            break;
        }
        if (opr!==0) await pausa();
        
    }while(opt!=0)
}
main();