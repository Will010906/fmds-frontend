<template>
  <div class="page">

    <!-- NAV -->
    <nav class="nav">
      <span class="nav-logo">FMDS</span>
      <div class="nav-m">
        <router-link to="/eventos" class="nbn">Congresos</router-link>
        <router-link to="/articulos" class="nbn">Conocimiento</router-link>
        <span class="nbn">Comunidad</span>
        <span class="nbn">Nosotros</span>
      </div>
      <div class="nav-e">
        <router-link to="/login" class="ng">Iniciar sesión</router-link>
        <router-link to="/eventos" class="nf">Registrarse →</router-link>
      </div>
    </nav>

    <!-- HERO -->
<div class="hero">
  <div class="h-l">
    <div class="h-tag">
      <div class="h-tag-d"></div>
      <span class="h-tag-t">Federación Mexicana Desarrolladores de Software</span>
    </div>
    <div class="h-titles">
      <span class="hh1">El ecosistema</span>
      <span class="hh2">científico del software</span>
      <span class="hh3">en México</span>
    </div>
    <p class="h-desc">Divulgación académica <b>neutral y sin conflictos,</b> congresos internacionales y cursos de actualización para la comunidad tecnológica de todo el país.</p>
    <div class="h-ctas">
      <router-link to="/eventos" class="btn-p">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#06090F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
        Ver congresos 2026
      </router-link>
      <button class="btn-s">Explorar artículos</button>
    </div>
    <div class="h-nums">
      <div class="hn"><div class="hn-v">3,200<sup>+</sup></div><div class="hn-l">Miembros</div></div>
      <div class="hn"><div class="hn-v">12</div><div class="hn-l">Estados</div></div>
      <div class="hn"><div class="hn-v">48</div><div class="hn-l">Artículos</div></div>
      <div class="hn"><div class="hn-v">3</div><div class="hn-l">Congresos</div></div>
    </div>
  </div>

  <div class="h-r">
    <div class="tp-h">
      <div class="tp-e">Próximo evento</div>
      <div class="tp-n">Congreso Internacional de Ingeniería de Software 2026</div>
      <div class="tp-w">CDMX · 14-16 Agosto · Presencial + Virtual</div>
    </div>
    <div class="tp-b">
      <div class="t-box">
        <div class="tr"><span class="tr-n">Estudiante</span><span class="tr-p hi">$650 MXN</span></div>
        <div class="tr"><span class="tr-n">General</span><span class="tr-p">$1,200 MXN</span></div>
        <div class="tr"><span class="tr-n">Ponente</span><span class="tr-p gr">Gratuito</span></div>
      </div>
      <div class="tp-al">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
        <span><strong>120 boletos</strong> con precio anticipado</span>
      </div>
      <router-link to="/eventos" class="tp-buy">Comprar boletos →</router-link>
      <button class="tp-gh">Ver programa completo</button>
    </div>
    <div class="tp-f">
      <div class="tfc"><div class="tfc-l">Inicio</div><div class="tfc-v">14 AGO</div></div>
      <div class="tfc"><div class="tfc-l">Sede</div><div class="tfc-v" style="font-size:12px">Centro CDMX</div></div>
    </div>
  </div>
</div>

    <!-- TICKER -->
    <div class="ticker" aria-hidden="true">
      <div class="ti">
        <span>Congreso Internacional 2026</span><span>·</span>
        <span>Hackathon FMDS</span><span>·</span>
        <span>48 Artículos publicados</span><span>·</span>
        <span>12 Estados representados</span><span>·</span>
        <span>3,200 Miembros</span><span>·</span>
        <span>Congreso Internacional 2026</span><span>·</span>
        <span>Hackathon FMDS</span><span>·</span>
        <span>48 Artículos publicados</span><span>·</span>
        <span>12 Estados representados</span><span>·</span>
        <span>3,200 Miembros</span><span>·</span>
      </div>
    </div>

<!-- FEATURE STRIP -->
<div class="fstrip">
  <div class="fsc" @click="$router.push('/eventos')">
    <div class="fsc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></div>
    <div class="fsc-n">Congresos</div><div class="fsc-s">3 eventos · 2026</div>
  </div>
  <div class="fsc">
    <div class="fsc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
    <div class="fsc-n">Speakers</div><div class="fsc-s">6 ponentes top</div>
  </div>
  <div class="fsc">
    <div class="fsc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg></div>
    <div class="fsc-n">Agenda</div><div class="fsc-s">24 sesiones</div>
  </div>
  <div class="fsc">
    <div class="fsc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div>
    <div class="fsc-n">Artículos</div><div class="fsc-s">48 publicaciones</div>
  </div>
  <div class="fsc">
    <div class="fsc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg></div>
    <div class="fsc-n">Cursos</div><div class="fsc-s">12 en línea</div>
  </div>
  <div class="fsc">
    <div class="fsc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg></div>
    <div class="fsc-n">Ediciones</div><div class="fsc-s">Galería 2024</div>
  </div>
  <div class="fsc" @click="$router.push('/eventos')">
    <div class="fsc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg></div>
    <div class="fsc-n">Registros</div><div class="fsc-s">Desde $550 MXN</div>
  </div>
</div>

   <!-- EVENTOS BENTO -->
