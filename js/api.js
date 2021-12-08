$("#bbtn").click(function (e) {

   e.preventDefault();

   $("#divSucursales").html("");

   $.get("../api.json", function (data) {
      $.each(data.sucursal, function (index, item) {

         $("#divSucursales").html(
            $("#divSucursales").html() + `<div class="divClase">
                                     <h2 class="estilos">${item.localidad}</h2>
                                     <p class="estilos"> Direccion:  ${item.direccion},</p>
                                     <p class="estilos"> Zona: ${item.zona}</p>
                                     <img class="fotos" src="${item.url}"></img>
                                     </div> `
         );

         $(".divClase").css({
            'display': "inline-block",
            'margin': ".6em 1.5em",
         });
         $(".estilos").css({
            'color': "#f1f0db",
            "font-size": "15px",
            'padding': "18px",
            "letter-spacing": "2px",
         });

         $(".fotos").css({
            'width': "250px",
            'height': "150px",
            'border': "1px solid red",
         });
      });
   });

   $("#bbtn").fadeOut(4000);
});


// Api seccion Nuestro equipo
$(document).ready(function (e) {

   $("#somos").html("");

   $.get("../api.json", function (data) {
      $.each(data.equipo, function (index, item) {

         $("#somos").html(
            $("#somos").html() +
            `
                           <div class="somos">
                           <img class="foton" id="foto" src="${item.url}"></img>
                           <h3  class="titleThird">${item.nombre}</h3>
                           <p class="paragraph1">  ${item.area}</p>
                           </div>`
         );

         $(".foton").css({
            'width': "250px",
            'height': "300px",
            'border': "1px solid #black",
            'margin': "1.5em .8em .5em .8em",
            "border-radius": "10px",
            "box-shadow": "5px 4px 2px #444",
         });
      });
   });
});