export function generarDatos() {
  return {
    humedad: Math.floor(Math.random() * 100),
    temperatura: Math.floor(Math.random() * 40),
    timestamp: Date.now(),
  };
}
