import * as anchor from "@project-serum/anchor";
import { Connection, clusterApiUrl, Keypair } from "@solana/web3.js";
import fs from "fs";

// 🌐 Conexión a devnet
const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

// 🔑 Cargar wallet (la misma de Anchor)
const secretKey = JSON.parse(
  fs.readFileSync("/home/javs/.config/solana/id.json")
);

const wallet = Keypair.fromSecretKey(new Uint8Array(secretKey));

// Provider
const provider = new anchor.AnchorProvider(
  connection,
  new anchor.Wallet(wallet),
  { preflightCommitment: "confirmed" }
);

anchor.setProvider(provider);

// ⚠️ AQUÍ VAS A PONER TU PROGRAM ID REAL
const programId = new anchor.web3.PublicKey("TU_PROGRAM_ID");

// ⚠️ NECESITAMOS EL IDL (después del build)
const idl = {}; // ← lo llenamos después

let program;

// Inicializar programa (cuando tengamos IDL)
export function initProgram(idlJson) {
  program = new anchor.Program(idlJson, programId, provider);
}

// 🚀 Enviar datos al contrato
export async function enviarASolana(data) {
  try {
    if (!program) {
      console.log("⚠️ Programa no inicializado");
      return;
    }

    const sensorAccount = anchor.web3.Keypair.generate();
    const registro = anchor.web3.Keypair.generate();

    await program.methods
      .addData(data.humedad, data.temperatura)
      .accounts({
        sensorAccount: sensorAccount.publicKey,
        registro: registro.publicKey,
        user: wallet.publicKey,
        systemProgram: anchor.web3.SystemProgram.programId,
      })
      .signers([sensorAccount, registro])
      .rpc();

    console.log("✅ Datos enviados a Solana");
  } catch (error) {
    console.error("❌ Error enviando a Solana:", error);
  }
}

