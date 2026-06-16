/* =========================================================================
   MUSICALA ALIADOS · Presentación interactiva
   Vanilla JS — sin frameworks. Todo el contenido vive en objetos editables.
   Edita textos, slides, precios y datos de contacto desde aquí.
   ========================================================================= */

/* -------------------------------------------------------------------------
   1) MARCA Y CONTACTO  (edita aquí tus datos)
   ------------------------------------------------------------------------- */
const BRAND = {
  nombre: "Musicala",
  apellido: "Escuela de Artes",
  whatsapp: "573193529475",          // formato internacional sin "+", ni espacios
  whatsappDisplay: "319 352 9475",
  web: "www.imusicala.com",
  webUrl: "https://www.imusicala.com",
  instagram: "@imusicala",
  instagramUrl: "https://instagram.com/imusicala",
  email: "hola@imusicala.com",       // correo de Musicala (cámbialo si aplica)
  calendarUrl: ""                    // pega aquí tu Calendly/Google Calendar; si queda vacío, "Agendar" usa WhatsApp
};

/* -------------------------------------------------------------------------
   2) MENSAJES PREARMADOS DE WHATSAPP
   ------------------------------------------------------------------------- */
const WHATSAPP_MSG = {
  general: "Hola Musicala, queremos conocer más sobre la propuesta de bienestar artístico para Fondos de Empleados.",
  senior: "Hola Musicala, queremos conocer más sobre la propuesta Musicala Bienestar Senior para pensionados Fonbienestar.",
  agendar: "Hola Musicala, nos gustaría agendar una reunión para diseñar una propuesta a la medida de nuestro Fondo."
};

/* -------------------------------------------------------------------------
   3) TABLA DE PRECIOS · TALLERES EMPRESARIALES  (de tu boceto)
   numero = valor en pesos; horas = nº de horas para calcular valor x hora
   ------------------------------------------------------------------------- */
const PRECIOS_TALLER = [
  { servicio: "Sesión 1H",  horas: 1,  valor: 114000 },
  { servicio: "Plan 4H",    horas: 4,  valor: 408000 },
  { servicio: "Plan 8H",    horas: 8,  valor: 772000 },
  { servicio: "Plan 12H",   horas: 12, valor: 1098000, destacado: true },
  { servicio: "Plan 24H",   horas: 24, valor: 2070000 }
];

/* -------------------------------------------------------------------------
   4) CONTENIDO DE LAS DIAPOSITIVAS
   Tipos de slide: cover · list · area · plans · pricing · packages · cta
   Placeholders disponibles en cualquier texto: {{fondo}} y {{contacto}}
   ------------------------------------------------------------------------- */
const AREA_ICONS = [
  { label: "Música",       emoji: "🎵" },
  { label: "Danza",        emoji: "💃" },
  { label: "Teatro",       emoji: "🎭" },
  { label: "Artes visuales", emoji: "🎨" },
  { label: "Bienestar",    emoji: "💆" }
];

const DESCUENTOS = [
  { icon: "👥", label: "Cursos regulares de música, danza, teatro y artes visuales", pct: 20 },
  { icon: "👨‍👩‍👧", label: "Planes familiares (2 o más integrantes)", pct: 20 },
  { icon: "☀️", label: "Vacaciones artísticas", pct: 20 },
  { icon: "🎭", label: "Grupos representativos de asociados", pct: 20 }
];

