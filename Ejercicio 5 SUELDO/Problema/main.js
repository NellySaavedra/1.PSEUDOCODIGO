// Ejercicio #5: SUELDO
alert("Este ejercicio es para saber cuantas horas trabajaste a la semana y pagarte el sueldo justo, si en algun dia no trabajaste ninguna hora por favor coloca 0")

var Lunes     = prompt("¿Cuántas horas trabajaste en LUNES?");
var Martes    = prompt("¿Cuántas horas trabajaste en MARTES?");
var Miercoles = prompt("¿Cuántas horas trabajaste en MIERCOLES?");
var Jueves    = prompt("¿Cuántas horas trabajaste en JUEVES?");
var Viernes   = prompt("¿Cuántas horas trabajaste en VIERNES?");
var Sabado    = prompt("¿Cuántas horas trabajaste en SABADO?");
var Domingo   = prompt("¿Cuántas horas trabajaste en DOMINGO?");
var CostoHora = 15;

var HxS = ((parseInt(Lunes)) + (parseInt(Martes)) + (parseInt(Miercoles)) + (parseInt(Jueves)) +(parseInt(Viernes)) + (parseInt(Sabado)) + (parseInt(Domingo))) * CostoHora;

alert("El pago por el total de tus horas por semana de Lunes a Viernes es " + HxS); 