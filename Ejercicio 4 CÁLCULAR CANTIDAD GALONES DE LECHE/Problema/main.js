//Ejercicio #4: CÁLCULAR CANTIDAD GALONES DE LECHE
var LxD = prompt("¿Cuántos litros obtuviste el día de hoy?");
var PxG = prompt("¿Cuál es el precio del galon?");
var PG = 3.785;
var LG = (LxD/PG);
var total = (LG*PxG);

alert("Te pagaremos la cantidad total: " + total + " pesos");

