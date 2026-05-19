/* ===== DATA KONÍ — přidej nového koníka sem ===== */
const konici = [
  {
    jmeno: "Jessinca",
    plemeno: "pony",
    barva: "hnědák",
    pohlaví: "klisna",
    původ: "neznámý",
    rok_narozeni: 1992,
    khv_cm: 110,
    obrazek_odkaz: "img/jessinca.jpg",
    desc: "Jessinca má u nás roli společníka pro své čtyřnohé kamarády. Ač je na svůj věk velice vitální, ven chodí už jen v doprovodu Davídka na ruce. Jess je kontaktní poník, ráda se mazlí, ale vzhledem ke špatné minulosti ráda zastrašuje zuby a zadníma nohama.",
    aktivni: true
  },
  {
    jmeno: "Katheline",
    plemeno: "barokní pinto",
    barva: "vraník",
    pohlaví: "klisna",
    původ: "po Hermen van de Brink, z Banderilla 18",
    rok_narozeni: 2013,
    khv_cm: 164,
    obrazek_odkaz: "img/katheline.jpg",
    desc: "Katheline alias Kačenka je velmi charakterní, jemná kobylka ochotná učit se nové jízdárenské práci pod pevným vedením. I přes zdravotní handicap nemocných ledvin je to naše krásná černá perla.",
    aktivni: true
  },
  {
    jmeno: "Charlie",
    plemeno: "barokní pinto",
    barva: "vraník",
    pohlaví: "valach",
    původ: "neznámý",
    rok_narozeni: 2011,
    khv_cm: 164,
    obrazek_odkaz: "img/charlie.jpg",
    desc: "Naše další černá perla do party. Charlí byl v minulosti školní koník. U nás pouze rekreace a občas lekce s členy klubu na jízdárně. Charlie je hodný koník, ale když má málo práce, tak umí trochu lumpačit.",
    aktivni: true
  },
  {
    jmeno: "Čikina",
    plemeno: "teplokrevný typ",
    barva: "tm. hnědák",
    pohlaví: "klisna",
    původ: "neznámý",
    rok_narozeni: 2006,
    khv_cm: 168,
    obrazek_odkaz: "img/cikina.jpg",
    desc: "Čiki je s námi nejkratší dobu. Byla pořízena kvůli svému výjimečnému charakteru, s nadějí, že jednoho dne bude moci sloužit jako další z našich terapeutických koní.",
    aktivni: true
  },
  {
    jmeno: "David",
    plemeno: "Hucul",
    barva: null,
    pohlaví: "valach",
    původ: "neznámý",
    rok_narozeni: 2004,
    khv_cm: 150,
    obrazek_odkaz: "img/david.jpg",
    desc: "Davídek je asi to nejhodnější zvíře, co jsme kdy kdo poznali. Je silně fixován na společnost dalšího koně, neumí být sám. David má předpoklady být koněm na kontaktní terapii — mazlení a drbání v místě ustájení.",
    aktivni: true
  }
];
/* ===== KONEC DAT ===== */

function renderKonici() {
  const grid = document.getElementById('horses-grid');
  grid.innerHTML = konici.filter(k => k.aktivni).map(k => {
    const metaItems = [
      k.barva        && `<em>Barva:</em> ${k.barva}`,
      k.plemeno      && `<em>Plemeno:</em> ${k.plemeno}`,
      k.pohlaví      && `<em>Pohlaví:</em> ${k.pohlaví}`,
      k.původ        && `<em>Původ:</em> ${k.původ}`,
      k.rok_narozeni && `<em>Rok narození:</em> ${k.rok_narozeni}`,
      k.khv_cm       && `<em>KHV:</em> ${k.khv_cm} cm`,
    ].filter(Boolean).join('<br>');
    return `
      <article class="horse-card">
        <img class="horse-card-img" src="${k.obrazek_odkaz}" alt="${k.jmeno}" loading="lazy">
        <div class="horse-card-body">
          <h3>${k.jmeno}</h3>
          <div class="horse-meta">${metaItems}</div>
          <p class="horse-desc">${k.desc}</p>
        </div>
      </article>`;
  }).join('');
}

function handleForm(e) {
  e.preventDefault();
  const j  = document.getElementById('f-jmeno').value;
  const em = document.getElementById('f-email').value;
  const z  = document.getElementById('f-zprava').value;
  window.location.href = `mailto:l.klestilova@kvalitnipodzimzivota.cz?subject=${encodeURIComponent('Zpráva od ' + j)}&body=${encodeURIComponent('Od: ' + j + '\nEmail: ' + em + '\n\n' + z)}`;
}

window.addEventListener('scroll', () => {
  document.getElementById('scroll-top').classList.toggle('visible', scrollY > 400);
});

document.addEventListener('DOMContentLoaded', renderKonici);
