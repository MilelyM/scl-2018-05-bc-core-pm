window.cipher = {
   encode : (texto, clave) => {
    
    //const texto= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    //parse todo lo que es texto a numerico 
    
  
    var AsciiCode= 0;
    var Resulcode= "";
      
        //Recorro cada letra del mensaje
        //  (Inicializacion;condicion; iteracciion)
        for( let index = 0; index < texto.length;index++){
    
          //Variable para convertir letra en valor Ascii en la posicion de index
            var AsciiCode = texto.charCodeAt(index);
            AsciiCode= (AsciiCode-65+clave) % 26+65;
      // se crea variable para asignar nuevo valor en codigo ascci
          //   var Codi = AsciiCode + clave;
          // validar dentro den rango del abc
         
         // se tomo el id de htmt para crear una variable y concatenarla al codigo encriptado trasformado en letras
          Resulcode += String.fromCharCode(AsciiCode);
        // document.writeln(root);
    }
    // envia el resultado al id en htlm
return Resulcode
    //replace remplaza algo dentro del string,Crea un objeto 'expresión regular' para encontrar el espacio, "g"busqueda global
    
  },
  decode: (texto,clave) => {
    var AsciiCode= 0;
    var Resulcode= "";
      
       
        for( let index = 0; index < texto.length;index++){
    
         
            var AsciiCode = texto.charCodeAt(index);
            AsciiCode= (AsciiCode+65-clave) % 26+65;
     
         
          Resulcode += String.fromCharCode(AsciiCode);
    }
    return Resulcode
  }


}

