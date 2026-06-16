# Musicala Aliados · Presentación interactiva

Deck web (HTML + CSS + JavaScript puro, sin frameworks ni backend) para ofrecer los servicios de **Musicala Escuela de Artes** a **Fondos de Empleados**, con dos versiones:

- **General** → Fondos de Empleados.
- **Senior** → Fonbienestar / población pensionada y adulto mayor (*Musicala Bienestar Senior*).

Incluye navegación tipo diapositivas, índice, generador de enlaces, botones funcionales (WhatsApp, correo, agendar, imprimir, copiar link) y una pieza de correo liviana.

---

## Archivos

| Archivo | Para qué sirve |
|---|---|
| `index.html` | La presentación. Es lo que se comparte por link. |
| `styles.css` | Estilos e identidad de marca. |
| `script.js` | Motor + **todo el contenido editable** (textos, slides, precios, contacto). |
| `email-template.html` | Pieza HTML para enviar por correo. |
| `README.md` | Esta guía. |

---

## Cómo abrir el proyecto

Doble clic en `index.html` (se abre en el navegador). Para desarrollo cómodo:

```bash
# dentro de la carpeta del proyecto
python -m http.server 8000
# luego abre http://localhost:8000
```

---

## Personalización por URL

La versión se controla con parámetros en el enlace:

| Parámetro | Valores | Efecto |
|---|---|---|
| `tipo` | `general` (por defecto) · `senior` | Cambia el deck completo. |
| `fondo` | texto libre | Nombre del Fondo (aparece en portada y mensajes). |
| `contacto` | texto libre | Nombre del contacto. |

### Ejemplos de links

```
index.html
index.html?fondo=Fonbienestar&contacto=Gestión%20Social&tipo=senior
index.html?fondo=Fondo%20Ejemplo&tipo=general
```

> Tip: usa el botón **Índice → Generar enlace personalizado** dentro de la presentación para crear y copiar links sin escribir parámetros a mano. Los espacios y tildes se codifican solos.

---

## Botones (todos funcionales)

- **WhatsApp** → abre chat con mensaje prearmado (distinto en general/senior; añade el nombre del Fondo si viene en la URL).
- **Agendar** → abre tu calendario si configuras `calendarUrl`; si está vacío, abre WhatsApp con mensaje de agendamiento.
- **Enviar correo** → abre el cliente de correo. En la versión senior va dirigido a `gestionsocial@fonbienestar.com.co`.
- **Imprimir** → `window.print()` con estilos optimizados para PDF/papel.
- **Copiar link** → copia el enlace actual al portapapeles.
- **Pantalla completa** → modo presentación.

Navegación: flechas `←/→`, barra espaciadora, `Inicio`/`Fin`, swipe en móvil, o los botones.

---

## Cómo editar textos

Todo vive en `script.js`:

- Datos de contacto y enlaces → objeto **`BRAND`**.
- Mensajes de WhatsApp → **`WHATSAPP_MSG`**.
- Tabla de precios → **`PRECIOS_TALLER`** (`valor` en pesos, `horas` para el cálculo de valor/hora, `destacado:true` resalta una fila).
- Diapositivas → **`DECKS.general.slides`** y **`DECKS.senior.slides`**.

En cualquier texto puedes usar los comodines `{{fondo}}` y `{{contacto}}`, que se reemplazan con los parámetros de la URL.

### Tipos de diapositiva disponibles
`cover` · `list` · `area` (lista + franja de beneficios) · `plans` · `pricing` · `packages` · `cta`.

---

## Cómo cambiar colores

En `styles.css`, bloque `:root`. Las variables usan nombres de compositores de la marca:

```css
--bach:#220A63;  --mozart:#0C41C4;  --beethoven:#680DBF;
--vivaldi:#5729FF;  --brahms:#CE0071;  --cian:#19BEDB;
--grad: linear-gradient(120deg,#19BEDB,#0C41C4,#5729FF,#680DBF,#CE0071);
```

Cambia el degradado `--grad` y se actualiza toda la presentación.

---

## Cómo enviar `email-template.html`

1. Abre `email-template.html` y reemplaza:
   - `[URL_PROPUESTA]` → el link de tu `index.html` (con sus parámetros).
   - `[URL_WHATSAPP]` → `https://wa.me/573193529475?text=Hola%20Musicala...`
2. Copia todo el HTML y pégalo en tu herramienta de mailing (o usa “insertar HTML”).
3. Asunto sugerido: **Propuesta de Bienestar Artístico y Envejecimiento Activo para Pensionados Fonbienestar**.

---

## Subir a GitHub Pages

```bash
git init
git add .
git commit -m "Musicala Aliados"
git branch -M main
git remote add origin https://github.com/USUARIO/REPO.git
git push -u origin main
```

Luego: **Settings → Pages → Branch: main / root → Save**. La URL queda como
`https://USUARIO.github.io/REPO/`.

También funciona en **Netlify** o **Vercel** arrastrando la carpeta (sitio estático, sin build).

---

Hecho con cariño para Musicala. *El arte no tiene edad.*
