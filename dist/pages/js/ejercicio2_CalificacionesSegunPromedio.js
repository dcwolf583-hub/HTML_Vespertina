/* DataTable */
$("#tblEstudiantes").DataTable();

/* Funcion para limpiar */
function limpiar() {
    $('#txtNombres').val("");
    $('#txtApellidos').val("");
    $('input[name="rbSexo"]').prop('checked', false);
    $('#txtEdad').val("");
    $('#txtNota1').val("");
    $('#txtNota2').val("");
    $('#txtNota3').val("");
    $('#txtPromedio').val("");
}

/*Limpiar controles */
$('#btnLimpiar').click(function () {limpiar();});

/*Ingresar datos */
function ingresar() {
        /* variables */
        var nombres = $('#txtNombres').val();
        var apellidos = $('#txtApellidos').val();
        var sexo = $('input[name="rbSexo"]:checked').val();
        var promedio = $('#txtPromedio').val();
        var calificacion = "";
    
    
        /* Validaciones */
        if (nombres == "" || apellidos == "" || sexo == null || promedio == "") {
            iziToast.error({
                title: 'Error',
                message: 'Todos los campos son obligatorios'
            });
            return;
        } else {
            /* Calcular promedio */
            if (promedio >= 0 && promedio <= 10) {

                /* Calcular calificacion */
                if (promedio >= 0 && promedio <= 2) {
                    calificacion = "Deficiente";
                    /* Mensaje */ iziToast.success({title: 'Calificación', message: calificacion});
} 
                else if (promedio >= 3 && promedio <= 4) {
                    calificacion = "Insuficiente";   
                    /* Mensaje */ iziToast.success({title: 'Calificación', message: calificacion});
                } 
                else if (promedio >= 5 && promedio <= 6) {
                    calificacion = "Suficiente";
                    /* Mensaje */ iziToast.success({title: 'Calificación', message: calificacion});
                } 
                else if (promedio >= 7 && promedio <= 8) {
                    calificacion = "Bien";
                    /* Mensaje */ iziToast.success({title: 'Calificación', message: calificacion});
                } 
                else if (promedio >= 9 && promedio <= 10) {
                    calificacion = "Notable";
                    /* Mensaje */ iziToast.success({title: 'Calificación', message: calificacion});
                }   
                
                /* Mensaje */
                iziToast.success({title: 'Exito', message: 'Los datos se guardaron correctamente'});

                /* Fila e imprimir en pantalla*/
                var fila = "<tr><td>" + nombres + "</td><td>" + apellidos + "</td><td>" + sexo + "</td><td>" + promedio + "</td><td>" + calificacion + "</td></tr>";
                $('#tblEstudiantes').append(fila);

                /* Limpiar controles */
                limpiar();

            } else { /*MEhsaje*/ iziToast.error({title: 'Error', message: 'El promedio debe estar entre 0 y 10'}); return; }
        }
}

/* Boton Guardar y llamar a  la funcion	 */
$('#btnGuardar').click(function () {ingresar();});