<div class="sec" style="background:var(--bg);border-top:1px solid var(--line3)">
  <div class="s-hd">
    <div>
      <div class="pill"><div class="pill-d"></div><span class="pill-t">Agenda académica</span></div>
      <div class="s-ttl"><strong>Próximos</strong> <em>eventos</em></div>
    </div>
    <router-link to="/eventos" class="s-all">Ver todos →</router-link>
  </div>
  <div class="bento">

    <!-- Card principal ancha -->
    <div class="bc bc-wide" v-for="evento in eventos.slice(0,1)" :key="evento.idEvento">
      <div class="bc-chip">14-16 AGOSTO · 2026</div>
      <div class="bc-nm">{{ evento.titulo }}</div>
      <div class="bc-loc">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--teal3)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        Ciudad de México
      </div>
      <div class="bc-tags">
        <span class="bt t">Presencial</span>
        <span class="bt t">Virtual</span>
        <span class="bt n">850 cupos</span>
      </div>
      <div class="bc-ft">
        <div class="bc-pr">${{ evento.precio }} <small>MXN</small></div>
        <button class="bc-btn" @click="$router.push({name:'checkout', params:{idEvento: evento.idEvento}})">Inscribirse</button>
      </div>
    </div>

    <!-- Hackathon -->
    <div class="bc bc-hack">
      <div>
        <div class="bc-chip-dot">
          <span class="bc-dot"></span>
          MARZO · 2026
        </div>
        <div class="bc-hack-title">FMDS Hackathon</div>
        <div class="bc-hack-sub">48 hrs · Equipos de 3–5 personas · Mentoría experta</div>
        <div class="bc-prize-lbl">Premio mayor</div>
        <div class="bc-prize">$25K</div>
        <div class="bc-prize-sub">MXN + incubación</div>
      </div>
      <button class="bc-btn" style="margin-top:16px">Inscribir equipo</button>
    </div>

    <!-- Card simposio -->
    <div class="bc">
      <div class="bc-chip">5-7 NOV · 2026</div>
      <div class="bc-nm">Simposio Nacional de Inteligencia Artificial Aplicada</div>
      <div class="bc-loc">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--teal3)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        Guadalajara, Jalisco
      </div>
      <div class="bc-tags"><span class="bt t">Presencial</span><span class="bt n">Labs</span></div>
      <div class="bc-ft">
        <div class="bc-pr">$980 <small>MXN</small></div>
        <button class="bc-btn">Ver más</button>
      </div>
    </div>

    <!-- Card summit -->
    <div class="bc">
      <div class="bc-chip">MARZO · 2026</div>
      <div class="bc-nm">Summit Cloud & Tecnologías Emergentes</div>
      <div class="bc-loc">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--teal3)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        Monterrey, N.L.
      </div>
      <div class="bc-tags"><span class="bt t">Híbrido</span><span class="bt n">Cloud</span></div>
      <div class="bc-ft">
        <div class="bc-pr" style="font-size:14px;color:var(--w3);font-weight:400">Por definir</div>
        <button class="bc-btn" style="background:var(--w5);color:var(--w3);border:1px solid var(--line2)">Notificarme</button>
      </div>
    </div>

  </div>
</div>


    <!-- STATS -->
    <div class="stats-h">
      <div class="sh"><div class="sh-n">3,200+</div><div class="sh-l">Miembros activos</div></div>
      <div class="sh"><div class="sh-n">100%</div><div class="sh-l">Divulgación neutral</div></div>
      <div class="sh"><div class="sh-n">48</div><div class="sh-l">Artículos publicados</div></div>
      <div class="sh"><div class="sh-n">12</div><div class="sh-l">Estados cubiertos</div></div>
      <div class="sh"><div class="sh-n">$50K</div><div class="sh-l">En premios 2025</div></div>
    </div>

    <!-- MISIÓN -->
    <div class="ms-grid">
      <div class="ms-l">
        <div class="ms-over">Nuestra misión</div>
        <div class="ms-q">El software mexicano merece una <span>voz independiente</span> de calidad internacional.</div>
        <p class="ms-body">FMDS nace para llenar el vacío de una comunidad académica neutral: sin patrocinios que comprometan la objetividad, sin barreras de acceso y con estándares de rigor internacional.</p>
      </div>
      <div class="ms-r">
        <div class="ms-rlbl">Lo que nos define</div>
        <div class="val">
          <div class="vn">01</div>
          <div class="vi"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg></div>
          <div><div class="vttl">Neutralidad académica</div><div class="vdesc">Sin afiliaciones comerciales, revisión independiente.</div></div>
        </div>
        <div class="val">
          <div class="vn">02</div>
          <div class="vi"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg></div>
          <div><div class="vttl">Accesibilidad nacional</div><div class="vdesc">Precios justos para estudiantes en cualquier estado.</div></div>
        </div>
        <div class="val">
          <div class="vn">03</div>
          <div class="vi"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10z"/></svg></div>
          <div><div class="vttl">Rigor internacional</div><div class="vdesc">Ponentes globales y revisión por pares de alto nivel.</div></div>
        </div>
        <div class="val">
          <div class="vn">04</div>
          <div class="vi"><svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></div>
          <div><div class="vttl">Tecnología propia</div><div class="vdesc">Plataforma autoadministrable construida en México.</div></div>
        </div>
      </div>
    </div>

<!-- SPEAKERS -->
<div class="sec" style="background:var(--bg);border-top:1px solid var(--line3)">
  <div class="s-hd">
    <div>
      <div class="pill"><div class="pill-d"></div><span class="pill-t">Ponentes 2026</span></div>
      <div class="s-ttl">Speakers <em>magistrales</em></div>
    </div>
    <button class="s-all">Ver todos →</button>
  </div>
  <div class="spk-mag">
    <div class="sm">
      <div class="sm-av a">DR</div>
      <div>
        <div class="sm-tag">Keynote · Arquitectura</div>
        <div class="sm-nm">Dr. Alejandro Ramírez</div>
        <div class="sm-rl">Director de Investigación · UNAM</div>
        <div class="sm-tp">Microservicios y arquitectura cloud-native a escala nacional</div>
      </div>
    </div>
    <div class="sm">
      <div class="sm-av b">SC</div>
      <div>
        <div class="sm-tag">IA Aplicada</div>
        <div class="sm-nm">Sofía Castro</div>
        <div class="sm-rl">Investigadora Senior · UNAM</div>
        <div class="sm-tp">Inteligencia artificial en el desarrollo de software moderno</div>
      </div>
    </div>
    <div class="sm-feat">
      <div class="sm-fav">FM</div>
      <div>
        <div class="sm-ftag">Keynote principal · CIIS 2026</div>
        <div class="sm-fnm">Dr. Fernando Méndez</div>
        <div class="sm-frl">Director de Innovación · IPN · Arquitectura Cloud</div>
        <div class="sm-fq">"El software mexicano está listo para competir a nivel global. Solo necesitamos los espacios correctos para demostrarlo."</div>
      </div>
    </div>
    <div class="sm">
      <div class="sm-av a">MR</div>
      <div>
        <div class="sm-tag">DevOps · CTO</div>
        <div class="sm-nm">Miguel Reyes</div>
        <div class="sm-rl">CTO · FinTech México</div>
        <div class="sm-tp">CI/CD y cultura DevOps en equipos distribuidos</div>
      </div>
    </div>
    <div class="sm">
      <div class="sm-av b">AL</div>
      <div>
        <div class="sm-tag">Security</div>
        <div class="sm-nm">Ana López</div>
        <div class="sm-rl">Security Lead · TEC Monterrey</div>
        <div class="sm-tp">Ciberseguridad en aplicaciones REST modernas</div>
      </div>
    </div>
  </div>
</div>

<!-- ARTÍCULOS -->
<div class="sec" style="background:var(--bg2);border-top:1px solid var(--line3)">
  <div class="s-hd">
    <div>
      <div class="pill"><div class="pill-d"></div><span class="pill-t">Repositorio científico</span></div>
      <div class="s-ttl">Artículos <em>recientes</em></div>
    </div>
    <button class="s-all">Ver todos →</button>
  </div>
  <div class="art-ed">
    <div class="ae" v-for="(art, i) in articulos" :key="art.idArticulo">
      <div class="ae-n">0{{ i+1 }}</div>
      <div>
        <div class="ae-cat">{{ art.categoria }}</div>
        <div class="ae-ttl">{{ art.titulo }}</div>
        <div class="ae-by">{{ art.autor }} · {{ formatFecha(art.fechaPublicacion) }}</div>
      </div>
      <div class="ae-badge">Revisado</div>
    </div>
  </div>
