export function evaluarAlertas(data) {
  let alertas = [];

  if (data.humedad < 30) {
    alertas.push("Humedad baja");
  }

  if (data.temperatura > 35) {
    alertas.push("Temperatura alta");
  }

  return alertas;
}

