function showModal() {
   document.getElementById('openModal').style.display = 'block';
   
}

function CloseModal() {
  document.getElementById('openModal').style.display = 'none';
    location.reload();
}


function val(){
        
    var nombre = document.getElementById("C1").value;
    var correo = document.getElementById("C2").value;
    var mensaje = document.getElementById("C3").value;
      
    var expresion = /\w+@\w+\.[a-z]/;
    
    if(nombre === "" || correo === "" || mensaje === ""){
       alert("Todos los campos son obligatorios");  
        return false;
    }else{
        if(!expresion.test(correo)){
           alert("El Correo no es valido");  
           return false;
        }else{
            showModal();
            return false; 
        }
    }
}

function valletra(e) {
    
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
    especiales = [8, 37, 39, 46, 46];

    tecla_especial = false
    
    for(var i in especiales) {
        if(key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if(letras.indexOf(tecla) == -1 && !tecla_especial){
        return false;
    }
}


function limpiar() {
    var val = document.getElementById("C1").value;
    var tam = val.length;
    
    for(i = 0; i < tam; i++) {
        if(!isNaN(val[i])){
            document.getElementById("C1").value = '';
        }else{
             if((val == ".")){
                 document.getElementById("C1").value = '';
             }
        }
    }
}