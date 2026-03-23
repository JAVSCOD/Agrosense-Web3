"use client";

import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Dashboard() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const generarDatos = () => {
      const nuevo = {
        tiempo: new Date().toLocaleTimeString(),
        humedad: Math.floor(Math.random() * 100),
        temperatura: Math.floor(Math.random() * 40),
      };

      setData((prev) => [...prev.slice(-10), nuevo]);
    };

    const intervalo = setInterval(generarDatos, 3000);

    return () => clearInterval(intervalo);
  }, []);

  const ultimo = data[data.length - 1];

  const alerta =
    ultimo &&
    (ultimo.humedad < 30 || ultimo.temperatura > 30
      ? "⚠️ Riesgo detectado"
      : "✅ Todo estable");

  return (
    <div className="min-h-screen bg-[#0F172A] text-white p-8">
      
      <h1 className="text-3xl font-bold text-[#00BB77] mb-4">
        AgroSense Dashboard 🌱
      </h1>

      {/* ALERTA */}
      {ultimo && (
        <div className="mb-6 p-4 rounded-lg bg-[#1E293B]">
          <p className="text-lg font-semibold">
            Estado del sistema:
            <span className="ml-2">
              {alerta}
            </span>
          </p>
        </div>
      )}

      {/* TARJETAS */}
      {ultimo && (
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          
          <div className="bg-[#1E293B] p-6 rounded-xl">
            <h2>Humedad</h2>
            <p className="text-3xl font-bold">{ultimo.humedad}%</p>
          </div>

          <div className="bg-[#1E293B] p-6 rounded-xl">
            <h2>Temperatura</h2>
            <p className="text-3xl font-bold">{ultimo.temperatura}°C</p>
          </div>

        </div>
      )}

      {/* GRÁFICA */}
      <div className="bg-[#1E293B] p-6 rounded-xl">
        <h2 className="mb-4 text-xl">Historial de sensores</h2>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="tiempo" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="humedad" />
            <Line type="monotone" dataKey="temperatura" />
          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}

