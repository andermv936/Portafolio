//PRODUCTOS
const lista_productos = [
  {
  id: "000001",
  categoria: "bellcos-bolivia",
  imagen1: "off/img/productos/pro1.png",
  imagen2: "off/img/productos/pro2.png",
  nombre: "Pack Dulzero + Taza",
  precio: "60",
  precio2: "70",
  urlComprar: ""
  },
  {
  id: "000002",
  categoria: "bellcos-bolivia",
  imagen1: "off/img/productos/pro3.png",
  imagen2: "off/img/productos/pro2.png",
  nombre: "Arruru estuche viajero rosa",
  precio: "60",
  precio2: "70",
  urlComprar: ""
  },
  {
  id: "000003",
  categoria: "bellcos-bolivia",
  imagen1: "off/img/productos/pro5.png",
  imagen2: "off/img/productos/pro2.png",
  nombre: "Base Fitme 315",
  precio: "50",
  precio2: "70",
  urlComprar: ""
  },
  {
  id: "000004",
  categoria: "bellcos-bolivia",
  imagen1: "off/img/productos/pro10.png",
  imagen2: "off/img/productos/pro2.png",
  nombre: "Excellence 5.3",
  precio: "50",
  precio2: "70",
  urlComprar: ""
  },
  {
  id: "000005",
  categoria: "consumo",
  imagen1: "off/img/productos/pro56.png",
  imagen2: "off/img/productos/pro2.png",
  nombre: "Toalla de piso",
  precio: "40",
  precio2: "70",
  urlComprar: ""
  },
  {
  id: "000006",
  categoria: "consumo",
  imagen1: "off/img/productos/pro51.png",
  imagen2: "off/img/productos/pro2.png",
  nombre: "Aromatizante para auto",
  precio: "80",
  precio2: "90",
  urlComprar: ""
  },
];

const listaproductos = document.getElementById("lista-productos");
lista_productos.forEach(producto => {
  // Crea el elemento de la tarjeta del producto
  const card = document.createElement("div");
  card.classList.add("col-sm-4", "pb-1");
  card.innerHTML = `
  <div class="col-lg-4 col-md-6 col-sm-12 pb-1 ${producto.categoria}">
      <div class="card product-item border-pro mb-4">
        <div class="card-header product-img position-relative overflow-hidden bg-transparent p-0">
          <img class="img-fluid w-100" src="${producto.imagen1}" alt="" onmouseover="changeImage(this, '${producto.imagen2}')" onmouseout="resetImage(this, '${producto.imagen1}')">
        </div>
        <div class="card-body text-center p-0 pt-4 pb-3">
          <h6 class="text-truncate mb-3">${producto.nombre}</h6>
          <div class="d-flex justify-content-center">
            <h6>Bs ${producto.precio}</h6><h6 class="text-muted ml-2"><del>${producto.precio2}</del></h6>
          </div>
        </div>
        <div class="card-footer position-relative justify-content-between bg-light">
          <a href="${producto.urlComprar}" class="btn btn-sm-pro p-0"><i class="fas fa-shopping-cart mr-1"></i>Agregar Carrito</a>
        </div>
      </div>
    </div>
  `;
  listaproductos.appendChild(card);
});




//CARRUSEL TOP
const productos = [
  {
  id: "000001",
  imagen1: "off/img/productos/pro1.png",
  imagen2: "off/img/productos/pro2.png",
  nombre: "Pack Dulzero + Taza",
  precio: "60",
  precio2: "70",
  urlComprar: ""
  },
  {
  id: "000002",
  imagen1: "off/img/productos/pro3.png",
  imagen2: "off/img/productos/pro2.png",
  nombre: "Arruru estuche viajero rosa",
  precio: "60",
  precio2: "70",
  urlComprar: ""
  },
  {
  id: "000003",
  imagen1: "off/img/productos/pro5.png",
  imagen2: "off/img/productos/pro2.png",
  nombre: "Base Fitme 315",
  precio: "50",
  precio2: "70",
  urlComprar: ""
  },
  {
  id: "000004",
  imagen1: "off/img/productos/pro10.png",
  imagen2: "off/img/productos/pro2.png",
  nombre: "Excellence 5.3",
  precio: "50",
  precio2: "70",
  urlComprar: ""
  },
  {
  id: "000005",
  imagen1: "off/img/productos/pro56.png",
  imagen2: "off/img/productos/pro2.png",
  nombre: "Toalla de piso",
  precio: "40",
  precio2: "70",
  urlComprar: ""
  },
  {
  id: "000006",
  imagen1: "off/img/productos/pro51.png",
  imagen2: "off/img/productos/pro2.png",
  nombre: "Aromatizante para auto",
  precio: "80",
  precio2: "90",
  urlComprar: ""
  },
];
  
