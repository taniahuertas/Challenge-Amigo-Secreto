// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

/* Declaración de variable */

let Amigos = [];

/* Función agregar amigos y listarlos en la interfaz sin incluír alertas

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    if (nombre) {
        const lista = document.getElementById('listaAmigos');
        const li = document.createElement('li');
        li.textContent = nombre;
        lista.appendChild(li);
        input.value = '';
        input.focus();
    } */

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

    const lista = document.getElementById('listaAmigos');
    const li = document.createElement('li');
    li.textContent = nombre;
    lista.appendChild(li);
    input.value = '';
    input.focus();
}