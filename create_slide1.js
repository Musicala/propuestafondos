const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9"; // 10" x 5.625"

const slide = pres.addSlide();
slide.background = { color: "FFFFFF" };

// === COLOR PALETTE ===
const DARK_PURPLE = "1E0A4C";
const SIDEBAR_PURPLE = "2D1065";
const PURPLE = "7C3AED";
const PURPLE_MID = "6D28D9";
const LIGHT_PURPLE = "8B5CF6";
const PINK = "C2185B";
const PINK_BRIGHT = "DB2777";
const NAVY = "1A1A3E";
const LIGHT_BG = "F5F0FF";
const CARD_BG = "EDE9FE";
const TABLE_HDR = "4C1D95";
const GRAY = "6B7280";
const DARK_TEXT = "374151";
const WHITE = "FFFFFF";
const GREEN = "16A34A";

// =====================================================================
// LEFT SIDEBAR (2.0" wide, full height)
// =====================================================================
slide.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 2.0, h: 5.625,
  fill: { color: SIDEBAR_PURPLE }, line: { color: SIDEBAR_PURPLE }
});

// Subtle gradient feel - darker bottom strip
slide.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 4.2, w: 2.0, h: 1.425,
  fill: { color: DARK_PURPLE }, line: { color: DARK_PURPLE }
});

// === LOGO AREA ===
// Circle behind music note
slide.addShape(pres.shapes.OVAL, {
  x: 0.22, y: 0.16, w: 0.52, h: 0.52,
  fill: { color: PURPLE }, line: { color: PURPLE }
});
slide.addText("♪", {
  x: 0.22, y: 0.14, w: 0.52, h: 0.56,
  fontSize: 20, color: WHITE, bold: true, align: "center", valign: "middle", margin: 0
});

// Brand text
slide.addText("Musicala", {
  x: 0.82, y: 0.18, w: 1.05, h: 0.27,
  fontSize: 15, color: WHITE, bold: true, fontFace: "Arial", margin: 0
});
slide.addText("Escuela de Artes", {
  x: 0.82, y: 0.44, w: 1.05, h: 0.18,
  fontSize: 7.5, color: "C4B5FD", fontFace: "Arial", margin: 0
});

// Divider
slide.addShape(pres.shapes.LINE, {
  x: 0.14, y: 0.76, w: 1.72, h: 0,
  line: { color: "4C1D95", width: 0.8 }
});

// === NAVIGATION ===
const navItems = [
  { label: "Inicio", active: true, icon: "⌂" },
  { label: "Beneficios", active: false, icon: "◇" },
  { label: "Talleres", active: false, icon: "♫" },
  { label: "Personalización", active: false, icon: "⚙" },
  { label: "Precios", active: false, icon: "$" },
  { label: "Descuentos", active: false, icon: "%" },
  { label: "Grupos Representativos", active: false, icon: "⊞" },
  { label: "Espacios", active: false, icon: "◻" },
  { label: "Contacto", active: false, icon: "✉" },
];

let navY = 0.83;
navItems.forEach((item) => {
  if (item.active) {
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.09, y: navY - 0.02, w: 1.82, h: 0.29,
      fill: { color: PURPLE }, rectRadius: 0.14,
      line: { color: PURPLE }
    });
    slide.addText(item.icon, {
      x: 0.15, y: navY, w: 0.22, h: 0.22,
      fontSize: 9, color: WHITE, align: "center", margin: 0
    });
    slide.addText(item.label, {
      x: 0.38, y: navY + 0.01, w: 1.2, h: 0.2,
      fontSize: 9.5, color: WHITE, bold: true, fontFace: "Arial", margin: 0
    });
    slide.addText("→", {
      x: 1.68, y: navY + 0.01, w: 0.2, h: 0.2,
      fontSize: 9, color: WHITE, align: "center", margin: 0
    });
  } else {
    slide.addText(item.label, {
      x: 0.38, y: navY + 0.03, w: 1.5, h: 0.2,
      fontSize: 8.5, color: "C4B5FD", fontFace: "Arial", margin: 0
    });
  }
  navY += 0.295;
});

// Tagline
slide.addText([
  { text: "El arte no tiene edad,", options: { breakLine: true } },
  { text: "tiene ", options: {} },
  { text: "propósito.", options: { color: PINK_BRIGHT } }
], {
  x: 0.14, y: 4.92, w: 1.74, h: 0.5,
  fontSize: 8, color: "E2E8F0", fontFace: "Arial", italic: true, margin: 0
});