//CARRUSEL MAQUILLAJE
const productosMaquillaje = [
  {
  id: "000001",
  imagen1: "off/img/productos/pro1.png",
  imagen2: "off/img/productos/pro2.png",
  nombre: "Pack Dulzero + Taza",
  precio: "60",
  precio2: "70",
  urlComprar: ""
  },
  {
  id: "000002",
  imagen1: "off/img/productos/pro3.png",
  imagen2: "off/img/productos/pro2.png",
  nombre: "Arruru estuche viajero rosa",
  precio: "60",
  precio2: "70",
  urlComprar: ""
  },
  {
  id: "000003",
  imagen1: "off/img/productos/pro5.png",
  imagen2: "off/img/productos/pro2.png",
  nombre: "Base Fitme 315",
  precio: "50",
  precio2: "70",
  urlComprar: ""
  },
  {
  id: "000004",
  imagen1: "off/img/productos/pro10.png",
  imagen2: "off/img/productos/pro2.png",
  nombre: "Excellence 5.3",
  precio: "50",
  precio2: "70",
  urlComprar: ""
  },
  {
  id: "000005",
  imagen1: "off/img/productos/pro56.png",
  imagen2: "off/img/productos/pro2.png",
  nombre: "Toalla de piso",
  precio: "40",
  precio2: "70",
  urlComprar: ""
  },
  {
  id: "000006",
  imagen1: "off/img/productos/pro51.png",
  imagen2: "off/img/productos/pro2.png",
  nombre: "Aromatizante para auto",
  precio: "80",
  precio2: "90",
  urlComprar: ""
  },
];

//CARRUSEL CONSUMO
const productosAlimentos = [
  {
  id: "000001",
  imagen1: "off/img/productos/pro1.png",
  imagen2: "off/img/productos/pro2.png",
  nombre: "Pack Dulzero + Taza",
  precio: "60",
  precio2: "70",
  urlComprar: ""
  },
  {
  id: "000002",
  imagen1: "off/img/productos/pro3.png",
  imagen2: "off/img/productos/pro2.png",
  nombre: "Arruru estuche viajero rosa",
  precio: "60",
  precio2: "70",
  urlComprar: ""
  },
  {
  id: "000003",
  imagen1: "off/img/productos/pro5.png",
  imagen2: "off/img/productos/pro2.png",
  nombre: "Base Fitme 315",
  precio: "50",
  precio2: "70",
  urlComprar: ""
  },
  {
  id: "000004",
  imagen1: "off/img/productos/pro10.png",
  imagen2: "off/img/productos/pro2.png",
  nombre: "Excellence 5.3",
  precio: "50",
  precio2: "70",
  urlComprar: ""
  },
  {
  id: "000005",
  imagen1: "off/img/productos/pro56.png",
  imagen2: "off/img/productos/pro2.png",
  nombre: "Toalla de piso",
  precio: "40",
  precio2: "70",
  urlComprar: ""
  },
  {
  id: "000006",
  imagen1: "off/img/productos/pro51.png",
  imagen2: "off/img/productos/pro2.png",
  nombre: "Aromatizante para auto",
  precio: "80",
  precio2: "90",
  urlComprar: ""
  },
];


//CARRUSEL TOP
  const productosContainer = document.getElementById("productos-container");
  const carouselContainer = document.createElement("div");
  carouselContainer.classList.add("owl-carousel", "producto-carousel");
  productos.forEach(producto => {
    // Crea el elemento de la tarjeta del producto
    const card = document.createElement("div");
    card.classList.add("col-sm-12", "pb-1");
    card.innerHTML = `
      <div class="card product-item border-pro mb-4">
        <div class="card-header product-img position-relative overflow-hidden bg-transparent p-0">
          <img class="img-fluid w-100" src="${producto.imagen1}" alt="" onmouseover="changeImage(this, '${producto.imagen2}')" onmouseout="resetImage(this, '${producto.imagen1}')">
        </div>
        <div class="card-body text-center p-0 pt-4 pb-3">
          <h6 class="text-truncate mb-3">${producto.nombre}</h6>
          <div class="d-flex justify-content-center">
            <h6>Bs ${producto.precio}</h6><h6 class="text-muted ml-2"><del>${producto.precio2}</del></h6>
          </div>
        </div>
        <div class="card-footer position-relative justify-content-between bg-light">
          <a href="${producto.urlComprar}" class="btn btn-sm-pro p-0"><i class="fas fa-shopping-cart mr-1"></i>Agregar Carrito</a>
        </div>
      </div>
    `;
    carouselContainer.appendChild(card);
  });

