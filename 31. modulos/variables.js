
// Primera forma de exportar
export const PI = Math.PI;
export let mensaje = "Soy una variable del archivo variable.js";

// Segunda forma de exportar
let a = "soy una a";
let b = "soy una b";
export {a,b};

// Sólo puede haber un export por defecto.
// no es posible usar var, let o const con export default.
export default function perro () {
  console.log("Guau guau!!");
}

export function soyUnaFuncionLlamadaAritmetica(a,b) {
  return console.log(a + b);;  
}