
(() => {
  const copy = {
    es: {
      "skip":"Saltar al contenido","nav.projects":"Proyectos","nav.experience":"Experiencia","nav.stack":"Stack","nav.about":"Sobre mí",
      "hero.eyebrow":"Software Developer · Uruguay","hero.role":"Desarrollo productos reales, de la idea a producción.",
      "hero.lead":"Trabajo en frontend, backend, bases de datos e infraestructura. Me interesa construir software mantenible que resuelva problemas concretos y llegue a usuarios reales.",
      "hero.ctaProjects":"Ver proyectos","hero.meta1":"Sistemas full-stack","hero.meta2":"Deploys en producción","hero.meta3":"Web · APIs · Infra","hero.profile":"Construyendo desde Uruguay",
      "projects.kicker":"Trabajo seleccionado","projects.title":"Proyectos que llegaron más lejos que el localhost.",
      "projects.intro":"Clientes reales, productos completos y sistemas con decisiones de arquitectura, integraciones, pruebas y despliegue.",
      "type.client":"Cliente · Producción","type.product":"Producto · Full-stack","type.academic":"Equipo · UTEC","type.game":"Proyecto",
      "fabal.previewTitle":"Industria, playa y vida al aire libre.","fabal.previewText":"Rediseño moderno, mobile-first y preparado para producción.",
      "fabal.desc":"Sitio corporativo con Angular, foco mobile-first, SEO, accesibilidad, rendimiento y un despliegue propio con Docker/Nginx.",
      "komorebi.desc":"E-commerce en producción con catálogo, carrito, pagos, pedidos, inventario, administración y notificaciones transaccionales.",
      "camba.desc":"E-commerce para cliente real, con Store, Admin y API separados, SSR, caché, procesamiento asíncrono y foco en SEO y performance.",
      "proconnect.desc":"Marketplace de servicios con disponibilidad, reservas, pagos, actualizaciones en tiempo real y controles transaccionales para evitar dobles reservas.",
      "voltio.desc":"Plataforma de carga para vehículos eléctricos con mapa interactivo, búsqueda geoespacial, reservas, sesiones, vehículos, reseñas y rutas.",
      "volandouy.desc":"Sistema de gestión de aerolínea desarrollado en equipo. Participé como Technical Lead en decisiones de implementación y arquitectura.",
      "pong.desc":"Pong intervenido con dificultad progresiva, dash, efectos visuales, game loop y una versión web ejecutable.",
      "maga.desc":"Juego de supervivencia rítmica con patrones de ataque sincronizados, tutorial y configuración de niveles.",
      "link.live":"Ver sitio","link.app":"Abrir app","link.code":"Código",
      "experience.kicker":"Experiencia","experience.title":"Producto, enterprise y calidad de software.",
      "experience.intro":"La práctica profesional y los proyectos personales se complementan: entender sistemas grandes, probarlos bien y también construirlos de punta a punta.",
      "present":"Actualidad","topaz.role":"Software Developer","topaz.desc":"Desarrollo sobre el ecosistema Topaz y su lenguaje 4GL, trabajando con Git, Linux, Docker, mensajería y componentes Java en entornos empresariales.",
      "ibm.role":"QA Testing Internship","ibm.desc":"Testing y automatización en sistemas enterprise, con BDD, DB2, z/OS y trabajo sobre procesos de calidad de software.",
      "education.title":"Formación","education.utec":"Computer Science · 2023 — 2026","education.utu":"Desarrollo Web · 2020 — 2022 · Mejor proyecto de tesis",
      "stack.kicker":"Stack","stack.title":"Herramientas que uso para entregar software completo.","stack.intro":"No organizado como una nube de logos, sino por las capas donde realmente trabajo.",
      "stack.front":"Interfaces, SSR, estado, formularios, accesibilidad y performance.","stack.back":"APIs, autenticación, reglas de negocio, testing e integraciones.",
      "stack.data":"Modelado, SQL, PostGIS, caché y persistencia orientada al caso de uso.","stack.infra":"Contenedores, reverse proxy, TLS, despliegues y troubleshooting.",
      "about.kicker":"Sobre mí","about.title":"Me gusta que el software termine en manos de alguien.",
      "about.p1":"Soy desarrollador de software en Uruguay. Disfruto trabajar a través de todo el ciclo: entender el problema, diseñar la solución, implementar frontend y backend, integrar servicios, desplegar y resolver lo que aparece en producción.",
      "about.p2":"Mi GitHub tiene ejercicios y proyectos de aprendizaje, pero este portfolio prioriza los trabajos que mejor representan cómo construyo hoy: productos completos, clientes reales y sistemas con decisiones técnicas que importan.",
      "contact.kicker":"Contacto","contact.title":"¿Tenés un producto, proyecto u oportunidad para conversar?","contact.text":"Podés ver el resto de mi trabajo en GitHub o contactarme por LinkedIn.",
      "footer.top":"Volver arriba ↑"
    },
    en: {
      "skip":"Skip to content","nav.projects":"Projects","nav.experience":"Experience","nav.stack":"Stack","nav.about":"About",
      "hero.eyebrow":"Software Developer · Uruguay","hero.role":"I build real products, from idea to production.",
      "hero.lead":"I work across frontend, backend, databases and infrastructure. I care about building maintainable software that solves concrete problems and reaches real users.",
      "hero.ctaProjects":"View projects","hero.meta1":"Full-stack systems","hero.meta2":"Production deployments","hero.meta3":"Web · APIs · Infra","hero.profile":"Building from Uruguay",
      "projects.kicker":"Selected work","projects.title":"Projects that went further than localhost.",
      "projects.intro":"Real clients, complete products and systems involving architecture decisions, integrations, testing and deployment.",
      "type.client":"Client · Production","type.product":"Product · Full-stack","type.academic":"Team · UTEC","type.game":"Project",
      "fabal.previewTitle":"Industry, beach and outdoor living.","fabal.previewText":"Modern, mobile-first redesign built for production.",
      "fabal.desc":"Complete rewrite of the corporate website with Angular, focused on mobile-first UX, SEO, accessibility, performance and a self-hosted Docker/Nginx deployment.",
      "komorebi.desc":"Production e-commerce with catalog, cart, payments, orders, inventory, administration and transactional notifications.",
      "camba.desc":"E-commerce for a real client, with separate Store, Admin and API, SSR, caching, asynchronous processing and a strong SEO/performance focus.",
      "proconnect.desc":"Services marketplace with availability, bookings, payments, real-time updates and transactional controls designed to prevent double bookings.",
      "voltio.desc":"EV charging platform with an interactive map, geospatial search, bookings, charging sessions, vehicles, reviews and route planning.",
      "volandouy.desc":"Airline management system built by a team. I worked as Technical Lead, supporting implementation and architecture decisions.",
      "pong.desc":"Reimagined Pong with progressive difficulty, dash mechanics, visual effects, a game loop and a playable web version.",
      "maga.desc":"Rhythm survival game with synchronized attack patterns, tutorial flow and custom level configuration.",
      "link.live":"Live site","link.app":"Open app","link.code":"Source",
      "experience.kicker":"Experience","experience.title":"Product, enterprise and software quality.",
      "experience.intro":"Professional work and personal projects reinforce each other: understanding large systems, testing them well and also building products end to end.",
      "present":"Present","topaz.role":"Software Developer","topaz.desc":"Development across the Topaz ecosystem and its 4GL language, working with Git, Linux, Docker, messaging and Java components in enterprise environments.",
      "ibm.role":"QA Testing Internship","ibm.desc":"Testing and automation for enterprise systems, using BDD, DB2, z/OS and software quality processes.",
      "education.title":"Education","education.utec":"Computer Science · 2023 — 2026","education.utu":"Web Development · 2020 — 2022 · Best Thesis Project",
      "stack.kicker":"Stack","stack.title":"Tools I use to deliver complete software.","stack.intro":"Organized by the layers I actually work on, not as a wall of logos.",
      "stack.front":"Interfaces, SSR, state, forms, accessibility and performance.","stack.back":"APIs, authentication, business rules, testing and integrations.",
      "stack.data":"Data modeling, SQL, PostGIS, caching and use-case-driven persistence.","stack.infra":"Containers, reverse proxy, TLS, deployments and production troubleshooting.",
      "about.kicker":"About","about.title":"I like software to end up in someone's hands.",
      "about.p1":"I'm a software developer based in Uruguay. I enjoy working across the full lifecycle: understanding the problem, designing the solution, implementing frontend and backend, integrating services, deploying and troubleshooting production issues.",
      "about.p2":"My GitHub includes exercises and learning projects, but this portfolio prioritizes the work that best represents how I build today: complete products, real clients and systems with technical decisions that matter.",
      "contact.kicker":"Contact","contact.title":"Have a product, project or opportunity worth discussing?","contact.text":"You can explore the rest of my work on GitHub or reach me on LinkedIn.",
      "footer.top":"Back to top ↑"
    }
  };

  const descriptions = {
    es: "Portfolio de José Gabriel Hernández, desarrollador de software en Uruguay. Proyectos full-stack, sistemas en producción, Angular, Laravel, Java, PostgreSQL y Docker.",
    en: "Portfolio of José Gabriel Hernández, a software developer based in Uruguay. Full-stack products, production systems, Angular, Laravel, Java, PostgreSQL and Docker."
  };

  function setLanguage(lang) {
    if (!copy[lang]) lang = "es";
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (copy[lang][key]) el.textContent = copy[lang][key];
    });
    document.querySelectorAll(".lang").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
    });
    document.title = lang === "es"
      ? "José Gabriel Hernández — Software Developer"
      : "José Gabriel Hernández — Software Developer";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", descriptions[lang]);
    try { localStorage.setItem("portfolio-language", lang); } catch (_) {}
  }

  const preferred = (() => {
    try {
      const stored = localStorage.getItem("portfolio-language");
      if (stored === "es" || stored === "en") return stored;
    } catch (_) {}
    return navigator.language?.toLowerCase().startsWith("en") ? "en" : "es";
  })();

  document.querySelectorAll(".lang").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });
  setLanguage(preferred);

  const header = document.getElementById("header");
  const updateHeader = () => header?.classList.toggle("scrolled", window.scrollY > 8);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  const menuButton = document.getElementById("menubtn");
  const nav = document.getElementById("navlinks");
  const closeMenu = () => {
    nav?.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  };
  menuButton?.addEventListener("click", () => {
    const open = nav?.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(Boolean(open)));
  });
  nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealItems = document.querySelectorAll(".reveal");
  if (reducedMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((el) => el.classList.add("visible"));
  } else {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -5% 0px" });
    revealItems.forEach((el) => observer.observe(el));
  }

  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
