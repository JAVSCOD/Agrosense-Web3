use anchor_lang::prelude::*;

declare_id!("As81YgrrpM3vq8HDixeNXSEE296AS5oQYBfjdjDaABfT");

#[program]
pub mod agrosense {
    use super::*;

    // Inicializa el sensor del usuario
    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        let sensor = &mut ctx.accounts.sensor_account;

        sensor.owner = ctx.accounts.user.key();
        sensor.total_registros = 0;

        Ok(())
    }

    // Guarda un nuevo registro (historial + validación + alertas)
    pub fn add_data(
        ctx: Context<AddData>,
        humedad: u8,
        temperatura: i8,
    ) -> Result<()> {

        // 🔒 VALIDACIONES
        require!(humedad <= 100, ErrorCode::HumedadInvalida);
        require!(temperatura >= -50 && temperatura <= 60, ErrorCode::TemperaturaInvalida);

        let registro = &mut ctx.accounts.registro;
        let sensor = &mut ctx.accounts.sensor_account;

        registro.humedad = humedad;
        registro.temperatura = temperatura;
        registro.timestamp = Clock::get()?.unix_timestamp;

        sensor.total_registros += 1;

        // 🚨 ALERTAS ON-CHAIN
        if humedad < 30 {
            msg!("⚠️ Alerta: Humedad baja");
        }

        if temperatura > 40 {
            msg!("⚠️ Alerta: Temperatura alta");
        }

        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(init, payer = user, space = 8 + 32 + 4)]
    pub sensor_account: Account<'info, SensorAccount>,

    #[account(mut)]
    pub user: Signer<'info>,

    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct AddData<'info> {
    #[account(mut)]
    pub sensor_account: Account<'info, SensorAccount>,

    #[account(init, payer = user, space = 8 + 1 + 1 + 8)]
    pub registro: Account<'info, Registro>,

    #[account(mut)]
    pub user: Signer<'info>,

    pub system_program: Program<'info, System>,
}

#[account]
pub struct SensorAccount {
    pub owner: Pubkey,
    pub total_registros: u32,
}

#[account]
pub struct Registro {
    pub humedad: u8,
    pub temperatura: i8,
    pub timestamp: i64,
}

#[error_code]
pub enum ErrorCode {
    #[msg("La humedad debe estar entre 0 y 100")]
    HumedadInvalida,

    #[msg("Temperatura fuera de rango")]
    TemperaturaInvalida,
}