const DECKS = {

  /* ====================== VERSIÓN GENERAL ====================== */
  general: {
    label: "Fondos de Empleados",
    whatsapp: "general",
    slides: [
      {
        type: "empresa-home",
        navLabel: "Inicio",
        eyebrow: "Propuesta para {{fondo}}",
        title: "Talleres empresariales",
        titleAlt: "a la medida de tu organización",
        description: "Diseñamos experiencias artísticas y de bienestar que fortalecen la creatividad, la integración y el sentido de pertenencia en tu equipo.",
        customTitle: "¡Podemos personalizar tus talleres!",
        customText: "Adaptamos cada taller a los objetivos de tu empresa, al perfil de los participantes y al tiempo disponible. Tú nos cuentas lo que necesitas y lo hacemos realidad.",
        banner: "Bienestar, creatividad e integración para tu equipo",
        photo: "abuelos1.png",
        rows: PRECIOS_TALLER,
        discounts: DESCUENTOS,
        priceNote: "Los valores incluyen: planeación, facilitador profesional, materiales básicos y certificado de participación.",
        discNote: "*Descuentos aplican para asociados del fondo y sus beneficiarios.",
        featureTitle: "Personalizamos cada experiencia",
        featureText: "Diseñamos talleres y programas según tus objetivos, población, tiempo disponible y cultura organizacional.",
        features: ["Duración flexible", "Modalidad presencial o virtual", "Contenidos a la medida", "Experiencias significativas y memorables"]
      },
      {
        type: "cover",
        navLabel: "Nuestra propuesta",
        eyebrow: "Propuesta para {{fondo}}",
        script: "Bienestar que se siente",
        title: "Musicala Aliados",
        subtitle: "Bienestar artístico para asociados y familias",
        text: "Una propuesta para fortalecer bienestar, creatividad, integración y sentido de pertenencia a través del arte."
      },
      {
        type: "list",
        navLabel: "Beneficios",
        icon: "✦",
        eyebrow: "La alianza",
        title: "¿Qué ofrecemos a los Fondos de Empleados?",
        items: [
          "Descuentos exclusivos para asociados.",
          "Programas de música, danza, teatro y artes visuales.",
          "Talleres de bienestar.",
          "Actividades familiares.",
          "Grupos representativos.",
          "Espacios para integración y cultura."
        ]
      },
      {
        type: "list",
        navLabel: "Asociados",
        icon: "♥",
        eyebrow: "Para tu gente",
        title: "Beneficios para asociados y familias",
        items: [
          "Tarifas preferenciales.",
          "Clases de prueba.",
          "Planes familiares.",
          "Vacaciones artísticas.",
          "Procesos para niños, jóvenes, adultos y adultos mayores."
        ]
      },
      {
        type: "list",
        navLabel: "Talleres",
        icon: "✺",
        eyebrow: "Experiencias",
        title: "Talleres de bienestar artístico",
        items: [
          "Pintura y relajación.",
          "Música y conexión grupal.",
          "Danza y movimiento.",
          "Teatro para comunicación.",
          "Arte en familia.",
          "Experiencias para fechas especiales."
        ]
      },
      {
        type: "list",
        navLabel: "Grupos Representativos",
        icon: "❂",
        eyebrow: "Identidad",
        title: "Grupos representativos del Fondo",
        items: [
          "Coro institucional.",
          "Ensamble musical.",
          "Grupo de danza.",
          "Grupo de teatro.",
          "Colectivo de artes visuales."
        ],
        note: "Estos grupos pueden representar al Fondo en eventos internos, celebraciones e integraciones."
      },
      {
        type: "list",
        navLabel: "Espacios",
        icon: "◈",
        eyebrow: "Lugares",
        title: "Espacios Musicala",
        items: [
          "Talleres.",
          "Capacitaciones.",
          "Reuniones.",
          "Integraciones.",
          "Ensayos.",
          "Actividades culturales."
        ]
      },
      {
        type: "plans",
        navLabel: "Personalización",
        eyebrow: "Cómo trabajamos",
        title: "Modalidades de alianza",
        cards: [
          { name: "Plan Beneficios", desc: "Descuentos para asociados y familias." },
          { name: "Plan Bienestar", desc: "Talleres y experiencias artísticas." },
          { name: "Plan Representativo", desc: "Creación de grupos artísticos del Fondo." },
          { name: "Plan Integral", desc: "Beneficios, bienestar, espacios, eventos y grupos representativos.", featured: true }
        ]
      },
      {
        type: "pricing",
        navLabel: "Precios",
        eyebrow: "Inversión",
        title: "Talleres empresariales",
        subtitle: "Precio para estudiantes nuevos · diseñado a la medida de tu Fondo",
        rows: PRECIOS_TALLER,
        note: "Valores de referencia. A mayor número de horas, mejor valor por sesión. Podemos combinar áreas y armar un plan exclusivo para tu población."
      },
      {
        type: "cta",
        navLabel: "Contacto",
        eyebrow: "Siguiente paso",
        title: "Construyamos una propuesta a la medida",
        text: "Agendemos una reunión y diseñemos el programa según la población, el presupuesto, la modalidad y los objetivos de tu Fondo.",
        buttons: [
          { label: "Escribir por WhatsApp", action: "whatsapp", primary: true },
          { label: "Agendar reunión", action: "schedule" },
          { label: "Enviar correo", action: "email" },
          { label: "Imprimir propuesta", action: "print" }
        ]
      }
    ]
  },

  /* ====================== VERSIÓN SENIOR / FONBIENESTAR ====================== */
  senior: {
    label: "Bienestar Senior",
    whatsapp: "senior",
    emailTo: "gestionsocial@fonbienestar.com.co",
    slides: [
      {
        type: "cover",
        eyebrow: "Para {{fondo}} · {{contacto}}",
        script: "El arte no tiene edad",
        title: "Musicala Bienestar Senior",
        subtitle: "Arte, bienestar y envejecimiento activo para pensionados Fonbienestar",
        text: "Porque nunca es tarde para aprender, crear y compartir."
      },
      {
        type: "list",
        icon: "✦",
        eyebrow: "Por qué el arte",
        title: "El arte como herramienta de bienestar",
        lead: "Las actividades artísticas contribuyen a:",
        items: [
          "Mantener la mente activa.",
          "Fortalecer memoria y atención.",
          "Promover socialización.",
          "Favorecer bienestar emocional.",
          "Estimular creatividad.",
          "Generar propósito.",
          "Fortalecer vínculos familiares."
        ]
      },
      {
        type: "list",
        icon: "✿",
        eyebrow: "Pensado para ellos",
        title: "Experiencias diseñadas para pensionados",
        items: [
          "Actividades adaptadas.",
          "Sin necesidad de experiencia previa.",
          "Procesos seguros y acompañados.",
          "Modalidades recreativas, formativas o representativas.",
          "Participación familiar cuando se desee."
        ]
      },
      {
        type: "area",
        icon: "♪",
        eyebrow: "Música",
        title: "Música para la vida",
        items: [
          "Coro de pensionados.",
          "Canto recreativo.",
          "Música y memoria.",
          "Percusión corporal.",
          "Percusión con instrumentos menores.",
          "Ensamble musical recreativo.",
          "Iniciación instrumental.",
          "Canciones de vida.",
          "Serenatas y muestras."
        ],
        benefits: "Memoria, respiración, coordinación, expresión emocional y comunidad."
      },
      {
        type: "area",
        icon: "❀",
        eyebrow: "Danza",
        title: "Danza, movimiento y bienestar",
        items: [
          "Danza suave.",
          "Ritmos colombianos adaptados.",
          "Ritmos latinos adaptados.",
          "Baile social.",
          "Movimiento consciente.",
          "Danza en silla.",
          "Coordinación rítmica.",
          "Expresión corporal."
        ],
        benefits: "Movilidad, equilibrio, coordinación, ánimo y conexión social."
      },
      {
        type: "area",
        icon: "✧",
        eyebrow: "Teatro",
        title: "Teatro, memoria y expresión",
        items: [
          "Teatro recreativo.",
          "Improvisación.",
          "Narración oral.",
          "Historias de vida.",
          "Lectura dramatizada.",
          "Teatro de la vida cotidiana.",
          "Montaje escénico senior."
        ],
        benefits: "Comunicación, autoestima, creatividad, humor y estimulación cognitiva."
      },
      {
        type: "area",
        icon: "❋",
        eyebrow: "Artes visuales",
        title: "Artes visuales y creatividad",
        items: [
          "Pintura recreativa.",
          "Acuarela.",
          "Dibujo expresivo.",
          "Arte y memoria.",
          "Collage de vida.",
          "Mandalas y patrones.",
          "Manualidades artísticas.",
          "Pintura colectiva.",
          "Mural de historias.",
          "Modelado."
        ],
        benefits: "Motricidad fina, concentración, relajación y expresión personal."
      },
      {
        type: "area",
        icon: "✎",
        eyebrow: "Literatura",
        title: "Literatura, memoria y legado",
        items: [
          "Escritura de memorias.",
          "Cartas para hijos y nietos.",
          "Poesía.",
          "Club de lectura expresiva.",
          "Relatos de vida.",
          "Bitácora creativa."
        ],
        benefits: "Memoria autobiográfica, autoestima, legado familiar y expresión emocional."
      },
      {
        type: "list",
        icon: "∞",
        eyebrow: "En familia",
        title: "Experiencias intergeneracionales",
        items: [
          "Música en familia.",
          "Arte colaborativo.",
          "Talleres con hijos y nietos.",
          "Álbum digital de memorias.",
          "Video de historias de vida.",
          "Encuentros culturales familiares."
        ]
      },
      {
        type: "list",
        icon: "❂",
        eyebrow: "Identidad",
        title: "Grupos representativos Fonbienestar",
        items: [
          "Coro Senior Fonbienestar.",
          "Grupo de Danza Senior.",
          "Ensamble Musical Senior.",
          "Compañía de Teatro Senior.",
          "Colectivo de Artes Visuales Senior.",
          "Club Artístico Intergeneracional."
        ],
        note: "Estos grupos pueden representar a Fonbienestar en eventos institucionales, celebraciones y encuentros especiales."
      },
      {
        type: "plans",
        eyebrow: "Cómo trabajamos",
        title: "Modalidades de trabajo",
        cards: [
          { name: "Talleres puntuales", desc: "Actividades de una sesión." },
          { name: "Ciclos trimestrales", desc: "Procesos con objetivos definidos." },
          { name: "Programa permanente", desc: "Oferta continua durante el año." },
          { name: "Eventos especiales", desc: "Día del Pensionado, Navidad, Semana de Bienestar, Encuentro de Talentos Senior." }
        ],
        note: "Modalidad presencial, virtual o híbrida."
      },
      {
        type: "packages",
        eyebrow: "Inversión",
        title: "Paquetes sugeridos para Fonbienestar",
        cards: [
          { name: "Paquete Conexión", desc: "1 actividad mensual para pensionados." },
          { name: "Paquete Bienestar", desc: "4 actividades mensuales en diferentes artes.", featured: true },
          { name: "Experiencia Senior Integral", desc: "Programación continua, grupo representativo, eventos familiares y muestra final." }
        ]
      },
      {
        type: "cta",
        eyebrow: "Siguiente paso",
        title: "Construyamos juntos experiencias significativas",
        text: "En Musicala creemos que el arte no tiene edad. Cada actividad es una oportunidad para aprender, conectar, recordar, compartir y disfrutar.",
        buttons: [
          { label: "Escribir por WhatsApp", action: "whatsapp", primary: true },
          { label: "Enviar correo a Fonbienestar", action: "email" },
          { label: "Agendar reunión", action: "schedule" },
          { label: "Imprimir propuesta", action: "print" }
        ]
      }
    ]
  }
};

