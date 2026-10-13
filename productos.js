// Base de datos completa de tu inventario (121 productos)
const inventario = [
    { id: 1, nombre: "Dermatel (Telchi)", precio: 10.00 },
    { id: 2, nombre: "Penisilina (Telchi)", precio: 10.00 },
    { id: 3, nombre: "Nixo rosario (Telchi)", precio: 13.00 },
    { id: 4, nombre: "Pasta de agua (Telchi)", precio: 12.00 },
    { id: 5, nombre: "Cloruro de magnesio (Telchi)", precio: 15.00 },
    { id: 6, nombre: "Alcohol de 120ml (Telchi)", precio: 8.00 },
    { id: 7, nombre: "Alcohol yodado (Telchi)", precio: 13.00 },
    { id: 8, nombre: "Cronobecor (Cofar)", precio: 141.00 },
    { id: 9, nombre: "Alcohol de 1lt (Telchi)", precio: 30.00 },
    { id: 10, nombre: "Alcohol isopropilico (Telchi)", precio: 51.00 },
    { id: 11, nombre: "Colon fiber (San Fernando)", precio: 7.70 },
    { id: 12, nombre: "Sider AL (Inti)", precio: 13.00 },
    { id: 13, nombre: "Lagrimas artificiales (Lasca)", precio: 36.00 },
    { id: 14, nombre: "Nafazolina (Almagran)", precio: 26.00 },
    { id: 15, nombre: "Calmadol (Alcos)", precio: 0.70 },
    { id: 16, nombre: "Diclofenaco 100mg (Disprofarrma)", precio: 0.40 },
    { id: 17, nombre: "Ibuprofeno 600mg (Unicure)", precio: 0.80 },
    { id: 18, nombre: "Ibuprofeno 400mg (Unicure)", precio: 0.70 },
    { id: 19, nombre: "Ibuprofeno 800mg (Unicure)", precio: 1.00 },
    { id: 20, nombre: "Luranil (Lafar)", precio: 11.00 },
    { id: 21, nombre: "Inicox 200mg (Lafar)", precio: 13.00 },
    { id: 22, nombre: "Primonir plus (Lafar)", precio: 10.00 },
    { id: 23, nombre: "Amoxilanico duo (Lafar)", precio: 17.00 },
    { id: 24, nombre: "Typirec (Lafar)", precio: 3.50 },
    { id: 25, nombre: "Ciprofar (Lafar)", precio: 3.50 },
    { id: 26, nombre: "Ucotrin zero (Alcos)", precio: 40.00 },
    { id: 27, nombre: "Ucotrin (Alcos)", precio: 53.00 },
    { id: 28, nombre: "Dermobencil champu (Ifarbo)", precio: 57.00 },
    { id: 29, nombre: "Emulsion ballena azul (Santa fe)", precio: 70.00 },
    { id: 30, nombre: "Multivitaminas adulto jb (QR SRL)", precio: 34.00 },
    { id: 31, nombre: "Multivitaminas niños jb (QR SRL)", precio: 29.00 },
    { id: 32, nombre: "Estevia dul c (Dul c)", precio: 40.00 },
    { id: 33, nombre: "Estevia sweet (Din estevia)", precio: 40.00 },
    { id: 34, nombre: "Omega 3 (Ifa)", precio: 2.00 },
    { id: 35, nombre: "Digestive enzimes (Mason)", precio: 3.50 },
    { id: 36, nombre: "Prostaguard (Terbol)", precio: 3.00 },
    { id: 37, nombre: "Clorex (Sigma)", precio: 76.00 },
    { id: 38, nombre: "Propoleo gotas (Mi abejita)", precio: 13.00 },
    { id: 39, nombre: "Propoleo chupete (Mi abejita)", precio: 1.00 },
    { id: 40, nombre: "Caramelo de miel (Mi abejita)", precio: 0.50 },
    { id: 41, nombre: "C vimin zinc (Inti)", precio: 4.00 },
    { id: 42, nombre: "C vimin 1000 (Inti)", precio: 3.50 },
    { id: 43, nombre: "Aciclobir crema (Opes)", precio: 14.00 },
    { id: 44, nombre: "Carbol plus (San Fernando)", precio: 8.00 },
    { id: 45, nombre: "Salbutamol aereosol (Mhedical pharma)", precio: 30.00 },
    { id: 46, nombre: "Metrocaps 500 (Procaps)", precio: 5.00 },
    { id: 47, nombre: "Sedatibol 50mg (Hannemhan)", precio: 2.50 },
    { id: 48, nombre: "Sedatibol 100mg (Hannemhan)", precio: 5.00 },
    { id: 49, nombre: "Thermoenergy (Hannemhan)", precio: 3.50 },
    { id: 50, nombre: "Metroclopramida (Hannemhan)", precio: 0.50 },
    { id: 51, nombre: "Ivermectina (Hannemhan)", precio: 6.00 },
    { id: 52, nombre: "Hepatol (Hannemhan)", precio: 2.50 },
    { id: 53, nombre: "Amoxicris 500 jarabe (Hannemhan)", precio: 66.00 },
    { id: 54, nombre: "Echinacea (Hannemhan)", precio: 86.00 },
    { id: 55, nombre: "Remasol (Ifa)", precio: 30.00 },
    { id: 56, nombre: "Ifasan locion (Ifa)", precio: 34.00 },
    { id: 57, nombre: "Talco para pitai (Ifa)", precio: 35.00 },
    { id: 58, nombre: "Denso active (Torrico)", precio: 18.00 },
    { id: 59, nombre: "Complejo b en jarabe (Ifa)", precio: 22.00 },
    { id: 60, nombre: "Mucol 600mg (Ifa)", precio: 12.00 },
    { id: 61, nombre: "Nacetil (Unicure)", precio: 7.00 },
    { id: 62, nombre: "Recimol 1 (Unicure)", precio: 6.00 },
    { id: 63, nombre: "Sulfato ferroso (Dismedin)", precio: 0.60 },
    { id: 64, nombre: "Clopidroguel (Umpharma)", precio: 3.00 },
    { id: 65, nombre: "Losartan (SAE)", precio: 1.70 },
    { id: 66, nombre: "Losartan potasico (Sanat)", precio: 1.20 },
    { id: 67, nombre: "Ucotrin (Alcos)", precio: 2.50 },
    { id: 68, nombre: "Vitamina c (Valencia)", precio: 3.00 },
    { id: 69, nombre: "Lenor (Unicure)", precio: 15.00 },
    { id: 70, nombre: "Florina x21 (Unicure)", precio: 12.00 },
    { id: 71, nombre: "Difentx28 (Inti)", precio: 12.50 },
    { id: 72, nombre: "Metformina 850mg (SAE)", precio: 1.20 },
    { id: 73, nombre: "Diclosaxilina 500mg (Delta)", precio: 3.50 },
    { id: 74, nombre: "Carbamazepina (Dismedin)", precio: 1.20 },
    { id: 75, nombre: "Azitromicina caja (Almagran)", precio: 26.00 },
    { id: 76, nombre: "Azitroalcos 500mg (Alcos)", precio: 16.00 },
    { id: 77, nombre: "Azitromicina de 500 mg (Ifarbo)", precio: 14.00 },
    { id: 78, nombre: "Loperamida 2mg (Ifa)", precio: 1.00 },
    { id: 79, nombre: "Ifamet N (Ifa)", precio: 11.00 },
    { id: 80, nombre: "Clotrimazol (Ifa)", precio: 5.50 },
    { id: 81, nombre: "Superal digest (Inti)", precio: 3.00 },
    { id: 82, nombre: "Chakiplus (Alcos)", precio: 6.50 },
    { id: 83, nombre: "Digestan (Vita)", precio: 5.00 },
    { id: 84, nombre: "Complejo b 60 cap (Universal pharma)", precio: 0.50 },
    { id: 85, nombre: "Complejo b 300 cap (Portugal)", precio: 0.70 },
    { id: 86, nombre: "Compresa de gasa de 5x5cm (Premier)", precio: 2.50 },
    { id: 87, nombre: "Compresa de gasa de 7.5x7.5 cm (Premier)", precio: 3.50 },
    { id: 88, nombre: "Compresa de gasa 10x10 cm (Premier)", precio: 4.50 },
    { id: 89, nombre: "Espasmodol (Delta)", precio: 4.00 },
    { id: 90, nombre: "Enalapril 10mg (Inti)", precio: 0.60 },
    { id: 91, nombre: "Almaxol de 15 mg jarabe (Almagran)", precio: 22.00 },
    { id: 92, nombre: "Almaxol de 30 mg jarabe (Almagran)", precio: 23.00 },
    { id: 93, nombre: "Broncofar 2 (Indufar)", precio: 65.00 },
    { id: 94, nombre: "Z vick (Indufar)", precio: 77.00 },
    { id: 95, nombre: "Tosanax (Farma shopping)", precio: 28.00 },
    { id: 96, nombre: "Propomiel (Mi abejita)", precio: 18.00 },
    { id: 97, nombre: "Grifantil nf solución oral (Indufar)", precio: 45.00 },
    { id: 98, nombre: "Actimol gotas (Torrico antelo)", precio: 15.00 },
    { id: 99, nombre: "Dextrometorfano 10mg (Ifa)", precio: 17.00 },
    { id: 100, nombre: "Alergin jarabe (Alcos)", precio: 34.00 },
    { id: 101, nombre: "Resfriolito gotas (Alcos)", precio: 56.00 },
    { id: 102, nombre: "Alergin comp (Alcos)", precio: 4.00 },
    { id: 103, nombre: "Curadil solucion oral 90 (Alcos)", precio: 25.00 },
    { id: 104, nombre: "Curadil solucion oral 60+zinc (Alcos)", precio: 25.00 },
    { id: 105, nombre: "Ketoalcos (Alcos)", precio: 6.00 },
    { id: 106, nombre: "Al-codion (Alcos)", precio: 8.00 },
    { id: 107, nombre: "Alfen forte (Almagran)", precio: 25.00 },
    { id: 108, nombre: "Piralgesic (Almagran)", precio: 24.00 },
    { id: 109, nombre: "Actimol frasco (Torrico antelo)", precio: 20.00 },
    { id: 110, nombre: "Finpirox (Farma shopping)", precio: 20.00 },
    { id: 111, nombre: "Dicloxacilina de 250mg 100ml (Ifa)", precio: 40.00 },
    { id: 112, nombre: "Dicloxacilina de 250mg 60ml (Ifa)", precio: 30.00 },
    { id: 113, nombre: "Pirantel caja (Ifa)", precio: 37.00 },
    { id: 114, nombre: "Pirantel suspension (Ifa)", precio: 37.00 },
    { id: 115, nombre: "Albendazol 200mg (Ifa)", precio: 4.50 },
    { id: 116, nombre: "Onazole-200mg (Unicure)", precio: 4.00 },
    { id: 117, nombre: "Acelin (Indufar)", precio: 4.00 },
    { id: 118, nombre: "Broncofar comp (Indufar)", precio: 3.50 },
    { id: 119, nombre: "Alergina (Indufar)", precio: 6.00 },
    { id: 120, nombre: "Azimut -200mg (Indufar)", precio: 180.00 },
    { id: 121, nombre: "Rixalan-400mg (Terbol)", precio: 22.00 }
];

