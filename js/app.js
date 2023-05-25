class producto {
  constructor(id, nombre, precio, cantidad) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }
}

const producto1 = new producto(1, 'buzo jacket polar Snow', 15999, 1);
const producto2 = new producto(2, 'buzo canguro star', 15999, 1);
const producto3 = new producto(3, 'buzo canguro circle star', 15999, 1);
const producto4 = new producto(4, 'Remera MC Square Star', 5500, 1);
const producto5 = new producto(5, 'Remera MC Build Up Camo', 5500, 1);
const producto6 = new producto(6, 'Remera MC Dcshoescousa Htr', 5500, 1);
const producto7 = new producto(7, 'Pantalon Cargo Kaki', 15000, 1);
const producto8 = new producto(8, 'Jean WRK Basic Skinny', 12980, 1);
const producto9 = new producto(9, 'Jean WRK Straight', 10999, 1);

const productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9];


const contenedorproductos = document.getElementById('contenedorproductos');

productos.forEach((producto) => {
  const divproducto = document.createElement('div');
  divproducto.classList.add('card', 'col-xl-3', 'col-md-6', 'col-sm-12');
  divproducto.innerHTML = `
                          <div class="flex-row mb-3">
                              <img src="../img/${producto.id}.jpg" class=" img-fluid py-3 productos">
                              <div class="card-body mt-3 tipografia-productos">
                                  <h3 class="card-title"> ${producto.nombre} </h3>
                                  <p class="card-text fs-5">$ ${producto.precio} </p>
                                  <button id="boton${producto.id}" class="btn btn-primary"> Agregar al Carrito </button>
                              </div>
                          </div>`;
  contenedorProductos.appendChild(divproducto);
  
  const boton = document.getElementById(`boton${producto.id}`);
  boton.addEventListener('click', () => {
    agregarAlCarrito(producto.id);
  });
});


const carrito = [];

const agregarAlCarrito = (id) => {
  const producto = productos.find((producto) => producto.id === id);
  const productoEnCarrito = carrito.find((producto) => producto.id === id);
  if (productoEnCarrito) {
    productoEnCarrito.cantidad++;
  } else {
    carrito.push(producto);
  }
  actualizarCarrito();
};


const contenedorCarrito = document.getElementById('contenedorCarrito');
const verCarrito = document.getElementById('verCarrito');

verCarrito.addEventListener('click', actualizarCarrito);

function actualizarCarrito() {
  let aux = '';
  carrito.forEach((producto) => {
    aux += `
              <div class="card flex-row mb-3">
                  <img src="../img/${producto.id}.jpg" class="img-fluid py-3 productos">
                  <div class="card-body">
                      <h3 class="card-title"> ${producto.nombre} </h3>
                      <p class="card-text">$ ${producto.precio} </p>
                      <button onClick = "eliminarDelCarrito(${producto.id})" class="btn btn-primary"> Eliminar del Carrito </button>
                  </div>
              </div>
              `;
  });

  contenedorCarrito.innerHTML = aux;
  calcularTotalCompra();
}


const eliminarDelCarrito = (id) => {
  const producto = carrito.find((producto) => producto.id === id);
  carrito.splice(carrito.indexOf(producto), 1);
  actualizarCarrito();
};


const vaciarCarrito = document.getElementById('vaciarCarrito');
vaciarCarrito.addEventListener('click', () => {
  carrito.splice(0, carrito.length);
  actualizarCarrito();
});



const totalCompra = document.getElementById('totalCompra');

const calcularTotalCompra = () => {
  let total = 0;
  carrito.forEach((producto) => {
    total += producto.precio * producto.cantidad;
  });
  totalCompra.innerHTML = total;
};