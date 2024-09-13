//CUADRO EMERGENTE

function showPopup() {
    document.getElementById("popup").style.display = "block";
}
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

//CUADRO EMERGENTE

function showInfo() {
  document.getElementById("info").style.display = "block";
}
function hideInfo() {
  document.getElementById("info").style.display = "none";
}
 
function showInfo1() {
  document.getElementById("info1").style.display = "block";
}
function hideInfo1() {
  document.getElementById("info1").style.display = "none";
}

function showInfo2() {
  document.getElementById("info2").style.display = "block";
}
function hideInfo2() {
  document.getElementById("info2").style.display = "none";
}

function showInfo3() {
  document.getElementById("info3").style.display = "block";
}
function hideInfo3() {
  document.getElementById("info3").style.display = "none";
}

function showInfo4() {
  document.getElementById("info4").style.display = "block";
}
function hideInfo4() {
  document.getElementById("info4").style.display = "none";
}

function showInfo5() {
  document.getElementById("info5").style.display = "block";
}
function hideInfo5() {
  document.getElementById("info5").style.display = "none";
}

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

//MENSAJE A WHATSAPP 20%

function enviarWhatsapp() {
  var nombre = document.getElementById("nombre").value;
  var correo = document.getElementById("correo").value;
  var curso = document.getElementById("curso").value;
  var mensaje = "Hola, quiero registrarme en el curso " + curso + ", Mi Correo es: " + correo + "y Mi Nombre " + nombre;
  window.open("https://wa.me/59169006500?text=" + encodeURIComponent(mensaje), "_blank");
}

function enviarContacto() {
    var nombre = document.getElementById("tu nombre").value;
    var correo = document.getElementById("tu correo").value;
    var asunto = document.getElementById("asunto").value;
    var texto = document.getElementById("mensaje").value;
    var mensaje = "Hola, mi nombre es " + nombre + ", Mi Correo es: " + correo + ", me gustaria infomacion sobre " + asunto + ". " + texto;
    window.open("https://wa.me/59169006500?text=" + encodeURIComponent(mensaje), "_blank");
  }

//DIAS DE LA PAGINA
// Obtener la fecha de creación de la página
var startDate = new Date(2023, 01, 01);;

// Función para calcular el número de días desde la fecha de creación
function calcularDiasTranscurridos() {
  var currentDate = new Date();
  var timeDiff = Math.abs(currentDate.getTime() - startDate.getTime());
  var daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return daysDiff;
}

// Obtener el elemento span del contador
var contadorSpan = document.getElementById('counter');

// Configurar los valores iniciales del contador
contadorSpan.setAttribute('data-from', '1');
contadorSpan.setAttribute('data-to', calcularDiasTranscurridos());

// Inicializar el contador
var counter = new CountUp(contadorSpan, 1, calcularDiasTranscurridos(), 0, 5);
counter.start();
