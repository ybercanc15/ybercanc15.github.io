//Crear un vector que contenga la informacion del producto
var producto=[];

//Creamos un procedimiento para poder registrar
function Registrar(nomproducto,catproducto,preproducto,canproducto){
    var NuevoProducto={
        nombre:nomproducto,
        categoria:catproducto,
        precio:preproducto,
        cantidad:canproducto
    };
    producto.push(NuevoProducto);
}

//Creamos una funcion para mostrar la informacion del producto
function Mostrar(){
    return producto;
}