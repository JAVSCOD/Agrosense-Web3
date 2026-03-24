"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email && password) {
      router.push("/dashboard");
    } else {
      alert("Completa todos los campos");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F172A]">
      <div className="bg-[#1E293B] p-8 rounded-2xl shadow-lg w-96">
        
        {/* TÍTULO */}
        <h1 className="text-2xl font-bold text-center text-[#00BB77] mb-6">
          AgroSense 🌱
        </h1>

        {/* INPUT EMAIL */}
        <input
          type="email"
          placeholder="Correo electrónico"
          className="w-full mb-4 p-2 rounded bg-[#0F172A] text-white border border-gray-600 focus:border-[#00BB77] outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* INPUT PASSWORD */}
        <input
          type="password"
          placeholder="Contraseña"
          className="w-full mb-4 p-2 rounded bg-[#0F172A] text-white border border-gray-600 focus:border-[#00BB77] outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* BOTÓN LOGIN */}
        <button
          onClick={handleLogin}
          className="w-full bg-[#00BB77] hover:bg-[#2E6F40] text-white py-2 rounded transition mb-4"
        >
          Iniciar sesión
        </button>

        {/* OPCIONES EXTRA */}
        <div className="flex flex-col gap-2 text-sm text-gray-400">

          <button
            onClick={() => alert("Función crear cuenta próximamente")}
            className="hover:text-[#00BB77] transition text-left"
          >
            🆕 Crear cuenta
          </button>

          <button
            onClick={() => alert("Recuperación de contraseña próximamente")}
            className="hover:text-[#00BB77] transition text-left"
          >
            🔐 ¿Olvidaste tu contraseña?
          </button>

        </div>

        {/* DIVISOR */}
        <div className="my-4 text-center text-gray-500 text-sm">
          o
        </div>

        {/* GOOGLE LOGIN */}
        <button
          onClick={() => alert("Login con Google próximamente")}
          className="w-full border border-gray-600 py-2 rounded hover:bg-[#2E6F40] transition"
        >
          🌐 Continuar con Google
        </button>

      </div>
    </div>
  );
}

