//Declarando variables para los controles
var txtCor=document.getElementById("txtCor");
var txtCon=document.getElementById("txtCon");
var btnRegistrar=document.getElementById("btnRegistrar");
//Creamos un procedimiento para limpiar las cajas
function Limpiar(){
    txtCor.value="";
    txtCon.value="";
    txtCon.focus();
}
//Creamos un procedimiento para registrar al usuario
function RegistrarUsuario(){
    
    if(txtCor.value=="" || txtCor.value==null){
        alert("Ingresa el correo");
        txtCor.focus();
    }else if(txtCon.value=="" || txtCon.value==null){
        alert("Ingrese contraseña");
        txtCon.focus();
    }else{
        //Capturando valores
        var cor=txtCor.value;
        var con=txtCon.value;
        //Llamamos a la funcion de Firebase para crear usuarios
        auth.createUserWithEmailAndPassword(cor, con)
  .then((userCredential) => {
    // Signed in
    alert("Se registró el usuario en Firebase");
    Limpiar();
  })
  .catch((error) => {
    alert("No se pudo registrar el usuario en Firebase");
    Limpiar();
  });
    }

}

//Llamamos al procedimiento en el boton
btnRegistrar.addEventListener("click",RegistrarUsuario);