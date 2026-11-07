# Moon Centro de Podocosmiatría y Estética del Pie

Sitio web estático (HTML, CSS y JavaScript). No necesita instalación ni servidor.

## Estructura

```
index.html
estilos.css
datos.js         <- acá se editan servicios, productos, horarios y capacitaciones
main.js
media/           <- imágenes
```

## Imágenes que van en `media/`

| Archivo | Uso |
|---|---|
| `logo-fondo-oscuro.png` | Logo con la "m" negra, para fondos blancos (menú de arriba e ícono de la pestaña) |
| `logo-fondo-claro.png` | Logo con la "m" blanca, para fondos negros (pie de página) |
| `hero.jpg` | Foto de fondo de la portada en escritorio (horizontal, 16:9; se oscurece sola) |
| `hero-movil.jpg` | La misma foto de portada en vertical, para celular |
| `nosotros.jpg` | Foto de la sección Nosotros (formato vertical) |
| `cecilia.jpg` | Foto de Cecilia (formato vertical) |
| `trabajo-1.jpg` a `trabajo-6.jpg` | Galería de trabajos (cuadradas; la 1 se ve más grande) |
| `productos/nombre.jpg` | Fotos de productos (carpeta `media/productos/`) |

Si falta una imagen, el sitio no se rompe: se muestra un fondo de marca y la galería omite las fotos que no existan.

## Publicar en GitHub Pages

1. Subí todo el contenido de esta carpeta a un repositorio.
2. En el repositorio: Settings → Pages → Branch `main` → carpeta `/ (root)`.
3. Para el dominio propio más adelante: Settings → Pages → Custom domain.
