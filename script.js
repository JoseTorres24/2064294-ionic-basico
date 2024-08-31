var Usuario = document.getElementById("Usuario");
var Contraseña = document.getElementById("Contraseña");
var parrafo = document.querySelector("p");

function iniciarSesion(){

    var Usuariovalor = Usuario.value;
    //parrafo.innerHTML = "Login Correcto para " + Usuariovalor;
    parrafo.innerHTML = `Inicio de sesion con exito para ${Usuariovalor}`;
}
function Registro(){
    var Usuariovalor = Usuario.value;
    parrafo.innerHTML = `Registro con exito para ${Usuariovalor}`;
}
