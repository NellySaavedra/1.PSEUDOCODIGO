//Ejercicio #10: Hotel “Cama Arena”
alert ("Vamos a calcular el costo de la habitación por persona")

var P  = prompt ("¿Para cuántos adultos es su habitación?");
var N  = prompt ("¿Cuántos niños lo aconpañan en su estacia?") 
var CpA = 175.5;
var CpN = 150.50;
var Hb = (P * CpA) + (N * CpN);

alert ("El costo de su habitación es " + Hb + " pesos")