// =====================================================================
// MAIN CONTENT AREA (starts at x=2.0")
// =====================================================================

// ---- TOP: Category Icons Row ----
const cats = [
  { icon: "♪", label: "Música",         color: PURPLE },
  { icon: "♫", label: "Danza",          color: PINK_BRIGHT },
  { icon: "◉", label: "Teatro",         color: "DC2626" },
  { icon: "◈", label: "Artes visuales", color: PURPLE },
  { icon: "♡", label: "Bienestar",      color: PINK_BRIGHT },
];

let catX = 5.5;
cats.forEach((cat) => {
  slide.addShape(pres.shapes.OVAL, {
    x: catX + 0.08, y: 0.07, w: 0.52, h: 0.52,
    fill: { color: WHITE }, line: { color: "E5E7EB", width: 1 }
  });
  slide.addText(cat.icon, {
    x: catX + 0.08, y: 0.06, w: 0.52, h: 0.56,
    fontSize: 17, color: cat.color, align: "center", valign: "middle", margin: 0
  });
  slide.addText(cat.label, {
    x: catX, y: 0.62, w: 0.72, h: 0.18,
    fontSize: 6.5, color: DARK_TEXT, align: "center", fontFace: "Arial", margin: 0
  });
  catX += 0.8;
});

// ---- HERO TITLE ----
slide.addText("Talleres empresariales", {
  x: 2.1, y: 0.1, w: 3.25, h: 0.46,
  fontSize: 22, color: NAVY, bold: true, fontFace: "Arial", margin: 0
});

slide.addText([
  { text: "a la medida de tu ", options: { color: NAVY } },
  { text: "organización ", options: { color: PINK } },
  { text: "♪ ♪", options: { color: PINK, fontSize: 12 } }
], {
  x: 2.1, y: 0.54, w: 3.2, h: 0.38,
  fontSize: 17, bold: true, fontFace: "Arial", margin: 0
});

// Subtitle
slide.addText(
  "Diseñamos experiencias artísticas y de bienestar que fortalecen la\ncreatividad, la integración y el sentido de pertenencia en tu equipo.",
  {
    x: 2.1, y: 0.95, w: 3.1, h: 0.44,
    fontSize: 7.5, color: GRAY, fontFace: "Arial", margin: 0
  }
);

// ---- PERSONALIZATION CARD ----
slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: 2.08, y: 1.44, w: 3.12, h: 0.78,
  fill: { color: CARD_BG }, rectRadius: 0.1,
  line: { color: "DDD6FE", width: 1 }
});

// Card icon
slide.addShape(pres.shapes.OVAL, {
  x: 2.18, y: 1.52, w: 0.5, h: 0.5,
  fill: { color: PURPLE }, line: { color: PURPLE }
});
slide.addText("✂", {
  x: 2.18, y: 0.02 + 1.52, w: 0.5, h: 0.5,
  fontSize: 15, color: WHITE, align: "center", valign: "middle", margin: 0
});

slide.addText("¡Podemos personalizar tus talleres!", {
  x: 2.75, y: 1.50, w: 2.38, h: 0.22,
  fontSize: 9, color: NAVY, bold: true, fontFace: "Arial", margin: 0
});
slide.addText(
  "Adaptamos cada taller a los objetivos de tu empresa,\nal perfil de los participantes y al tiempo disponible.\nTú nos cuentas lo que necesitas y lo hacemos realidad.",
  {
    x: 2.75, y: 1.72, w: 2.38, h: 0.44,
    fontSize: 6.8, color: "4B5563", fontFace: "Arial", margin: 0
  }
);

// ---- RIGHT SIDE: Photo Area ----
// Rounded image placeholder (represent the actual photo)
slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: 5.28, y: 0.85, w: 4.57, h: 2.28,
  fill: { color: "D4C8F0" }, rectRadius: 0.12,
  line: { color: "C4B5FD", width: 0 }
});
// Inner lighter area
slide.addShape(pres.shapes.RECTANGLE, {
  x: 5.85, y: 1.0, w: 3.4, h: 1.9,
  fill: { color: "E9E4FF" }, line: { color: "E9E4FF" }
});
slide.addText(
  "📸\nFoto: adultos mayores\ncreando música juntos",
  {
    x: 5.28, y: 0.85, w: 4.57, h: 2.28,
    fontSize: 9, color: "9CA3AF", align: "center", valign: "middle",
    italic: true, fontFace: "Arial", margin: 0
  }
);

