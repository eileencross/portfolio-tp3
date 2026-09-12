# Auditoría de Accesibilidad y SEO (Lighthouse)

Auditoría realizada con **Lighthouse** (CLI, Chrome headless) sobre el sitio servido localmente,
como parte del Paso 4 del TP3.

## Resultado — Home (`index.html`)

| Categoría       | Antes | Después |
| --------------- | :---: | :-----: |
| Accesibilidad   |  95   |  **100**  |
| SEO             |  91   |  **100**  |
| Buenas prácticas|  100  |  **100**  |
| Rendimiento     |  83   |    82   |

`contact.html` (página con formulario) también obtuvo **100 / 100 / 100** en accesibilidad, SEO y buenas prácticas.

## Hallazgos y correcciones

### 1. Contraste de color insuficiente (Accesibilidad)

- **Problema**: los botones `.btn-accent` (texto blanco sobre `#7c5cff`) tenían un contraste de
  4.34:1, por debajo del mínimo de 4.5:1 exigido por WCAG 2.1 AA para texto normal.
- **Corrección**: se oscureció el color de acento a `#6d4bff` (contraste 5.12:1 con texto blanco),
  actualizado en `css/style.css` (`--accent`).

### 2. `rel="canonical"` inválido (SEO)

- **Problema**: las etiquetas `<link rel="canonical">` usaban rutas relativas (`index.html`), y
  Lighthouse exige una URL absoluta.
- **Corrección**: se reemplazaron por URLs absolutas apuntando al sitio publicado en GitHub Pages
  (`https://eileencross.github.io/portfolio-tp3/...`).

### 3. Rendimiento (no crítico)

- El puntaje de rendimiento (~82-83) está limitado por la carga de recursos externos vía CDN
  (Google Fonts, Bootstrap, Bootstrap Icons) medida contra un servidor local sin CDN real. En el
  despliegue final a GitHub Pages, estos recursos se sirven desde una red de distribución con
  caché, por lo que se espera una mejora en producción.

## Buenas prácticas de accesibilidad aplicadas desde el maquetado

- HTML semántico: `header`, `nav`, `main`, `section`, `article`, `footer` en las 10 vistas.
- Un único `<h1>` por página y jerarquía de encabezados sin saltos.
- Enlace "Saltar al contenido principal" (`skip-link`) en todas las páginas.
- `alt`/`aria-hidden` correctos en íconos e imágenes decorativas.
- Formulario de contacto con `<label for>` en todos los campos, mensajes de error asociados
  (`invalid-feedback`) y validación accesible.
- Foco de teclado visible (`:focus-visible`) sin remover el outline por defecto.
- `aria-current="page"` en el enlace de navegación activo.
- Atributo `lang="es"` en todas las páginas.

## Cómo reproducir la auditoría

```bash
npx serve -l 5500 .
npx lighthouse http://localhost:5500/index.html --view
```
