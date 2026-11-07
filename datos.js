/* ==========================================================================
   Moon Centro de Podocosmiatría y Estética del Pie
   Datos editables del sitio. Para cambiar textos, servicios o productos
   no hace falta tocar el diseño: se edita acá y listo.
   ========================================================================== */

/* ---------- Datos generales ---------- */
const CONFIG = {
  nombre: "Moon Centro de Podocosmiatría y Estética del Pie",
  whatsapp: "5492352404265",            // sin + ni espacios
  whatsappVisible: "+54 9 2352 40-4265",
  instagram: "moonpodocosmiatra",
  direccion: "Reconquista 141, Chacabuco, Buenos Aires",
  // Si se completa, aparece en la sección Contacto. Ejemplo:
  // "Lunes a viernes de 9 a 13 y de 16 a 20 h"
  horarios: ""
};

/* ---------- Servicios ----------
   PROVISORIOS: reemplazar por los servicios reales del gabinete.
   Cada servicio: { nombre, descripcion } */
const SERVICIOS = [
  {
    nombre: "Podología clínica",
    descripcion: "Revisión completa del pie y tratamiento de las afecciones más frecuentes. El plan se define según cómo lleguen tus pies a la consulta."
  },
  {
    nombre: "Uñas encarnadas",
    descripcion: "Abordaje conservador de la onicocriptosis, sin cirugía, con indicaciones de cuidado para después de cada sesión."
  },
  {
    nombre: "Hongos en las uñas",
    descripcion: "Tratamiento de uñas con onicomicosis y pautas de higiene para acompañar el proceso en casa."
  },
  {
    nombre: "Callosidades y durezas",
    descripcion: "Eliminación controlada de callos y durezas, y recomendaciones para reducir la presión que los origina."
  },
  {
    nombre: "Cuidado del pie diabético",
    descripcion: "Controles periódicos y cuidado preventivo, con atención especial a la piel, las uñas y la sensibilidad del pie."
  },
  {
    nombre: "Estética del pie",
    descripcion: "Pedicuría profesional y cuidado de la piel y las uñas para que los pies se vean y se sientan bien."
  },
  {
    nombre: "Tratamientos de micosis",
    descripcion: "Tratamiento profesional para las micosis y alteraciones de las uñas y los pies, acompañado de indicaciones de cuidado."
  },
  {
    nombre: "Tratamientos podales",
    descripcion: "Atención podológica integral según las necesidades específicas de cada pie."
  },
  {
    nombre: "Implantes ungueales",
    descripcion: "Colocación y cuidado de implantes ungueales para acompañar la corrección y el crecimiento de la uña."
  },
  {
    nombre: "Baños de parafina",
    descripcion: "Tratamiento hidratante y relajante para la piel seca o endurecida de manos o pies."
  },
  {
    nombre: "Belleza de pies",
    descripcion: "Cuidado estético integral del pie, la piel y las uñas para una presentación prolija y saludable."
  },
  {
    nombre: "Alta frecuencia",
    descripcion: "Tratamiento auxiliar que puede integrarse al cuidado profesional de la piel y las uñas según cada caso."
  },
  {
    nombre: "Spa de pies",
    descripcion: "Experiencia de bienestar que combina limpieza, hidratación y relajación para el cuidado de los pies."
  }
];

/* ---------- Productos ----------
   Todavía vacío: mientras no haya productos, la sección muestra un aviso
   con el botón para consultar por WhatsApp.
   Cada producto:
   { nombre: "Crema hidratante", descripcion: "Texto corto",
     precio: "$12.500",              // opcional, se puede dejar ""
     imagen: "crema-hidratante.jpg" } // archivo dentro de media/productos/
*/
const PRODUCTOS = [];

/* ---------- Galería de trabajos ----------
   Nombres de archivo dentro de media/. Si un archivo no existe, se omite solo.
   Se pueden agregar más fotos (trabajo-5.jpg, etc.): el diseño se acomoda solo.
   Cada elemento: { archivo, texto } (texto = descripción de la foto) */
const TRABAJOS = [
  { archivo: "trabajo-1.jpg", texto: "Tratamiento de uñas con equipo rotatorio" },
  { archivo: "trabajo-2.jpg", texto: "Cuidado de la uña con instrumental" },
  { archivo: "trabajo-3.jpg", texto: "Atención con lupa en el gabinete" },
  { archivo: "trabajo-4.jpg", texto: "Trabajo con equipo rotatorio" }
];

/* ---------- Capacitaciones de Cecilia ----------
   Se completa más adelante. Mientras esté vacío, la lista no se muestra.
   Ejemplo: ["Curso de ...", "Jornada de ..."] */
const CAPACITACIONES = [];
