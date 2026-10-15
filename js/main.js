/* =========================================================================
   luismmusic — main script
   ========================================================================= */
(() => {
  "use strict";

  const SITE = window.SITE;
  const I18N = window.I18N;
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let lang = "es";

  /** Returns the string for the current language (accepts plain strings too). */
  const t = (v) => (v && typeof v === "object" && !Array.isArray(v) ? v[lang] ?? v.es : v);
  const ui = (key) => I18N[lang][key] ?? I18N.es[key] ?? key;

  /* ----------------------------------------------------------- Icons */
  const ICONS = {
    mic: '<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v4M8 22h8"/>',
    sliders: '<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>',
    room: '<path d="M3 21V9l9-6 9 6v12"/><path d="M8 21v-6M12 21v-9M16 21v-6"/>',
    code: '<path d="M16 18l6-6-6-6M8 6l-6 6 6 6M14 4l-4 16"/>',
    remote: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4M7 10l3 3 7-7"/>',
    teach: '<path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/>',
    wave: '<path d="M2 12h2l2-6 3 12 3-9 2 6 2-3h6"/>',
    note: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6l-10 7L2 6"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>',
    whatsapp: '<path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.1-5.4A8.4 8.4 0 1 1 21 11.5z"/><path d="M9 9.5c.5 2 2.5 4 4.5 4.5"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>',
    pin: '<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>'
  };
  const icon = (name) => `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[name] || ""}</svg>`;

  /* ------------------------------------------------------- Renderers */
  function renderSkills() {
    $("#skills-grid").innerHTML = SITE.skills.map((s, i) => `
      <article class="card skill reveal" style="--d:${i * 0.08}s">
        <div class="icon-box">${icon(s.icon)}</div>
        <h4>${t(s.title)}</h4>
        <div class="tags">${t(s.tags).map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
      </article>`).join("");
  }

  function renderServices() {
    $("#services-grid").innerHTML = SITE.services.map((s, i) => `
      <article class="card service reveal" style="--d:${(i % 3) * 0.08}s">
        <div class="icon-box">${icon(s.icon)}</div>
        <h3>${t(s.title)}</h3>
        <p>${t(s.text)}</p>
        <span class="service__line" aria-hidden="true"></span>
      </article>`).join("");
  }

  function renderTimeline() {
    $("#timeline").innerHTML = SITE.experience.map((e) => {
      const points = e.points ? `<ul class="tl-points">${t(e.points).map((p) => `<li>${p}</li>`).join("")}</ul>` : "";
      const credits = e.credits ? `
        <div class="tl-credits">
          <span class="tl-credits__label">${ui("exp.credits")}</span>
          ${e.credits.map((c) => `<span class="tag">${c}</span>`).join("")}
        </div>` : "";
      return `
        <li class="tl-item reveal">
          <article class="card">
            <div class="tl-head">
              <h3 class="tl-role">${t(e.role)}</h3>
              <span class="tl-period">${t(e.period)}</span>
            </div>
            <p class="tl-org">${t(e.org)} <span>· ${t(e.place)}</span></p>
            ${points}
            ${credits}
          </article>
        </li>`;
    }).join("");
  }

  function renderFeatured() {
    $("#featured-grid").innerHTML = SITE.featured.map((f, i) => `
      <article class="card feat reveal" data-accent="${f.accent}" style="--d:${i * 0.08}s">
        <div class="feat__disc" aria-hidden="true"></div>
        <span class="feat__tag">${t(f.tag)}</span>
        <h3>${t(f.title)}</h3>
        <p>${t(f.text)}</p>
      </article>`).join("");
  }

  function renderMarquee() {
    const half = Math.ceil(SITE.artists.length / 2);
    const rows = [SITE.artists.slice(0, half), SITE.artists.slice(half)];
    $("#artists-marquee").innerHTML = rows.map((row) => {
      const items = row.map((a) => `<span class="marquee__item">${a}</span>`).join("");
      // duplicated for a seamless loop
      return `<div class="marquee__track">${items}<span aria-hidden="true" style="display:contents">${items}</span></div>`;
    }).join("");
  }

  /** Converts a normal YouTube / Spotify / SoundCloud link into an embeddable iframe. */
  function toEmbed(url) {
    try {
      const u = new URL(url);
      const host = u.hostname.replace(/^www\./, "");
      if (host === "youtube.com" || host === "m.youtube.com" || host === "youtu.be") {
        const list = u.searchParams.get("list");
        const v = host === "youtu.be" ? u.pathname.slice(1) : u.searchParams.get("v");
        if (list && !v) {
          return { src: `https://www.youtube-nocookie.com/embed/videoseries?list=${encodeURIComponent(list)}`, video: true };
        }
        if (list && v) {
          return { src: `https://www.youtube-nocookie.com/embed/${encodeURIComponent(v)}?list=${encodeURIComponent(list)}`, video: true };
        }
        const id = v || u.pathname.split("/").pop();
        return { src: `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}`, video: true };
      }
      if (host === "open.spotify.com") {
        const parts = u.pathname.split("/").filter((p) => p && !p.startsWith("intl-") && p !== "embed");
        const [type, id] = parts;
        return { src: `https://open.spotify.com/embed/${type}/${id}?theme=0`, height: type === "track" || type === "episode" ? 152 : 352 };
      }
      if (host.endsWith("soundcloud.com")) {
        return { src: `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&color=%239b5cff&visual=true&hide_related=true`, height: 300 };
      }
    } catch (_) { /* fall through */ }
    return { src: url, height: 352 };
  }

  function renderMedia() {
    const grid = $("#media-grid");
    if (!SITE.media || !SITE.media.length) {
      const bars = Array.from({ length: 28 }, (_, i) => `<span style="animation-delay:${(-Math.abs(Math.sin(i * 1.7)) * 1.4).toFixed(2)}s"></span>`).join("");
      grid.innerHTML = `
        <article class="card soon reveal">
          <div class="soon__wave" aria-hidden="true">${bars}</div>
          <div>
            <span class="feat__tag" style="--accent:var(--cyan);margin-top:0">${ui("listen.soon")}</span>
            <h3>${ui("listen.title")}</h3>
            <p>${ui("listen.soonText")}</p>
            <div class="soon__platforms"><span class="tag">YouTube</span><span class="tag">Spotify</span><span class="tag">SoundCloud</span></div>
          </div>
        </article>`;
      return;
    }
    const sorted = [...SITE.media].sort((a, b) => (parseInt(b.year, 10) || 0) - (parseInt(a.year, 10) || 0));
    grid.innerHTML = sorted.map((m, i) => {
      const e = toEmbed(m.url);
      const title = t(m.title) || "";
      const year = m.year ? `<span class="mono" style="color:var(--cyan);font-size:0.82rem;font-weight:600;margin-right:0.4rem">${m.year}</span>` : "";
      const role = m.role ? `<span class="tag" style="font-size:0.75rem;padding:0.18rem 0.6rem;margin-left:auto">${t(m.role)}</span>` : "";
      return `
        <article class="card media-card reveal" style="--d:${(i % 3) * 0.08}s">
          <iframe src="${e.src}" ${e.video ? 'class="is-video"' : `height="${e.height}" style="height:${e.height}px"`} title="${title}" loading="lazy"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" allowfullscreen></iframe>
          ${(title || m.year || m.role) ? `
            <div class="media-card__title" style="display:flex;align-items:center;flex-wrap:wrap;gap:0.4rem">
              ${year}
              <span>${title}</span>
              ${role}
            </div>` : ""}
        </article>`;
    }).join("");
  }

  function renderEducation() {
    $("#degrees-list").innerHTML = SITE.education.map((d, i) => `
      <article class="card degree reveal" style="--d:${i * 0.08}s">
        <div class="degree__year gradient-text">${d.year}</div>
        <h4>${t(d.title)}</h4>
        <p>${t(d.org)}</p>
      </article>`).join("");

    $("#certs-list").innerHTML = SITE.certifications.map((c, i) => `
      <li class="cert reveal" style="--d:${i * 0.04}s">
        <span class="cert__year">${c.year}</span>
        <span><span class="cert__title">${t(c.title)}</span><span class="cert__org">${t(c.org)}</span></span>
      </li>`).join("");
  }

  function renderContact() {
    const c = SITE.contact;
    const items = [
      { icon: "mail", label: ui("contact.email"), value: c.email, href: `mailto:${c.email}` },
      { icon: "whatsapp", label: ui("contact.whatsapp"), value: c.phone, href: `https://wa.me/${c.whatsapp}`, ext: true },
      { icon: "phone", label: ui("contact.phone"), value: c.phone, href: `tel:${c.phone.replace(/\s/g, "")}` },
      { icon: "linkedin", label: ui("contact.linkedin"), value: c.linkedin.replace(/^https?:\/\/(www\.)?/, ""), href: c.linkedin, ext: true },
      { icon: "pin", label: ui("contact.location"), value: t(c.location) }
    ];
    $("#contact-list").innerHTML = items.map((it) => {
      const inner = `<span class="contact__icon">${icon(it.icon)}</span><span><span class="contact__label">${it.label}</span><span class="contact__value">${it.value}</span></span>`;
      return `<li>${it.href ? `<a href="${it.href}"${it.ext ? ' target="_blank" rel="noopener"' : ""}>${inner}</a>` : `<div>${inner}</div>`}</li>`;
    }).join("");

    const select = $("#form-service");
    const current = select.selectedIndex;
    select.innerHTML = [`<option value="general">${ui("form.serviceGeneral")}</option>`]
      .concat(SITE.services.map((s, i) => `<option value="s${i}">${t(s.title)}</option>`)).join("");
    if (current > 0) select.selectedIndex = current;
  }

  function renderAll() {
    renderSkills();
    renderServices();
    renderTimeline();
    renderFeatured();
    renderMarquee();
    renderMedia();
    renderEducation();
    renderContact();
    observeReveals();
  }

  /* --------------------------------------------------------- Language */
  function applyStaticStrings() {
    document.documentElement.lang = lang;
    document.title = ui("meta.title");
    $('meta[name="description"]').setAttribute("content", ui("meta.description"));
    $$("[data-i18n]").forEach((el) => { el.textContent = ui(el.dataset.i18n); });
    $$("[data-i18n-html]").forEach((el) => { el.innerHTML = ui(el.dataset.i18nHtml); });
    $$("[data-i18n-ph]").forEach((el) => { el.placeholder = ui(el.dataset.i18nPh); });
    $$("[data-i18n-aria]").forEach((el) => { el.setAttribute("aria-label", ui(el.dataset.i18nAria)); });
  }

  function setLang(next, animate = true) {
    if (!I18N[next]) next = "es";
    const swap = () => {
      lang = next;
      try { localStorage.setItem("lang", lang); } catch (_) { /* private mode */ }
      $(".lang-switch").dataset.active = lang;
      $$(".lang-switch__btn").forEach((b) => b.classList.toggle("is-active", b.dataset.lang === lang));
      applyStaticStrings();
      renderAll();
      // already-visible content should not re-animate after a language swap
      if (animate) $$(".reveal").forEach((el) => isInView(el) && el.classList.add("is-visible"));
      rotator.restart();
    };
    if (!animate || reduceMotion) return swap();
    document.body.classList.add("is-switching");
    setTimeout(() => { swap(); document.body.classList.remove("is-switching"); }, 220);
  }

  function initialLang() {
    let saved = null;
    try { saved = localStorage.getItem("lang"); } catch (_) { /* ignore */ }
    if (saved) return saved;
    return (navigator.language || "es").toLowerCase().startsWith("es") ? "es" : "en";
  }

  /* ----------------------------------------------------- Role rotator */
  const rotator = (() => {
    const el = $("#role-rotator");
    let timer = null, idx = 0, char = 0, deleting = false;

    function tick() {
      const roles = SITE.roles[lang];
      const word = roles[idx % roles.length];
      if (reduceMotion) { el.textContent = roles.join(" · "); return; }

      char += deleting ? -1 : 1;
      el.textContent = word.slice(0, char);

      let delay = deleting ? 38 : 75;
      if (!deleting && char === word.length) { delay = 1800; deleting = true; }
      else if (deleting && char === 0) { deleting = false; idx++; delay = 350; }
      timer = setTimeout(tick, delay);
    }
    return {
      restart() { clearTimeout(timer); idx = 0; char = 0; deleting = false; tick(); }
    };
  })();

  /* ---------------------------------------------------------- Reveal */
  const isInView = (el) => { const r = el.getBoundingClientRect(); return r.top < innerHeight && r.bottom > 0; };

  const revealObserver = "IntersectionObserver" in window
    ? new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("is-visible"); revealObserver.unobserve(e.target); }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" })
    : null;

  function observeReveals() {
    $$(".reveal:not(.is-visible)").forEach((el) => {
      if (revealObserver) revealObserver.observe(el); else el.classList.add("is-visible");
    });
  }

  /* -------------------------------------------------------- Counters */
  function initCounters() {
    const nums = $$("[data-count]");
    $("#artist-count").dataset.count = SITE.artists.length;
    const run = (el) => {
      const target = +el.dataset.count;
      if (reduceMotion) { el.textContent = target; return; }
      const start = performance.now(), dur = 1600;
      const step = (now) => {
        const p = Math.min((now - start) / dur, 1);
        el.textContent = Math.round(target * (1 - Math.pow(1 - p, 4)));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { nums.forEach(run); io.disconnect(); } });
    }, { threshold: 0.4 });
    io.observe($("#stats"));
  }

  /* ------------------------------------------------------------- Nav */
  function initNav() {
    const nav = $("#nav");
    const burger = $("#nav-burger");
    const links = $("#nav-links");
    const progress = $("#scroll-progress");

    const onScroll = () => {
      nav.classList.toggle("is-scrolled", scrollY > 20);
      const max = document.documentElement.scrollHeight - innerHeight;
      progress.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
    };
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const toggleMenu = (open) => {
      burger.setAttribute("aria-expanded", String(open));
      links.classList.toggle("is-open", open);
      nav.classList.toggle("menu-open", open);
    };
    burger.addEventListener("click", () => toggleMenu(burger.getAttribute("aria-expanded") !== "true"));
    links.addEventListener("click", (e) => { if (e.target.closest("a")) toggleMenu(false); });
    addEventListener("keydown", (e) => { if (e.key === "Escape") toggleMenu(false); });

    // Active section highlighting
    const map = new Map($$(".nav__links a").map((a) => [a.getAttribute("href").slice(1), a]));
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        map.forEach((a) => a.classList.remove("is-active"));
        map.get(e.target.id)?.classList.add("is-active");
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    map.forEach((_, id) => { const s = document.getElementById(id); if (s) spy.observe(s); });

    $$(".lang-switch__btn").forEach((b) => b.addEventListener("click", () => b.dataset.lang !== lang && setLang(b.dataset.lang)));
  }

  /* ------------------------------------------------- Card glow follow */
  function initCardGlow() {
    document.addEventListener("pointermove", (e) => {
      const card = e.target.closest?.(".card");
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    }, { passive: true });
  }

  /* --------------------------------------------- Hero audio visualizer */
  function initVisualizer() {
    const canvas = $("#hero-visualizer");
    const hero = $("#hero");
    const ctx = canvas.getContext("2d");
    let w = 0, h = 0, dpr = 1, running = true, raf = 0;
    const mouse = { x: -9999, y: -9999, tx: -9999 };

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function draw(time) {
      const tt = time * 0.001;
      ctx.clearRect(0, 0, w, h);
      mouse.x += (mouse.tx - mouse.x) * 0.08;

      /* Spectrum bars along the bottom */
      const barW = w < 640 ? 6 : 8, gap = w < 640 ? 4 : 6;
      const count = Math.ceil(w / (barW + gap));
      const baseY = h * 0.94;
      const maxH = h * 0.32;
      const grad = ctx.createLinearGradient(0, baseY - maxH, 0, baseY);
      grad.addColorStop(0, "rgba(255, 62, 165, 0.85)");
      grad.addColorStop(0.35, "rgba(155, 92, 255, 0.75)");
      grad.addColorStop(1, "rgba(34, 211, 238, 0.12)");
      ctx.fillStyle = grad;

      for (let i = 0; i < count; i++) {
        const x = i * (barW + gap);
        const n = i / count;
        // pseudo-spectrum: low end louder, several moving partials
        let v =
          0.55 * Math.pow(1 - n, 1.6) +
          0.22 * Math.sin(i * 0.33 + tt * 2.1) +
          0.16 * Math.sin(i * 0.11 - tt * 3.3) +
          0.10 * Math.sin(i * 0.9 + tt * 5.7);
        v = Math.max(0.04, Math.min(1, (v + 0.35) * 0.75));
        const d = Math.abs(x - mouse.x);
        if (d < 220) v = Math.min(1, v + (1 - d / 220) * 0.45);
        const bh = v * maxH;
        ctx.globalAlpha = 0.25 + n * 0.55; // fade on the left where the text sits
        roundRect(x, baseY - bh, barW, bh, barW / 2);
      }
      ctx.globalAlpha = 1;

      /* Flowing waveforms */
      const waves = [
        { color: "rgba(34, 211, 238, 0.75)", amp: 0.07, freq: 0.012, speed: 1.2, y: 0.5, lw: 1.6 },
        { color: "rgba(155, 92, 255, 0.7)", amp: 0.1, freq: 0.008, speed: -0.8, y: 0.52, lw: 1.4 },
        { color: "rgba(255, 62, 165, 0.45)", amp: 0.05, freq: 0.02, speed: 2, y: 0.48, lw: 1 }
      ];
      ctx.globalCompositeOperation = "lighter";
      waves.forEach((wv) => {
        ctx.beginPath();
        for (let x = 0; x <= w; x += 4) {
          const env = Math.pow(Math.sin((x / w) * Math.PI), 1.5) * (0.35 + 0.65 * (x / w));
          const y = h * wv.y +
            Math.sin(x * wv.freq + tt * wv.speed) * h * wv.amp * env +
            Math.sin(x * wv.freq * 2.7 - tt * wv.speed * 1.6) * h * wv.amp * 0.35 * env;
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.strokeStyle = wv.color;
        ctx.lineWidth = wv.lw;
        ctx.shadowColor = wv.color;
        ctx.shadowBlur = 14;
        ctx.stroke();
      });
      ctx.shadowBlur = 0;
      ctx.globalCompositeOperation = "source-over";

      if (running && !reduceMotion) raf = requestAnimationFrame(draw);
    }

    function roundRect(x, y, bw, bh, r) {
      ctx.beginPath();
      if (ctx.roundRect) ctx.roundRect(x, y, bw, bh, [r, r, 0, 0]);
      else ctx.rect(x, y, bw, bh);
      ctx.fill();
    }

    hero.addEventListener("pointermove", (e) => { mouse.tx = e.clientX; }, { passive: true });
    hero.addEventListener("pointerleave", () => { mouse.tx = -9999; });
    addEventListener("resize", () => { resize(); if (reduceMotion) draw(0); });

    // pause when the hero is off-screen
    new IntersectionObserver(([e]) => {
      const vis = e.isIntersecting;
      if (vis && !running) { running = true; raf = requestAnimationFrame(draw); }
      else if (!vis) { running = false; cancelAnimationFrame(raf); }
    }).observe(hero);

    resize();
    raf = requestAnimationFrame(draw);
  }

  /* ------------------------------------------------------ Contact form */
  function initForm() {
    const form = $("#contact-form");
    const status = $("#form-status");
    const btnLabel = $("#form-submit [data-i18n]");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      status.className = "form__status";
      status.textContent = "";

      const fields = ["name", "email", "message"].map((n) => form.elements[n]);
      let valid = true;
      fields.forEach((f) => {
        const ok = f.value.trim() && (f.type !== "email" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.value.trim()));
        f.closest(".field").classList.toggle("is-invalid", !ok);
        if (!ok) valid = false;
      });
      if (!valid) { fields.find((f) => f.closest(".field").classList.contains("is-invalid"))?.focus(); return; }

      const data = {
        name: form.elements.name.value.trim(),
        email: form.elements.email.value.trim(),
        service: form.elements.service.selectedOptions[0]?.textContent || "",
        message: form.elements.message.value.trim()
      };
      const email = SITE.contact.email;

      if (SITE.contact.formspreeId) {
        btnLabel.textContent = ui("form.sending");
        try {
          const res = await fetch(`https://formspree.io/f/${SITE.contact.formspreeId}`, {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify({ ...data, _subject: `[Web] ${data.service} — ${data.name}` })
          });
          if (!res.ok) throw new Error(res.statusText);
          form.reset();
          status.classList.add("is-ok");
          status.textContent = ui("form.success");
        } catch (_) {
          status.classList.add("is-err");
          status.innerHTML = `${ui("form.error")} <a href="mailto:${email}">${email}</a>`;
        } finally {
          btnLabel.textContent = ui("form.send");
        }
        return;
      }

      // Fallback without backend: open the visitor's email client pre-filled
      const subject = `[Web] ${data.service} — ${data.name}`;
      const body = `${data.message}\n\n—\n${data.name}\n${data.email}`;
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      status.classList.add("is-ok");
      status.textContent = ui("form.success");
    });

    form.addEventListener("input", (e) => e.target.closest(".field")?.classList.remove("is-invalid"));
  }

  /* ------------------------------------------------------------ Boot */
  function init() {
    $("#year").textContent = new Date().getFullYear();
    initNav();
    setLang(initialLang(), false);
    initCounters();
    initCardGlow();
    initForm();
    initVisualizer();
    // hero items reveal immediately with a stagger
    $$(".hero .reveal").forEach((el, i) => { el.style.setProperty("--d", `${0.1 + i * 0.1}s`); });
    requestAnimationFrame(() => $$(".hero .reveal").forEach((el) => el.classList.add("is-visible")));
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
