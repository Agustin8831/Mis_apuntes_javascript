// Aqui estoy exportando las variables delarchivo variable.js a
// este archivo modulo.js

// Tambien vease que estoy importando la funcion perro pero aqui lo nombre como una sola p
import p, {PI,mensaje,a,b} from "./variables.js";

// Crear un alias de una exportacion
// Como la funcion tiene un nombre largo, le vamos a cambiar el nombre a suma
import { soyUnaFuncionLlamadaAritmetica as suma } from "./variables.js";
// Va a dar error si no lo llamo por su alias
// soyUnaFuncionLlamadaAritmetica(2,3)

// Aqui ya no da error porque lo he llamado por su alias
suma(2,6)

console.log("Yo soy el archivo modulo.js");

console.log(PI);
console.log(mensaje);
console.log(a);
console.log(b);

// Los export con nombre son útiles cuando se necesitan exportar múltiples 
// valores. Durante el import, es obligatorio usar el mismo nombre que el 
// correspondiente objeto.
// Pero un export por defecto puede ser importado con cualquier nombre, por 
// ejemplo:
p()