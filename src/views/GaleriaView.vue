<template>
  <div class="page">

    <AppNav />

    <!-- HERO -->
    <div class="ph">
      <div class="pill"><div class="pill-d"></div><span class="pill-t">Historia FMDS</span></div>
      <h1 class="ph-ttl">Ediciones <em>anteriores</em></h1>
      <p class="ph-sub">Años de conocimiento compartido, conexiones y crecimiento para la comunidad tecnológica de México.</p>
    </div>

    <div class="sec">
      <!-- GALERÍA -->
      <div class="gal-f">
        <div class="gc t">
          <div class="gc-bg" style="background:linear-gradient(135deg,#0C1830,#1B4060,#0E9A80 110%)">
            <div class="gc-medal">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <div class="gc-num">1,200<small>+</small></div>
            <div class="gc-lbl">Asistentes 2025</div>
          </div>
          <div class="gc-bd">CIIS 2025</div>
          <div class="gc-ov"><div class="gc-yr">Edición 2025</div><div class="gc-d">Primer Congreso Internacional FMDS · CDMX</div></div>
        </div>
        <div class="gc">
          <div class="gc-bg" style="background:linear-gradient(135deg,#0C1420,#0D1F30)">
            <div class="gc-num sm">48</div>
            <div class="gc-lbl">Ponencias</div>
          </div>
          <div class="gc-bd">Workshops</div>
          <div class="gc-ov"><div class="gc-yr">Workshops 2025</div><div class="gc-d">Talleres con expertos</div></div>
        </div>
        <div class="gc">
          <div class="gc-bg" style="background:linear-gradient(135deg,#0A1320,#1B3558)">
            <div class="gc-num sm teal">$50K</div>
            <div class="gc-lbl">En premios</div>
          </div>
          <div class="gc-bd">Hackathon</div>
          <div class="gc-ov"><div class="gc-yr">Hackathon 2025</div><div class="gc-d">32 equipos · 3 ganadores</div></div>
        </div>
        <div class="gc">
          <div class="gc-bg" style="background:linear-gradient(135deg,#0D1E30,#0C1420)">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            <div class="gc-lbl" style="margin-top:7px">Mejor ponencia</div>
          </div>
          <div class="gc-bd">Premios</div>
          <div class="gc-ov"><div class="gc-yr">Premios 2025</div><div class="gc-d">Reconocimiento a la investigación</div></div>
        </div>
      </div>

      <!-- STATS -->
      <div class="gal-stats">
        <div class="gs"><div class="gs-n">1,200+</div><div class="gs-l">Asistentes 2025</div></div>
        <div class="gs"><div class="gs-n">48</div><div class="gs-l">Ponencias presentadas</div></div>
        <div class="gs"><div class="gs-n">32</div><div class="gs-l">Equipos hackathon</div></div>
        <div class="gs"><div class="gs-n">$50K</div><div class="gs-l">MXN en premios</div></div>
      </div>
    </div>

  </div>
</template>

<script setup>
import AppNav from '../components/AppNav.vue'
</script>

<style scoped>
.page { min-height:100vh;background:var(--bg);padding-top:60px; }

/* PAGE HEADER */
.ph { background:var(--bg2);border-bottom:1px solid var(--line3);padding:72px 40px 60px;position:relative;overflow:hidden; }
.ph::before { content:'';position:absolute;width:500px;height:500px;border-radius:50%;background:radial-gradient(circle,rgba(45,212,180,.04) 0%,transparent 70%);top:-200px;right:-80px;pointer-events:none; }
.pill { display:inline-flex;align-items:center;gap:7px;background:var(--teal-g);border:1px solid var(--teal-b);border-radius:100px;padding:4px 12px;margin-bottom:16px; }
.pill-d { width:5px;height:5px;border-radius:50%;background:var(--teal); }
.pill-t { font-family:var(--fm);font-size:8px;font-weight:500;color:var(--teal);letter-spacing:.1em;text-transform:uppercase; }
.ph-ttl { font-family:var(--f);font-size:44px;font-weight:800;color:var(--white);letter-spacing:-.05em;line-height:.93;margin-bottom:16px;margin-top:14px; }
.ph-ttl em { font-family:var(--fs);font-style:italic;font-weight:400;color:var(--teal); }
.ph-sub { font-size:14px;font-weight:300;color:var(--w3);line-height:1.82;max-width:520px; }

.sec { padding:56px 40px 80px; }

/* GALERÍA */
.gal-f { display:grid;grid-template-columns:2fr 1fr 1fr;grid-template-rows:200px 200px;gap:12px;border-radius:14px;overflow:hidden;margin-bottom:36px; }
.gc { position:relative;overflow:hidden;cursor:pointer;border-radius:12px; }
.gc.t { grid-row:span 2; }
.gc-bg { width:100%;height:100%;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:8px;transition:transform .4s; }
.gc:hover .gc-bg { transform:scale(1.04); }
.gc-medal { width:62px;height:62px;border-radius:50%;background:var(--teal-g);border:1px solid var(--teal-b);display:flex;align-items:center;justify-content:center; }
.gc-num { font-family:var(--f);font-size:22px;font-weight:800;color:var(--teal);letter-spacing:-.04em; }
.gc-num.sm { font-size:20px;color:var(--w2); }
.gc-num.teal { color:var(--teal); }
.gc-lbl { font-size:10px;color:var(--w3);letter-spacing:.06em;text-transform:uppercase; }
.gc-ov { position:absolute;inset:0;background:linear-gradient(to top,rgba(6,9,15,.92) 0%,transparent 55%);opacity:0;transition:opacity .25s;display:flex;flex-direction:column;justify-content:flex-end;padding:16px; }
.gc:hover .gc-ov { opacity:1; }
.gc-yr { font-family:var(--fm);font-size:8px;font-weight:500;letter-spacing:.12em;text-transform:uppercase;color:var(--teal);margin-bottom:4px; }
.gc-d { font-size:12px;font-weight:700;color:var(--white); }
.gc-bd { position:absolute;top:10px;left:10px;background:rgba(6,9,15,.8);backdrop-filter:blur(10px);border:1px solid var(--line2);border-radius:7px;padding:4px 10px;font-family:var(--fm);font-size:9px;font-weight:500;color:var(--teal); }

/* STATS */
.gal-stats { display:grid;grid-template-columns:repeat(4,1fr);gap:12px; }
.gs { background:var(--card);border:1px solid var(--line3);border-radius:12px;padding:22px;text-align:center;transition:border-color .15s; }
.gs:hover { border-color:var(--teal-b); }
.gs-n { font-family:var(--f);font-size:26px;font-weight:800;color:var(--teal);letter-spacing:-.05em; }
.gs-l { font-family:var(--fm);font-size:9px;font-weight:500;letter-spacing:.1em;text-transform:uppercase;color:var(--w4);margin-top:7px; }

/* RESPONSIVE */
@media (max-width: 968px) {
  .ph { padding:44px 20px 36px; }
  .ph-ttl { font-size:32px; }
  .sec { padding:36px 20px 56px; }
  .gal-f { grid-template-columns:1fr 1fr;grid-template-rows:160px 160px 160px; }
  .gc.t { grid-row:span 1;grid-column:span 2; }
  .gal-stats { grid-template-columns:repeat(2,1fr); }
}
@media (max-width: 480px) {
  .gal-f { grid-template-columns:1fr;grid-template-rows:repeat(4,160px); }
  .gc.t { grid-column:span 1; }
}
</style>
