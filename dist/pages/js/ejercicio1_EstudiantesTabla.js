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
        var edad = $('#txtEdad').val();
        var nota1 = $('#txtNota1').val();
        var nota2 = $('#txtNota2').val();
        var nota3 = $('#txtNota3').val();
    
    
        /* Validaciones */
        if (nombres == "" || apellidos == "" || sexo == null || edad == "" || nota1 == "" || nota2 == "" || nota3 == "") {
            iziToast.error({
                title: 'Error',
                message: 'Todos los campos son obligatorios'
            });
            return;
        } else {
            iziToast.success({
                title: 'Exito',
                message: 'Los datos se guardaron correctamente'
            });
    
            /* Calcular promedio */
            var promedio = (Number(nota1) + Number(nota2) + Number(nota3)) / 3;

            /*Si el promedio es mayor a 70 ha aprobado de lo contrario, reprueba */
            if (promedio >= 70) {
                iziToast.success({
                    title: 'Exito',
                    message: 'El estudiante ha aprobado.'
                });
            } else {
                iziToast.error({
                    title: 'Error',
                    message: 'El estudiante ha reprobado.'
                }); 
            }
    
                /* Fila e imprimir en pantalla*/
                var fila = `<tr>
                    <td>${nombres}</td> 
                    <td>${apellidos}</td> 
                    <td>${edad}</td>
                    <td>${sexo}</td>  
                    <td>${nota1}</td> 
                    <td>${nota2}</td> 
                    <td>${nota3}</td> 
                    <td>${promedio.toFixed(2)}</td> 
                </tr>`;
            $('#tblEstudiantes').append(fila);
            $("#txtPromedio").val(promedio.toFixed(2));
        }
}

/* Boton Guardar y llamar a  la funcion	 */
$('#btnGuardar').click(function () {ingresar();});