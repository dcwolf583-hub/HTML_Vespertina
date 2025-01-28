/* datatable */
$("#tblOperaciones").DataTable();
/* Funciones */
function limpiar() {
    $('#txtNum1').val("");
    $('#txtNum2').val("");
    $('#txtNum3').val("");
}

function calcular() {
    var num1 = parseFloat($("#txtNum1").val());
    var num2 = parseFloat($("#txtNum2").val());
    var num3 = parseFloat($("#txtNum3").val());

    var arrNumeros = [num1, num2, num3];
    
    /* Mayor, Medio y Menor */
    var mayor = Math.max(...arrNumeros);
    var menor = Math.min(...arrNumeros);
    var medio = arrNumeros.find(n => n !== mayor && n !== menor);

        /* validar */
    if (num1 == "" || num2 == "" || num3 == "" || num1 == null || num2 == null  || num3 == null || isNaN(num1) || isNaN(num2) || isNaN(num3)) {
            /* Mensaje */
            iziToast.error({title: 'Error', message: 'Todos los campos son obligatorios',});
            return;
        } else {    
            // Si no hay medio asignarlo al mayor (or menor)
    if (medio === undefined) {medio = mayor;}

    /* Mensaje */
    iziToast.info({ title: 'Correcto', message: 'El mayor es: ' + mayor + ', el medio es: ' + medio + ' y el menor es: ' + menor });

    /*Numeros iguales, si hay numeros iguales, agregarlos a la tabla y en la celda qué diga El numero x y el numero y son iguales */
    if (num1 == num2 && num2 == num3) {
        /* mensaje */
        iziToast.info({ title: 'Correcto', message: 'Todos los números son iguales' });

        /* Agregar a la tabla mediante la funcion add de datatable */
        $("#tblOperaciones").DataTable().row.add([
            mayor, medio, menor, 'Todos los números son iguales'
        ]).draw();
        return;
    } else if (num1 == num2) {
            /* mensaje */
            iziToast.info({ title: 'Correcto', message: 'El numero 1: ' + num1 + ' y el numero 2:' + num2 + ' son iguales' });

            /* Agregar a la tabla mediante la funcion add de datatable */
            $("#tblOperaciones").DataTable().row.add([
                mayor, medio, menor, 'El número 1:' + num1 + ' y el número 2:' + num2 + ' son iguales'
            ]).draw();
            return;
        } else if (num1 == num3) {
            /* mensaje */
            iziToast.info({ title: 'Correcto', message: 'El numero 1:' + num1 + ' y el numero 3:' + num3 + ' son iguales' });
            /* Agregar a la tabla mediante la funcion add de datatable */
            $("#tblOperaciones").DataTable().row.add([
                mayor, medio, menor, 'El número ' + num1 + ' y el número ' + num3 + ' son iguales'
            ]).draw();
            return;
        } else if (num2 == num3) {
            /* mensaje */
            iziToast.info({ title: 'Correcto', message: 'El numero 2: ' + num2 + ' y el numero 3: ' + num3 + ' son iguales' });
            /* Agregar a la tabla mediante la funcion add de datatable */
            $("#tblOperaciones").DataTable().row.add([
                mayor, medio, menor, 'El número ' + num2 + ' y el número ' + num3 + ' son iguales'
            ]).draw();
            return;} 
            
        else {
            /* mensaje */
            iziToast.info({ title: 'Correcto', message: 'Todos los números son distintos' });
            /* Agregar a la tabla mediante la funcion add de datatable */
            $("#tblOperaciones").DataTable().row.add([
                mayor, medio, menor, 'Todos los números son distintos'
            ]).draw();
            return;}
    }

    
}

/* botones */
$("#btnLimpiar").click(function () { limpiar(); });
$("#btnCalcular").click(function () { calcular(); });