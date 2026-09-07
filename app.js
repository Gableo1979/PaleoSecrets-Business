/* Paleo Secrets — interacciones del catálogo */

// --- Datos de dinosaurios ---
const species = [
  {
    id: "rex", name: "Tyrannosaurus rex", scientific: "Tyrannosaurus rex",
    kinds: ["carnivoro"], era: "Cretácico", eraDetail: "Cretácico · 68–66 Ma",
    diet: "Carnívoro", length: "12 m", region: "Norteamérica",
    image: "assets/dinos/tyrannosaurus.png",
    short: "El superdepredador más famoso de Norteamérica.",
    copy: "Alcanzaba los 12 metros y pesaba hasta 9 toneladas. Tuvo una de las mordidas más potentes conocidas entre los animales terrestres."
  },
  {
    id: "tri", name: "Triceratops", scientific: "Triceratops horridus",
    kinds: ["herbivoro"], era: "Cretácico", eraDetail: "Cretácico · 68–66 Ma",
    diet: "Herbívoro", length: "9 m", region: "Norteamérica",
    image: "assets/dinos/triceratops.png",
    short: "Tres cuernos, un gran volante y una defensa formidable.",
    copy: "Un herbívoro reconocible por sus tres cuernos y su volante óseo. Compartió territorio y época con el T. rex."
  },
  {
    id: "raptor", name: "Velociraptor", scientific: "Velociraptor mongoliensis",
    kinds: ["carnivoro"], era: "Cretácico", eraDetail: "Cretácico · 75–71 Ma",
    diet: "Carnívoro", length: "2 m", region: "Asia",
    image: "assets/dinos/velociraptor.png",
    short: "Pequeño, emplumado y mucho más ágil que enorme.",
    copy: "Lejos del gigante del cine: medía cerca de dos metros, tenía plumas y una característica garra curva en cada pie."
  },
  {
    id: "spino", name: "Spinosaurus", scientific: "Spinosaurus aegyptiacus",
    kinds: ["carnivoro"], era: "Cretácico", eraDetail: "Cretácico · 99–93 Ma",
    diet: "Piscívoro", length: "15 m", region: "Norte de África",
    image: "assets/dinos/spinosaurus.png",
    short: "Un cazador semiacuático con una enorme vela dorsal.",
    copy: "Uno de los mayores dinosaurios carnívoros conocidos. Su anatomía revela una fuerte adaptación a la vida cerca del agua."
  },
  {
    id: "brachio", name: "Brachiosaurus", scientific: "Brachiosaurus altithorax",
    kinds: ["herbivoro"], era: "Jurásico", eraDetail: "Jurásico · 154–150 Ma",
    diet: "Herbívoro", length: "25 m", region: "Norteamérica",
    image: "assets/dinos/brachiosaurus.png",
    short: "Un gigante de cuello alto que alcanzaba las copas.",
    copy: "Sus patas delanteras más altas y su largo cuello le permitían alimentarse de vegetación fuera del alcance de otros herbívoros."
  },
  {
    id: "ptera", name: "Pteranodon", scientific: "Pteranodon longiceps",
    kinds: ["volador"], era: "Cretácico", eraDetail: "Cretácico · 86–84 Ma",
    diet: "Piscívoro", length: "7 m (alas)", region: "Norteamérica",
    image: "assets/dinos/pteranodon.png",
    short: "Un gran reptil volador que dominaba las costas.",
    copy: "No era un dinosaurio, sino un pterosaurio. Planeaba sobre antiguos mares y se alimentaba principalmente de peces."
  },
  {
    id: "argento", name: "Argentinosaurus", scientific: "Argentinosaurus huinculensis",
    kinds: ["herbivoro", "patagonia"], era: "Cretácico", eraDetail: "Cretácico · 96–92 Ma",
    diet: "Herbívoro", length: "35 m", region: "Patagonia, Argentina",
    image: "assets/dinos/argentinosaurus.png",
    short: "Uno de los animales terrestres más grandes de la historia.",
    copy: "Este titanosaurio hallado en Neuquén pudo superar las 70 toneladas. Es uno de los seres vivos más grandes que caminó sobre la Tierra."
  },
  {
    id: "gigano", name: "Giganotosaurus", scientific: "Giganotosaurus carolinii",
    kinds: ["carnivoro", "patagonia"], era: "Cretácico", eraDetail: "Cretácico · 99–95 Ma",
    diet: "Carnívoro", length: "13 m", region: "Patagonia, Argentina",
    image: "assets/dinos/giganotosaurus.png",
    short: "Un colosal carnívoro patagónico, rival del T. rex.",
    copy: "Descubierto en la provincia de Neuquén, fue uno de los mayores dinosaurios carnívoros, incluso más largo que el Tyrannosaurus rex."
  },
  {
    id: "pterodaustro", name: "Pterodaustro", scientific: "Pterodaustro guinazui",
    kinds: ["volador", "patagonia"], era: "Cretácico", eraDetail: "Cretácico · 105 Ma",
    diet: "Filtrador", length: "2,5 m (alas)", region: "San Luis, Argentina",
    image: "assets/dinos/pterodaustro.png",
    short: "Un pterosaurio argentino que filtraba su alimento.",
    copy: "Su largo pico curvo tenía cientos de cerdas con las que filtraba pequeños organismos del agua, como lo hacen hoy los flamencos."
  }
];

