function operador(display){
    this.valor='';
    this.display=display;
    this.inc=function(value){
      this.valor+=value;
      this.display.innerHTML =this.valor;
    }
}
function main()
{
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
    var mas = document.getElementById('mas');
    var igual= document.getElementById('igual');
    var ac = document.getElementById('ac');

    var operador1 = new operador(display)
    var operador2= new operador(display)
    
        botom0.onclick = () => {
          operador1.inc(0);
          console.log(operador1)
        }
        botom1.onclick = () => {
          operador1.inc(1);
        }
        botom2.onclick = () => {
          operador1.inc(2);
        }
        botom3.onclick = () => {
          operador1.inc(3);
        }
        botom4.onclick = () => {
          operador1.inc(4);
        }
        botom5.onclick = () => {
          operador1.inc(5);
        }
        botom6.onclick = () => {
          operador1.inc(6);
        }
        botom7.onclick = () => {
          operador1.inc(7);
        }
        botom8.onclick = () => {
          operador1.inc(8);
        }
        botom9.onclick = () => {
          operador1.inc(9);
        }

    mas.onclick=()=>{
          botom0.onclick = () => {
            operador2.inc(0);
            console.log(operador2)
          }
          botom1.onclick = () => {
            operador2.inc(1);
          }
          botom2.onclick = () => {
            operador2.inc(2);
          }
          botom3.onclick = () => {
            operador2.inc(3);
          }
          botom4.onclick = () => {
            operador2.inc(4);
          }
          botom5.onclick = () => {
            operador2.inc(5);
          }
          botom6.onclick = () => {
            operador2.inc(6);
          }
          botom7.onclick = () => {
            operador2.inc(7);
          }
          botom8.onclick = () => {
            operador2.inc(8);
          }
          botom9.onclick = () => {
            operador2.inc(9);
        }
      }
      igual.onclick=()=>{
          var numero= (parseInt(operador1.valor) + parseInt(operador2.valor))
           display.innerHTML= numero;
           operador1.valor= numero;
           operador2.valor= '';
       }
      ac.onclick=()=>{
          document.location.reload();
        }
}
