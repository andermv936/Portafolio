(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:5
            },
            1200:{
                items:6
            }
        }
    });


    // Related carousel
    $('.related-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });

        // producto carousel
        $('.producto-carousel').owlCarousel({
          loop: true,
          margin: 0,
          nav: false,
          autoplay: true,
          smartSpeed: 1000,
          responsive: {
              0:{
                  items:2
              },
              576:{
                  items:2
              },
              768:{
                  items:4
              },
              992:{
                  items:5
              }
          }
      });


    // Product Quantity
    $('.quantity button').on('click', function () {
        var button = $(this);
        var oldValue = button.parent().parent().find('input').val();
        if (button.hasClass('btn-plus')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        button.parent().parent().find('input').val(newVal);
    });
    
})(jQuery);

//UBICACION MAPA
    // Ubicaciónes Latitud y Longitud
    var location1 = [-17.679914, -63.159837];
    var location2 = [-17.757860, -63.153140];
    var location3 = [-17.796661, -63.208192];
    var location4 = [-17.812384, -63.187955];
    var location5 = [, ];
    var location6 = [, ];
    var location7 = [, ];
    var location8 = [, ];
    var location9 = [, ];
    var location10 = [, ];

    // Crea el mapa
    var map = L.map('map').setView(location1, 10);
    // Agrega el proveedor de mapas (puede utilizar otros proveedores como Mapbox, Stamen, etc.)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
      maxZoom: 18
    }).addTo(map);
  
    var bounds = L.latLngBounds([location1, location2,location3, location4]);
    map.fitBounds(bounds);

      // Agrega los marcadores de las ubicaciones con enlaces a las ubicaciones
  L.marker(location1).addTo(map).bindPopup('<a href="https://goo.gl/maps/fSRyXxFM7fBu33AR6" target="_blank">Oficina</a>');
  L.marker(location2).addTo(map).bindPopup('<a href="https://goo.gl/maps/3e1JkQV19dUxnCy17" target="_blank">Oficina</a>');
  L.marker(location3).addTo(map).bindPopup('<a href="https://goo.gl/maps/vv1oRhh6nENNzs639" target="_blank">Domicilio</a>');
  L.marker(location4).addTo(map).bindPopup('<a href="https://goo.gl/maps/DvR8YoQv4o7zQsxT7" target="_blank">Domicilio</a>');


//CAMBIAR ESTILO A OSCURO 
const toggleSwitch = document.querySelector('#dark-mode-toggle');
const body = document.querySelector('body');

