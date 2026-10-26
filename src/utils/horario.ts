import type { CentroConfig } from '../data/centro';

export interface EstadoHorario {
  abierto: boolean;
  texto: string;
  badgeClase: string;
}

export function obtenerEstadoHorario(centro: CentroConfig): EstadoHorario {
  // En SSR devolvemos el horario general por defecto
  // El cálculo en vivo se sincroniza en el cliente en LiveStatusBadge
  return {
    abierto: true,
    texto: 'Horario DE 7:00 A 22:00 Sábado y Domingo Cerrado',
    badgeClase: 'bg-tertiary-container',
  };
}

// Script cliente en formato string o función para inyectar en el navegador
export const scriptCalculoHorario = `
(function() {
  function calcular() {
    const elTexto = document.getElementById('horario-estado-texto');
    const elDot = document.getElementById('horario-estado-dot');
    if (!elTexto || !elDot) return;

    // Hora en Madrid
    const ahora = new Date();
    const formatter = new Intl.DateTimeFormat('es-ES', {
      timeZone: 'Europe/Madrid',
      weekday: 'narrow',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false
    });

    const parts = formatter.formatToParts(ahora);
    let hora = 0;
    let minuto = 0;
    for (const p of parts) {
      if (p.type === 'hour') hora = parseInt(p.value, 10);
      if (p.type === 'minute') minuto = parseInt(p.value, 10);
    }

    // Día de la semana en Madrid (0 = domingo, 1 = lunes, ..., 6 = sábado)
    const diaSemanaStr = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Europe/Madrid',
      weekday: 'short'
    }).format(ahora);

    const dias = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
    const diaNum = dias[diaSemanaStr] ?? 1;

    const tiempoActualMinutos = hora * 60 + minuto;
    const aperturaMinutos = 7 * 60; // 07:00
    const cierreMinutos = 22 * 60;  // 22:00

    const esLaborable = diaNum >= 1 && diaNum <= 5;
    const estaEnHorario = esLaborable && tiempoActualMinutos >= aperturaMinutos && tiempoActualMinutos < cierreMinutos;

    if (estaEnHorario) {
      elTexto.textContent = 'ABIERTO AHORA · CIERRA A LAS 22:00';
      elDot.className = 'w-2.5 h-2.5 rounded-full bg-tertiary-container animate-pulse';
    } else {
      let proximaApertura = '';
      if (diaNum === 5 && tiempoActualMinutos >= cierreMinutos) {
        proximaApertura = 'CERRADO · ABRE EL LUNES A LAS 7:00';
      } else if (diaNum === 6) {
        proximaApertura = 'CERRADO · ABRE EL LUNES A LAS 7:00';
      } else if (diaNum === 0) {
        proximaApertura = 'CERRADO · ABRE EL LUNES A LAS 7:00';
      } else if (tiempoActualMinutos < aperturaMinutos) {
        proximaApertura = 'CERRADO · ABRE HOY A LAS 7:00';
      } else {
        proximaApertura = 'CERRADO · ABRE MAÑANA A LAS 7:00';
      }
      elTexto.textContent = proximaApertura;
      elDot.className = 'w-2.5 h-2.5 rounded-full bg-outline opacity-60';
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', calcular);
  } else {
    calcular();
  }
})();
`;