// ---- PINK BANNER ----
slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: 5.28, y: 3.15, w: 4.57, h: 0.37,
  fill: { color: PINK_BRIGHT }, rectRadius: 0.18,
  line: { color: PINK_BRIGHT }
});
slide.addText("♡  Bienestar, creatividad e integración para tu equipo", {
  x: 5.28, y: 3.15, w: 4.57, h: 0.37,
  fontSize: 9, color: WHITE, bold: true, align: "center", valign: "middle", margin: 0
});

// =====================================================================
// PRICING TABLE (left column, below personalization card)
// =====================================================================

// Section header
slide.addShape(pres.shapes.OVAL, {
  x: 2.1, y: 2.3, w: 0.38, h: 0.38,
  fill: { color: PINK_BRIGHT }, line: { color: PINK_BRIGHT }
});
slide.addText("📅", {
  x: 2.1, y: 2.3, w: 0.38, h: 0.38,
  fontSize: 12, align: "center", valign: "middle", margin: 0
});
slide.addText("Talleres directos", {
  x: 2.55, y: 2.3, w: 2.6, h: 0.22,
  fontSize: 12, color: NAVY, bold: true, fontFace: "Arial", margin: 0
});
slide.addText("Valores para estudiantes nuevos", {
  x: 2.55, y: 2.5, w: 2.6, h: 0.18,
  fontSize: 7.5, color: GRAY, fontFace: "Arial", margin: 0
});

// Table using addTable
const tableData = [
  [
    { text: "CATEGORÍA",  options: { color: WHITE, bold: true, fontSize: 6, fill: { color: TABLE_HDR }, align: "left" } },
    { text: "SERVICIO",   options: { color: WHITE, bold: true, fontSize: 6, fill: { color: TABLE_HDR }, align: "left" } },
    { text: "PRECIO (ESTUDIANTES NUEVOS)", options: { color: WHITE, bold: true, fontSize: 6, fill: { color: TABLE_HDR }, align: "right" } },
  ],
  [
    { text: "Taller empresarial", options: { fontSize: 6.5, color: DARK_TEXT } },
    { text: "Taller empresarial Sesión 1H", options: { fontSize: 6.5, color: DARK_TEXT } },
    { text: "$ 114.000", options: { fontSize: 7.5, color: PURPLE_MID, bold: true, align: "right" } },
  ],
  [
    { text: "Taller empresarial", options: { fontSize: 6.5, color: DARK_TEXT, fill: { color: "F5F3FF" } } },
    { text: "Taller empresarial Plan 4H",  options: { fontSize: 6.5, color: DARK_TEXT, fill: { color: "F5F3FF" } } },
    { text: "$ 408.000", options: { fontSize: 7.5, color: PURPLE_MID, bold: true, align: "right", fill: { color: "F5F3FF" } } },
  ],
  [
    { text: "Taller empresarial", options: { fontSize: 6.5, color: DARK_TEXT } },
    { text: "Taller empresarial Plan 8H",  options: { fontSize: 6.5, color: DARK_TEXT } },
    { text: "$ 772.000", options: { fontSize: 7.5, color: PURPLE_MID, bold: true, align: "right" } },
  ],
  [
    { text: "Taller empresarial", options: { fontSize: 6.5, color: DARK_TEXT, fill: { color: "F5F3FF" } } },
    { text: "Taller empresarial Plan 12H", options: { fontSize: 6.5, color: DARK_TEXT, fill: { color: "F5F3FF" } } },
    { text: "$ 1.098.000", options: { fontSize: 7.5, color: PURPLE_MID, bold: true, align: "right", fill: { color: "F5F3FF" } } },
  ],
  [
    { text: "Taller empresarial", options: { fontSize: 6.5, color: DARK_TEXT } },
    { text: "Taller empresarial Plan 24H", options: { fontSize: 6.5, color: DARK_TEXT } },
    { text: "$ 2.070.000", options: { fontSize: 7.5, color: PURPLE_MID, bold: true, align: "right" } },
  ],
];

