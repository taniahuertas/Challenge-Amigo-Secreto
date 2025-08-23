// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

/* Declaración de variable */

let Amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    // Validación para evitar nombres vacíos
    if (!nombre) {
        alert("Por favor incluye un nombre válido");
        input.focus();
        return;
    }

    // Validar caracteres no permitidos: números, @, #, /, *, ?, !, signos de exclamación/interrogación
    const regex = /[0-9@#\/\*\?!¡¿]/;
    if (regex.test(nombre)) {
        alert("Por favor ingresa nombres válidos");
        input.focus();
        return;
    }

    // Validar longitud del nombre (mínimo 3 caracteres)
    if (nombre.length < 2) {
        alert("Ingresa un nombre con al menos 2 caracteres");
        input.focus();
        return;
    }

    // Validar duplicados
    if (Amigos.includes(nombre)) {          
        alert("Ya agregaste este nombre, intenta con otro");
        input.value = '';
        input.focus();
        return;
    }   

    // Validar máximo de amigos (30)
    if (Amigos.length >= 30) {
        alert("Has alcanzado el número máximo de amigos (30)");
        input.value = '';
        input.focus();
        return;
    }

    Amigos.push(nombre);
    console.log("Amigos actuales:", Amigos); 
    const lista = document.getElementById('listaAmigos');
    const li = document.createElement('li');
    li.textContent = nombre;
    lista.appendChild(li);
    input.value = '';
    input.focus();
}

function sortearAmigo() {
    console.log("Intentando sortear entre:", Amigos);
    if (Amigos.length < 3) {
        alert("Debes agregar al menos 3 nombres para hacer el sorteo");
        return;
    }
    // Elegir un nombre al azar
    const indice = Math.floor(Math.random() * Amigos.length);
    const nombreElegido = Amigos[indice];

    // Mostrar el resultado en la interfaz
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${nombreElegido}</strong></li>`;
}

