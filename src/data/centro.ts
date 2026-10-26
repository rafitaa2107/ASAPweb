export interface DiaHorario {
  abierto: boolean;
  apertura?: string; // HH:mm
  cierre?: string;   // HH:mm
}

export interface Servicio {
  id: string;
  codigo: string;
  badge: string;
  nombre: string;
  descripcion: string;
  precio: string;
  duracion: string;
  especificaciones: string[];
}

export interface Tarifa {
  id: string;
  nombre: string;
  frecuencia: string;
  precio: string;
  periodo: string;
  descripcion: string;
  caracteristicas: string[];
  destacada: boolean;
}

export interface MetodoPaso {
  numero: string;
  titulo: string;
  descripcion: string;
  detalle: string;
}

export interface Resena {
  autor: string;
  tiempo: string;
  puntuacion: number;
  texto: string;
  verificada: boolean;
}

export interface FaqItem {
  pregunta: string;
  respuesta: string;
}

export interface CentroConfig {
  nombre: string;
  tagline: string;
  subtitulo: string;
  tipoSchema: 'SportsActivityLocation' | 'ExerciseGym' | 'AutoRepair';
  cif: string;
  razonSocial: string;
  telefono: string;
  telefonoFormateado: string;
  whatsapp: string;
  email: string;
  urlWeb: string;
  direccion: {
    calle: string;
    barrio: string;
    codigoPostal: string;
    ciudad: string;
    provincia: string;
    pais: string;
    textoCompleto: string;
  };
  coordenadas: {
    lat: number;
    lng: number;
  };
  googleMaps: {
    embedUrl: string;
    comoLlegarUrl: string;
    reviewsUrl: string;
  };
  rating: {
    puntuacion: number;
    totalResenas: number;
    texto: string;
  };
  horario: {
    lunes: DiaHorario;
    martes: DiaHorario;
    miercoles: DiaHorario;
    jueves: DiaHorario;
    viernes: DiaHorario;
    sabado: DiaHorario;
    domingo: DiaHorario;
    textoResumen: string;
  };
  servicios: Servicio[];
  tarifas: Tarifa[];
  metodo: MetodoPaso[];
  opiniones: Resena[];
  faqs: FaqItem[];
  redes: {
    instagram?: string;
    googleMaps?: string;
  };
}