let carrito = [];

// Función para mostrar productos en la página de catálogo (productos.html)
function renderizarProductos(productos) {
    const contenedor = document.getElementById('lista-productos');
    if(contenedor) {
        contenedor.innerHTML = '';
        productos.forEach(prod => {
            const tarjeta = `
                <div class="col-md-3 mb-4">
                    <div class="card h-100 shadow-sm border-0">
                        <div class="card-body text-center d-flex flex-column justify-content-between">
                            <h6 class="card-title fw-bold text-dark">${prod.nombre}</h6>
                            <div>
                                <h4 class="text-success mt-3 mb-3">Bs ${prod.precio.toFixed(2)}</h4>
                                <button class="btn btn-outline-success w-100" onclick="agregarAlCarrito(${prod.id})">
                                    🛒 Agregar al carrito
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            contenedor.innerHTML += tarjeta;
        });
    }
}

// Función para mostrar 4 productos destacados en el index
function renderizarDestacados() {
    const contenedorDestacados = document.getElementById('productos-destacados');
    if (contenedorDestacados) {
        contenedorDestacados.innerHTML = '';
        // Mostramos el Paracetamol (102), Ibuprofeno 400 (18), Vitamina C (68), y Omeprazol/Similares (27)
        const destacados = [inventario[101], inventario[17], inventario[67], inventario[26]]; 
        
        destacados.forEach(prod => {
            const tarjeta = `
                <div class="col-md-3 col-sm-6 mb-4">
                    <div class="card h-100 shadow-sm border-0">
                        <div class="card-body text-center d-flex flex-column justify-content-between">
                            <h6 class="card-title fw-bold text-dark">${prod.nombre}</h6>
                            <div>
                                <h4 class="text-success mt-3 mb-3">Bs ${prod.precio.toFixed(2)}</h4>
                                <button class="btn btn-outline-success w-100" onclick="agregarAlCarrito(${prod.id})">
                                    🛒 Agregar al carrito
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            contenedorDestacados.innerHTML += tarjeta;
        });
    }
}

