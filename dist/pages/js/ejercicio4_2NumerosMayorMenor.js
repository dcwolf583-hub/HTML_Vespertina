/* datatable */
$("#tblOperaciones").DataTable();

/* Funciones */
function limpiar() {
    $('#txtNum1').val("");
    $('#txtNum2').val("");
}

function calcular() {
    var num1 = parseFloat($("#txtNum1").val());
    var num2 = parseFloat($("#txtNum2").val());

    /* validar */
    if (num1 == "" || num2 == "" || num1 == null || num2 == null || isNaN(num1) || isNaN(num2)) {
        /* Mensaje */
        iziToast.error({title: 'Error', message: 'Todos los campos son obligatorios',});
        return;
    } else {
            /* Num 1 es mayor */
            if (num1 > num2) {
                /* Mensaje */
                iziToast.info({ title: 'Correcto', message: 'El primer número es mayor que el segundo.', })

                /* Agregar el calculo a la tabla mediante la funcion add de datatable */
                $("#tblOperaciones").DataTable().row.add([
                    num1,num2,(num1+" es mayor que "+num2)
                ]).draw(); }

            /* Num 2 es mayor */     
            else if (num1 < num2) {

                /* Mensaje */
                iziToast.info({ title: 'Correcto', message: 'El segundo número es mayor que el primero.', })

                /* Agregar el calculo a la tabla mediante la funcion add de datatable */
                $("#tblOperaciones").DataTable().row.add([
                    num1,num2,(num2+" es mayor que "+num1)
                ]).draw(); } 

            /* Ambos son iguales */    
            else {
                /* Mensaje */
                iziToast.info({ title: 'Correcto', message: 'Ambos números son iguales.', })

                /* Agregar el calculo a la tabla mediante la funcion add de datatable */
                $("#tblOperaciones").DataTable().row.add([
                    num1,num2,("Ambos números son iguales.")
                ]).draw(); }  
    }
}

/* Botones */
$("#btnLimpiar").click(function(){ limpiar(); });
$("#btnCalcular").click(function(){ calcular(); });