/* =========================================================================
   MOTOR DE PRESENTACIÓN
   ========================================================================= */
const App = (() => {
  let deckKey = "general";
  let deck = DECKS.general;
  let index = 0;
  let params = {};

  /* ---------- utilidades ---------- */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  const formatCOP = (n) => "$ " + n.toLocaleString("es-CO");

  function fill(text) {
    if (text == null) return "";
    return text
      .replace(/\{\{fondo\}\}/g, params.fondo || "tu Fondo de Empleados")
      .replace(/\{\{contacto\}\}/g, params.contacto || "");
  }

  function readParams() {
    const u = new URLSearchParams(window.location.search);
    params = {
      fondo: u.get("fondo") ? decodeURIComponent(u.get("fondo")) : "",
      contacto: u.get("contacto") ? decodeURIComponent(u.get("contacto")) : "",
      tipo: (u.get("tipo") || "general").toLowerCase()
    };
    deckKey = params.tipo === "senior" ? "senior" : "general";
    deck = DECKS[deckKey];
  }

  function buildLink({ fondo, contacto, tipo }) {
    const base = window.location.origin + window.location.pathname;
    const u = new URLSearchParams();
    if (fondo) u.set("fondo", fondo);
    if (contacto) u.set("contacto", contacto);
    if (tipo) u.set("tipo", tipo);
    const q = u.toString();
    return q ? `${base}?${q}` : base;
  }

  /* ---------- acciones de contacto ---------- */
  function whatsappUrl() {
    let msg = WHATSAPP_MSG[deck.whatsapp] || WHATSAPP_MSG.general;
    if (params.fondo) msg += ` (Fondo: ${params.fondo})`;
    return `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(msg)}`;
  }

  function emailUrl() {
    const to = deck.emailTo || BRAND.email;
    const subject = deckKey === "senior"
      ? "Propuesta de Bienestar Artístico y Envejecimiento Activo para Pensionados Fonbienestar"
      : "Propuesta de Bienestar Artístico para Fondos de Empleados";
    const body =
`Hola, equipo${params.contacto ? " " + params.contacto : ""}:

Queremos conocer más sobre la propuesta de Musicala${params.fondo ? " para " + params.fondo : ""}.

Quedamos atentos.`;
    return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  function scheduleUrl() {
    if (BRAND.calendarUrl) return BRAND.calendarUrl;
    return `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(WHATSAPP_MSG.agendar)}`;
  }

  function runAction(action) {
    switch (action) {
      case "whatsapp": window.open(whatsappUrl(), "_blank", "noopener"); break;
      case "email":    window.location.href = emailUrl(); break;
      case "schedule": window.open(scheduleUrl(), "_blank", "noopener"); break;
      case "print":    window.print(); break;
      case "copy":     copyCurrentLink(); break;
    }
  }

  async function copyText(text, okMsg) {
    try {
      await navigator.clipboard.writeText(text);
      toast(okMsg || "Enlace copiado ✓");
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); toast(okMsg || "Enlace copiado ✓"); }
      catch { toast("Copia manual: " + text); }
      document.body.removeChild(ta);
    }
  }
  function copyCurrentLink() { copyText(window.location.href, "Enlace de esta propuesta copiado ✓"); }

  /* ---------- toast ---------- */
  let toastTimer;
  function toast(msg) {
    let el = $("#toast");
    if (!el) { el = document.createElement("div"); el.id = "toast"; document.body.appendChild(el); }
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("show"), 2600);
  }

  /* ---------- render de slides ---------- */
  function renderSlide(slide) {
    const eyebrow = slide.eyebrow ? `<p class="eyebrow">${fill(slide.eyebrow)}</p>` : "";

    if (slide.type === "empresa-home") {
      const icons = AREA_ICONS.map(a => `
        <div class="eh-icon-item">
          <div class="eh-icon-circle">${a.emoji}</div>
          <span>${a.label}</span>
        </div>`).join("");

      const priceRows = slide.rows.map(r => `
        <div class="eh-price-row ${r.destacado ? "eh-price-row--feat" : ""}">
          <div class="eh-price-row__name">Taller empresarial ${r.servicio}</div>
          <div class="eh-price-row__val">${formatCOP(r.valor)}</div>
        </div>`).join("");

      const discItems = slide.discounts.map(d => `
        <div class="eh-disc-item">
          <div class="eh-disc-label">
            <div class="eh-disc-icon">${d.icon}</div>
            <span>${d.label}</span>
          </div>
          <div class="eh-disc-pct">
            <strong>${d.pct}%</strong>
            <span>de descuento</span>
          </div>
        </div>`).join("");

      const featureItems = slide.features.map(f => `<li>${f}</li>`).join("");

      return `
        <section class="slide slide--empresa-home" data-type="empresa-home">
          ${eyebrow}
          <div class="eh-icons">${icons}</div>

          <div class="eh-top">
            <div class="eh-hero-text">
              <h1 class="eh-title">${fill(slide.title)} <em>${fill(slide.titleAlt)}</em> 🎵</h1>
              <p class="eh-desc">${fill(slide.description)}</p>
              <div class="eh-custom-box">
                <div class="eh-custom-icon">✂</div>
                <div>
                  <p class="eh-custom-title">${fill(slide.customTitle)}</p>
                  <p class="eh-custom-text">${fill(slide.customText)}</p>
                </div>
              </div>
            </div>
            <div class="eh-hero-photo">
              <img src="${slide.photo}" alt="Personas disfrutando talleres artísticos" />
            </div>
          </div>

          <div class="eh-banner">♥ ${fill(slide.banner)}</div>

          <div class="eh-mid">
            <div class="eh-pricing-box">
              <p class="eh-box-title">Talleres directos</p>
              <p class="eh-box-sub">Valores para estudiantes nuevos</p>
              <div class="eh-price-head"><span>Categoría / Servicio</span><span>Precio</span></div>
              ${priceRows}
              <p class="eh-price-note">${fill(slide.priceNote)}</p>
            </div>
            <div class="eh-discounts-box">
              <p class="eh-box-title">Descuentos exclusivos</p>
              <p class="eh-box-sub">Para los asociados y sus familias</p>
              ${discItems}
              <p class="eh-disc-note">${fill(slide.discNote)}</p>
            </div>
          </div>

          <div class="eh-features">
            <div class="eh-features-icon">⚙</div>
            <div class="eh-features-text">
              <p class="eh-features-title">${fill(slide.featureTitle)}</p>
              <p class="eh-features-sub">${fill(slide.featureText)}</p>
            </div>
            <ul class="eh-features-list">${featureItems}</ul>
          </div>

          <div class="eh-cta">
            <div class="eh-cta-left">
              <div class="eh-cta-star">★</div>
              <span class="eh-cta-tag">Creamos experiencias únicas que<br>inspiran, conectan y transforman.</span>
            </div>
            <span class="eh-cta-mid">¿Listos para crear juntos?</span>
            <div class="eh-cta-buttons">
              <button class="eh-cta-btn eh-cta-btn--wa" data-action="whatsapp">✆ Escríbenos por WhatsApp</button>
              <button class="eh-cta-btn eh-cta-btn--cal" data-action="schedule">📅 Agendar reunión</button>
              <button class="eh-cta-btn eh-cta-btn--mail" data-action="email">✉ Escribir por correo</button>
            </div>
          </div>
        </section>`;
    }

    if (slide.type === "cover") {
      return `
        <section class="slide slide--cover" data-type="cover">
          <div class="cover-aura" aria-hidden="true"></div>
          <div class="cover-inner">
            ${eyebrow}
            ${slide.script ? `<p class="script-accent">${fill(slide.script)}</p>` : ""}
            <h1 class="cover-title">${fill(slide.title)}</h1>
            <p class="cover-subtitle">${fill(slide.subtitle)}</p>
            <p class="cover-text">${fill(slide.text)}</p>
            <div class="cover-cta">
              <button class="btn btn--primary" data-action="whatsapp">Hablemos por WhatsApp</button>
              <button class="btn btn--ghost" data-action="copy">Copiar enlace</button>
            </div>
          </div>
        </section>`;
    }

    if (slide.type === "list" || slide.type === "area") {
      const lead = slide.lead ? `<p class="lead">${fill(slide.lead)}</p>` : "";
      const items = slide.items.map((it, i) =>
        `<li style="--i:${i}"><span class="tick">✓</span>${fill(it)}</li>`).join("");
      const note = slide.note ? `<p class="note">${fill(slide.note)}</p>` : "";
      const benefits = slide.benefits
        ? `<div class="benefits"><span class="benefits-label">Beneficios</span><p>${fill(slide.benefits)}</p></div>`
        : "";
      return `
        <section class="slide slide--list" data-type="${slide.type}">
          <header class="slide-head">
            ${slide.icon ? `<span class="slide-icon">${slide.icon}</span>` : ""}
            ${eyebrow}
            <h2 class="slide-title">${fill(slide.title)}</h2>
          </header>
          ${lead}
          <ul class="bullets">${items}</ul>
          ${benefits}
          ${note}
        </section>`;
    }

    if (slide.type === "plans" || slide.type === "packages") {
      const cards = slide.cards.map((c, i) => `
        <article class="plan ${c.featured ? "plan--featured" : ""}" style="--i:${i}">
          ${c.featured ? `<span class="plan-badge">Recomendado</span>` : ""}
          <h3 class="plan-name">${fill(c.name)}</h3>
          <p class="plan-desc">${fill(c.desc)}</p>
        </article>`).join("");
      const note = slide.note ? `<p class="note note--center">${fill(slide.note)}</p>` : "";
      return `
        <section class="slide slide--plans" data-type="${slide.type}">
          <header class="slide-head slide-head--center">
            ${eyebrow}
            <h2 class="slide-title">${fill(slide.title)}</h2>
          </header>
          <div class="plans-grid">${cards}</div>
          ${note}
        </section>`;
    }

    if (slide.type === "pricing") {
      const rows = slide.rows.map((r, i) => `
        <div class="price-row ${r.destacado ? "price-row--featured" : ""}" style="--i:${i}">
          <div class="price-row__name">
            ${r.destacado ? `<span class="price-badge">Más elegido</span>` : ""}
            <span class="price-cat">Taller empresarial</span>
            <span class="price-serv">${r.servicio}</span>
          </div>
          <div class="price-row__hour">${formatCOP(Math.round(r.valor / r.horas))}<small>/hora</small></div>
          <div class="price-row__value" data-count="${r.valor}">${formatCOP(r.valor)}</div>
        </div>`).join("");
      const note = slide.note ? `<p class="note note--center">${fill(slide.note)}</p>` : "";
      return `
        <section class="slide slide--pricing" data-type="pricing">
          <header class="slide-head slide-head--center">
            ${eyebrow}
            <h2 class="slide-title">${fill(slide.title)}</h2>
            ${slide.subtitle ? `<p class="slide-sub">${fill(slide.subtitle)}</p>` : ""}
          </header>
          <div class="price-table">
            <div class="price-thead">
              <span>Servicio</span><span>Valor por hora</span><span>Precio</span>
            </div>
            ${rows}
          </div>
          ${note}
        </section>`;
    }

    if (slide.type === "cta") {
      const buttons = slide.buttons.map(b =>
        `<button class="btn ${b.primary ? "btn--primary" : "btn--outline"}" data-action="${b.action}">${b.label}</button>`
      ).join("");
      return `
        <section class="slide slide--cta" data-type="cta">
          <div class="cover-aura cover-aura--soft" aria-hidden="true"></div>
          <div class="cta-inner">
            ${eyebrow}
            <h2 class="cta-title">${fill(slide.title)}</h2>
            <p class="cta-text">${fill(slide.text)}</p>
            <div class="cta-buttons">${buttons}</div>
            <div class="cta-contact">
              <a href="${BRAND.webUrl}" target="_blank" rel="noopener">${BRAND.web}</a>
              <span>·</span>
              <a href="https://wa.me/${BRAND.whatsapp}" target="_blank" rel="noopener">WhatsApp ${BRAND.whatsappDisplay}</a>
              <span>·</span>
              <a href="${BRAND.instagramUrl}" target="_blank" rel="noopener">${BRAND.instagram}</a>
            </div>
          </div>
        </section>`;
    }
    return `<section class="slide"><p>Slide no reconocido.</p></section>`;
  }

  /* ---------- animación de conteo de precios ---------- */
  function animateCounts(root) {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    $$(".price-row__value", root).forEach(el => {
      const end = parseInt(el.dataset.count, 10);
      if (reduce) { el.textContent = formatCOP(end); return; }
      const dur = 900; const start = performance.now();
      const step = (now) => {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = formatCOP(Math.round(end * eased));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  }

  /* ---------- navegación ---------- */
  function go(to) {
    const total = deck.slides.length;
    index = Math.max(0, Math.min(total - 1, to));
    const stage = $("#stage");
    stage.innerHTML = renderSlide(deck.slides[index]);
    const slideEl = $(".slide", stage);
    slideEl.classList.add("enter");
    requestAnimationFrame(() => slideEl.classList.add("enter-active"));
    if (deck.slides[index].type === "pricing") setTimeout(() => animateCounts(stage), 250);

    // bind acciones internas del slide
    $$("[data-action]", stage).forEach(b => b.addEventListener("click", () => runAction(b.dataset.action)));

    updateChrome();
  }
  const next = () => go(index + 1);
  const prev = () => go(index - 1);

  function updateChrome() {
    const total = deck.slides.length;
    $("#btn-prev").disabled = index === 0;
    $("#btn-next").disabled = index === total - 1;
    // sidebar nav
    $$(".snav-item").forEach((el, i) =>
      el.classList.toggle("active", +el.dataset.go === index));
    // drawer index
    $$("#index-list .index-item").forEach((el, i) =>
      el.classList.toggle("active", i === index));
  }

  /* ---------- sidebar nav ---------- */
  function buildSidebarNav() {
    const nav = $("#sidebar-nav");
    nav.innerHTML = deck.slides
      .filter(s => s.navLabel)
      .map((s, _, arr) => {
        const idx = deck.slides.indexOf(s);
        return `<button class="snav-item" data-go="${idx}">
          <span>${s.navLabel}</span>
          <span class="snav-arrow">›</span>
        </button>`;
      }).join("");
    $$(".snav-item").forEach(el =>
      el.addEventListener("click", () => go(+el.dataset.go)));
  }

  /* ---------- drawer (índice + generador de links) ---------- */
  function buildIndex() {
    const list = $("#index-list");
    list.innerHTML = deck.slides.map((s, i) => {
      const t = fill(s.navLabel || s.title || "Sección");
      return `<button class="index-item" data-go="${i}"><span class="index-num">${String(i + 1).padStart(2, "0")}</span>${t}</button>`;
    }).join("");
    $$("#index-list .index-item").forEach(el =>
      el.addEventListener("click", () => { go(+el.dataset.go); closeDrawer(); }));
  }
  function openDrawer() { $("#drawer").classList.add("open"); $("#scrim").classList.add("show"); }
  function closeDrawer() { $("#drawer").classList.remove("open"); $("#scrim").classList.remove("show"); }

  /* ---------- pantalla completa ---------- */
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      (document.documentElement.requestFullscreen || (()=>{})).call(document.documentElement);
    } else {
      (document.exitFullscreen || (()=>{})).call(document);
    }
  }

  /* ---------- generador de enlace personalizado ---------- */
  function bindLinkBuilder() {
    const gen = () => {
      const fondo = $("#lb-fondo").value.trim();
      const contacto = $("#lb-contacto").value.trim();
      const tipo = $("#lb-tipo").value;
      const link = buildLink({ fondo, contacto, tipo });
      $("#lb-output").value = link;
      return link;
    };
    ["#lb-fondo", "#lb-contacto", "#lb-tipo"].forEach(s => $(s).addEventListener("input", gen));
    $("#lb-copy").addEventListener("click", () => copyText(gen(), "Enlace personalizado copiado ✓"));
    $("#lb-open").addEventListener("click", () => window.open(gen(), "_blank", "noopener"));
    // precargar con params actuales
    $("#lb-fondo").value = params.fondo || "";
    $("#lb-contacto").value = params.contacto || "";
    $("#lb-tipo").value = deckKey;
    gen();
  }

  /* ---------- gestos táctiles ---------- */
  function bindSwipe() {
    let x0 = null;
    const stage = $("#stage");
    stage.addEventListener("touchstart", e => x0 = e.touches[0].clientX, { passive: true });
    stage.addEventListener("touchend", e => {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 60) (dx < 0 ? next : prev)();
      x0 = null;
    }, { passive: true });
  }

  /* ---------- teclado ---------- */
  function bindKeys() {
    document.addEventListener("keydown", e => {
      if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") { e.preventDefault(); next(); }
      else if (e.key === "ArrowLeft" || e.key === "PageUp") { e.preventDefault(); prev(); }
      else if (e.key === "Home") { go(0); }
      else if (e.key === "End") { go(deck.slides.length - 1); }
      else if (e.key === "Escape") { closeDrawer(); }
    });
  }

  /* ---------- init ---------- */
  function init() {
    readParams();

    // barra de acciones global
    $("#btn-prev").addEventListener("click", prev);
    $("#btn-next").addEventListener("click", next);
    $("#act-whatsapp").addEventListener("click", () => runAction("whatsapp"));
    $("#act-schedule").addEventListener("click", () => runAction("schedule"));
    $("#act-print").addEventListener("click", () => runAction("print"));
    $("#act-copy").addEventListener("click", () => runAction("copy"));
    $("#act-index").addEventListener("click", openDrawer);
    $("#act-full").addEventListener("click", toggleFullscreen);
    $("#drawer-close").addEventListener("click", closeDrawer);
    $("#scrim").addEventListener("click", closeDrawer);

    buildSidebarNav();
    buildIndex();
    bindLinkBuilder();
    bindSwipe();
    bindKeys();
    go(0);
  }

  return { init };
})();

document.addEventListener("DOMContentLoaded", App.init);
