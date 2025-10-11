const buttons = document.querySelectorAll(".button-apply-job");

buttons.forEach((button) => {
  // Añadimos el Listener a todos los botones
  button.addEventListener("click", function () {
    const buttons = document.querySelectorAll(".button-apply-job");
    // Modificamos todos los botones
    buttons.forEach((button) => {
      button.textContent = "¡Aplicado!";
      button.classList.add("is-applied");
      button.disabled = true;
    });
  });
});