slide.addTable(tableData, {
  x: 2.08, y: 2.72, w: 3.15, h: 1.35,
  border: { pt: 0.5, color: "E5E7EB" },
  colW: [0.9, 1.35, 0.9],
  rowH: 0.2,
  margin: [3, 4, 3, 4],
});

// Note below table
slide.addText(
  "ⓘ  Los valores incluyen: planeación, facilitador profesional, materiales básicos y certificado de participación.",
  {
    x: 2.08, y: 4.1, w: 3.15, h: 0.28,
    fontSize: 6, color: GRAY, fontFace: "Arial", margin: 0
  }
);

// =====================================================================
// DISCOUNTS SECTION (right column)
// =====================================================================
slide.addShape(pres.shapes.OVAL, {
  x: 5.28, y: 3.56, w: 0.38, h: 0.38,
  fill: { color: PINK_BRIGHT }, line: { color: PINK_BRIGHT }
});
slide.addText("🏷", {
  x: 5.28, y: 3.56, w: 0.38, h: 0.38,
  fontSize: 12, align: "center", valign: "middle", margin: 0
});
slide.addText("Descuentos exclusivos", {
  x: 5.72, y: 3.56, w: 2.6, h: 0.22,
  fontSize: 12, color: NAVY, bold: true, fontFace: "Arial", margin: 0
});
slide.addText("Para los asociados y sus familias", {
  x: 5.72, y: 3.76, w: 2.6, h: 0.18,
  fontSize: 7.5, color: GRAY, fontFace: "Arial", margin: 0
});

const discItems = [
  { icon: "👥", text: "Cursos regulares de música, danza,\nteatro y artes visuales" },
  { icon: "👨‍👩‍👧", text: "Planes familiares\n(2 o más integrantes)" },
  { icon: "☀", text: "Vacaciones artísticas" },
  { icon: "◎", text: "Grupos representativos\nde asociados" },
];

let dY = 3.98;
discItems.forEach((item) => {
  // Icon circle
  slide.addShape(pres.shapes.OVAL, {
    x: 5.28, y: dY, w: 0.3, h: 0.3,
    fill: { color: CARD_BG }, line: { color: "DDD6FE", width: 0.5 }
  });
  slide.addText(item.icon, {
    x: 5.28, y: dY, w: 0.3, h: 0.3,
    fontSize: 9, align: "center", valign: "middle", margin: 0
  });
  // Description
  slide.addText(item.text, {
    x: 5.63, y: dY, w: 2.52, h: 0.32,
    fontSize: 6.8, color: DARK_TEXT, fontFace: "Arial", margin: 0
  });
  // 20% badge
  slide.addText([
    { text: "20%", options: { fontSize: 14, bold: true, breakLine: true } },
    { text: "DE DESCUENTO", options: { fontSize: 5.5, bold: true } }
  ], {
    x: 8.38, y: dY, w: 1.47, h: 0.32,
    color: PINK_BRIGHT, align: "center", fontFace: "Arial", valign: "middle", margin: 0
  });
  dY += 0.36;
});

// Small disclaimer
slide.addText("ⓘ  *Descuentos aplican para asociados del fondo y sus beneficiarios.", {
  x: 5.28, y: 5.41, w: 4.57, h: 0.16,
  fontSize: 6, color: "9CA3AF", fontFace: "Arial", margin: 0
});

// =====================================================================
// BOTTOM SECTION: Personalization features + CTA
// =====================================================================
// Bottom bar
slide.addShape(pres.shapes.RECTANGLE, {
  x: 2.08, y: 4.44, w: 7.77, h: 0.62,
  fill: { color: "FAFAFA" }, line: { color: "F3F4F6", width: 0.5 }
});

// Settings icon
slide.addShape(pres.shapes.OVAL, {
  x: 2.18, y: 4.52, w: 0.42, h: 0.42,
  fill: { color: PINK_BRIGHT }, line: { color: PINK_BRIGHT }
});
slide.addText("⚙", {
  x: 2.18, y: 0.01 + 4.52, w: 0.42, h: 0.42,
  fontSize: 13, color: WHITE, align: "center", valign: "middle", margin: 0
});

slide.addText("Personalizamos cada experiencia", {
  x: 2.67, y: 4.49, w: 2.55, h: 0.22,
  fontSize: 9.5, color: NAVY, bold: true, fontFace: "Arial", margin: 0
});
slide.addText(
  "Diseñamos talleres y programas según tus objetivos, población,\ntiempo disponible y cultura organizacional.",
  {
    x: 2.67, y: 4.7, w: 2.55, h: 0.3,
    fontSize: 6.8, color: GRAY, fontFace: "Arial", margin: 0
  }
);

