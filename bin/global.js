#!/usr/bin/env node

// #!/usr/bin/env node: Esta línea es conocida como shebang y se utiliza para indicar que el archivo debe ejecutarse utilizando Node.js.



// Importamos el módulo 'ramdon' desde la ruta '../src/index'
// Este módulo contiene la función 'funnyCommit' que queremos utilizar
let ramdon = require('../src/index');

// Llamamos a la función 'funnyCommit' del módulo 'ramdon'
// Esta función imprimirá un mensaje de commit gracioso en la consola
ramdon.funnyCommit();