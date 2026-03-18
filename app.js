// ================================================================
// Comunas de la Región Metropolitana de Santiago, Chile
// Datos: centroide aproximado de cada comuna
// ================================================================

const comunas = [
  { nombre: "Santiago",        lat: -33.4569, lng: -70.6483, region: "Metropolitana", superficie: 22.4,   poblacion: 404495 },
  { nombre: "Providencia",     lat: -33.4317, lng: -70.6147, region: "Metropolitana", superficie: 14.3,   poblacion: 142079 },
  { nombre: "Ñuñoa",           lat: -33.4569, lng: -70.5983, region: "Metropolitana", superficie: 16.9,   poblacion: 207765 },
  { nombre: "Las Condes",      lat: -33.4111, lng: -70.5682, region: "Metropolitana", superficie: 99.4,   poblacion: 294295 },
  { nombre: "Vitacura",        lat: -33.3930, lng: -70.5756, region: "Metropolitana", superficie: 28.3,   poblacion: 85384  },
  { nombre: "Lo Barnechea",    lat: -33.3525, lng: -70.5172, region: "Metropolitana", superficie: 1024.5, poblacion: 105833 },
  { nombre: "Peñalolén",       lat: -33.4840, lng: -70.5368, region: "Metropolitana", superficie: 54.1,   poblacion: 216060 },
  { nombre: "La Reina",        lat: -33.4497, lng: -70.5397, region: "Metropolitana", superficie: 23.3,   poblacion: 93938  },
  { nombre: "Macul",           lat: -33.4910, lng: -70.5978, region: "Metropolitana", superficie: 13.0,   poblacion: 112015 },
  { nombre: "San Joaquín",     lat: -33.4994, lng: -70.6310, region: "Metropolitana", superficie: 9.8,    poblacion: 97606  },
  { nombre: "La Granja",       lat: -33.5311, lng: -70.6265, region: "Metropolitana", superficie: 10.1,   poblacion: 125867 },
  { nombre: "La Florida",      lat: -33.5267, lng: -70.5830, region: "Metropolitana", superficie: 70.5,   poblacion: 366368 },
  { nombre: "San Ramón",       lat: -33.5420, lng: -70.6479, region: "Metropolitana", superficie: 7.0,    poblacion: 97857  },
  { nombre: "La Pintana",      lat: -33.5840, lng: -70.6237, region: "Metropolitana", superficie: 30.0,   poblacion: 190316 },
  { nombre: "El Bosque",       lat: -33.5717, lng: -70.6689, region: "Metropolitana", superficie: 14.1,   poblacion: 175594 },
  { nombre: "Pedro Aguirre Cerda", lat: -33.4958, lng: -70.6650, region: "Metropolitana", superficie: 9.8, poblacion: 114560 },
  { nombre: "Lo Espejo",       lat: -33.5126, lng: -70.6879, region: "Metropolitana", superficie: 10.2,   poblacion: 103752 },
  { nombre: "Estación Central",lat: -33.4677, lng: -70.6820, region: "Metropolitana", superficie: 14.2,   poblacion: 130929 },
  { nombre: "Cerrillos",       lat: -33.4935, lng: -70.7128, region: "Metropolitana", superficie: 21.0,   poblacion: 80506  },
  { nombre: "Maipú",           lat: -33.5092, lng: -70.7581, region: "Metropolitana", superficie: 134.9,  poblacion: 468390 },
  { nombre: "Quinta Normal",   lat: -33.4452, lng: -70.7025, region: "Metropolitana", superficie: 12.3,   poblacion: 104012 },
  { nombre: "Lo Prado",        lat: -33.4597, lng: -70.7214, region: "Metropolitana", superficie: 15.7,   poblacion: 106272 },
  { nombre: "Pudahuel",        lat: -33.4338, lng: -70.7684, region: "Metropolitana", superficie: 205.6,  poblacion: 227668 },
  { nombre: "Cerro Navia",     lat: -33.4312, lng: -70.7313, region: "Metropolitana", superficie: 11.1,   poblacion: 148311 },
  { nombre: "Renca",           lat: -33.4063, lng: -70.7198, region: "Metropolitana", superficie: 24.0,   poblacion: 147148 },
  { nombre: "Conchalí",        lat: -33.3826, lng: -70.6664, region: "Metropolitana", superficie: 11.8,   poblacion: 131031 },
  { nombre: "Huechuraba",      lat: -33.3635, lng: -70.6404, region: "Metropolitana", superficie: 44.8,   poblacion: 98671  },
  { nombre: "Recoleta",        lat: -33.4087, lng: -70.6426, region: "Metropolitana", superficie: 15.7,   poblacion: 163511 },
  { nombre: "Independencia",   lat: -33.4220, lng: -70.6583, region: "Metropolitana", superficie: 7.5,    poblacion: 100281 },
  { nombre: "Quilicura",       lat: -33.3590, lng: -70.7288, region: "Metropolitana", superficie: 59.6,   poblacion: 218731 },
  { nombre: "Puente Alto",     lat: -33.6097, lng: -70.5756, region: "Metropolitana", superficie: 88.0,   poblacion: 568106 },
  { nombre: "Pirque",          lat: -33.6541, lng: -70.5547, region: "Metropolitana", superficie: 405.2,  poblacion: 16808  },
  { nombre: "San José de Maipo",lat: -33.6411, lng: -70.3572, region: "Metropolitana", superficie: 4853.6, poblacion: 15597  },
  { nombre: "Colina",          lat: -33.1986, lng: -70.6716, region: "Metropolitana", superficie: 961.7,  poblacion: 116716 },
  { nombre: "Lampa",           lat: -33.2934, lng: -70.8773, region: "Metropolitana", superficie: 782.7,  poblacion: 76136  },
  { nombre: "Tiltil",          lat: -33.0856, lng: -70.9251, region: "Metropolitana", superficie: 725.6,  poblacion: 16050  },
  { nombre: "San Bernardo",    lat: -33.5942, lng: -70.6991, region: "Metropolitana", superficie: 155.0,  poblacion: 246762 },
  { nombre: "Buin",            lat: -33.7317, lng: -70.7422, region: "Metropolitana", superficie: 560.0,  poblacion: 79636  },
  { nombre: "Calera de Tango", lat: -33.6467, lng: -70.7769, region: "Metropolitana", superficie: 86.2,   poblacion: 22691  },
  { nombre: "Paine",           lat: -33.8131, lng: -70.7387, region: "Metropolitana", superficie: 739.3,  poblacion: 66609  },
  { nombre: "Melipilla",       lat: -33.6929, lng: -71.2133, region: "Metropolitana", superficie: 1341.0, poblacion: 107839 },
  { nombre: "Alhué",           lat: -33.9960, lng: -71.0866, region: "Metropolitana", superficie: 1026.4, poblacion: 5156   },
  { nombre: "Curacaví",        lat: -33.4023, lng: -71.1432, region: "Metropolitana", superficie: 806.3,  poblacion: 30802  },
  { nombre: "María Pinto",     lat: -33.5367, lng: -71.1364, region: "Metropolitana", superficie: 418.6,  poblacion: 13527  },
  { nombre: "San Pedro",       lat: -33.8762, lng: -71.3048, region: "Metropolitana", superficie: 297.9,  poblacion: 11700  },
  { nombre: "Talagante",       lat: -33.6655, lng: -70.9283, region: "Metropolitana", superficie: 166.7,  poblacion: 71817  },
  { nombre: "El Monte",        lat: -33.6887, lng: -71.0183, region: "Metropolitana", superficie: 141.7,  poblacion: 31543  },
  { nombre: "Isla de Maipo",   lat: -33.7542, lng: -70.9077, region: "Metropolitana", superficie: 309.9,  poblacion: 34003  },
  { nombre: "Padre Hurtado",   lat: -33.5617, lng: -70.8217, region: "Metropolitana", superficie: 45.7,   poblacion: 66040  },
  { nombre: "Peñaflor",        lat: -33.6078, lng: -70.8826, region: "Metropolitana", superficie: 131.1,  poblacion: 89278  },
];

