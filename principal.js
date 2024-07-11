//ENCOTRAR NUMERO MAYOR//


import Numero2 from "./Numero2.js";
import interfaz from "./interfaz.js";

let interfaz1 = new interfaz (),
  n1=interfaz1.leerNumero1(),
  n2=interfaz1.leerNumero2(),
  n3=interfaz1.leerNumero3(),

  num = new Numero2 (n1,n2,n3),

  salida = document.getElementById("salida");

  salida.innerHTML = interfaz1.datosDelNumero(num.Numero1,num.Numero2,num.Numero3,num.concatenacion(),num.encontrarNumeroMayor())