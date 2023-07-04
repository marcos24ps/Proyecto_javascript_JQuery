//Carga de la página.
$("document").ready(function () {

  //Creación de los elementos de la lista dinámicamente.
  let txt ="<li class='nav-item'><a class='nav-link active' aria-current='page' href='index.html'>Home</a>";
  txt +="</li><li class='nav-item'><a class='nav-link' href='contacto.html'>Contacto</a></li>";
  txt +="<li class='nav-item'><a class='nav-link' href='portfolio.html'>Portfolio</a></li>";
  txt += "</ul></div></div></nav>";

  //Recogida de la página desde donde se llama al JavaScript.  
  var paginaActual = window.location.pathname;
  //Solo se toma la parte final de la página.
  paginaActual=paginaActual.substring(paginaActual.lastIndexOf("/"),paginaActual.length);

  //Añadir el menú de navegación para todas las páginas.
  $("#bod").append(txt);

  //Si página es index.html
  if(paginaActual==="/index.html"){
    aumento(); //Llamada a la función de aumento de imagen.
  }
  //Si página es contacto.
  else if(paginaActual==="/contacto.html"){
    email_cookie(); //Llamada a la función de creación de cookies.
  }
  //Si página es portfolio.
  else if(paginaActual==="/portfolio.html"){

    moverTexto(); //Llamada a función texto dinámico.
  }
});

//Función para aumento de texto.
function aumento(){

    $("#img_prin").mouseover(function () {
        $(this).css("transform", "scale(3)");
      });
    
      $("#img_prin").mouseout(function () {
        $(this).css("transform", "scale(1)");
      });
}

//Función para la creación de cookie,con email.
function email_cookie(){

    $("#boton_contacto").click(function () {
        var email = $("#email").val();
        setCookie(email);
      });
    
}

//Función para que el texto se mueva.
function moverTexto(){

    $('#miLista li').mouseover(function() {
        var elementoSeleccionado = this.id;
        if(elementoSeleccionado){

            elementoSeleccionado="#" + elementoSeleccionado;
            $(elementoSeleccionado).mouseover(function() {
                $(this).css({
                  'margin-left': '20px',
                  'transition': 'margin-left 0.3s',
                  'color': 'red'
                });
              });
            
              $(elementoSeleccionado).mouseout(function() {
                $(this).css({
                  'margin-left': '0',
                  'transition': 'margin-left 0.3s',
                  'color': 'black'
                });
              });
        }
        
      });

    
}

//Creación de la cookie.
function setCookie(email) {

  var d = new Date();
  d.setTime(d.getTime() + 7 * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = "email=" + email + ";" + expires + ";path=/";
}
