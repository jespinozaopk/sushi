let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Función para añadir productos al carrito
function añadirAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarContadorCarrito();
    alert(`${nombre} ha sido añadido al carrito`);
}

// Función para actualizar el contador del carrito en la interfaz
function actualizarContadorCarrito() {
    document.getElementById('carrito-count').textContent = carrito.length;
}

// Función para manejar el evento de clic en el botón del carrito
function abrirCarrito() {
    if (!localStorage.getItem('usuarioSesion')) {
        alert('Por favor, inicia sesión para ver tu carrito.');
        mostrarVentanaDeInicioSesion();
    } else {
        mostrarContenidoCarrito();
    }
}

// Función para pedir el inicio de sesión
function mostrarVentanaDeInicioSesion() {
    const usuario = prompt('Ingresa tu usuario para iniciar sesión:');
    if (usuario) {
        localStorage.setItem('usuarioSesion', usuario);
        alert('Inicio de sesión exitoso');
        mostrarContenidoCarrito();
    }
}

// Función para mostrar el contenido del carrito
function mostrarContenidoCarrito() {
    let contenido = "Productos en tu carrito:\n";
    carrito.forEach(item => {
        contenido += `${item.nombre} - $${item.precio}\n`;
    });
    alert(contenido);
}

// Actualizar el contador del carrito al cargar la página
document.addEventListener("DOMContentLoaded", actualizarContadorCarrito);
