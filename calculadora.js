function delultimo(cadena){
   aux= cadena.valor.slice(0,-1)
   console.log(aux);
   cadena.valor = aux;
   cadena.inc("");
   return(cadena.valor)
}


function addcadena(display){
    this.valor="";
    this.display=display;
    this.inc=function(value){
      this.valor+=value;
      this.display.innerHTML =this.valor;
      console.log(this.valor);
    }
}


function main(){
    console.log("Que comienzen los juegos de Javascript!!");
    var calculadora = {
        display: document.getElementById('display'),
    }
    var boton = {
        cero:document.getElementById('botom0'),
        uno: document.getElementById('botom1'),
        dos:document.getElementById('botom2'),
        tres:document.getElementById('botom3'),
        cuatro:document.getElementById('botom4'),
        cinco:document.getElementById('botom5'),
        seis:document.getElementById('botom6'),
        siete:document.getElementById('botom7'),
        ocho:document.getElementById('botom8'),
        nueve:document.getElementById('botom9'),
        
        mas:document.getElementById('mas'),
        menos:document.getElementById('menos'),
        multiplica:document.getElementById('multiplica'),
        divide:document.getElementById('divide'),
        
        igual: document.getElementById('igual'),
        ac: document.getElementById('ac'),
        del: document.getElementById('del'),
        punto: document.getElementById('punto'),
        
    }
    
    var cadena= new addcadena(calculadora.display);
    
    boton.cero.onclick=()=>{cadena.inc('0')} 
    boton.uno.onclick=()=>{cadena.inc('1')}
    boton.dos.onclick=()=>{cadena.inc('2')} 
    boton.tres.onclick=()=>{cadena.inc('3')} 
    boton.cuatro.onclick=()=>{cadena.inc('4')} 
    boton.cinco.onclick=()=>{cadena.inc('5')} 
    boton.seis.onclick=()=>{cadena.inc('6')} 
    boton.siete.onclick=()=>{cadena.inc('7')} 
    boton.ocho.onclick=()=>{cadena.inc('8')} 
    boton.nueve.onclick=()=>{cadena.inc('9')} 
    boton.mas.onclick=()=>{cadena.inc('+')} 
    boton.menos.onclick=()=>{cadena.inc('-')} 
    boton.multiplica.onclick=()=>{cadena.inc('*')} 
    boton.divide.onclick=()=>{cadena.inc('/')} 
    boton.punto.onclick=()=>{cadena.inc('.')}
    
    boton.ac.onclick=()=>{ document.location.reload();}
    console.log(cadena.valor);
    
    boton.igual.onclick=()=>{
        cadena.valor= new String(eval(cadena.valor))
        calculadora.display.innerHTML = cadena.valor;
        if(cadena.valor=='Infinity'){
            calculadora.display.innerHTML = 'MathError';
            cadena.valor="";
        }
        console.log(cadena.valor);
    }
    boton.del.onclick=()=>{
        console.log(cadena.valor);
        calculadora.display.innerHTML = cadena.valor;
        delultimo(cadena);
        console.log(cadena.valor)
        console.log(cadena)
        }
}
