import { generarDatos } from "../services/sensorSimulator.js";
import { evaluarAlertas } from "../utils/alerts.js";
import { enviarASolana } from "../services/solanaService.js";

export function iniciarSimulacion() {
  setInterval(async () => {
    const data = generarDatos();

    console.log("📊 Datos generados:", data);

    const alertas = evaluarAlertas(data);

    if (alertas.length > 0) {
      console.log("🚨 ALERTAS:", alertas);
    }

    await enviarASolana(data);
  }, 5000);
}

