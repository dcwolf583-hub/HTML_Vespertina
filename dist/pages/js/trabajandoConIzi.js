/* DataTable */
$("#tblSalarios").DataTable(); 

/*variables */
$("#btnNuevo").click(function () {
    $("#modalSalario").modal("show");
});

$("#btnCerrar").click(function () { 
    $("#modalSalario").modal("hide");
});

$("#btnGuardar").click(function () {
    var nombre = $("#txtNombre").val();
    var salario = $("#txtSalario").val();
    var aumento = 0;
    var sexo = $("input[name='rbSexo']:checked").val();
    var num = 1;

    validacion();

    function validacion() {
        if (nombre == "" || salario == "" || sexo == null) {
            iziToast.warning({
               title: "Error",
               message: "Debe llenar todos los campos." 
            });
        } else {
            iziToast.success({
                title: "Exito",
                message: "Los datos se guardaron correctamente." 
             });

             /*Salario de 0 a 500, aumento del 15%
              Salario de 501 a 1000, aumento del 10%
              Salario mayor a 1001, aumento del 5%*/
             if(salario >= 0 && salario <= 500){aumento = salario * 0.15;}
             else if(salario >= 501 && salario <= 1000){aumento = salario * 0.10;}
             else if(salario >= 1001){aumento = salario * 0.05;}

             /* Resultados */
             var nuevoTR = "<tr><td>" + num + "</td><td>" + nombre + "</td><td>" + salario + "</td><td>" + aumento + "</td><td>" + sexo + "</td></tr>";
             $("#tblSalarios").append(nuevoTR);
             $("#txtNombre").val("");
             $("#txtSalario").val("");
             num++;
        }
    }
});

