function mostrarAlert() {
  // Crea un elemento de alerta
  var alertElement = document.createElement("div");
  alertElement.classList.add("alert", "alert-success", "mt-3");
  alertElement.innerHTML = "<strong>¡Kit agregado!</strong>¡Estás a un paso de  la suscripción!";
 
  // Agrega el elemento de alerta al contenedor
  var alertContainer = document.getElementById("alertContainer");
  alertContainer.appendChild(alertElement);
 
  // Después de un tiempo, elimina el elemento de alerta
  setTimeout(function() {
      alertContainer.removeChild(alertElement);
  }, 1500); // El alert se ocultará después de 5 segundos (5000 milisegundos)
}
