$("#btnFactorial").click(function(){
    var num1 = parseFloat($("#txtNum1").val());
    var resultado = 1;
    var procedimiento = "";
    for (var i = 1; i <= num1; i++) {
    resultado = resultado * i;
    procedimiento += (i === 1) ? i : " x " + i;
    }
    procedimiento += " = " + resultado;
    $("#txtResultado").val(procedimiento);
});
$("#btnLimpiar").click(function(){
    $("#txtNum1").val("");
    $("#txtResultado").val("");
});