// ================================================================
// Color scale by population
// ================================================================

// Divisor used to scale marker radius relative to population.
// A value of 5000 keeps markers readable across the population range of
// Santiago's communes (roughly 5 000 – 570 000 inhabitants).
const POPULATION_SCALE_FACTOR = 5000;

function getColor(pop) {
  if (pop > 400000) return '#7b0000';
  if (pop > 200000) return '#c0392b';
  if (pop > 100000) return '#e74c3c';
  if (pop > 50000)  return '#e67e22';
  if (pop > 20000)  return '#f1c40f';
  return '#2ecc71';
}

// ================================================================
// Map initialization
// ================================================================
const map = L.map('map', {
  center: [-33.55, -70.68],
  zoom: 10,
  zoomControl: true
});

// Tile layer (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// ================================================================
// Markers for each commune
// ================================================================
const markers = [];

comunas.forEach(comuna => {
  const color = getColor(comuna.poblacion);

  const marker = L.circleMarker([comuna.lat, comuna.lng], {
    radius: 10 + Math.sqrt(comuna.poblacion / POPULATION_SCALE_FACTOR),
    fillColor: color,
    color: '#fff',
    weight: 2,
    opacity: 1,
    fillOpacity: 0.85
  }).addTo(map);

  const popupContent = `
    <div class="popup-title">🏙️ ${comuna.nombre}</div>
    <div class="popup-info">
      <strong>Región:</strong> ${comuna.region}<br>
      <strong>Población:</strong> ${comuna.poblacion.toLocaleString('es-CL')} hab.<br>
      <strong>Superficie:</strong> ${comuna.superficie.toLocaleString('es-CL')} km²
    </div>
  `;

  marker.bindPopup(popupContent, { maxWidth: 240 });
  marker.bindTooltip(comuna.nombre, { permanent: false, direction: 'top', className: '' });

  marker.on('mouseover', function () { this.openTooltip(); });
  marker.on('mouseout', function () { this.closeTooltip(); });

  markers.push({ comunaData: comuna, leafletMarker: marker });
});