</div>

<!-- EDICIONES / GALERÍA -->
<div class="sec" style="background:var(--bg);border-top:1px solid var(--line3)">
  <div class="s-hd">
    <div>
      <div class="pill"><div class="pill-d"></div><span class="pill-t">Ediciones anteriores</span></div>
      <div class="s-ttl"><strong>Momentos que</strong> <em>inspiran</em></div>
    </div>
    <button class="s-all">Ver galería →</button>
  </div>
  <div class="gal-g">

    <!-- Card principal grande -->
    <div class="gp t">
      <div class="gp-bg" style="background:linear-gradient(135deg,#0C1830,#1B4060,#0E9A80 110%);height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;">
        <div style="width:72px;height:72px;border-radius:50%;background:var(--teal-g);border:2px solid var(--teal-b);display:flex;align-items:center;justify-content:center;">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        </div>
        <div style="font-family:var(--f);font-size:28px;font-weight:800;color:var(--teal);letter-spacing:-.04em;">1,200+</div>
        <div style="font-size:12px;color:var(--w3);letter-spacing:.06em;text-transform:uppercase;">Asistentes 2025</div>
      </div>
      <div class="gp-bd">CIIS 2025</div>
      <div class="gp-ov"><div class="gp-yr">Edición 2025</div><div class="gp-d">Primer Congreso Internacional FMDS</div></div>
    </div>

    <!-- Card 48 ponencias -->
    <div class="gp">
      <div class="gp-bg" style="background:linear-gradient(135deg,#0C1420,#0D1F30);height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;">
        <div style="font-family:var(--f);font-size:36px;font-weight:800;color:var(--w2);letter-spacing:-.04em;">48</div>
        <div style="font-size:10px;color:var(--w4);text-transform:uppercase;letter-spacing:.1em;">Ponencias</div>
      </div>
      <div class="gp-bd">Workshops</div>
      <div class="gp-ov"><div class="gp-yr">Workshops 2025</div><div class="gp-d">Talleres técnicos con expertos</div></div>
    </div>

    <!-- Card $50k premios -->
 <div class="gp" style="background:linear-gradient(135deg,#0C1420,#0D1F30);">
  <div class="gp-bg" style="height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    <div style="font-family:var(--f);font-size:20px;font-weight:800;color:var(--white);letter-spacing:-.04em;">32</div>
    <div style="font-size:10px;color:var(--w4);text-transform:uppercase;letter-spacing:.06em;">Equipos hackathon</div>
  </div>
  <div class="gp-bd">Hackathon</div>
  <div class="gp-ov"><div class="gp-yr">Hackathon 2025</div><div class="gp-d">32 equipos participantes</div></div>
</div>

    <!-- Card mejor ponencia -->
    <div class="gp">
      <div class="gp-bg" style="background:linear-gradient(135deg,#0D1E30,#0C1420);height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        <div style="font-size:10px;color:var(--w3);text-transform:uppercase;letter-spacing:.06em;margin-top:4px;">Mejor ponencia</div>
      </div>
      <div class="gp-bd">Premios</div>
      <div class="gp-ov"><div class="gp-yr">Premios 2025</div><div class="gp-d">Reconocimiento a la investigación</div></div>
    </div>

  </div>
</div>

   <!-- COMUNIDAD -->
<div class="sec" style="background:var(--bg2);border-top:1px solid var(--line3)">
  <div class="s-hd" style="margin-bottom:40px">
    <div>
      <div class="pill"><div class="pill-d"></div><span class="pill-t">Comunidad</span></div>
      <div class="s-ttl"><strong>Lo que dice la</strong> <em>comunidad</em></div>
    </div>
  </div>
  <div class="test-g">
    <div class="tc">
      <div class="tc-stars">★★★★★</div>
      <div class="tc-q">El congreso superó todas mis expectativas. La calidad de los ponentes fue impecable. Regreso el próximo año sin duda.</div>
      <div class="tc-auth">
        <div class="tc-av">MR</div>
        <div><div class="tc-nm">Mtro. Miguel Reyes</div><div class="tc-rl">Docente · UTM, Morelia</div></div>
      </div>
    </div>
    <div class="tc">
      <div class="tc-stars">★★★★★</div>
      <div class="tc-q">Presenté mi primer artículo aquí y el proceso fue serio y formativo. FMDS tiene el nivel que México merecía.</div>
      <div class="tc-auth">
        <div class="tc-av">SC</div>
        <div><div class="tc-nm">Sofía Castro</div><div class="tc-rl">Investigadora · UNAM</div></div>
      </div>
    </div>
    <div class="tc">
      <div class="tc-stars">★★★★★</div>
      <div class="tc-q">El precio para estudiantes es accesible de verdad. Vine desde Monterrey y cada peso valió. Increíble experiencia.</div>
      <div class="tc-auth">
        <div class="tc-av">AL</div>
        <div><div class="tc-nm">Andrés López</div><div class="tc-rl">Estudiante TSU · TEC Monterrey</div></div>
      </div>
    </div>
  </div>
</div>

<!-- INSTITUCIONES ALIADAS -->
<div class="inst-sec">
  <p class="inst-lbl">Instituciones aliadas</p>
  <div class="inst">
    <div class="ic">
      <div class="ic-i"><svg viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></div>
      <div class="ic-n">UTM</div><div class="ic-l">Morelia</div>
    </div>
    <div class="ic">
      <div class="ic-i"><svg viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></div>
      <div class="ic-n">UNAM</div><div class="ic-l">CDMX</div>
    </div>
    <div class="ic">
      <div class="ic-i"><svg viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></div>
      <div class="ic-n">Tec Monterrey</div><div class="ic-l">Nacional</div>
    </div>
    <div class="ic">
      <div class="ic-i"><svg viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></div>
      <div class="ic-n">IPN</div><div class="ic-l">CDMX</div>
    </div>
    <div class="ic">
      <div class="ic-i"><svg viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></div>
      <div class="ic-n">UANL</div><div class="ic-l">Monterrey</div>
    </div>
    <div class="ic">
      <div class="ic-i"><svg viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></div>
      <div class="ic-n">UAG</div><div class="ic-l">Guadalajara</div>
    </div>
  </div>
</div>

