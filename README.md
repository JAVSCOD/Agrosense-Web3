# 🌱 AgroSense Web3

AgroSense Web3 es una plataforma de agricultura inteligente que integra sensores IoT simulados con tecnología blockchain (Solana) para monitorear, procesar y almacenar datos ambientales de forma segura, transparente e inmutable.

---

## 🚀 Descripción

El sistema permite visualizar en tiempo real variables clave como:

* 🌾 Humedad del suelo
* 🌡️ Temperatura
* 💧 Nivel de agua

Estos datos son generados mediante sensores simulados, procesados en un backend y registrados en la blockchain de Solana mediante smart contracts desarrollados con Anchor.

---

## 🧠 ¿Por qué Web3?

La integración con blockchain permite:

* 🔒 Datos inmutables (no se pueden alterar)
* 📊 Transparencia total
* 🧾 Trazabilidad histórica
* 🌍 Confianza descentralizada

---

## 🏗️ Arquitectura del sistema

```
[Sensores simulados]
        ↓
   (Backend Node.js)
        ↓
[Smart Contract - Solana]
        ↓
   (Frontend Dashboard)
```

---

## 🧩 Tecnologías utilizadas

### 🖥️ Frontend

* Next.js
* React
* Tailwind CSS
* Recharts

### ⚙️ Backend

* Node.js
* Express
* Simulación de sensores
* Integración con Solana

### 🔗 Blockchain

* Solana
* Anchor (Rust)
* @solana/web3.js

---

## 📁 Estructura del proyecto

```
agrosense-web3/
│
├── frontend/          # Dashboard (Next.js)
├── backend/           # API + simulación de sensores
├── smart-contract/    # Smart contract en Solana (Anchor)
└── README.md
```

---

## ⚙️ Instalación y ejecución

### 1️⃣ Clonar repositorio

```
git clone https://github.com/TU_USUARIO/agrosense-web3.git
cd agrosense-web3
```

---

### 2️⃣ Frontend

```
cd frontend
npm install
npm run dev
```

👉 Disponible en: http://localhost:3000

---

### 3️⃣ Backend

```
cd backend
npm install
npm run dev
```

---

### 4️⃣ Smart Contract (Solana)

```
cd smart-contract
anchor build
```

> ⚠️ Requisitos:

* Rust
* Solana CLI
* Anchor

---

## 🔗 Integración con Blockchain

El backend se conecta a la red **Solana Devnet** para:

* Registrar datos de sensores
* Ejecutar transacciones
* Garantizar almacenamiento descentralizado

---

## 📊 Funcionalidades actuales

* ✅ Sistema de login (UI)
* ✅ Dashboard con métricas en tiempo real
* ✅ Simulación de sensores
* ✅ Visualización con gráficas
* ✅ Backend funcional
* ✅ Conexión inicial con Solana

---

## 🚧 Próximas mejoras

* 🔐 Autenticación real (JWT / Google OAuth)
* 🌐 Deploy en producción
* 📡 Integración con sensores físicos (IoT real)
* 📈 Sistema de alertas inteligentes
* 🔗 Smart contract más avanzado
* 📱 Aplicación móvil

---

## 🎯 Objetivo del proyecto

Demostrar cómo la tecnología Web3 puede mejorar la agricultura mediante:

* Datos confiables
* Automatización
* Transparencia
* Descentralización

---

## 👨‍💻 Autor

**Juan Alexis Velázquez**

---

## 🏆 Proyecto tipo Hackathon

Este proyecto está diseñado como una solución innovadora que combina:

* Agricultura inteligente 🌱
* IoT 📡
* Blockchain 🔗

---

## ⚠️ Notas importantes

* No subir claves privadas (`id.json`)
* Usar red **Devnet** de Solana
* Proyecto en desarrollo

---

## 📬 Contribuciones

Si deseas mejorar el proyecto:

* Haz un fork 🍴
* Crea una rama 🌿
* Envía un pull request 🚀

---

## ⭐ Apóyalo

Si te gusta el proyecto, dale una estrella ⭐ en GitHub


