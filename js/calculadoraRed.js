function ejecutarCalcu(){
  ipBinario();
  maskBinario();
  numHosts();
  ipRedCalculo();
  ipBroadcast()
  primeraIpRango()
  ultimaIpRango()
}
//FUNCION PARRA AÑADIR 0 A LA IZQUIERDA
function zfill(number, width) {
var numberOutput = Math.abs(number); /* Valor absoluto del número */
var length = number.toString().length; /* Largo del número */
var zero = "0"; /* String de cero */

if (width <= length) {
    if (number < 0) {
         return ("-" + numberOutput.toString());
    } else {
         return numberOutput.toString();
    }
} else {
    if (number < 0) {
        return ("-" + (zero.repeat(width - length)) + numberOutput.toString());
    } else {
        return ((zero.repeat(width - length)) + numberOutput.toString());
    }
}
}
//FUNCION IP DECIMAL - IP BINARIO
function ipBinario(){
var ip = document.getElementById("ip").value;
//separamos la ip por partes
var Priparte = ip.split(".") [0];
var Segparte = ip.split(".") [1];
var Terparte = ip.split(".") [2];
var Cuaparte = ip.split(".") [3];
//Pasamos de string a valor
var priNum = parseInt(Priparte);
var segNum = parseInt(Segparte);
var terNum = parseInt(Terparte);
var cuaNum = parseInt(Cuaparte);
//COMPROBAR IP VALIDA
if (priNum, segNum, terNum, cuaNum > 255){
  alert("Has introducido una IP erronea.")
  location.reload(true);
}
else if (isNaN(priNum, segNum, terNum, cuaNum)) {
  alert("Has introducido una IP erronea.")
  location.reload(true);
}
//console.log(priNum);
//console.log(segNum);
//console.log(terNum);
//console.log(cuaNum);
//pasamos a binario y rellanamos hasta 8 zeros
var priBin = zfill(priNum.toString(2),8)
var segBin = zfill(segNum.toString(2),8)
var terBin = zfill(terNum.toString(2),8)
var cuaBin = zfill(cuaNum.toString(2),8)
 window.ipBinUnido = priBin + segBin + terBin + cuaBin
console.log(ipBinUnido)
//console.log(priBin)
//console.log(segBin)
//console.log(terBin)
//console.log(cuaBin)
document.getElementById('rIpBin').innerHTML = String(priBin) + "." + String(segBin) + "." + String(terBin) + "." + String(cuaBin)

}

function maskBinario(){
  window.maskNum = document.getElementById("mask").value;
  //COMPROBACION MASCARA
  if (maskNum > 31){
    alert("Has introducido una MASK erronea. Debe encontrarse entre 1 y 30")
    location.reload(true);
  }
  window.maskBinUnido = "1".repeat(maskNum) + "0".repeat(32 - maskNum)
  console.log(maskBinUnido)
  var cadena1 = maskBinUnido.substr(0 , 8)
  var cadena2 = maskBinUnido.substr(8 , 8)
  var cadena3 = maskBinUnido.substr(16 , 8)
  var cadena4 = maskBinUnido.substr(24 , 8)
  var maskBin = String(cadena1 + "." + cadena2 + "." + cadena3 + "." + cadena4)
  //console.log(mask)
  document.getElementById('rMaskBin').innerHTML = maskBin
}

function numHosts() {
  var mask = document.getElementById("mask").value;
  var hosts = Math.pow(2,32-mask)
  //console.log(hosts - 2)
  document.getElementById('rHosts').innerHTML = hosts - 2
}
//PARA SACAR LA IP DE RED
function ipRedCalculo() {
  var ipBinA = ipBinUnido.substring(maskNum);
  var maskBinA = maskBinUnido.substring(maskNum)
  //console.log(ipBinA)
  //console.log(maskBinA)
  var ipBinRedA = ipBinA && maskBinA
  //console.log(ipBinRedA)
  var ipBinRedU = ipBinUnido.slice(0,maskNum) + ipBinRedA
  //console.log(ipBinRedU)
  var ipBinUno = parseInt(ipBinRedU.substr(0 , 8), 2);
  var ipBinDos = parseInt(ipBinRedU.substr(8 , 8), 2);
  var ipBinTre = parseInt(ipBinRedU.substr(16 , 8), 2);
  var ipBinCua = parseInt(ipBinRedU.substr(24 , 8), 2);


  var ipNumUno = ipBinUno.toString(10)
  var ipNumDos = ipBinDos.toString(10)
  var ipNumTre = ipBinTre.toString(10)
  var ipNumCua = ipBinCua.toString(10)

  var ipNumDeci= String(ipNumUno) + "." + String(ipNumDos) + "." + String(ipNumTre) + "." + String(ipNumCua)
  window.ipRed = ipNumDeci
  //console.log(ipNumDeci);
  document.getElementById('rIpRed').innerHTML = ipNumDeci
}

//CON ESTO SACAMOS LA IP DE BROADCAST
function ipBroadcast(){
  var ipBroadA = ipBinUnido.substr(0,maskNum)
  console.log(ipBroadA);
  var ipBroadBinS = String(ipBroadA) + "11111111111111111111111111111111"
  ipBroadBinJunta = ipBroadBinS.slice(0,32)
  console.log(ipBroadBinJunta);
  var ipBinUno = parseInt(ipBroadBinJunta.substr(0 , 8), 2);
  var ipBinDos = parseInt(ipBroadBinJunta.substr(8 , 8), 2);
  var ipBinTre = parseInt(ipBroadBinJunta.substr(16 , 8), 2);
  var ipBinCua = parseInt(ipBroadBinJunta.substr(24 , 8), 2);

  var ipNumUno = ipBinUno.toString(10)
  var ipNumDos = ipBinDos.toString(10)
  var ipNumTre = ipBinTre.toString(10)
  var ipNumCua = ipBinCua.toString(10)
  var ipNumDeci= String(ipNumUno) + "." + String(ipNumDos) + "." + String(ipNumTre) + "." + String(ipNumCua)
  console.log(ipNumDeci);
window.ipBroad = ipNumDeci
  document.getElementById('rIpBroadcast').innerHTML = ipNumDeci
}

function primeraIpRango() {
  var Priparte = ipRed.split(".") [0];
  var Segparte = ipRed.split(".") [1];
  var Terparte = ipRed.split(".") [2];
  var Cuaparte = ipRed.split(".") [3];
  //Pasamos de string a valor
  var priNum = parseInt(Priparte);
  var segNum = parseInt(Segparte);
  var terNum = parseInt(Terparte);
  var cuaNum = parseInt(Cuaparte);
  var priIpRango = String(priNum) + "." + String(segNum) + "." + String(terNum) + "." + String(cuaNum + 1)
  console.log(priIpRango);
  document.getElementById('rPriIpRango').innerHTML = priIpRango
}

function ultimaIpRango(){
  var Priparte = ipBroad.split(".") [0];
  var Segparte = ipBroad.split(".") [1];
  var Terparte = ipBroad.split(".") [2];
  var Cuaparte = ipBroad.split(".") [3];
  //Pasamos de string a valor
  var priNum = parseInt(Priparte);
  var segNum = parseInt(Segparte);
  var terNum = parseInt(Terparte);
  var cuaNum = parseInt(Cuaparte);
  var ultiIpRango = String(priNum) + "." + String(segNum) + "." + String(terNum) + "." + String(cuaNum - 1)
  console.log(ultiIpRango);
  document.getElementById('rUltiIpRango').innerHTML = ultiIpRango

  }