// --- Menú móvil ---
const menu = document.querySelector("#menu");
const nav = document.querySelector("#nav-links");
menu.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menu.setAttribute("aria-expanded", open);
});
nav.addEventListener("click", (e) => {
  if (e.target.tagName === "A") nav.classList.remove("open");
});

// --- Render de tarjetas ---
const grid = document.querySelector("#species-grid");
grid.innerHTML = species.map((d, i) => `
  <article class="species-card" data-kind="${d.kinds.join(" ")}" data-open="${d.id}" style="animation-delay:${i * 55}ms" tabindex="0" role="button" aria-label="Abrir ficha de ${d.name}">
    <div class="thumb">
      <span class="era">${d.era.toUpperCase()}</span>
      <img src="${d.image}" alt="Ilustración de ${d.name}" loading="lazy" width="360" height="240">
    </div>
    <div class="card-body">
      <h3>${d.name}</h3>
      <p class="sci">${d.scientific}</p>
      <p>${d.short}</p>
      <div class="quick-facts"><span>${d.diet}</span><span>${d.length}</span></div>
      <span class="text-link">Abrir expediente →</span>
    </div>
  </article>
`).join("");

// --- Modal / ficha ---
const modal = document.querySelector("#species-modal");
const byId = Object.fromEntries(species.map((d) => [d.id, d]));

function openSpecies(id) {
  const d = byId[id];
  if (!d) return;
  document.querySelector("#modal-image").src = d.image;
  document.querySelector("#modal-image").alt = `Ilustración de ${d.name}`;
  document.querySelector("#modal-era").textContent = d.eraDetail;
  document.querySelector("#modal-title").textContent = d.name;
  document.querySelector("#modal-scientific").textContent = d.scientific;
  document.querySelector("#modal-copy").textContent = d.copy;
  document.querySelector("#modal-facts").innerHTML = [
    ["Dieta", d.diet],
    ["Longitud", d.length],
    ["Período", d.era],
    ["Región", d.region]
  ].map((x) => `<div><strong>${x[0]}</strong>${x[1]}</div>`).join("");
  modal.showModal();
}

grid.querySelectorAll("[data-open]").forEach((card) => {
  card.addEventListener("click", () => openSpecies(card.dataset.open));
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openSpecies(card.dataset.open);
    }
  });
});

document.querySelector(".modal-close").addEventListener("click", () => modal.close());
modal.addEventListener("click", (e) => {
  const box = modal.getBoundingClientRect();
  const inside = e.clientX >= box.left && e.clientX <= box.right && e.clientY >= box.top && e.clientY <= box.bottom;
  if (!inside) modal.close();
});

// --- Filtros ---
const noResults = document.querySelector("#no-results");
document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((b) => b.classList.remove("active"));
    button.classList.add("active");
    const kind = button.dataset.filter;
    let visible = 0;
    grid.querySelectorAll(".species-card").forEach((card) => {
      const match = kind === "all" || card.dataset.kind.split(" ").includes(kind);
      card.hidden = !match;
      if (match) visible++;
    });
    noResults.hidden = visible > 0;
  });
});

// --- Botones de recursos → llevan al formulario ---
let wanted = "novedades";
document.querySelectorAll(".resource-btn").forEach((b) => {
  b.addEventListener("click", () => {
    wanted = b.dataset.resource;
    document.querySelector("#club").scrollIntoView({ behavior: "smooth" });
    setTimeout(() => document.querySelector("#lead-email").focus(), 400);
  });
});

// --- Formulario de captura (guardado local por ahora) ---
document.querySelector("#lead-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector("#lead-email").value.trim();
  const consent = document.querySelector("#consent").checked;
  const status = document.querySelector("#form-status");
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    status.textContent = "Ingresá un email válido para enviarte el Kit Paleo.";
    return;
  }
  if (!consent) {
    status.textContent = "Marcá la casilla de consentimiento para continuar.";
    return;
  }
  localStorage.setItem("paleosecrets-interest", JSON.stringify({ email, resource: wanted, createdAt: new Date().toISOString() }));
  status.textContent = "✓ ¡Listo! Tu interés quedó guardado. Activaremos el envío por email en la próxima etapa.";
  e.target.reset();
});
