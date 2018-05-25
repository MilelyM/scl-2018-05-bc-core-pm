/*window.cipher = {
  encode: () => {*/
    function Encriptar(){
      var texto = document.getElementsByTagName("input")[0].value;
      texto = texto.toUpperCase();
    
    //const texto= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    //parse todo lo que es texto a numerico 
    var clave = parseInt(document.getElementsByTagName("input")[1].value);
    //document.writeln(clave);
    var Codi= 0;
    var root= "";
      
        //Recorro cada letra del mensaje
        //  (Inicializacion;condicion; iteracciion)
        for( let index = 0; index < texto.length;index++){
    
          //Variable para convertir letra en valor Ascii en la posicion de index
      var AsciiCode = texto.charCodeAt(index);
      // se crea variable para asignar nuevo valor en codigo ascci
      var Codi = AsciiCode + clave;
          // validar dentro den rango del abc
          if(Codi>90){
            Codi -=90;
           Codi +=64;
          }
         // se tomo el id de htmt para crear una variable y concatenarla al codigo encriptado trasformado en letras
          root = root + String.fromCharCode(Codi);
        // document.writeln(root);
    }
    // envia el resultado al id en htlm
    document.getElementById("root").innerHTML= root;
 /* }
  },
  decode: () => {
    
  }*/
}