<!-- FAQ -->
<div class="sec" style="background:var(--bg);border-top:1px solid var(--line3)">
  <div class="s-hd" style="margin-bottom:40px">
    <div>
      <div class="pill"><div class="pill-d"></div><span class="pill-t">FAQ</span></div>
      <div class="s-ttl"><strong>Todo lo que necesitas</strong> <em>saber</em></div>
    </div>
  </div>
  <div class="faq-g">
    <div class="faq-i">
      <div class="faq-n">01</div>
      <div class="faq-q">¿Cómo compro mi boleto?</div>
      <div class="faq-a">Selecciona el evento, elige tu plan de acceso y completa el pago. Recibirás tu boleto con QR al correo en minutos.</div>
    </div>
    <div class="faq-i">
      <div class="faq-n">02</div>
      <div class="faq-q">¿Puedo publicar un artículo?</div>
      <div class="faq-a">Sí. Docentes, estudiantes y profesionales pueden enviar artículos para revisión por pares antes de publicarse.</div>
    </div>
    <div class="faq-i">
      <div class="faq-n">03</div>
      <div class="faq-q">¿Qué incluye el plan estudiante?</div>
      <div class="faq-a">Todas las sesiones plenarias, talleres y grabaciones por 30 días. Requiere credencial vigente de tu institución.</div>
    </div>
    <div class="faq-i">
      <div class="faq-n">04</div>
      <div class="faq-q">¿Cómo me registro como ponente?</div>
      <div class="faq-a">Envía tu propuesta antes del cierre de convocatoria. El comité evalúa cada propuesta en máximo 15 días hábiles.</div>
    </div>
    <div class="faq-i">
      <div class="faq-n">05</div>
      <div class="faq-q">¿Los cursos tienen certificado?</div>
      <div class="faq-a">Todos emiten certificado digital al completar el 80% del contenido y aprobar la evaluación final del curso.</div>
    </div>
    <div class="faq-i">
      <div class="faq-n">06</div>
      <div class="faq-q">¿Puedo pedir reembolso?</div>
      <div class="faq-a">Puedes solicitar reembolso hasta 10 días antes o cambiar a modalidad virtual sin costo adicional alguno.</div>
    </div>
  </div>
</div>

<!-- BOLETÍN -->
<div class="boletin">
  <div class="bol-l">
    <div class="bol-tag">Boletín académico</div>
    <div class="bol-ttl"><strong>Mantente</strong><br><em>al frente</em></div>
  </div>
  <div class="bol-r">
    <p class="bol-desc">Convocatorias, artículos y descuentos anticipados para congresos. Directo en tu correo, sin spam.</p>
    <div class="bol-form">
      <input type="email" placeholder="tucorreo@ejemplo.com" class="bol-in" />
      <button class="bol-btn">Suscribirse →</button>
    </div>
  </div>
</div>

<!-- FOOTER -->
<footer class="footer">
  <div class="ft-main">
    <div class="ft-brand">
      <img src="/FMDSlogo.png" alt="FMDS" style="height:48px;margin-bottom:14px;" />
      <p class="ft-tag">Federación Mexicana de Desarrolladores de Software.</p>
    </div>
    <div class="ft-col">
      <div class="ft-lbl">Congresos</div>
      <div class="ft-lnks">
        <a>Congreso CIIS 2026</a>
        <a>Simposio IA 2026</a>
        <a>Summit Cloud 2026</a>
        <a>Hackathon FMDS</a>
        <a>Agenda completa</a>
      </div>
    </div>
    <div class="ft-col">
      <div class="ft-lbl">Recursos</div>
      <div class="ft-lnks">
        <a>Artículos científicos</a>
        <a>Cursos en línea</a>
        <a>Ediciones anteriores</a>
        <a>Publicar artículo</a>
        <a>Ser ponente</a>
      </div>
    </div>
    <div class="ft-col">
      <div class="ft-lbl">Contacto</div>
      <div class="ft-ct-col">
        <div class="ft-ct">
          <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          contacto@fmds.mx
        </div>
        <div class="ft-ct">
          <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          Morelia, Michoacán · México
        </div>
        <div class="ft-ct">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          Lun-Vie · 9:00–18:00 hrs
        </div>
      </div>
    </div>
  </div>

  <div class="ft-mid">
    <div class="ft-stats">
      <div class="ft-s"><div class="ft-sn">3,200+</div><div class="ft-sl">Miembros</div></div>
      <div class="ft-s"><div class="ft-sn">12</div><div class="ft-sl">Estados</div></div>
      <div class="ft-s"><div class="ft-sn">48</div><div class="ft-sl">Artículos</div></div>
      <div class="ft-s"><div class="ft-sn">3</div><div class="ft-sl">Congresos</div></div>
    </div>
    <div class="ft-award">
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>
      <div>
        <div class="ft-at">Plataforma verificada</div>
        <div class="ft-as">Comunidad académica de México</div>
      </div>
    </div>
  </div>

  <div class="ft-bot">
    <span class="ft-copy">© 2025 FMDS · Federación Mexicana de Desarrolladores de Software · Todos los derechos reservados</span>
    <div class="ft-legal">
      <a>Privacidad</a>
      <a>Términos</a>
      <a>Cookies</a>
    </div>
    <div class="ft-badge"><div class="ft-bd"></div><span class="ft-bs">fmds.mx</span></div>
  </div>
</footer>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '../services/api'

const eventos = ref([])
const proximoEvento = ref(null)
const articulos = ref([])

const cargarArticulos = async () => {
  const res = await api.get('/articulos')
  articulos.value = res.data.slice(0, 4)
}

onMounted(() => {
  cargarEventos()
  cargarArticulos()
})

const cargarEventos = async () => {
  const res = await api.get('/eventos')
  eventos.value = res.data
  proximoEvento.value = res.data[0] || null
}

const formatFecha = (fecha) => {
  return new Date(fecha).toLocaleDateString('es-MX', {
    year: 'numeric', month: 'short', day: 'numeric'
  })
}

onMounted(cargarEventos)
</script>

<style scoped>
.page { min-height: 100vh; background: var(--bg); padding-top: 60px; }

.bc-loc { display:flex;align-items:center;gap:5px;font-size:11px;color:var(--w4);margin-bottom:12px; }

.bc-chip-dot { display:inline-flex;align-items:center;gap:6px;font-family:var(--fm);font-size:9px;font-weight:500;color:var(--teal);letter-spacing:.1em;text-transform:uppercase;margin-bottom:12px; }
.bc-dot { width:6px;height:6px;border-radius:50%;background:var(--teal);animation:pulse 2.5s infinite; }

