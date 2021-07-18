//Declarando variables para los controles
var txtNom=document.getElementById("txtNom");
var cboCategoria=document.getElementById("cboCategoria");
var txtPre=document.getElementById("txtPre");
var txtCan=document.getElementById("txtCan");
var btnRegistrar=document.getElementById("btnRegistrar");

//Creamos un procedimiento para mostrar
function MostrarProducto(){
    //Declaramos una viable para guardar los datos
    var listaproductos=Mostrar();
    //Selecciono el tbody de la tabla donde voy a mostrar la informacion
    var tbody=document.querySelector("tbProducto tbody");
    tbody.innerHTML="";
    //Agregamos al tbody las filas que se registren
    for(var i=0;i<listaproductos.length;i++){
        //Declaramos una variable para las filas
        var fila=tbody.insertRow(i);
        //Declaramos variables para los titulos
        var titulonom=fila.insertCell(0);
        var titulocat=fila.insertCell(1);
        var titulopre=fila.insertCell(2);
        var titulocan=fila.insertCell(3);
        //Agregamos los valores
        titulonom.innerHTML=listaproductos[i].nombre;
        titulocat.innerHTML=listaproductos[i].categoria;
        titulopre.innerHTML=listaproductos[i].precio;
        titulocan.innerHTML=listaproductos[i].cantidad;
        tbody.appendChild(fila);
    }
}

//Creamos un procedimiento para registrar los datos
function RegistrarProducto(){
    //Validacion de datos
    //Capturando valores
    var nom=txtNom.value;
    var cat="";
    var indice=cboCategoria.selectedIndex;
    switch(indice){
        case 1:
            cat="Entretenimiento";
            break;
        case 2:
            cat="Tecnologia";
            break;
        case 3:
            cat="Linea Blanca";
            break;
        default:
            cat="";
            break;
    }
    var pre=txtPre.value;
    var can=txtCan.value;
    //Llamamos al procedimiento registrar
    Registrar(nom,cat,pre,can);
    //Llamamos al procedimiento para mostrar
    MostrarProducto();
}

//Llamamos al procedimiento registrar en el evento del boton
btnRegistrar.addEventListener("click",RegistrarProducto);