// Función para cambiar el estilo de la página
function toggleDarkMode() {
  body.classList.toggle('dark-mode');
  // Guardar el estado actual del estilo
  localStorage.setItem('style', body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode');
}

// Agregar event listener al botón
toggleSwitch.addEventListener('click', toggleDarkMode);
// Recuperar el estilo guardado en LocalStorage al cargar la página
const savedStyle = localStorage.getItem('style');
if (savedStyle === 'dark-mode') {
  body.classList.add('dark-mode');
  toggleSwitch.checked = true;
} else {
  body.classList.remove('dark-mode');
  toggleSwitch.checked = false;
}


//LISTA DE PRODUCTOS
function filterProducts() {
    // Obtener los checkboxes seleccionados
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

    // Obtener los IDs de las empresas seleccionadas
    var selectedCompanies = Array.from(checkboxes).map(function(checkbox) {
        return checkbox.id;
    });

    // Mostrar u ocultar los productos según las empresas seleccionadas
    var products = document.querySelectorAll('.col-lg-4');

    products.forEach(function(product) {
        var companyId = product.classList[product.classList.length - 1];
        if (selectedCompanies.includes(companyId)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

function filterProductsall() {
    // Obtener el checkbox "Seleccionar todos"
    var selectAllCheckbox = document.getElementById('all-products');
  
    // Verificar si la opción "Seleccionar todos" está marcada
    var isSelectAllChecked = selectAllCheckbox.checked;
  
    // Obtener los checkboxes de las empresas
    var companyCheckboxes = document.querySelectorAll('input[type="checkbox"]:not(#all-products)');
  
    // Desactivar o activar los checkboxes de las empresas según la opción "Seleccionar todos"
    companyCheckboxes.forEach(function(checkbox) {
      checkbox.disabled = isSelectAllChecked;
    });
  
    // Obtener los checkboxes de las empresas seleccionadas
    var selectedCompanies = Array.from(companyCheckboxes).filter(function(checkbox) {
      return checkbox.checked;
    }).map(function(checkbox) {
      return checkbox.id;
    });
  
    // Mostrar u ocultar los productos según las empresas seleccionadas
    var products = document.querySelectorAll('.col-lg-4');
    products.forEach(function(product) {
      var companyId = product.getAttribute('id');
      if (isSelectAllChecked || selectedCompanies.includes(companyId)) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  }
  

//CARRITO DE COMPRAS
document.addEventListener("DOMContentLoaded", function () {
    // Evento click para el botón "Agregar al carrito"
    var btnAddToCart = document.querySelector(".btn-add-to-cart");
    btnAddToCart.addEventListener("click", addToCart);
  
    // Evento click para el botón "Quitar"
    var cartItems = document.querySelector(".cart-items");
    cartItems.addEventListener("click", removeCartItem);
  
    // Evento click para el botón "Pagar"
    var btnPay = document.querySelector(".btn-pay");
    btnPay.addEventListener("click", pay);
  
    // Evento click para el botón "Borrar Carrito"
    var btnClearCart = document.querySelector(".btn-clear-cart");
    btnClearCart.addEventListener("click", clearCart);
  
    // Recuperar el contenido del carrito almacenado en el almacenamiento local
    var storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (storedCartItems) {
      storedCartItems.forEach(function (cartItem) {
        createCartItem(cartItem);
      });
    }
  
    updateCartTotal();
  });
  
  // Función para agregar un producto al carrito
  function addToCart(event) {
    var productCard = event.target.closest(".product-item");
  
    var productImage = productCard.querySelector(".product-img img").src;
    var productName = productCard.querySelector(".text-truncate").textContent;
    var productPrice = parseFloat(productCard.querySelector(".card-body h8").textContent.replace("Bs", ""));
  
    var cartItem = {
      image: productImage,
      name: productName,
      price: productPrice,
      quantity: 1
    };
  
    createCartItem(cartItem);
    updateCartTotal();
    saveCartItemsToLocalStorage();
  }
  
  // Función para crear una línea de producto en el carrito
  function createCartItem(cartItem) {
    var cartItems = document.querySelector(".cart-items");
  
    var cartItemElement = document.createElement("tr");
    cartItemElement.innerHTML = `
      <td class="align-middle"><img src="${cartItem.image}" alt="" style="width: 50px;"> ${cartItem.name}</td>
      <td class="align-middle">$${cartItem.price}</td>
      <td class="align-middle">
        <div class="input-group quantity mx-auto" style="width: 100px;">
          <div class="input-group-btn">
            <button class="btn btn-sm btn-primary btn-minus">
              <i class="fa fa-minus"></i>
            </button>
          </div>
          <input type="text" class="form-control form-control-sm bg-secondary text-center" value="${cartItem.quantity}">
          <div class="input-group-btn">
            <button class="btn btn-sm btn-primary btn-plus">
              <i class="fa fa-plus"></i>
            </button>
          </div>
        </div>
      </td>
      <td class="align-middle">$${(cartItem.price * cartItem.quantity).toFixed(2)}</td>
      <td class="align-middle"><button class="btn btn-sm btn-primary btn-remove"><i class="fa fa-times"></i></button></td>
    `;
  
    cartItems.appendChild(cartItemElement);
  }
  
  // Función para quitar un producto del carrito
  function removeCartItem(event) {
    if (event.target.classList.contains("btn-remove")) {
      var cartItem = event.target.closest("tr");
      cartItem.remove();
  
      updateCartTotal();
      saveCartItemsToLocalStorage();
    }
  }
  
  // Función para borrar todo el carrito
  function clearCart() {
    var cartItems = document.querySelector(".cart-items");
    cartItems.innerHTML = "";
  
    updateCartTotal();
    saveCartItemsToLocalStorage();
  }
  
  // Función para calcular el monto total del carrito
  function updateCartTotal() {
    var cartItems = document.querySelectorAll(".cart-items tr");
    var subtotal = 0;
  
    cartItems.forEach(function (cartItem) {
      var price = parseFloat(cartItem.querySelector("td:nth-child(2)").textContent.replace("$", ""));
      var quantity = parseInt(cartItem.querySelector(".quantity input").value);
      var total = price * quantity;
  
      cartItem.querySelector("td:nth-child(4)").textContent = "$" + total.toFixed(2);
  
      subtotal += total;
    });
  
    var subtotalElement = document.querySelector(".subtotal");
    subtotalElement.textContent = "$" + subtotal.toFixed(2);
  
    var totalElement = document.querySelector(".total");
    totalElement.textContent = "$" + subtotal.toFixed(2);
  }
  
  // Función para guardar el contenido del carrito en el almacenamiento local
  function saveCartItemsToLocalStorage() {
    var cartItems = document.querySelectorAll(".cart-items tr");
    var cartItemsData = [];
  
    cartItems.forEach(function (cartItem) {
      var image = cartItem.querySelector("img").src;
      var name = cartItem.querySelector("td:nth-child(1)").textContent;
      var price = parseFloat(cartItem.querySelector("td:nth-child(2)").textContent.replace("$", ""));
      var quantity = parseInt(cartItem.querySelector(".quantity input").value);
  
      var cartItemData = {
        image: image,
        name: name,
        price: price,
        quantity: quantity
      };
  
      cartItemsData.push(cartItemData);
    });
  
    localStorage.setItem("cartItems", JSON.stringify(cartItemsData));
  }
  
  // Función para realizar el pago
  function pay(event) {
    event.preventDefault();
    // Aquí puedes escribir la lógica para realizar el pago
  }


//BOTONES FLOTANTES
//CARRITO
window.addEventListener('scroll', function() {
  var carritoContainer = document.querySelector('.carrito-container');
  var scrollY = window.scrollY;
  
  if (scrollY > 100) {
    carritoContainer.classList.add('active');
  } else {
    carritoContainer.classList.remove('active');
  }
});

var carritoContainer = document.querySelector('.carrito-container');
var vistaPreliminar = document.getElementById('vista-preliminar');
var cerrarVistaPreliminar = document.getElementById('cerrar-vista-preliminar');

// Función para mostrar la vista preliminar
function mostrarVistaPreliminar() {
  vistaPreliminar.classList.add('active');
}

// Función para ocultar la vista preliminar
function ocultarVistaPreliminar() {
  vistaPreliminar.classList.remove('active');
}

// Evento al hacer clic en el carrito
carritoContainer.addEventListener('click', mostrarVistaPreliminar);

// Evento al hacer clic en el botón de cerrar
cerrarVistaPreliminar.addEventListener('click', ocultarVistaPreliminar);


//BOTON CATEGORIAS
const btnCategorias = document.getElementById('btn-categorias');
const categoriasContainer = document.getElementById('categorias-container');

btnCategorias.addEventListener('click', function() {
  categoriasContainer.style.display = 'block';
});

categoriasContainer.addEventListener('click', function(event) {
  if (event.target === categoriasContainer) {
    categoriasContainer.style.display = 'none';
  }
});

//SECCION PREGUNTAS
document.addEventListener("DOMContentLoaded", function() {
  var questions = document.querySelectorAll(".question");

  questions.forEach(function(question) {
    question.addEventListener("click", function() {
      var answer = this.querySelector(".answer");
      var icon = this.querySelector("i");

      if (!this.classList.contains("active")) {
        var activeQuestion = document.querySelector(".question.active");
        if (activeQuestion) {
          activeQuestion.classList.remove("active");
          activeQuestion.querySelector(".answer").style.display = "none";
          activeQuestion.querySelector("i").classList.replace("fa-minus", "fa-plus");
        }

        this.classList.add("active");
        answer.style.display = "block";
        icon.classList.replace("fa-plus", "fa-minus");
      } else {
        this.classList.remove("active");
        answer.style.display = "none";
        icon.classList.replace("fa-minus", "fa-plus");
      }
    });
  });
});