.bc-hack-title { font-size:16px;font-weight:800;color:var(--white);letter-spacing:-.02em;margin-bottom:6px; }
.bc-hack-sub { font-size:11px;color:var(--w3);font-weight:300;line-height:1.6;margin-bottom:16px; }
.bc-prize-lbl { font-family:var(--fm);font-size:8px;font-weight:500;color:var(--w4);letter-spacing:.08em;text-transform:uppercase;margin-bottom:4px; }
.bc-prize { font-family:var(--f);font-size:32px;font-weight:800;color:var(--teal);letter-spacing:-.05em;line-height:1; }
.bc-prize-sub { font-size:10px;color:var(--w4);margin-top:2px; }

/* NAV */
.nav { height:60px;background:rgba(6,9,15,.96);backdrop-filter:blur(24px);border-bottom:1px solid var(--line3);display:flex;align-items:center;justify-content:space-between;padding:0 36px;position:fixed;top:0;left:0;right:0;z-index:1000; }
.nav-logo { font-size:16px;font-weight:800;color:var(--white);letter-spacing:-.03em; }
.nav-m { display:flex;gap:2px; }
.nbn { font-family:var(--f);font-size:12px;color:var(--w3);background:none;border:none;cursor:pointer;padding:8px 11px;border-radius:7px;transition:all .15s;text-decoration:none; }
.nbn:hover { color:var(--teal);background:var(--teal-g); }
.nav-e { display:flex;gap:8px; }
.ng { font-family:var(--f);font-size:12px;font-weight:500;border-radius:7px;padding:7px 14px;cursor:pointer;background:var(--w5);border:1px solid var(--line2);color:var(--w3);transition:all .15s;text-decoration:none; }
.ng:hover { border-color:var(--teal-b);color:var(--white); }
.nf { font-family:var(--f);font-size:12px;font-weight:700;border-radius:7px;padding:7px 16px;cursor:pointer;background:var(--teal);border:none;color:var(--bg);transition:background .15s;text-decoration:none; }
.nf:hover { background:var(--teal2); }

/* HERO */
.hero { display:grid;grid-template-columns:1fr 380px;min-height:calc(100vh - 60px);background:var(--bg);border-bottom:1px solid var(--line3);position:relative;overflow:hidden; }
.hero::before { content:'';position:absolute;inset:0;background:radial-gradient(ellipse 50% 55% at 68% -5%,rgba(45,212,180,.05) 0%,transparent 65%);pointer-events:none; }

.h-l { padding:60px 48px 52px;display:flex;flex-direction:column;justify-content:center;gap:28px;z-index:2; }

.h-tag { display:inline-flex;align-items:center;gap:8px;background:var(--teal-g);border:1px solid var(--teal-b);border-radius:100px;padding:5px 14px 5px 8px;width:fit-content; }
.h-tag-d { width:6px;height:6px;border-radius:50%;background:var(--teal);animation:pulse 2.5s infinite; }
@keyframes pulse { 0%,100%{box-shadow:0 0 0 0 rgba(45,212,180,.4)}50%{box-shadow:0 0 0 6px rgba(45,212,180,0)} }
.h-tag-t { font-family:var(--fm);font-size:9px;font-weight:500;color:var(--teal);letter-spacing:.1em;text-transform:uppercase; }

.h-titles { display:flex;flex-direction:column; }
.hh1 { font-family:var(--f);font-size:62px;font-weight:800;color:var(--white);line-height:.92;letter-spacing:-.05em; }
.hh2 { font-family:var(--fs);font-style:italic;font-size:56px;color:var(--teal);line-height:1.05; }
.hh3 { font-family:var(--f);font-size:62px;font-weight:800;color:var(--white);line-height:.92;letter-spacing:-.05em; }

.h-desc { font-size:14px;font-weight:300;color:var(--w3);line-height:1.9;max-width:480px; }
.h-desc b { font-weight:700;color:var(--white); }

.h-ctas { display:flex;gap:10px; }
.btn-p { background:var(--teal);color:var(--bg);border:none;padding:13px 22px;border-radius:8px;font-family:var(--f);font-size:13px;font-weight:700;cursor:pointer;display:inline-flex;align-items:center;gap:7px;transition:background .15s;text-decoration:none; }
.btn-p:hover { background:var(--teal2); }
.btn-s { background:var(--w5);color:var(--w2);border:1px solid var(--line2);padding:13px 18px;border-radius:8px;font-family:var(--f);font-size:13px;cursor:pointer;transition:all .15s; }
.btn-s:hover { border-color:var(--teal-b);color:var(--white); }

.h-nums { display:flex;gap:0;border-top:1px solid var(--line3);padding-top:28px; }
.hn { flex:1;padding-right:22px;margin-right:22px;border-right:1px solid var(--line3); }
.hn:last-child { border:none;margin:0;padding:0; }
.hn-v { font-family:var(--f);font-size:28px;font-weight:800;color:var(--white);letter-spacing:-.04em;line-height:1; }
.hn-v sup { font-size:12px;color:var(--teal); }
.hn-l { font-size:11px;color:var(--w4);margin-top:5px; }

/* PANEL DERECHO */
.h-r { background:linear-gradient(160deg,var(--bg3),var(--bg2));border-left:1px solid var(--line3);display:flex;flex-direction:column;z-index:2; }
.tp-h { padding:32px 28px 24px;border-bottom:1px solid var(--line3); }
.tp-e { font-family:var(--fm);font-size:8px;font-weight:500;letter-spacing:.14em;text-transform:uppercase;color:var(--w4);margin-bottom:16px;display:flex;align-items:center;gap:8px; }
.tp-e::after { content:'';flex:1;height:1px;background:var(--line3); }
.tp-n { font-family:var(--fs);font-style:italic;font-size:20px;color:var(--white);line-height:1.38;margin-bottom:8px; }
.tp-w { font-size:11px;color:var(--w4); }

.tp-b { padding:24px 28px;flex:1;display:flex;flex-direction:column;gap:14px; }
.t-box { background:rgba(0,0,0,.25);border:1px solid var(--line3);border-radius:9px;overflow:hidden; }
.tr { display:flex;justify-content:space-between;align-items:center;padding:14px 16px;border-bottom:1px solid var(--line3); }
.tr:last-child { border-bottom:none; }
.tr-n { font-size:13px;color:var(--w3); }
.tr-p { font-family:var(--f);font-size:17px;font-weight:700;color:var(--white);letter-spacing:-.02em; }
.tr-p.hi { color:var(--teal); }
.tr-p.gr { font-size:13px;color:var(--w4);font-weight:400; }

.tp-al { background:var(--teal-g);border:1px solid var(--teal-b);border-radius:8px;padding:11px 14px;font-size:12px;color:var(--w3);display:flex;gap:7px;align-items:center; }
.tp-al strong { color:var(--teal); }

.tp-buy { background:var(--teal);color:var(--bg);border:none;padding:14px;border-radius:8px;font-family:var(--f);font-size:14px;font-weight:700;cursor:pointer;transition:background .15s;text-align:center;text-decoration:none;display:block; }
.tp-buy:hover { background:var(--teal2); }

