
    var articulo = document.getElementById("Articulo");
    var monto = document.getElementById("Monto");
    var total = 0;
    var lista = document.getElementById("lista");
    var parrafoTotal = document.querySelector("p");
    
function imprimirCosastotal(){
    
    var articuloValue = articulo.value;
    var montoValue = monto.value;
  
    // Implemente algunas codiciones por si al caso no se ingresa nada en los inputs
    if (montoValue !=='' && articuloValue!== ''){
        total = total + parseFloat(montoValue);
   
        var elemento = document.createElement("li");
        elemento.innerHTML = `${articuloValue} ...........$${montoValue}`
        lista.appendChild(elemento);
        parrafoTotal.innerHTML = `Total: <strong>${total}</strong>`
        document.getElementById("Articulo").value ='';
        document.getElementById("Monto").value =''
    }
   
    

}

