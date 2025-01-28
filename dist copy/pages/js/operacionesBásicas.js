$("#btnSuma").click(function(){
    var num1 = parseFloat($("#txtNum1").val());
    var num2 = parseFloat($("#txtNum2").val());
    var resultado = Number(num1) + Number(num2);
    $("#txtResultado").val(resultado);
});
$("#btnResta").click(function(){
    var num1 = parseFloat($("#txtNum1").val());
    var num2 = parseFloat($("#txtNum2").val());
    var resultado = Number(num1) - Number(num2);
    $("#txtResultado").val(resultado);
});
$("#btnMult").click(function(){
    var num1 = parseFloat($("#txtNum1").val());
    var num2 = parseFloat($("#txtNum2").val());
    var resultado = Number(num1) * Number(num2);
    $("#txtResultado").val(resultado);
});
$("#btnDiv").click(function(){
    var num1 = parseFloat($("#txtNum1").val());
    var num2 = parseFloat($("#txtNum2").val());
    if(num2 == 0){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No se puede dividir por 0',
        });
        return;
    }else {
        var resultado = Number(num1) / Number(num2);
        $("#txtResultado").val(resultado);
    }
});
$("#btnLimpiar").click(function(){
    $("#txtNum1").val("");
    $("#txtNum2").val("");
    $("#txtResultado").val("");
});