.tp-gh { background:none;border:none;color:var(--w4);font-size:12px;font-family:var(--f);cursor:pointer;padding:5px;transition:color .15s;text-align:center; }
.tp-gh:hover { color:var(--w2); }

.tp-f { padding:18px 28px;border-top:1px solid var(--line3);display:grid;grid-template-columns:1fr 1fr;gap:8px; }
.tfc { background:rgba(0,0,0,.2);border:1px solid var(--line3);border-radius:7px;padding:12px 14px; }
.tfc-l { font-family:var(--fm);font-size:8px;font-weight:500;letter-spacing:.1em;text-transform:uppercase;color:var(--w4);margin-bottom:4px; }
.tfc-v { font-family:var(--f);font-size:14px;font-weight:700;color:var(--white); }

/* TICKER */
.ticker { background:var(--teal);overflow:hidden;padding:9px 0; }
.ti { display:inline-flex;white-space:nowrap;animation:roll 24s linear infinite; }
.ti span { font-family:var(--fm);font-size:9px;font-weight:500;color:var(--bg);letter-spacing:.16em;text-transform:uppercase;padding:0 16px;opacity:.85; }
@keyframes roll { 0%{transform:translateX(0)}100%{transform:translateX(-50%)} }

/* FEATURE STRIP */
.fstrip { background:var(--bg3);border-top:1px solid var(--line3);border-bottom:1px solid var(--line3);display:grid;grid-template-columns:repeat(7,1fr); }.fsc { flex:1;padding:22px 16px;border-right:1px solid var(--line3);display:flex;flex-direction:column;align-items:center;gap:8px;cursor:pointer;transition:background .15s;position:relative;overflow:hidden; }
.fsc:last-child { border-right:none; }
.fsc::after { content:'';position:absolute;bottom:0;left:0;right:0;height:2px;background:var(--teal);transform:scaleX(0);transition:transform .2s; }
.fsc:hover::after { transform:scaleX(1); }
.fsc:hover { background:var(--card); }
.fsc-ic { width:34px;height:34px;background:var(--teal-g);border:1px solid var(--teal-b);border-radius:9px;display:flex;align-items:center;justify-content:center; }
.fsc-ic svg { width:15px;height:15px;fill:none;stroke:var(--teal);stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round; }
.fsc-n { font-size:12px;font-weight:700;color:var(--white); }
.fsc-s { font-family:var(--fm);font-size:9px;color:var(--w4); }

/* BENTO */
.sec { padding:88px 40px; }
.s-hd { display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:40px; }
.pill { display:inline-flex;align-items:center;gap:7px;background:var(--teal-g);border:1px solid var(--teal-b);border-radius:100px;padding:4px 12px;margin-bottom:16px; }
.pill-d { width:5px;height:5px;border-radius:50%;background:var(--teal); }
.pill-t { font-family:var(--fm);font-size:8px;font-weight:500;color:var(--teal);letter-spacing:.1em;text-transform:uppercase; }
.s-ttl { font-family:var(--f);font-size:34px;font-weight:800;color:var(--white);letter-spacing:-.05em;line-height:.95;margin-bottom:12px; }
.s-ttl em { font-family:var(--fs);font-style:italic;font-weight:400;color:var(--teal); }
.s-all { font-size:11px;font-weight:600;color:var(--w3);background:var(--w5);border:1px solid var(--line2);padding:8px 14px;border-radius:7px;cursor:pointer;font-family:var(--f);transition:all .15s;text-decoration:none; }
.s-all:hover { border-color:var(--teal-b);color:var(--teal); }
.bento { display:grid;grid-template-columns:1fr 300px;grid-template-rows:auto auto;gap:16px; }
.bc { background:var(--card);border:1px solid var(--line3);border-radius:14px;padding:30px 28px;cursor:pointer;transition:all .18s; }
.bc:hover { border-color:var(--teal-b);transform:translateY(-2px); }
.bc-wide { grid-column:1; }
.bc-hack { grid-column:2;grid-row:1;background:var(--bg4);border-color:var(--teal-b);display:flex;flex-direction:column;justify-content:space-between; }
.bc-chip { display:inline-block;background:var(--teal-g);border:1px solid var(--teal-b);border-radius:100px;padding:3px 11px;font-family:var(--fm);font-size:9px;font-weight:500;color:var(--teal);letter-spacing:.07em;text-transform:uppercase;margin-bottom:14px; }
.bc-nm { font-family:var(--fs);font-style:italic;font-size:16px;color:var(--white);line-height:1.38;margin-bottom:12px; }
.bc-tags { display:flex;gap:6px;flex-wrap:wrap;margin-bottom:18px; }
.bt { font-size:10px;font-weight:500;padding:3px 9px;border-radius:100px; }
.bt.t { background:var(--teal-g);color:var(--teal);border:1px solid var(--teal-b); }
.bt.n { background:var(--w5);color:var(--w3);border:1px solid var(--line2); }
.bc-ft { display:flex;justify-content:space-between;align-items:center;padding-top:16px;border-top:1px solid var(--line3); }
.bc-pr { font-family:var(--f);font-size:18px;font-weight:800;color:var(--teal);letter-spacing:-.03em; }
.bc-pr small { font-size:10px;font-weight:400;color:var(--w4); }
.bc-btn { font-size:11px;font-weight:600;padding:8px 15px;border-radius:7px;border:1px solid var(--teal-b);cursor:pointer;font-family:var(--f);background:var(--teal-g);color:var(--teal);transition:all .15s; }
.bc-btn:hover { background:var(--teal-s); }
.bc-prize { font-family:var(--f);font-size:32px;font-weight:800;color:var(--teal);letter-spacing:-.05em;line-height:1;margin-bottom:3px; }

/* STATS */
.stats-h { background:var(--bg3);border-top:1px solid var(--line3);border-bottom:1px solid var(--line3);display:grid;grid-template-columns:repeat(5,1fr); }
.sh { padding:32px 26px;border-right:1px solid var(--line3);position:relative;overflow:hidden; }
.sh:last-child { border-right:none; }
.sh::before { content:'';position:absolute;top:0;left:0;width:2px;height:100%;background:var(--teal);opacity:0;transition:opacity .15s; }
.sh:hover::before { opacity:1; }
.sh-n { font-family:var(--f);font-size:26px;font-weight:800;color:var(--teal);letter-spacing:-.05em;line-height:1;margin-bottom:7px; }
.sh-l { font-family:var(--fm);font-size:9px;font-weight:500;letter-spacing:.08em;text-transform:uppercase;color:var(--w4); }

