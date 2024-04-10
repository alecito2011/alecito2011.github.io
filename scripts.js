function login() {
    // Aquí puedes agregar la lógica para iniciar sesión.
    // Por ejemplo, puedes obtener los valores de los campos de entrada y enviarlos a un servidor para su verificación.
    // En este ejemplo, simplemente imprimiremos los valores en la consola.
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    console.log("Nombre de Usuario:", username);
    console.log("Contraseña:", password);
}

function register() {
    // Aquí puedes agregar la lógica para registrar un nuevo usuario.
    // Por ejemplo, puedes obtener los valores de los campos de entrada y enviarlos a un servidor para su procesamiento.
    // En este ejemplo, simplemente imprimiremos los valores en la consola.
    var newUsername = document.getElementById("new-username").value;
    var newPassword = document.getElementById("new-password").value;
    
    console.log("Nuevo Nombre de Usuario:", newUsername);
    console.log("Nueva Contraseña:", newPassword);
}

function showRegisterForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
}

function showLoginForm() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
}