// Buscador en tiempo real (Solo funciona en productos.html)
const buscadorInput = document.getElementById('buscador');
if(buscadorInput) {
    buscadorInput.addEventListener('input', (e) => {
        const textoBuscado = e.target.value.toLowerCase();
        const productosFiltrados = inventario.filter(prod => 
            prod.nombre.toLowerCase().includes(textoBuscado)
        );
        renderizarProductos(productosFiltrados);
    });
}

// Función para agregar al carrito (Desde catálogo, SIN ALERTA)
function agregarAlCarrito(id) {
    const productoSeleccionado = inventario.find(p => p.id === id);
    const itemEnCarrito = carrito.find(p => p.id === id);

    if (itemEnCarrito) {
        itemEnCarrito.cantidad++;
    } else {
        carrito.push({ ...productoSeleccionado, cantidad: 1 });
    }
    
    // Solo actualiza el carrito visualmente, sin lanzar el mensaje molesto
    actualizarCarrito();
}
// Función para actualizar la vista del carrito (Con cantidades x2, x3 y botones de + / -)
function actualizarCarrito() {
    const cuerpoCarrito = document.getElementById('cuerpo-carrito');
    const contadores = document.querySelectorAll('.contador-carrito');
    const totalSpan = document.getElementById('total-carrito');

    cuerpoCarrito.innerHTML = '';
    let total = 0;
    let cantidadItems = 0;

    if(carrito.length === 0){
        cuerpoCarrito.innerHTML = '<p class="text-center text-muted">El carrito está vacío.</p>';
    } else {
        carrito.forEach((item) => {
            total += item.precio * item.cantidad;
            cantidadItems += item.cantidad;
            cuerpoCarrito.innerHTML += `
                <div class="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
                    <div>
                        <strong class="text-dark">${item.nombre} <span class="text-primary">(x${item.cantidad})</span></strong> <br>
                        <small class="text-muted">Bs ${item.precio.toFixed(2)} c/u</small>
                    </div>
                    <div class="d-flex align-items-center">
                        <strong class="me-3 text-success">Bs ${(item.precio * item.cantidad).toFixed(2)}</strong>
                        
                        <!-- Botón para restar 1 -->
                        <button class="btn btn-sm btn-outline-secondary me-1" onclick="restarDelCarrito(${item.id})"><strong>-</strong></button>
                        
                        <!-- Botón para sumar 1 -->
                        <button class="btn btn-sm btn-outline-success me-1" onclick="agregarAlCarritoSinAlerta(${item.id})"><strong>+</strong></button>
                        
                        <!-- Botón para eliminar todo el producto -->
                        <button class="btn btn-sm btn-outline-danger" onclick="eliminarDelCarrito(${item.id})" title="Eliminar producto">🗑️</button>
                    </div>
                </div>
            `;
        });
    }

    contadores.forEach(contador => {
        contador.innerText = cantidadItems;
    });
    totalSpan.innerText = total.toFixed(2);
}

