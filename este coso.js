
  document.addEventListener("DOMContentLoaded", function () {
    const boton = document.getElementById("toggle-categorias");
    const submenu = document.getElementById("submenu-categorias");

    boton.addEventListener("click", function () {
      if (submenu.style.display === "none") {
        submenu.style.display = "block";
      } else {
        submenu.style.display = "none";
      }
    });
  });
