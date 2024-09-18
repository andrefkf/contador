// Array para almacenar números primos
const primos = [];
let indice = 0;

// Función para verificar si un número es primo
function esPrimo(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

// Función para generar números primos
function generarPrimos() {
    let num = 2;
    while (primos.length < 100) { // Puedes ajustar la cantidad de primos generados
        if (esPrimo(num)) primos.push(num);
        num++;
    }
}

// Función para formatear números con un cero adelante si es necesario
function formatearNumero(num) {
    return num < 10 ? '0' + num : num;
}

// Inicializar y configurar los eventos
function init() {
    generarPrimos();
    const numeroDiv = document.getElementById('numero');
    const numeroAnteriorDiv = document.getElementById('numero-anterior');
    
    numeroDiv.textContent = formatearNumero(primos[indice]);
    numeroAnteriorDiv.textContent = formatearNumero(indice > 0 ? primos[indice - 1] : 0);

    // Evento de clic en cualquier parte de la página para pasar al siguiente número primo
    document.addEventListener('click', (event) => {
        // Verificar si el clic es en el área del número
        if (event.target.id === 'numero') return;

        if (indice < primos.length - 1) {
            indice++;
            numeroDiv.textContent = formatearNumero(primos[indice]);
            numeroAnteriorDiv.textContent = formatearNumero(primos[indice - 1]);
        }
    });

    // Evento de clic derecho para volver al número primo anterior
    document.addEventListener('contextmenu', (event) => {
        event.preventDefault();
        if (indice > 0) {
            indice--;
            numeroDiv.textContent = formatearNumero(primos[indice]);
            numeroAnteriorDiv.textContent = formatearNumero(indice > 0 ? primos[indice - 1] : 0);
        }
    });

    // Evento de clic en el número primo para mostrar el número primo anterior
    numeroDiv.addEventListener('click', () => {
        if (indice > 0) {
            indice--;
            numeroDiv.textContent = formatearNumero(primos[indice]);
            numeroAnteriorDiv.textContent = formatearNumero(indice > 0 ? primos[indice - 1] : 0);
        }
    });
}

// Llamar a la función de inicialización al cargar la página
window.onload = init;
