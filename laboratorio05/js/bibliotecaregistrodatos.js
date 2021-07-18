//Variables para los controles
var txtCod = document.getElementById("txtCod");
var txtNom = document.getElementById("txtNom");
var txtApe = document.getElementById("txtApe");
var txtCor = document.getElementById("txtCor");
var btnRegistrar = document.getElementById("btnRegistrar");
var btnActualizar = document.getElementById("btnActualizar");

//Utilizamos la funcion para registrar 
// function writeUserData(n, a, c){
//     database.ref("registro/").set({
//         nombre: n,
//         apellido: a,
//         correo:c ,
//     });
// }

//Creamos un procedimiento para buscar
function Buscar(codigo){
    //Seleccionamos la tabla que se quiere buscar
    var db=database.ref().child("registro");
    db.once("value", function (snapshot) {
        snapshot.forEach(function (data){
            //declaramos una variable para obtener el ID (KEY) de la tabla
            var key = data.key;
            //Verificar si el codigo es igual al ID de la tabla
            if (key == codigo){
                //Declaramos variables para capturar los datos
                var cod = key;
                var nom = data.val().nombre;
                var ape = data.val().apellido;
                var cor = data.val().correo;
                //Le asignamos los valores a los controles
                txtCod.value = cod;
                txtNom.value = nom;
                txtApe.value = ape;
                txtCor.value = cor;
            }
        });
    });
}

//Creamos un procedimiento para mostrar los datos de la tabla
function Mostrar(){
    //Declaramos una variable para contar el numero de filas
    var i = 0;
    //Selecciono el tbody de la tabla donde voy a mostrar la informacion
    var tbody = document.querySelector("#tbRegistro tbody");
    tbody.innerHTML = "";
    //Seleccione la tabla que se quiere mostrar
    var db = database.ref().child("registro");
    db.once("value", function (snapshot) {
        if(snapshot.exists()){
            snapshot.forEach(function (data) {
                var cod = data.key;
                var nom = data.val().nombre;
                var ape = data.val().apellido;
                var cor = data.val().correo;
                //Declaramos una variable para las filas
                var fila = tbody.insertRow(i);
                //Declaramos variables para los titulos
                var titulonom = fila.insertCell(0);
                var tituloape = fila.insertCell(1);
                var titulocor = fila.insertCell(2);
                var tituloact = fila.insertCell(3);
                var titulobor = fila.insertCell(4);
                //Agregamos los valores
                titulonom.innerHTML = nom;
                tituloape.innerHTML = ape;
                titulocor.innerHTML = cor;
                tituloact.innerHTML = "<a href='#' onclick=Buscar('" + cod + "')>Seleccionar</a>";
                titulobor.innerHTML = "<a href='#' onclick=Eliminar('" + cod + "')>Seleccionar</a>";
                tbody.appendChild(fila);
                i++;
            });
        }
    });
}

//Llamamos a la funcion Mostrar cuando carga la pagina
window.onload = Mostrar;

//Creamos una funcion para limpiar
function Limpiar(){
    txtNom.value="";
    txtApe.value="";
    txtCor.value="";
    txtNom.focus();
}

//Creamos un procedimiento para registrar
function Registrar(){
    if(txtNom.value == "" || txtNom.value == null){
        alert("Ingrese sus nombres");
        txtNom.focus();
    }else if (txtApe.value == "" || txtApe.value == null){
        alert("Ingrese sus apellidos");
        txtApe.focus();
    }else if(txtCor.value == "" || txtCor.value == null){
        alert("Ingrese el correo");
        txtCor.focus();
    }else{
        //capturando valores
        var nom = txtNom.value;
        var ape = txtApe.value;
        var cor = txtCor.value;
        //Llamando a la funcion para registrar del firebase
        // writeUserData(nom, ape, cor);
        //Creamos la tabla si no existiera y la seleccionamos
        var db = database.ref("registro");
        //Asignamos los valores a la tabla que ha ido creada
        var registros = db.push();
        //lepaso los campos y los valores que tendra la tabla
        registros.set({
            nombre: nom,
            apellido: ape,
            correo: cor,
        });
        alert("se registro el dato");
        //Llamamos a la funcion Limpiar
        Limpiar();
        //Llamamos al procedimiento mostrar
        Mostrar();
    }
}

//Creamos el procedimiento para actualizar
function Actualizar(){
    //Capturando valores
    var cod = txtCod.value;
    var nom = txtNom.value;
    var ape = txtApe.value;
    var cor = txtCor.value;
    //Seleccionamos la tabla que queremos actualizar con el codigo del registro
    var db = database.ref("registro/" + cod);
    //Le asignamos los valores que se van actualizar
    db.update({
        nombre: nom,
        apellido: ape,
        correo: cor,
    });
    alert("Se actualizo el dato");
    //Llamamos al procedimiento Limpiar
    Limpiar();
    //Llamamos al procedimiento mostrar
    Mostrar();
}

//Creamos un procedimiento para eliminar
function Eliminar(codigo) {
    //Preguntamos si se quiere eliminar el registro
    var result = confirm("¿Estas seguro que quieres eliminar el registro?");
    //Evaluamos la respuesta
    if (result) {
        //Creamos una variable para el codigo
        var cod = codigo;
        //Seleccionamos la tabla con el codigo a borrar y la borramos
        var db = database.ref("registro/" + cod ).remove();
        alert("Se eliminó el dato");
        //Llamamos al procedimiento Limpiar
        Limpiar();
        //Llamamos al procedimiento Mostrar
        Mostrar();
    }
}
//asignamos el procedimiento boton
btnRegistrar.addEventListener("click", Registrar);
btnActualizar.addEventListener("click", Actualizar);