export const centroData: CentroConfig = {
  nombre: 'ASAP Training Center',
  tagline: 'SISTEMA TÉCNICO // ZAIDÍN [GR]',
  subtitulo: 'Centro de entrenamiento de fuerza, acondicionamiento y readaptación en el Zaidín, Granada. Sin masificaciones y con rigor técnico.',
  tipoSchema: 'SportsActivityLocation',
  cif: 'B-19842109',
  razonSocial: 'ASAP PERFORMANCE S.L.',
  telefono: '641417021',
  telefonoFormateado: '641 41 70 21',
  whatsapp: '34641417021',
  email: 'info@asaptraining.es',
  urlWeb: 'https://asaptraining.es',
  direccion: {
    calle: 'Placeta Gutierre de Cetina',
    barrio: 'Zaidín',
    codigoPostal: '18007',
    ciudad: 'Granada',
    provincia: 'Granada',
    pais: 'ES',
    textoCompleto: 'Placeta Gutierre de Cetina, Zaidín, 18007 Granada',
  },
  coordenadas: {
    lat: 37.1567148,
    lng: -3.5974319,
  },
  googleMaps: {
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3180.200155250493!2d-3.6000122!3d37.1567148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd71fb819303117b%3A0x232b7492d5c97a63!2sASAP%20Training%20Center!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses',
    comoLlegarUrl: 'https://maps.app.goo.gl/xiqtVQZKJj9zMzRb9',
    reviewsUrl: 'https://maps.app.goo.gl/xiqtVQZKJj9zMzRb9',
  },
  rating: {
    puntuacion: 5.0,
    totalResenas: 7,
    texto: '5.0 ★ BASADAS EN 7+ RESEÑAS EN GOOGLE',
  },
  horario: {
    lunes: { abierto: true, apertura: '07:00', cierre: '22:00' },
    martes: { abierto: true, apertura: '07:00', cierre: '22:00' },
    miercoles: { abierto: true, apertura: '07:00', cierre: '22:00' },
    jueves: { abierto: true, apertura: '07:00', cierre: '22:00' },
    viernes: { abierto: true, apertura: '07:00', cierre: '22:00' },
    sabado: { abierto: false },
    domingo: { abierto: false },
    textoResumen: 'Lunes a Viernes de 7:00 a 22:00 · Sábado y Domingo Cerrado',
  },
  servicios: [
    {
      id: 'fuerza-acondicionamiento',
      codigo: 'PROG 01',
      badge: 'TODOS LOS NIVELES',
      nombre: 'Fuerza & Acondicionamiento',
      descripcion: 'Entrenamiento basado en patrones motores fundamentales: sentadilla, bisagra, empuje y tracción. Orientado a desarrollo de masa magra, densidad ósea y potencia funcional con cargas progresivas.',
      precio: 'Desde 55€/mes',
      duracion: '60 min / sesión',
      especificaciones: ['Ratios 8-10 atletas por coach', 'Seguimiento por bloques de 4 semanas', 'Test de fuerza submáxima cada ciclo'],
    },
    {
      id: 'hyrox-performance',
      codigo: 'PROG 02',
      badge: 'ALTA EXIGENCIA',
      nombre: 'HYROX Performance',
      descripcion: 'Preparación específica para la competición reina del fitness o acondicionamiento metabólico integral: SkiErg, Sled Push/Pull, Burpee Broad Jumps, Rowing, Farmers Carry y Wall Balls.',
      precio: 'Desde 65€/mes',
      duracion: '60-75 min',
      especificaciones: ['Simulacros oficiales de carrera', 'Estrategia de ritmos y umbrales', 'Equipamiento de competición homologado'],
    },
    {
      id: 'readaptacion-lesional',
      codigo: 'PROG 03',
      badge: 'CLÍNICO / SALUD',
      nombre: 'Readaptación & Movilidad',
      descripcion: 'Programa especializado para atletas con molestias lumbares, dolor de hombro, meniscopatías o tras cirugías. Reconstrucción de la tolerancia de tejidos y reingreso seguro al levantamiento.',
      precio: 'A consultar',
      duracion: '50 min personalizada',
      especificaciones: ['Valoración artro-cinemática inicial', 'Coordinación con tu fisioterapeuta', 'Ejercicios correctivos de control motor'],
    },
    {
      id: 'hipertrofia-funcional',
      codigo: 'PROG 04',
      badge: 'COMPOSICIÓN CORPORAL',
      nombre: 'Hipertrofia Funcional',
      descripcion: 'Volumen e intensidad calculados al gramo para ganar masa muscular real sin perder capacidad atlética, elasticidad ni salud articular. Cero ejercicios superfluos.',
      precio: 'Desde 60€/mes',
      duracion: '60 min',
      especificaciones: ['Tensión mecánica y sobrecarga', 'Selección de ejercicios multiarticulares', 'Control de fatiga y recuperación'],
    },
    {
      id: 'entrenamiento-personal',
      codigo: 'PROG 05',
      badge: '1 A 1 EXCLUSIVO',
      nombre: 'Entrenamiento Personal 1 a 1',
      descripcion: 'Atención al 100% con un entrenador dedicado en exclusiva a ti. Ideal para objetivos con fecha límite, casos clínicos complejos o atletas que demandan máxima individualización.',
      precio: 'Bonos desde 35€/sesión',
      duracion: '60 min',
      especificaciones: ['Reserva prioritaria de espacio', 'Programación nutricional asociada', 'Análisis en vídeo de biomecánica'],
    },
    {
      id: 'preparacion-oposiciones',
      codigo: 'PROG 06',
      badge: 'RENDIMIENTO ESPECÍFICO',
      nombre: 'Preparación Oposiciones',
      descripcion: 'Protocolos específicos para pruebas de Policía Nacional, Local, Guardia Civil y Bomberos: dominadas, salto vertical, circuito de agilidad, Course Navette y natación.',
      precio: 'Desde 65€/mes',
      duracion: '60-90 min',
      especificaciones: ['Marcas diana por convocatoria', 'Simulacros periódicos cronometrados', 'Planificación de picos de forma'],
    },
  ],
  tarifas: [
    {
      id: 'plan-basico',
      nombre: 'Básico Funcional',
      frecuencia: '2 DÍAS/SEM',
      precio: '55€',
      periodo: '/mes',
      descripcion: 'Ideal para iniciarse de forma constante o combinar con running, ciclismo, natación u otra actividad.',
      caracteristicas: [
        '8 sesiones guiadas al mes',
        'Valoración física inicial incluida',
        'Grupos de aforo restringido (máx. 10)',
        'Reserva flexible mediante app',
        'Sin cuota de matrícula ni permanencia',
      ],
      destacada: false,
    },
    {
      id: 'plan-rendimiento',
      nombre: 'Atleta Rendimiento',
      frecuencia: '3-4 DÍAS/SEM',
      precio: '75€',
      periodo: '/mes',
      descripcion: 'El plan recomendado para notar cambios drásticos de fuerza, recomposición corporal y rendimiento físico.',
      caracteristicas: [
        'Hasta 16 sesiones al mes',
        'Acceso a Fuerza + HYROX Performance',
        'Valoración postural y de movilidad',
        'Programación periódica de sobrecarga',
        'Prioridad en franjas horarias punta',
        'Sin cuota de matrícula ni permanencia',
      ],
      destacada: true,
    },
    {
      id: 'plan-ilimitado',
      nombre: 'Rendimiento Ilimitado',
      frecuencia: 'ILIMITADO + OPEN BOX',
      precio: '95€',
      periodo: '/mes',
      descripcion: 'Para atletas dedicados que buscan entrenar a diario y disponer de espacio para sus sesiones libres.',
      caracteristicas: [
        'Sesiones guiadas ilimitadas',
        'Acceso a Open Box en franjas habilitadas',
        'Seguimiento mensual de marcas y datos',
        'Planificación individualizada de picos',
        'Toalla y servicio de taquilla fija',
        'Sin cuota de matrícula ni permanencia',
      ],
      destacada: false,
    },
  ],
  metodo: [
    {
      numero: '01',
      titulo: 'VALORACIÓN TÉCNICA Y ARTICULAR',
      descripcion: 'No entras a ciegas. Evaluamos tu movilidad de tobillo, cadera y hombro, identificamos posibles descompensaciones y definimos tus umbrales seguros de trabajo.',
      detalle: 'Entrevista clínica previa + test funcional de movimiento sin carga.',
    },
    {
      numero: '02',
      titulo: 'ASIGNACIÓN DE BLOQUE Y CARGAS',
      descripcion: 'Te incorporas a un grupo reducido donde el coach ajusta el peso, la velocidad y la variante de cada ejercicio exactamente a tu nivel de fuerza actual.',
      detalle: 'Supervisión constante en cada serie. Ninguna repetición se ejecuta sin control.',
    },
    {
      numero: '03',
      titulo: 'PROGRESIÓN CONTINUA Y MEDICIÓN',
      descripcion: 'Entrenar sin registrar es perder el tiempo. Registramos tus levantamientos y volumen para garantizar que mes a mes seas más fuerte, ágil y resistente.',
      detalle: 'Reevaluación de marcas y ajustes de programación cada 4 semanas.',
    },
  ],
  opiniones: [
    {
      autor: 'Carlos Morales',
      tiempo: 'Hace 3 semanas',
      puntuacion: 5,
      texto: 'El mejor centro de entrenamiento del Zaidín con diferencia. Grupos de verdad reducidos, material de primera calidad y entrenadores que corrigen cada detalle de la técnica. Vengo de un gimnasio convencional donde nadie me miraba y el cambio en 4 meses es brutal.',
      verificada: true,
    },
    {
      autor: 'Laura Gutiérrez',
      tiempo: 'Hace 1 mes',
      puntuacion: 5,
      texto: 'Tenía miedo de empezar por una lesión antigua en la rodilla, pero la valoración inicial fue súper minuciosa. Me adaptaron cada movimiento y ahora levanto peso sin dolor alguno. El ambiente entre compañeros es inmejorable, cero postureo.',
      verificada: true,
    },
    {
      autor: 'Manuel Ramos',
      tiempo: 'Hace 2 meses',
      puntuacion: 5,
      texto: 'Preparando pruebas físicas para oposición. Las sesiones de HYROX y fuerza me han permitido bajar tiempos y superar las dominadas con holgura. Flexibilidad de horarios y trato cercano.',
      verificada: true,
    },
  ],
  faqs: [
    {
      pregunta: '¿Nunca he tocado una barra ni hecho pesas, puedo empezar?',
      respuesta: 'Totalmente. La mayoría de personas que empiezan en ASAP nunca habían entrenado fuerza con barra libre ni levantamientos formales. La valoración inicial nos sirve precisamente para calibrar tus rangos de movimiento, enseñarte la técnica desde cero y seleccionar variantes seguras para ti.',
    },
    {
      pregunta: '¿Tengo que pagar matrícula o firmar permanencia?',
      respuesta: 'No, rotundamente no. En ASAP creemos en la libertad de nuestros atletas: pagas mes a mes natural sin cuotas de entrada, sin gastos ocultos y sin cláusulas de permanencia. Te quedas porque mejoras y disfrutas del entrenamiento.',
    },
    {
      pregunta: '¿Cómo funciona la reserva de clases?',
      respuesta: 'Disponemos de una aplicación móvil intuitiva donde reservas tu plaza en la sesión y franja horaria que mejor te convenga, desde las 7:00 de la mañana hasta las 22:00 de la noche. Si algún imprevisto te surge, puedes cancelar con antelación y reprogramar.',
    },
    {
      pregunta: '¿Qué diferencia hay con un gimnasio comercial convencional?',
      respuesta: 'Todo: en un gimnasio tradicional compartes sala con cientos de personas, tienes que esperar turnos por las máquinas y nadie supervisa tus posturas. En ASAP entrenas en un grupo reducido con un entrenador dedicado que programa tus cargas, corrige tu técnica y asegura tu progreso seguro.',
    },
    {
      pregunta: '¿Hay plazas libres o existe lista de espera?',
      respuesta: 'Para mantener el estándar de calidad y aforo restringido, el número total de atletas activos está limitado. Actualmente disponemos de plazas en horarios seleccionados de mañana, mediodía y tarde.',
    },
    {
      pregunta: '¿Puedo probar una sesión antes de decidirme?',
      respuesta: 'Sí. Puedes solicitar una valoración inicial técnica y sesión de prueba sin coste ni compromiso a través de nuestro formulario o escribiéndonos directamente por WhatsApp.',
    },
  ],
  redes: {
    instagram: 'https://instagram.com/asaptraining',
    googleMaps: 'https://maps.app.goo.gl/xiqtVQZKJj9zMzRb9',
  },
};
