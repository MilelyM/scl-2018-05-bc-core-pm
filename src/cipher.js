window.cipher = {
   encode : (texto, clave) => {
    
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
         
          Resulcode += String.fromCharCode(AsciiCode);
    }
return Resulcode
    
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

