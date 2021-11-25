$("#btnLogin").click(function(){
    if($.trim($("#iniciarCorreo").val()) == "" || $.trim($("#iniciarContraseña").val()) == "" )
    {
        $("#iniciarCorreo").addClass("is-invalid");
        $("#iniciarContraseña").addClass("is-invalid");  

        alert("Por favor rellene los campos");
    }
    else{
        let datos = {
            email: $("#iniciarCorreo").val(),
            contraseña: $("#iniciarContraseña").val()
        }
        $.ajax({
            url: "http://150.230.75.125:8080/api/user/"+datos.email+"/"+datos.contraseña,
            method: "GET",
            dataType: "json",
            success: function(datos){
                if(datos.id != null){
                    $("#statusMessage").text('¡Bienvenido! ' + datos.name);
                    $("#statusMessage").removeClass("bg-danger");
                    $("#statusMessage").addClass("badge bg-success");
                }
                else {
                    $("#statusMessage").text('¡No existe el usuario!');
                    $("#statusMessage").removeClass("bg-success");
                    $("#statusMessage").addClass("badge bg-danger");
                }
                console.log(datos);
            }
        })
        $("#iniciarCorreo").removeClass("is-invalid");
        $("#iniciarCorreo").addClass("is-valid");
        $("#iniciarContraseña").removeClass("is-invalid");
        $("#iniciarContraseña").addClass("is-valid");       
    }
}); 

$("#btnRegistro").click(function(){
    if($.trim($("#registrarNombre").val()) == "" || $.trim($("#registrarEmail").val()) == "" || $.trim($("#registrarContraseña").val()) == "" || $.trim($("#confirmarContraseña").val()) == "" )
    {
        $("#registrarNombre").addClass("is-invalid");
        $("#registrarEmail").addClass("is-invalid");
        $("#registrarContraseña").addClass("is-invalid");
        $("#confirmarContraseña").addClass("is-invalid");      
        alert("Por favor rellene los campos");        
    }else {
        if($("#registrarContraseña").val() == $("#confirmarContraseña").val()){
            let datos = {
                email: $("#registrarEmail").val(),
                password: $("#registrarContraseña").val(),
                name: $("#registrarNombre").val()
            }
            $.ajax({
                url: "http://150.230.75.125:8080/api/user/new",
                method: "POST",
                dataType: "json",
                data: JSON.stringify(datos),
                contentType: "application/json",
                Headers:{
                    "Content-Type":"application/json"
                },
                statusCode: {
                    201: function(datos){
                        if(datos.id != null){
                            $("#statusMessage2").text('¡Cuenta creada de forma correcta!');
                            $("#statusMessage2").removeClass("bg-danger");
                            $("#statusMessage2").addClass("badge bg-success");
                        }
                        else {
                            $("#statusMessage2").text('¡El email ' +datos.email+ ' ya existe!');
                            $("#statusMessage2").removeClass("bg-success");
                            $("#statusMessage2").addClass("badge bg-danger");
                        }
                        console.log(datos);
                    }
                }
            })
        }
        else{
            alert("Las contraseñas no coinciden");
            $("#registrarNombre").removeClass("is-invalid");
            $("#registrarEmail").removeClass("is-invalid");
            $("#registrarContraseña").addClass("is-invalid");
            $("#confirmarContraseña").addClass("is-invalid");
        }
    }
});