// Check feature items (2 cols x 2 rows)
const features = [
  { text: "Duración flexible",              x: 5.35, y: 4.49 },
  { text: "Modalidad presencial o virtual", x: 5.35, y: 4.71 },
  { text: "Contenidos a la medida",         x: 7.15, y: 4.49 },
  { text: "Experiencias significativas y memorables", x: 7.15, y: 4.71 },
];

features.forEach((f) => {
  slide.addShape(pres.shapes.OVAL, {
    x: f.x, y: f.y + 0.03, w: 0.16, h: 0.16,
    fill: { color: PURPLE }, line: { color: PURPLE }
  });
  slide.addText("✓", {
    x: f.x, y: f.y + 0.01, w: 0.16, h: 0.18,
    fontSize: 6, color: WHITE, align: "center", margin: 0
  });
  slide.addText(f.text, {
    x: f.x + 0.19, y: f.y + 0.02, w: 1.72, h: 0.18,
    fontSize: 7, color: DARK_TEXT, fontFace: "Arial", margin: 0
  });
});

// =====================================================================
// CTA FOOTER
// =====================================================================
slide.addShape(pres.shapes.RECTANGLE, {
  x: 2.08, y: 5.08, w: 7.77, h: 0.47,
  fill: { color: "F9FAFB" }, line: { color: "F3F4F6", width: 0.5 }
});

// Star chip
slide.addShape(pres.shapes.OVAL, {
  x: 2.15, y: 5.12, w: 0.38, h: 0.38,
  fill: { color: PURPLE }, line: { color: PURPLE }
});
slide.addText("★", {
  x: 2.15, y: 5.11, w: 0.38, h: 0.4,
  fontSize: 13, color: WHITE, align: "center", valign: "middle", margin: 0
});

slide.addText(
  "Creamos experiencias únicas que\ninspiran, conectan y transforman.",
  {
    x: 2.6, y: 5.1, w: 2.5, h: 0.38,
    fontSize: 7, color: DARK_TEXT, fontFace: "Arial", margin: 0
  }
);

slide.addText("¿Listos para crear juntos?", {
  x: 5.15, y: 5.1, w: 2.1, h: 0.2,
  fontSize: 10, color: NAVY, bold: true, fontFace: "Arial", align: "center", margin: 0
});
slide.addText("Contáctanos y diseñemos el taller perfecto para tu empresa.", {
  x: 5.15, y: 5.29, w: 2.1, h: 0.18,
  fontSize: 6.5, color: GRAY, fontFace: "Arial", align: "center", margin: 0
});

// CTA Buttons
// WhatsApp
slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: 7.32, y: 5.1, w: 0.88, h: 0.38,
  fill: { color: GREEN }, rectRadius: 0.08, line: { color: GREEN }
});
slide.addText("✆ Escribenos\npor WhatsApp", {
  x: 7.32, y: 5.1, w: 0.88, h: 0.38,
  fontSize: 6, color: WHITE, bold: true, align: "center", valign: "middle", margin: 0
});

// Agendar
slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: 8.25, y: 5.1, w: 0.82, h: 0.38,
  fill: { color: PURPLE }, rectRadius: 0.08, line: { color: PURPLE }
});
slide.addText("📅 Agendar\nreunión", {
  x: 8.25, y: 5.1, w: 0.82, h: 0.38,
  fontSize: 6, color: WHITE, bold: true, align: "center", valign: "middle", margin: 0
});

// Email
slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: 9.12, y: 5.1, w: 0.73, h: 0.38,
  fill: { color: PINK_BRIGHT }, rectRadius: 0.08, line: { color: PINK_BRIGHT }
});
slide.addText("✉ Escribir\npor correo", {
  x: 9.12, y: 5.1, w: 0.73, h: 0.38,
  fontSize: 6, color: WHITE, bold: true, align: "center", valign: "middle", margin: 0
});

// =====================================================================
// SAVE
// =====================================================================
pres.writeFile({ fileName: "Musicala_Slide1.pptx" })
  .then(() => console.log("✅ Musicala_Slide1.pptx creado con éxito"))
  .catch((e) => console.error("Error:", e));
