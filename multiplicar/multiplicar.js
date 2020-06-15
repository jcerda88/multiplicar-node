// Requireds 
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    //limite = 10, valor por defecto en caso de no declararlo en yargs

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido base: ${base}, no es un número`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor introducido limite: ${limite}, no es un número`);
            return;
        }

        let data = '==============================\n'.green;
        data += `Tabla de ${base}\n`.green;
        data += '==============================\n'.green;
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        resolve(data);
    });
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {


        /* Función que valida si el valor es numérico, incluso si viene como string '7' */
        if (!Number(base)) {
            reject(`El valor introducido ${base}, no es un número`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-limite-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`.green)
        });
    });

}

// Esto exporta la función y la deja como global para poder ser utilizadas por otras
// páginas .js
module.exports = {
    // crearArchivo: crearArchivo /* Sin ES6 */
    crearArchivo,
    /* Con ES6 no es necesario lo que viene después de los dos puntos */
    listarTabla
}