const inquirer = require('inquirer');
require('colors');

const preguntas= [
    {
        type: 'list',
        name: 'opcion',
        message: 'Que desea hacer?',
        choices: [
            {
                value:1,
                name:'Buscar Ciudad'
            },
            {
                value:2,
                name:'Historial'
            },
            {
                value:0,
                name:'Salir'
            }
        ]
    }
];
const inqirerMenu = async() =>{
    console.clear();

    console.log(' ========================== \n'.green);
    console.log(' Selecione Opcion \n'.blue);
    console.log(' ==========================  \n'.yellow);

    const {opcion}= await inquirer.prompt(preguntas);
    return opcion;
}

const pausa = async()=>{
    const question = {
        type:'input',
        name: 'enter',
        message: 'Presione enter para continuar'
    };
    console.log('\n');
    await inquirer.prompt(question);
    }

module.exports={
    inqirerMenu
}