/* MISIÓN */
.ms-grid { display:grid;grid-template-columns:1fr 1fr;border-top:1px solid var(--line3); }
.ms-l { background:var(--bg2);padding:76px 48px;position:relative;overflow:hidden; }
.ms-l::after { content:'';position:absolute;top:0;right:0;width:1px;height:100%;background:linear-gradient(to bottom,transparent,var(--teal-b),transparent); }
.ms-r { background:var(--card);padding:76px 48px; }
.ms-over { font-family:var(--fm);font-size:9px;font-weight:500;letter-spacing:.14em;text-transform:uppercase;color:var(--w4);margin-bottom:20px; }
.ms-q { font-family:var(--fs);font-style:italic;font-size:24px;color:var(--white);line-height:1.42;margin-bottom:24px; }
.ms-q span { color:var(--teal); }
.ms-body { font-size:13px;font-weight:300;color:var(--w3);line-height:1.9; }
.ms-rlbl { font-family:var(--fm);font-size:9px;font-weight:500;letter-spacing:.14em;text-transform:uppercase;color:var(--w4);margin-bottom:26px; }
.val { display:flex;gap:14px;padding:20px 0;border-bottom:1px solid var(--line3);align-items:center; }
.val:last-child { border-bottom:none;padding-bottom:0; }
.val:first-of-type { padding-top:0; }
.vn { font-family:var(--fm);font-size:9px;font-weight:500;color:var(--w4);min-width:18px; }
.vi { width:30px;height:30px;background:var(--teal-g);border:1px solid var(--teal-b);border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0; }
.vi svg { width:13px;height:13px;fill:none;stroke:var(--teal);stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round; }
.vttl { font-size:13px;font-weight:700;color:var(--white);margin-bottom:3px; }
.vdesc { font-size:12px;color:var(--w3);font-weight:300; }