productosContainer.appendChild(carouselContainer);
$(carouselContainer).owlCarousel({
items: 3,
margin: 0,
loop: true,
autoplay: true,
autoplayTimeout: 1000,
autoplayHoverPause: true,
responsive: {
    0: {
        items: 2
    },
    768: {
        items: 3
    },
    992: {
        items: 5
    }
}
});

//CARRUSEL MAQUILLAJE      
    const productosMaquillajeContainer = document.getElementById("productos-maquillaje");
    const carouselContainerMaq = document.createElement("div");
    carouselContainerMaq.classList.add("owl-carousel", "producto-carousel");
    productosMaquillaje.forEach(producto => {
      // Crea el elemento de la tarjeta del producto
      const card = document.createElement("div");
      card.classList.add("col-sm-12", "pb-1");
      card.innerHTML = `
        <div class="card product-item border-pro mb-4">
            <div class="card-header product-img position-relative overflow-hidden bg-transparent p-0">
            <img class="img-fluid w-100" src="${producto.imagen1}" alt="" onmouseover="changeImage(this, '${producto.imagen2}')" onmouseout="resetImage(this, '${producto.imagen1}')">
            </div>
            <div class="card-body text-center p-0 pt-4 pb-3">
            <h6 class="text-truncate mb-3">${producto.nombre}</h6>
            <div class="d-flex justify-content-center">
                <h6>Bs ${producto.precio}</h6><h6 class="text-muted ml-2"><del>${producto.precio2}</del></h6>
            </div>
            </div>
            <div class="card-footer position-relative justify-content-between bg-light">
            <a href="${producto.urlComprar}" class="btn btn-sm-pro p-0"><i class="fas fa-shopping-cart mr-1"></i>Agregar Carrito</a>
            </div>
        </div>
        `;
      carouselContainerMaq.appendChild(card);
    });

productosMaquillajeContainer.appendChild(carouselContainerMaq);
$(carouselContainerMaq).owlCarousel({
items: 3,
margin: 0,
loop: true,
autoplay: true,
autoplayTimeout: 1000,
autoplayHoverPause: true,
responsive: {
    0: {
    items: 2
    },
    768: {
    items: 3
    },
    992: {
    items: 5
    }
}
});

//CARRUSEL CONSUMO
    const productosAlimentosContainer = document.getElementById("productos-alimentos");
    const carouselContainerAli = document.createElement("div");
    carouselContainerAli.classList.add("owl-carousel", "producto-carousel");
    productosAlimentos.forEach(producto => {
      // Crea el elemento de la tarjeta del producto
      const card = document.createElement("div");
      card.classList.add("col-sm-12", "pb-1");
      card.innerHTML = `
        <div class="card product-item border-pro mb-4">
            <div class="card-header product-img position-relative overflow-hidden bg-transparent p-0">
            <img class="img-fluid w-100" src="${producto.imagen1}" alt="" onmouseover="changeImage(this, '${producto.imagen2}')" onmouseout="resetImage(this, '${producto.imagen1}')">
            </div>
            <div class="card-body text-center p-0 pt-4 pb-3">
            <h6 class="text-truncate mb-3">${producto.nombre}</h6>
            <div class="d-flex justify-content-center">
                <h6>Bs ${producto.precio}</h6><h6 class="text-muted ml-2"><del>${producto.precio2}</del></h6>
            </div>
            </div>
            <div class="card-footer position-relative justify-content-between bg-light">
            <a href="${producto.urlComprar}" class="btn btn-sm-pro p-0"><i class="fas fa-shopping-cart mr-1"></i>Agregar Carrito</a>
            </div>
        </div>
        `;
      carouselContainerAli.appendChild(card);
    });
productosAlimentosContainer.appendChild(carouselContainerAli);
$(carouselContainerAli).owlCarousel({
items: 3,
margin: 0,
loop: true,
autoplay: true,
autoplayTimeout: 1000,
autoplayHoverPause: true,
responsive: {
    0: {
    items: 2
    },
    768: {
    items: 3
    },
    992: {
    items: 5
    }
}
});
  
//CAMBIO A SEGUNDA IMAGEN
function changeImage(element, newImage) {
element.src = newImage;
}

function resetImage(element, originalImage) {
element.src = originalImage;
}

