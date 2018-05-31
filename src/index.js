/* Acá va tu código */

function cifrarClick(){
    var texto = document.getElementById("caja1").value;
    var clave = parseInt(document.getElementById("caja2").value);
    document.getElementById("resultado").innerHTML = window.cipher.encode(texto,clave);
  
}

 