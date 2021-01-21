//required

let fs = require('fs');
const colors = require('colors');
//let fs = required('express');
//let fs = required('./fs');

let listarTabla = (base, limite = 10) => {
    console.log('======================='.green)
    console.log(`Tabla del ${base}`.green)
    console.log('======================='.green)

    for (i = 0; i <= limite; i++) {

        console.log(`${base} * ${i} = ${base * i}`)

    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El Valor introducido ${base} no es Numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`)

            //console.log(`El Archivo tabla-${base}.txt ha sido creado'`);
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}