//Ejercicio #6: CONVERSION MEDIDAS DE LA TELA

alert("Vamos a calcular la cantidad de pungadas que tiene que pedir para realizar sus pedidos, ingrese por favor los datos requeridos")

var P = 0.0254;
var M = prompt ("Cuántos metros de tela necesitas?")
var R = M / P

alert("Si quiere " + M + " m" + " de tela " + " o que necesita pedir en pulgadas es " + R)