//Creamos una funcion para cuando cargue el documento
function Cargar(url,ancho,alto){
    //Declaramos variables para calcular el ancho y el alto de la pantalla
    var anc=screen.width;
    var alt=screen.height;
    alert(anc);
    alert(alt);
    //Declaramos variables para la posicion
    var x=(anc/2)-(ancho/2);
    var y=(alt/2)-(alto/2);
    alert(x);
    alert(y);
    window.open(url,titulo,"width="+ancho+", height="+alto+",left="+x+",top="+y+",scrollbars=NO");
}

//Llamamos a la funcion cargar
window.onload=Cargar("pagina4.html","Ventana Emergente",200,200);