// ================================================================
// Legend
// ================================================================
const legend = L.control({ position: 'bottomright' });
legend.onAdd = function () {
  const div = L.DomUtil.create('div', 'legend');
  div.innerHTML = `
    <h4>Población</h4>
    <div class="legend-item"><div class="legend-color" style="background:#7b0000"></div> &gt; 400.000</div>
    <div class="legend-item"><div class="legend-color" style="background:#c0392b"></div> 200.001 – 400.000</div>
    <div class="legend-item"><div class="legend-color" style="background:#e74c3c"></div> 100.001 – 200.000</div>
    <div class="legend-item"><div class="legend-color" style="background:#e67e22"></div> 50.001 – 100.000</div>
    <div class="legend-item"><div class="legend-color" style="background:#f1c40f"></div> 20.001 – 50.000</div>
    <div class="legend-item"><div class="legend-color" style="background:#2ecc71"></div> ≤ 20.000</div>
  `;
  return div;
};
legend.addTo(map);

// ================================================================
// Search functionality
// ================================================================
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const searchResults = document.getElementById('search-results');

function doSearch() {
  const q = searchInput.value.trim().toLowerCase();
  if (!q) { searchResults.style.display = 'none'; return; }

  const matches = comunas.filter(c =>
    c.nombre.toLowerCase().includes(q)
  );

  if (matches.length === 0) {
    searchResults.innerHTML = '<div class="search-result-item" style="color:#aaa;">Sin resultados</div>';
    searchResults.style.display = 'block';
    return;
  }

  searchResults.innerHTML = matches.map(c =>
    `<div class="search-result-item" data-nombre="${c.nombre}">${c.nombre}</div>`
  ).join('');
  searchResults.style.display = 'block';

  searchResults.querySelectorAll('.search-result-item').forEach(el => {
    el.addEventListener('click', () => {
      const nombre = el.dataset.nombre;
      const match = markers.find(m => m.comunaData.nombre === nombre);
      if (match) {
        map.setView([match.comunaData.lat, match.comunaData.lng], 13);
        match.leafletMarker.openPopup();
      }
      searchResults.style.display = 'none';
      searchInput.value = nombre;
    });
  });
}

searchBtn.addEventListener('click', doSearch);
searchInput.addEventListener('keydown', e => { if (e.key === 'Enter') doSearch(); });
searchInput.addEventListener('input', doSearch);
document.addEventListener('click', e => {
  if (!searchResults.contains(e.target) && e.target !== searchInput && e.target !== searchBtn) {
    searchResults.style.display = 'none';
  }
});
