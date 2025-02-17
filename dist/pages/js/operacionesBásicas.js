/* datatable */
$("#tblOperaciones").DataTable();


/* Operaciones */

/* Sumar */
$("#btnSuma").click(function(){
    var num1 = parseFloat($("#txtNum1").val());
    var num2 = parseFloat($("#txtNum2").val());
    var resultado = Number(num1) + Number(num2);
    $("#txtResultado").val(resultado);

    /* Agregar a la tabla mediante la funcion add de datatable */
    $("#tblOperaciones").DataTable().row.add([
        num1,num2,resultado,(num1+"+"+num2+" = "+resultado)
    ]).draw();
});

/* Restar */
$("#btnResta").click(function(){
    var num1 = parseFloat($("#txtNum1").val());
    var num2 = parseFloat($("#txtNum2").val());
    var resultado = Number(num1) - Number(num2);
    $("#txtResultado").val(resultado);

    /* Agregar a la tabla mediante la funcion add de datatable */
    $("#tblOperaciones").DataTable().row.add([
        num1,num2,resultado,(num1+"-"+num2+" = "+resultado)
    ]).draw();
});

/* Multiplicar */
$("#btnMult").click(function(){
    var num1 = parseFloat($("#txtNum1").val());
    var num2 = parseFloat($("#txtNum2").val());
    var resultado = Number(num1) * Number(num2);
    $("#txtResultado").val(resultado);
    
    /* Agregar a la tabla mediante la funcion add de datatable */
    $("#tblOperaciones").DataTable().row.add([
        num1,num2,resultado,(num1+" x "+num2+" = "+resultado)
    ]).draw();
});

/* Dividir */
$("#btnDiv").click(function(){
    var num1 = parseFloat($("#txtNum1").val());
    var num2 = parseFloat($("#txtNum2").val());
    if(num2 == 0){
        iziToast.error({
            title: 'Error',
            message: 'No se puede dividir por 0',
        })
        return;
    }else {
        var resultado = Number(num1) / Number(num2);
        $("#txtResultado").val(resultado);

        /* Agregar a la tabla mediante la funcion add de datatable */
        $("#tblOperaciones").DataTable().row.add([
            num1,num2,resultado,(num1+"/"+num2+" = "+resultado)
        ]).draw();
    }
});


$("#btnLimpiar").click(function(){
    $("#txtNum1").val("");
    $("#txtNum2").val("");
    $("#txtResultado").val("");
});