//Ejercicio #9: LLAMADA TELEFÓNICA
alert ("¿Quiere saber cúanto se va a pagar por cada llamada?")

var M = prompt ("¿Cuántos minutos duró la llamada?");
var P = prompt ("Ingrese el costo por minuto");

var CLL = (parseFloat(M) * parseFloat(P));
alert ("El costo de la llamada es " + CLL + " pesos");