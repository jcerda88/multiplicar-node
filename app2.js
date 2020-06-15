/* Sin destructuración */
//const multiplicar = require('./multiplicar/multiplicar');

//Solo obtengo el argv y no el objeto completo
// con el .argv al final, me evito de buscar en el objeto de la siguiente forma:
// argv.argv
const argv = require('./config/yargs').argv;
const colors = require('colors'); //Se hace por cada archivo que requiera esa librería


// const argv = require('yargs')
//     .command('listar', 'Imprime en consola la tabla de multiplicar', {
//         base: {
//             demand: true, //Parametro base, obligatorio
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .command('crear', 'Genera un archivo con la tabla de multiplicar', {
//         base: {
//             demand: true, //Parametro base, obligatorio
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .help()
//     .argv;

/* Con destructuración (const {} =  o let {} = ) */
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(data => console.log(data))
            .catch(e => console.log(e));
        break;
    case 'crear':
        // console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${archivo}`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('comando no reconocido');
}

// let base = 7;
// variables de entorno que se crean por defecto
//console.log(module);
// console.log(process.argv);
// let argv2 = process.argv;

// console.log(argv); // este es el que recibimos de yargs
// console.log('Base: ', argv.base);
// console.log('Limite: ', argv.limite);
// console.log(argv2); // argv2, el que recibimos de los procesos

// let parametro = argv[2]; //Segunda posición porque los arreglos en javaScript comienzan
// //con Base cero
// let base = parametro.split('=')[1]; //Separo con split y obtengo el número del arreglo

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado ${archivo}`))
//     .catch(err => console.log(err));