/* SPEAKERS */
.spk-mag { display:grid;grid-template-columns:1fr 1fr;gap:14px; }
.sm { background:var(--card);border:1px solid var(--line3);border-radius:14px;padding:28px 24px;display:flex;gap:18px;align-items:flex-start;cursor:pointer;transition:all .18s; }
.sm:hover { border-color:var(--teal-b);transform:translateY(-2px); }
.sm-av { width:50px;height:50px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:var(--f);font-size:14px;font-weight:800;flex-shrink:0; }
.sm-av.a { background:var(--teal-g);border:1px solid var(--teal-b);color:var(--teal); }
.sm-av.b { background:rgba(234,179,8,.06);border:1px solid rgba(234,179,8,.18);color:#EAB308; }
.sm-tag { font-family:var(--fm);font-size:8px;font-weight:500;letter-spacing:.08em;text-transform:uppercase;color:var(--teal);margin-bottom:6px; }
.sm-nm { font-size:15px;font-weight:700;color:var(--white);letter-spacing:-.02em;margin-bottom:4px; }
.sm-rl { font-size:12px;color:var(--w3);font-weight:300;margin-bottom:10px; }
.sm-tp { font-size:12px;color:var(--w3);line-height:1.65;border-top:1px solid var(--line3);padding-top:10px; }
.sm-feat { grid-column:span 2;background:var(--bg3);border:1px solid var(--teal-b);border-radius:14px;padding:30px 28px;display:grid;grid-template-columns:auto 1fr;gap:22px;align-items:center; }
.sm-fav { width:68px;height:68px;border-radius:50%;background:var(--teal-g);border:2px solid var(--teal-b);display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:800;color:var(--teal); }
.sm-ftag { font-family:var(--fm);font-size:8px;font-weight:500;letter-spacing:.1em;text-transform:uppercase;color:var(--teal);margin-bottom:8px; }
.sm-fnm { font-size:22px;font-weight:800;color:var(--white);letter-spacing:-.03em;margin-bottom:5px; }
.sm-frl { font-size:13px;color:var(--w3);font-weight:300;margin-bottom:14px; }
.sm-fq { font-family:var(--fs);font-style:italic;font-size:14px;color:var(--w3);line-height:1.65; }

/* ARTÍCULOS */
.art-ed { border:1px solid var(--line3);border-radius:14px;overflow:hidden; }
.ae { display:grid;grid-template-columns:20px 1fr auto;gap:14px;padding:22px 24px;border-bottom:1px solid var(--line3);cursor:pointer;transition:background .15s;align-items:start; }
.ae:last-child { border-bottom:none; }
.ae:hover { background:var(--card2); }
.ae-n { font-family:var(--fm);font-size:9px;font-weight:500;color:var(--w4);padding-top:2px; }
.ae-cat { font-family:var(--fm);font-size:8px;font-weight:500;letter-spacing:.08em;text-transform:uppercase;color:var(--teal);margin-bottom:6px; }
.ae-ttl { font-family:var(--fs);font-style:italic;font-size:15px;color:var(--white);line-height:1.42;margin-bottom:4px; }
.ae-by { font-size:11px;color:var(--w4);font-weight:300; }
.ae-badge { font-size:9px;font-weight:600;padding:3px 10px;border-radius:100px;background:var(--teal-g);color:var(--teal);border:1px solid var(--teal-b);white-space:nowrap;align-self:center; }

/* GALERÍA */
.gal-g { display:grid;grid-template-columns:2fr 1fr 1fr;grid-template-rows:240px 240px;gap:12px; }.gp { position:relative;overflow:hidden;cursor:pointer;border-radius:12px; }
.gp.t { grid-row:span 2; }
.gp-bg { width:100%;height:100%;transition:transform .4s; }
.gp:hover .gp-bg { transform:scale(1.04); }
.gp-ov { position:absolute;inset:0;background:linear-gradient(to top,rgba(6,9,15,.92) 0%,transparent 55%);opacity:0;transition:opacity .25s;display:flex;flex-direction:column;justify-content:flex-end;padding:16px; }
.gp:hover .gp-ov { opacity:1; }
.gp-yr { font-family:var(--fm);font-size:8px;font-weight:500;letter-spacing:.12em;text-transform:uppercase;color:var(--teal);margin-bottom:4px; }
.gp-d { font-size:12px;font-weight:700;color:var(--white); }
.gp-bd { position:absolute;top:12px;left:12px;background:rgba(6,9,15,.8);backdrop-filter:blur(10px);border:1px solid var(--line2);border-radius:7px;padding:4px 10px;font-family:var(--fm);font-size:9px;font-weight:500;color:var(--teal); }

/* TESTIMONIOS */
.test-g { display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px; }
.tc { background:var(--card);border:1px solid var(--line3);border-radius:14px;padding:28px 26px;display:flex;flex-direction:column;gap:14px;transition:border-color .15s; }
.tc:hover { border-color:var(--teal-b); }
.tc-stars { color:#2DD4B4;font-size:14px;letter-spacing:2px; }
.tc-q { font-family:var(--fs);font-style:italic;font-size:14px;color:var(--w2);line-height:1.7;flex:1;position:relative; }
.tc-q::before { content:'\201C';color:rgba(45,212,180,.2);font-size:32px;font-family:var(--fs);line-height:.4;display:block;margin-bottom:10px; }
.tc-auth { display:flex;align-items:center;gap:10px;padding-top:14px;border-top:1px solid var(--line3); }
.tc-av { width:34px;height:34px;border-radius:50%;background:var(--teal-g);border:1px solid var(--teal-b);display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:var(--teal);flex-shrink:0; }
.tc-nm { font-size:12px;font-weight:700;color:var(--white); }
.tc-rl { font-size:11px;color:var(--w4);font-weight:300;margin-top:1px; }

/* INSTITUCIONES */
.inst-sec { background:var(--bg3);border-top:1px solid var(--line3);padding:40px 44px; }
.inst-lbl { font-family:var(--fm);font-size:9px;font-weight:500;letter-spacing:.14em;text-transform:uppercase;color:var(--w4);text-align:center;margin-bottom:28px; }
.inst { display:flex;border:1px solid var(--line3);border-radius:14px;overflow:hidden; }
.ic { flex:1;padding:24px 16px;border-right:1px solid var(--line3);display:flex;flex-direction:column;align-items:center;gap:10px;cursor:pointer;transition:background .15s; }
.ic:last-child { border-right:none; }
.ic:hover { background:var(--card); }
.ic-i { width:44px;height:44px;background:var(--teal-g);border:1px solid var(--teal-b);border-radius:10px;display:flex;align-items:center;justify-content:center; }
.ic-i svg { width:20px;height:20px; }
.ic-n { font-size:13px;font-weight:700;color:var(--white); }
.ic-l { font-size:11px;color:var(--w4); }

/* FAQ */
.faq-g { display:grid;grid-template-columns:1fr 1fr;gap:12px; }
.faq-i { background:var(--card);border:1px solid var(--line3);border-radius:14px;padding:28px 26px;display:flex;flex-direction:column;gap:10px;transition:border-color .15s;cursor:pointer; }
.faq-i:hover { border-color:var(--teal-b); }
.faq-n { font-family:var(--fm);font-size:9px;font-weight:500;color:var(--teal);letter-spacing:.1em; }
.faq-q { font-size:15px;font-weight:700;color:var(--white);letter-spacing:-.02em; }
.faq-a { font-size:12px;color:var(--w3);font-weight:300;line-height:1.7; }

/* BOLETÍN */
.boletin { background:var(--bg2);border-top:1px solid var(--line3);padding:60px 44px;display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center; }
.bol-tag { font-family:var(--fm);font-size:9px;font-weight:500;letter-spacing:.14em;text-transform:uppercase;color:var(--w4);margin-bottom:16px; }
.bol-ttl { font-size:42px;font-weight:800;letter-spacing:-.04em;line-height:1; }
.bol-ttl strong { color:var(--white); }
.bol-ttl em { font-family:var(--fs);font-style:italic;font-weight:400;color:var(--teal);display:block; }
.bol-desc { font-size:13px;color:var(--w3);font-weight:300;line-height:1.8;margin-bottom:20px; }
.bol-form { display:flex;gap:10px; }
.bol-in { flex:1;background:var(--card);border:1px solid var(--line2);border-radius:10px;padding:14px 18px;font-family:var(--f);font-size:13px;color:var(--white);outline:none;transition:border-color .15s; }
.bol-in:focus { border-color:var(--teal-b); }
.bol-in::placeholder { color:var(--w4); }
.bol-btn { background:var(--teal);color:var(--bg);border:none;border-radius:10px;padding:14px 24px;font-family:var(--f);font-size:13px;font-weight:700;cursor:pointer;transition:background .15s;white-space:nowrap; }
.bol-btn:hover { background:var(--teal2); }

/* FOOTER */
.footer { background:var(--bg2); }
.ft-main { display:grid;grid-template-columns:200px 1fr 1fr 1fr;gap:48px;padding:52px 44px 40px;border-bottom:1px solid var(--line3); }
.ft-brand { display:flex;flex-direction:column; }
.ft-tag { font-size:12px;color:var(--w4);font-weight:300;line-height:1.8;max-width:180px; }
.ft-col { display:flex;flex-direction:column;gap:16px; }
.ft-lbl { font-family:var(--fm);font-size:9px;font-weight:500;letter-spacing:.12em;text-transform:uppercase;color:var(--w4); }
.ft-lnks { display:flex;flex-direction:column;gap:10px; }
.ft-lnks a { font-size:13px;color:var(--w3);text-decoration:none;font-weight:300;transition:color .15s;cursor:pointer; }
.ft-lnks a:hover { color:var(--teal); }
.ft-ct-col { display:flex;flex-direction:column;gap:12px; }
.ft-ct { display:flex;align-items:flex-start;gap:8px;font-size:12px;color:var(--w3);font-weight:300;line-height:1.55; }
.ft-ct svg { width:13px;height:13px;fill:none;stroke:var(--teal);stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;flex-shrink:0;margin-top:2px; }

.ft-mid { display:flex;justify-content:space-between;align-items:center;padding:28px 44px;border-bottom:1px solid var(--line3); }
.ft-stats { display:flex;gap:40px; }
.ft-s { display:flex;flex-direction:column;gap:4px; }
.ft-sn { font-family:var(--f);font-size:22px;font-weight:800;color:var(--teal);letter-spacing:-.04em; }
.ft-sl { font-family:var(--fm);font-size:9px;font-weight:500;letter-spacing:.1em;text-transform:uppercase;color:var(--w4); }
.ft-award { display:flex;align-items:center;gap:12px;background:var(--teal-g);border:1px solid var(--teal-b);border-radius:10px;padding:14px 20px; }
.ft-award svg { width:20px;height:20px;flex-shrink:0; }
.ft-at { font-size:13px;font-weight:700;color:var(--teal); }
.ft-as { font-size:11px;color:var(--w4);margin-top:2px; }

.ft-bot { display:flex;justify-content:space-between;align-items:center;padding:18px 44px; }
.ft-copy { font-size:11px;color:var(--w4); }
.ft-legal { display:flex;gap:18px; }
.ft-legal a { font-size:11px;color:var(--w4);text-decoration:none;cursor:pointer;transition:color .15s; }
.ft-legal a:hover { color:var(--teal); }
.ft-badge { display:flex;align-items:center;gap:6px;background:var(--teal-g);border:1px solid var(--teal-b);border-radius:100px;padding:5px 12px; }
.ft-bd { width:5px;height:5px;border-radius:50%;background:var(--teal); }
.ft-bs { font-family:var(--fm);font-size:9px;color:var(--teal);letter-spacing:.06em; }
</style>