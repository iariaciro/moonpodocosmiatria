/* ==========================================================================
   Moon Centro de Podocosmiatría y Estética del Pie
   Lógica de la página. Los textos y listados se editan en datos.js
   ========================================================================== */
(function () {
  "use strict";

  var menuAbierto = false;   /* con el menú abierto, la cabecera siempre es blanca */

  /* ---------- Utilidades ---------- */
  function linkWhatsApp(mensaje) {
    return "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(mensaje);
  }

  function el(tag, props, children) {
    var nodo = document.createElement(tag);
    Object.keys(props || {}).forEach(function (k) {
      if (k === "texto") nodo.textContent = props[k];
      else if (k === "clase") nodo.className = props[k];
      else nodo.setAttribute(k, props[k]);
    });
    (children || []).forEach(function (h) { nodo.appendChild(h); });
    return nodo;
  }

  function enlaceWhatsApp(texto, mensaje) {
    return el("a", {
      texto: texto,
      href: linkWhatsApp(mensaje),
      target: "_blank",
      rel: "noopener"
    });
  }

  /* ---------- Enlaces de WhatsApp con mensaje armado ---------- */
  document.querySelectorAll("[data-wa]").forEach(function (a) {
    var msg = a.getAttribute("data-wa-msg") || "Hola, quería hacer una consulta.";
    a.href = linkWhatsApp(msg);
  });

  /* ---------- Servicios ---------- */
  var listaServicios = document.getElementById("lista-servicios");
  if (listaServicios) {
    SERVICIOS.forEach(function (s) {
      var detalle = el("details", { clase: "servicio__desplegable" });
      var resumen = el("summary", { clase: "servicio__titulo" }, [
        el("span", { texto: s.nombre }),
        el("span", { clase: "servicio__icono", "aria-hidden": "true", texto: "+" })
      ]);
      detalle.appendChild(resumen);
      detalle.appendChild(el("div", { clase: "servicio__contenido" }, [
        el("p", { texto: s.descripcion }),
        enlaceWhatsApp(
          "Consultar este servicio",
          "Hola, quiero consultar por el servicio de " + s.nombre + "."
        )
      ]));
      var item = el("li", { clase: "servicio" }, [
        detalle
      ]);
      listaServicios.appendChild(item);
    });

    listaServicios.addEventListener("toggle", function (event) {
      if (!event.target.open) return;
      listaServicios.querySelectorAll("details[open]").forEach(function (detalle) {
        if (detalle !== event.target) detalle.open = false;
      });
    }, true);
  }

  /* ---------- Productos ---------- */
  var listaProductos = document.getElementById("lista-productos");
  if (listaProductos) {
    if (!PRODUCTOS.length) {
      listaProductos.hidden = true;
    } else {
      PRODUCTOS.forEach(function (p) {
        var img = el("img", {
          src: "media/productos/" + p.imagen,
          alt: p.nombre,
          loading: "lazy"
        });
        img.addEventListener("error", function () { img.hidden = true; });

        var cuerpo = el("div", { clase: "producto__cuerpo" }, [
          el("h3", { texto: p.nombre })
        ]);
        if (p.descripcion) cuerpo.appendChild(el("p", { texto: p.descripcion }));
        if (p.precio) cuerpo.appendChild(el("p", { clase: "producto__precio", texto: p.precio }));
        cuerpo.appendChild(
          enlaceWhatsApp("Comprar por WhatsApp", "Hola, quiero comprar el producto: " + p.nombre + ".")
        );

        listaProductos.appendChild(
          el("article", { clase: "producto" }, [
            el("div", { clase: "producto__img" }, [img]),
            cuerpo
          ])
        );
      });
    }
  }

  /* ---------- Capacitaciones ---------- */
  var listaCap = document.getElementById("lista-capacitaciones");
  if (listaCap && CAPACITACIONES.length) {
    CAPACITACIONES.forEach(function (c) {
      listaCap.appendChild(el("li", { texto: c }));
    });
    listaCap.hidden = false;
  }

  /* ---------- Galería: se omiten las fotos que no existan ---------- */
  var galeria = document.getElementById("galeria");
  var seccionTrabajos = document.getElementById("trabajos");
  if (galeria && seccionTrabajos) {
    var pendientes = TRABAJOS.length;

    /* Evita huecos en la grilla según cuántas fotos haya:
       celular = 2 columnas (la primera ocupa 2); escritorio = 3 columnas (la primera ocupa 2x2) */
    function revisarGaleria() {
      var n = galeria.children.length;
      if (!n) { seccionTrabajos.hidden = true; return; }
      galeria.dataset.restoM = String(n % 2 === 0 ? 1 : 0);
      galeria.dataset.restoD = String(n % 3);
    }

    if (!pendientes) {
      revisarGaleria();
    }

    TRABAJOS.forEach(function (t) {
      var img = el("img", {
        src: "media/" + t.archivo,
        alt: t.texto
      });
      var fig = el("figure", {}, [img]);
      galeria.appendChild(fig);
      revisarGaleria();

      img.addEventListener("error", function () {
        fig.remove();
        revisarGaleria();
      });
    });
  }

  /* ---------- Horarios (solo si se completaron) ---------- */
  if (CONFIG.horarios) {
    var h = document.getElementById("horarios");
    var ht = document.getElementById("horarios-titulo");
    if (h && ht) {
      h.textContent = CONFIG.horarios;
      h.hidden = false;
      ht.hidden = false;
    }
  }

  /* ---------- Menú en celular (pantalla completa) ---------- */
  var boton = document.querySelector(".menu-boton");
  var menu = document.getElementById("menu");
  if (boton && menu) {
    function abrirCerrar(abrir) {
      menu.classList.toggle("abierto", abrir);
      boton.setAttribute("aria-expanded", String(abrir));
      boton.setAttribute("aria-label", abrir ? "Cerrar menú" : "Abrir menú");
      document.body.classList.toggle("sin-scroll", abrir);
      menuAbierto = abrir;
      alScroll();
    }
    boton.addEventListener("click", function () {
      abrirCerrar(!menu.classList.contains("abierto"));
    });
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { abrirCerrar(false); });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") abrirCerrar(false);
    });
    window.matchMedia("(min-width: 900px)").addEventListener("change", function (e) {
      if (e.matches) abrirCerrar(false);
    });
  }

  /* ---------- Año del pie ---------- */
  var anio = document.getElementById("anio");
  if (anio) anio.textContent = new Date().getFullYear();

  /* ==========================================================================
     Animaciones y movimiento
     ========================================================================== */
  var reducido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var hayObserver = "IntersectionObserver" in window;

  /* ---------- Titular de la portada: entra palabra por palabra ---------- */
  var h1 = document.querySelector(".hero h1");
  if (h1 && !reducido) {
    var palabras = h1.textContent.trim().split(/\s+/);
    h1.textContent = "";
    palabras.forEach(function (palabra, i) {
      var interior = el("span", { texto: palabra });
      interior.style.animationDelay = (0.1 + i * 0.075) + "s";
      h1.appendChild(el("span", { clase: "pal" }, [interior]));
      if (i < palabras.length - 1) h1.appendChild(document.createTextNode(" "));
    });
  }

  /* ---------- Aparición al hacer scroll ---------- */
  var VARIANTES = ["rev", "rev--izq", "rev--der", "rev--zoom", "visto"];

  function marcar(selector, variante, escalonado) {
    document.querySelectorAll(selector).forEach(function (n, i) {
      n.classList.add("rev");
      if (variante) n.classList.add(variante);
      if (escalonado) n.style.setProperty("--rd", Math.min(i, 8) * 0.09 + "s");
    });
  }

  if (hayObserver && !reducido) {
    marcar(".titulo-bloque");
    marcar(".servicios__cabecera", "rev--izq");
    marcar(".servicio", null, true);
    marcar(".producto", null, true);
    marcar(".productos__vacio");
    marcar("#nosotros .arco", "rev--zoom");
    marcar("#nosotros .texto-largo", "rev--der");
    marcar("#a-cargo .texto-largo", "rev--izq");
    marcar("#a-cargo .arco", "rev--zoom");
    marcar(".galeria figure", "rev--zoom", true);
    marcar(".pasos li", null, true);
    marcar(".contacto__datos", "rev--izq");
    marcar(".mapa", "rev--der");

    var aparecer = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) {
        if (!en.isIntersecting) return;
        var n = en.target;
        aparecer.unobserve(n);
        n.classList.add("visto");
        if (n.matches(".pasos li")) n.classList.add("linea");
        /* Al terminar se quitan las clases, así no interfieren con los efectos al pasar el mouse */
        setTimeout(function () {
          VARIANTES.forEach(function (v) { n.classList.remove(v); });
          n.style.removeProperty("--rd");
        }, 2600);
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -6% 0px" });

    document.querySelectorAll(".rev").forEach(function (n) { aparecer.observe(n); });
  } else {
    document.querySelectorAll(".pasos li").forEach(function (n) { n.classList.add("linea"); });
  }

  /* ---------- Scroll: sombra del menú, barra de progreso y parallax de la portada ---------- */
  var cabecera = document.querySelector(".cabecera");
  var progreso = document.querySelector(".progreso");
  var hero = document.querySelector(".hero");
  var fondo = document.querySelector(".hero__fondo");
  var esperando = false;
  var conMouse = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  function alScroll() {
    var y = window.pageYOffset;
    if (cabecera) cabecera.classList.toggle("cabecera--solida", y > 40 || menuAbierto);

    var max = document.documentElement.scrollHeight - window.innerHeight;
    if (progreso && max > 0) progreso.style.transform = "scaleX(" + Math.min(y / max, 1) + ")";

    if (fondo && hero && !reducido && conMouse && y < hero.offsetHeight) {
      fondo.style.setProperty("--py", Math.min(y * 0.2, hero.offsetHeight * 0.1) + "px");
    }
    esperando = false;
  }
  window.addEventListener("scroll", function () {
    if (!esperando) {
      esperando = true;
      window.requestAnimationFrame(alScroll);
    }
  }, { passive: true });
  alScroll();

  /* ---------- Menú: resalta la sección donde estás ---------- */
  var enlaces = {};
  document.querySelectorAll(".menu ul a").forEach(function (a) {
    enlaces[a.getAttribute("href").slice(1)] = a;
  });
  if (hayObserver) {
    var observaSecciones = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) {
        if (!en.isIntersecting) return;
        Object.keys(enlaces).forEach(function (id) {
          enlaces[id].classList.toggle("activo", id === en.target.id);
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    Object.keys(enlaces).forEach(function (id) {
      var seccion = document.getElementById(id);
      if (seccion) observaSecciones.observe(seccion);
    });
  }
})();
