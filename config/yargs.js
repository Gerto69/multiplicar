const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la Tabla de Multiplicar', opt)
    .command('crear', 'Genera un ARchivo con Tabla de Multiplicar', opt)
    .help()
    .argv;

module.exports = {
    argv
}