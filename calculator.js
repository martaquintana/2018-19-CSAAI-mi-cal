function operador(display){
    this.valor='';
    this.display=display;
    this.inc=function(value){
      this.valor+=value;
      this.display.innerHTML =this.valor;
    }
}

function numero(operador){
    botom0.onclick = () => {
        operador.inc(0);
        console.log(operador)
    }
    botom1.onclick = () => {
        operador.inc(1);
    }
    botom2.onclick = () => {
        operador.inc(2);
    }
    botom3.onclick = () => {
        operador.inc(3);
    }
    botom4.onclick = () => {
    operador.inc(4);
    }
    botom5.onclick = () => {
    operador.inc(5);
    }
    botom6.onclick = () => {
    operador.inc(6);
    }
    botom7.onclick = () => {
    operador.inc(7);
    }
    botom8.onclick = () => {
    operador.inc(8);
    }
    botom9.onclick = () => {
    operador.inc(9);
    }
}

function main()
{
    console.log("Que comienzen los juegos de Javascript!!");
    var cadena = [''];
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
    var menos = document.getElementById('menos');
    var multiplica= document.getElementById('multiplica');
    var divide= document.getElementById('divide');
    var igual= document.getElementById('igual');
    var ac = document.getElementById('ac');

    var operador1 = new operador(display)
    var operador2= new operador(display)
    numero(operador1)
    mas.onclick =()=>{
          cadena [0] = operador1.valor;
          cadena[1] = "+"
          numero(operador2);
    }
    menos.onclick =()=>{
          cadena [0] = operador1.valor;
          cadena[1] = "-"
          numero(operador2);
    }
    multiplica.onclick =()=>{
          cadena [0] = operador1.valor;
          cadena[1] = "x"
          numero(operador2);
    }
    divide.onclick =()=>{
          cadena [0] = operador1.valor;
          cadena[1] = "/"
          numero(operador2);
    }


    igual.onclick=()=>{
        if(cadena[0]==""){
            cadena[0]='0';}
        cadena[2]= operador2.valor;
        console.log(cadena)
        if(cadena[1] == '+'){
            var numero= (parseInt(cadena[0]) + parseInt(cadena[2]))
            display.innerHTML= numero;
            operador1.valor= numero;
            operador2.valor= '';
        }
        if(cadena[1] == '-'){
            var numero= (parseInt(cadena[0]) - parseInt(cadena[2]))
            display.innerHTML= numero;
            operador1.valor= numero;
            operador2.valor= '';
        }
        if(cadena[1] == 'x'){
            var numero= (parseInt(cadena[0]) * parseInt(cadena[2]))
            display.innerHTML= numero;
            operador1.valor= numero;
            operador2.valor= '';
        }
        if(cadena[1] == '/'){
            var numero= (parseInt(cadena[0]) / parseInt(cadena[2]))
            display.innerHTML= numero;
            operador1.valor= numero;
            operador2.valor= '';
        }
       }
    ac.onclick=()=>{
        document.location.reload();
    }
}
