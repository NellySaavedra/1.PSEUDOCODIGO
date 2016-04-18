//Ejercicio #7: PINTURAS "LA BROCHA GORDA"
alert("Vamos a calcular cuánto es lo que debe cobrar por pintar cada m2. Ingrese los datos requeridos");

var m2 = prompt ("¿Cuántos metros cuadrados va a pintar?");
var Mo = prompt ("¿Cuánto cuesta su mano de obra por cada m2");
var P  = prompt ("¿Cuántos litros de pintura necesita por metro cuadrado?");
var Cp = prompt ("Cuánto cuesta cada litro de pintura?");

var RUno = m2 * Mo;
var RDos = P * Cp;

alert("Por cada m2, incliuyendo el costo de la pintura, usted necesita cobrar " + (RUno + RDos)) ;