// Función para restar 1 a la cantidad
function restarDelCarrito(id) {
    const item = carrito.find(p => p.id === id);
    if (item) {
        item.cantidad--;
        // Si la cantidad llega a 0, lo eliminamos del carrito
        if (item.cantidad === 0) {
            eliminarDelCarrito(id);
        } else {
            actualizarCarrito();
        }
    }
}

// Función auxiliar para sumar sin alerta molestosa (Usada en los botones + del carrito)
function agregarAlCarritoSinAlerta(id) {
    const itemEnCarrito = carrito.find(p => p.id === id);
    if (itemEnCarrito) {
        itemEnCarrito.cantidad++;
        actualizarCarrito();
    }
}

// Función para eliminar TODO el producto del carrito
function eliminarDelCarrito(id) {
    carrito = carrito.filter(producto => producto.id !== id);
    actualizarCarrito();
}

// Función para enviar el pedido a WhatsApp
function enviarWhatsApp() {
    if(carrito.length === 0) {
        alert("Agrega medicamentos al carrito primero.");
        return;
    }

    // AQUI PON TU NUMERO REAL CON EL CODIGO DE PAIS (ej. 591 para Bolivia)
    const numeroWhatsApp = "59168962854"; 
    
    let mensaje = "Hola Farmacia Beniana, quiero realizar el siguiente pedido:%0A%0A";
    let totalPagar = 0;

    carrito.forEach(item => {
        let subtotal = item.precio * item.cantidad;
        totalPagar += subtotal;
        mensaje += `💊 ${item.cantidad}x ${item.nombre} - Bs ${subtotal.toFixed(2)}%0A`;
    });

    mensaje += `%0A*TOTAL A PAGAR: Bs ${totalPagar.toFixed(2)}*`;

    // Redirige a la API de WhatsApp
    const url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${mensaje}`;
    window.open(url, '_blank');
}

// Inicializar la vista dependiendo de en qué página estemos
renderizarProductos(inventario);
renderizarDestacados();