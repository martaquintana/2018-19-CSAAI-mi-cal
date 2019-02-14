function addcadena(cadena,display,number){
  display.innerHTML= number;
  cadena = cadena + display.innerHTML;
  display.innerHTML = cadena;
  console.log(cadena)
  return cadena
}
function main() {
    console.log("Que comienzen los juegos de Javascript!!");
    var cadena = '';
    var botom0 = document.getElementById('botom0');
    var botom1 = document.getElementById('botom1');
    var botom2 = document.getElementById('botom2');
    var botom3 = document.getElementById('botom3');
    var botom4 = document.getElementById('botom4');
    var botom5 = document.getElementById('botom5');
    var botom6 = document.getElementById('botom6');
    var botom7 = document.getElementById('botom7');
    var botom8 = document.getElementById('botom8');
    var botom9 = document.getElementById('botom9');
    var display= document.getElementById('display');
    botom0.onclick = () => {
      cadena = addcadena(cadena,display,"0");
    }
    botom1.onclick = () => {
      cadena = addcadena(cadena,display,"1");
    }
    botom2.onclick = () => {
      cadena = addcadena(cadena,display,"2");
    }
    botom3.onclick = () => {
      cadena = addcadena(cadena,display,"3");
    }
    botom4.onclick = () => {
      cadena = addcadena(cadena,display,"4");
    }
    botom5.onclick = () => {
      cadena = addcadena(cadena,display,"5");
    }
    botom6.onclick = () => {
      cadena = addcadena(cadena,display,"6");
    }
    botom7.onclick = () => {
      cadena = addcadena(cadena,display,"7");
    }
    botom8.onclick = () => {
      cadena = addcadena(cadena,display,"8");
    }
    botom9.onclick = () => {
      cadena = addcadena(cadena,display,"9");
    }


}
