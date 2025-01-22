$("#btnEnviar").click(function() {
    var nonbre = $("#txtNombre").val();
    var email = $("#txtEmail").val();
});

/*Login */
$("#btnLogin").click(function() {
    var email = $("#txtEmail").val();
    var password = $("#txtPassword").val();
    var recordar = $("#chkRecordar").is(":checked");
    
    if(email !="Daniel" || password != "AdminAHM123"){
        Swal.fire({
            icon: "error",
            title: "Error al ingresar",
            text: "Usuario o contraseña incorrecta",
          });
    }else{window.location.href = "ejercicio3.html";}
});

/*Mostrar nombre, correo y fecha */
$("#btnEnviar").click(function() {
    var pNombre = $("#txtPNombre").val();
    var sNombre = $("#txtSNombre").val();
    var pApellido = $("#txtPApellido").val();
    var sApellido = $("#txtSApellido").val();
    var nombreCompleto = pNombre + " " + sNombre + " " + pApellido + " " + sApellido;
    var email = $("#txtCorreo").val();
    var fecha = $("#inpFechaYHora").val();

    Swal.fire({
        icon: "success",
        title: "Datos del formulario",
        html: "Bienvenido (a): " + nombreCompleto + "<br>Correo: " + email + "<br>Fecha de registro: " + fecha,
      });
});