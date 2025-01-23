$("#btnFactorial").click(function(){
    var numInicio = parseFloat($("#txtNumInicio").val());
    var numLimite = parseFloat($("#txtNumLímite").val());
    var resultado = "";
    for (var i = numInicio; i <= numLimite; i++) {
      var contador = 0;
      for (var j = 1; j <= i; j++) {
        if (i % j === 0) {
          contador++;
        }
      }
      if (contador === 2) {
        resultado += (resultado === "") ? i : ", " + i;
      }
    }
    $("#txtResultado").val(resultado);
  });
  
  $("#btnLimpiar").click(function(){
    $("#txtNumInicio").val("");
    $("#txtNumLímite").val("");
    $("#txtResultado").val("");
  });