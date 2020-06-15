// Requireds 
// Existe tres tipos de require
const fs = require('fs'); /* Librería que ya existe en node (File System) */
// const fs = require('express'); /* Librería que no viene propia de Node */
// const fs = require('./Path');  /* Archivos propios del programa */

let base = 7;
let data = ''; /* String vacío */
for (let i = 1; i <= 10; i++) {
    // let result = base * i;
    // console.log(`${base} * ${i} = ${result}`);
    data += `${base} * ${i} = ${base * i}\n`; /* += para concatenar y \n para salto de línea*/
}

// const data = new Uint8Array(Buffer.from('Hello Node.js'));
fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`The file tabla-${base}.txt has been created!`);
});