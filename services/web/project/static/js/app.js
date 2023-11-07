//BASE_URL = "http://roma.unp.edu.ar" //en servidor
//BASE_URL = "http://localhost" // local con docker-compose.prod.yml
BASE_URL = "http://localhost:5000" // local con docker-compose.yml
// config map
let config = {
  minZoom: 1,
  maxZoom: 15,
};
// magnification with which the map will start
const zoom = 5;
// co-ordinates
const lat = -49.0;
const lng = -60.0;

const listInst = {
  IAFE: {
    id:"IAFE",
    titulo: "IAFE",
    imagen: "IAFE.jpg",
    descripcion: "description...",
    direccion: "...",
    localidad: "...",
    provincia: "...",
    web: "https://www.argentina.gob.ar/inidep",
    geonode: "",
    geonetwork: "",
    activa: false,
    equipamiento: "Estación meteorológica y calidad de agua"
  },
  INIDEP: {
    id:"INIDEP",
    titulo: "INIDEP",
    imagen: "INIDEP.png",
    descripcion:
      "Instituto Nacional de Investigación y Desarrollo Pesquero. Asesoramos en el uso racional de los recursos sostenibles con el objetivo de preservar el ecosistema marino para las generaciones futuras.",
    direccion: "Paseo Victoria Ocampo Nº1, Escollera Norte",
    localidad: "Mar del Plata",
    provincia: "Pcia de Buenos Aires",
    web: "https://www.argentina.gob.ar/inidep",
    geonode: "",
    geonetwork: "",
    activa: false,
    equipamiento: "Estación meteorológica, calidad de agua y LANDER"
  },
  IADO: {
    id:"IADO",
    titulo: "IADO",
    imagen: "IADO.jpg",
    descripcion:
      "Instituto Argentino de Oceanografía.",
    direccion: "FLorida 800",
    localidad: "Bahia Blanca",
    provincia: "Pcia de Buenos Aires",
    web: "https://iado.conicet.gov.ar/",
    geonode: "",
    geonetwork: "",
    activa: true,    
    equipamiento: "Estación meteorológica, calidad de agua y LANDER"
  },
  CIMAS: {
    id:"CIMAS",
    titulo: "CIMAS",
    imagen: "CIMAS.png",
    descripcion: "Centro de Investigación Aplicada y Transferencia Tecnológica en Recursos Marinos “Almirante Storni” (CIMAS) Sus objetivos se orientan a contribuir al desarrollo sostenible de la región norpatagónica poniendo en valor el potencial de su capital humano y sus recursos naturales renovables en general y en particular los vinculados a los ecosistemas marinos y costeros, mediante la investigación, el desarrollo tecnológico, la transferencia de conocimientos y la capacitación, todo ello en forma coordinada y teniendo en cuenta el interés común de las partes que lo integran.",
    direccion: "Gral Güemes",
    localidad: "San Antonio Oeste",
    provincia: "Rio Negro",
    web: "https://cimas.conicet.gov.ar/",
    geonode: "",
    geonetwork: "",
    activa: false,
    equipamiento: "Estación meteorológica, calidad de agua y LANDER"
  },
  CESIMAR: {
    id:"CESIMAR",
    titulo: "CESIMAR",
    imagen: "CESIMAR.png",
    descripcion: "El Centro para el Estudio de Sistemas Marinos, perteneciente al Consejo Nacional de Investigaciones Científicas y Técnicas (CESIMAR-CONICET) es una de las unidades de investigación de mayor envergadura en Patagonia en términos de sus recursos humanos. Se caracteriza por el uso de enfoques multidisciplinarios para el estudio del funcionamiento de los ecosistemas marinos costeros y oceánicos, el manejo sustentable de sus recursos, y la evaluación del impacto antropogénico sobre los mismos debido a actividades económicas de importancia regional tales como la pesca, el turismo, y la explotación de hidrocarburos.",
    direccion: "Boulevard Brown 2915",
    localidad: " Puerto Madryn",
    provincia: "Chubut",
    web: "https://cesimar.conicet.gov.ar/",
    geonode: "",
    geonetwork: "",
    activa: false,    
    equipamiento: "Estación meteorológica, calidad de agua y LANDER"
  },
  IIDEPYS: {
    id:"IIDEPYS",
    titulo: "IIDEPyS",
    imagen: "IIDEPYS.png",
    descripcion: "description...",
    direccion: "...",
    localidad: "...",
    provincia: "...",
    web: "https://www.argentina.gob.ar/inidep",
    geonode: "",
    geonetwork: "",
    activa: false,    
    equipamiento: "Estación meteorológica, calidad de agua y LANDER"
  },
  CITSC: {
    id:"CITSC",
    titulo: "CIT - Santa Cruz",
    imagen: "CITSC.png",
    descripcion: "El CIT Santa Cruz se creó como unidad de responsabilidad compartida o de triple dependencia entre el CONICET, la Universidad Nacional de la Patagonia Austral y la Universidad Tecnológica Nacional Facultad Regional Santa Cruz. Es su objetivo integrar los recursos humanos existentes en la región y priorizar las siguientes temáticas de investigación: Energía, Alimentos, Gas y petróleo, Medio ambiente, Minería, Sistemas embebidos, Turismo y producción de bienes culturales",
    direccion: "Av. Gregores y Piloto Lero Rivera",
    localidad: "Río Gallegos",
    provincia: "Santa Cruz",
    web: "https://www.conicet.gov.ar/centro-de-investigaciones-y-transferencia-de-santa-cruz-cit-santa-cruz/",
    geonode: "",
    geonetwork: "",
    activa: false,    
    equipamiento: "Estación meteorológica, calidad de agua y LANDER"
  },
  CADIC: {
    id:"CADIC",
    titulo: "CADIC",
    imagen: "CADIC.jpg",
    descripcion:
      "El Centro Austral de Investigaciones Científicas (CADIC) es el centro multidisciplinario de investigación más austral del mundo -a excepción de las bases de Antártida-. Es reconocido a nivel nacional e internacional por la excelencia de sus trabajos científicos y su compromiso regional en el extremo sur de América y la Antártida. La importancia del Centro no puede ser comprendida cabalmente sin tener en cuenta su particular ubicación geográfica: una pujante zona de gran dinámica y crecimiento económico, caracterizada por procesos culturales y naturales únicos, de alto interés geopolítico y puerta de entrada a la Antártida.",
    direccion: "Bernardo Houssay 200",
    localidad: "Ushuaia",
    provincia: "Tierra del Fuego",
    web: "https://cadic.conicet.gov.ar/",
    geonode: "http://roma-geonode.iado-conicet.gob.ar/catalogue/#/dataset/5",
    geonetwork:
      "http://roma-geonetwork.iado-conicet.gob.ar/geonetwork/srv/spa/catalog.search#/metadata/6f3c176f-00bf-494a-8a1d-1c2da32f7292", 
    activa: true,
    equipamiento: "Estación meteorológica, calidad de agua y LANDER "
  },
  CARLINI: {
    id:"CARLINI",
    titulo: "IAA BASE CARLINI",
    imagen: "CARLINI.jpeg",
    descripcion:
      "El Instituto Antártico Argentino (IAA) es un organismo científico tecnológico, orientado bajo normas políticas del Estado nacional. Fue creado el 17 de abril de 1951 por el Decreto del Poder Ejecutivo Nacional Nº 7338. Su fundador y primer director fue el entonces Coronel Hernán Pujato. Es integrante activo del Sistema Nacional de Ciencia y Tecnología del Estado Argentino, y es pionero a nivel internacional en el desarrollo de investigación antártica.",
    direccion: "25 de mayo 1143",
    localidad: "San Martín",
    provincia: "Provincia de Buenos Aires",
    web: "https://www.cancilleria.gob.ar/es/iniciativas/dna/instituto-antartico-argentino",
    geonode: "http://roma-geonode.iado-conicet.gob.ar/catalogue/#/dataset/1",
    geonetwork:
      "http://roma-geonetwork.iado-conicet.gob.ar/geonetwork/srv/spa/catalog.search#/metadata/95a36b1c-9453-46fd-b445-111df068de42",
    activa: false,    
    equipamiento: "Estación meteorológica, calidad de agua y LANDER"
  },
};

const map = L.map("map", config).setView([lat, lng], zoom);

// calling map
var argenmap = new L.tileLayer(
  "https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/capabaseargenmap@EPSG%3A3857@png/{z}/{x}/{-y}.png",
  {
    minZoom: 1,
    maxZoom: 15,
  }
).addTo(map);

var pane = map.createPane("fixed", document.getElementById("map"));

// Coordenadas de los puertos
const createBodyPopup = (nodo) => {

cuerpo = `<div class="bodyPopup">
<div class="idNode" hidden>${nodo.id}</div>
<h1 class="tituloPopup">${nodo.titulo}</h1>
<div class="contenedorImagenPopup">
    <img src="${BASE_URL}/static/img/${nodo.imagen}" alt="" class="imagePopup">
</div>
<p class="informacionPopup">
<br><b>Descripción</b><br>
${nodo.descripcion}<br>
 <b>Dirección</b><br>
 ${nodo.direccion + ", "+nodo.localidad   +", "+ nodo.provincia } <br><br>
 <b>Equipamiento</b><br>
 ${nodo.equipamiento}<br>

</p>
<div class="contendorBotonesPopup">
<a href="${nodo.web}"><button type="button" id="btnVer">Web</button></a>
<a href="${nodo.geonode}"><button type="button" id="btnMapas">Visualizaciones</button></a>
<a href="${nodo.geonetwork}"><button type="button" id="btnDatos">Datos Históricos</button></a>
</div>`;

if(nodo.activa){
  cuerpo = cuerpo + `<div class="contendorBotonesPopup">

  <div class="checkbox-wrapper-1">
    <input id="idGraficar" class="substituted" type="checkbox" aria-hidden="true" />
    <label for="idGraficar">Graficar</label>
  </div>
  
  </div>
  <figure class="highcharts-figure ocultar">
      <div id="containerTemperatura"></div>
      <div id="containerSalinidad"></div>
      <div id="containerClorofila"></div>
  </figure>`
}

  return cuerpo;
};
const points = [
  {
    lat: -34.5608847,
    lng: -58.398997,
    text: `${createBodyPopup(listInst.IAFE)}`,
    active: listInst.IAFE.activa,
  },
  {
    lat: -38.0313568540783,
    lng: -57.5322375431191,
    text: `${createBodyPopup(listInst.INIDEP)}`,
    active: listInst.INIDEP.activa,
  },
  {
    lat: -39.1477229,
    lng: -61.7234479,
    text: `${createBodyPopup(listInst.IADO)}`,
    active: listInst.IADO.activa,
  },
  {
    lat: -41.697547101624025, 
    lng: -65.00690462220645,
    text: `${createBodyPopup(listInst.CIMAS)}`,
    active: listInst.CIMAS.activa,
  },
  {
    lat: -42.73530287828471, 
    lng: -65.01912318222848,
    text: `${createBodyPopup(listInst.CESIMAR)}`,
    active: listInst.CESIMAR.activa,
  },
  {
    lat: -45.748891826180454, 
    lng: -67.36826705128189,
    text: `${createBodyPopup(listInst.IIDEPYS)}`,
    active: listInst.IIDEPYS.activa,
  },
  {
    lat: -51.61110815930979, 
    lng: -69.21991599498516,
    text: `${createBodyPopup(listInst.CITSC)}`,
    active: listInst.CITSC.activa,
  },
  {
    lat: -54.8623557850555, 
    lng: -68.48162250527832,
    text: `${createBodyPopup(listInst.CADIC)}`,
    active: listInst.CADIC.activa,
  },
  {
    lat: -62.23777004636486, 
    lng: -58.66825021710155,
    text: `${createBodyPopup(listInst.CARLINI)}`,
    active: listInst.CARLINI.activa,
  },
];

// create new div icon width svg
var blueIcon = new L.Icon({
  iconUrl: `${BASE_URL}/static/assets/marker-icon-2x-blue.png`,
  shadowUrl: `${BASE_URL}/static/assets/marker-shadow.png`,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

var greyIcon = new L.Icon({
  iconUrl: `${BASE_URL}/static/assets/marker-icon-2x-grey.png`,
  shadowUrl: `${BASE_URL}/static/assets/marker-shadow.png`,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

points.map(({ lat, lng, text, active }) => {
  // create marker and add to map
  const marker = L.marker([lat, lng], {
     icon: active? blueIcon: greyIcon
  }).addTo(map);

  // create popup, set content
  const popup = L.popup({
    pane: "fixed",
    className: "popup-fixed test",
    autoPan: false,
  }).setContent(text);

  marker.bindPopup(popup).on("click", fitBoundsPadding);
});



map.on("popupopen", function (e) {
  estacion = e.popup._contentNode.getElementsByClassName("idNode")[0].innerHTML;
  if (listInst[estacion].activa){
  document.getElementById("idGraficar").addEventListener("change", () => {
    document.querySelector(".highcharts-figure").classList.toggle("ocultar");
  });
  Highcharts.chart("containerTemperatura", {

    chart: {
        scrollablePlotArea: {
            minWidth: 400
        }
    },

    data: {
        csvURL: `${BASE_URL}/static/data/${estacion}-temperatura.csv`,
        beforeParse: function (csv) {
            return csv;
        }
    },

    title: {
        text: 'Temperatura',
        align: 'left'
    },

    subtitle: {
        text: 'Fuente: EMAC-IADO',
        align: 'left'
    },

    xAxis: {
        tickInterval: 7 * 24 * 3600 * 1000, // one week
        tickWidth: 0,
        gridLineWidth: 1,
        labels: {
            align: 'left',
            x: 3,
            y: -3
        }
    },

    yAxis: [{ // left y axis
        title: {
            text: null
        },
        labels: {
            align: 'left',
            x: 3,
            y: 16,
            format: '{value:.,0f}'
        },
        showFirstLabel: false
    }, { // right y axis
        linkedTo: 0,
        gridLineWidth: 0,
        opposite: true,
        title: {
            text: null
        },
        labels: {
            align: 'right',
            x: -3,
            y: 16,
            format: '{value:.,0f}'
        },
        showFirstLabel: false
    }],

    legend: {
        align: 'left',
        verticalAlign: 'top',
        borderWidth: 0
    },

    tooltip: {
        shared: true,
        crosshairs: true
    },

    plotOptions: {
        series: {
            cursor: 'pointer',
            className: 'popup-on-click',
            marker: {
                lineWidth: 1
            }
        }
    },

});
  Highcharts.chart("containerSalinidad", {

    chart: {
        scrollablePlotArea: {
            minWidth: 400
        }
    },

    data: {
        csvURL: `${BASE_URL}/static/data/${estacion}-conductividad.csv`,
        beforeParse: function (csv) {
            return csv;
        }
    },

    title: {
        text: 'Conductividad',
        align: 'left'
    },

    subtitle: {
        text: 'Fuente: EMAC-IADO',
        align: 'left'
    },

    xAxis: {
        tickInterval: 7 * 24 * 3600 * 1000, // one week
        tickWidth: 0,
        gridLineWidth: 1,
        labels: {
            align: 'left',
            x: 3,
            y: -3
        }
    },

    yAxis: [{ // left y axis
        title: {
            text: null
        },
        labels: {
            align: 'left',
            x: 3,
            y: 16,
            format: '{value:.,0f}'
        },
        showFirstLabel: false
    }, { // right y axis
        linkedTo: 0,
        gridLineWidth: 0,
        opposite: true,
        title: {
            text: null
        },
        labels: {
            align: 'right',
            x: -3,
            y: 16,
            format: '{value:.,0f}'
        },
        showFirstLabel: false
    }],

    legend: {
        align: 'left',
        verticalAlign: 'top',
        borderWidth: 0
    },

    tooltip: {
        shared: true,
        crosshairs: true
    },

    plotOptions: {
        series: {
            cursor: 'pointer',
            className: 'popup-on-click',
            marker: {
                lineWidth: 1
            }
        }
    },

});
  Highcharts.chart("containerClorofila", {

    chart: {
        scrollablePlotArea: {
            minWidth: 400
        }
    },

    data: {
        csvURL: `${BASE_URL}/static/data/${estacion}-clorofila.csv`,
        beforeParse: function (csv) {
            return csv;
        }
    },

    title: {
        text: 'Clorofila',
        align: 'left'
    },

    subtitle: {
        text: 'Fuente: EMAC-IADO',
        align: 'left'
    },

    xAxis: {
        tickInterval: 7 * 24 * 3600 * 1000, // one week
        tickWidth: 0,
        gridLineWidth: 1,
        labels: {
            align: 'left',
            x: 3,
            y: -3
        }
    },

    yAxis: [{ // left y axis
        title: {
            text: null
        },
        labels: {
            align: 'left',
            x: 3,
            y: 16,
            format: '{value:.,0f}'
        },
        showFirstLabel: false
    }, { // right y axis
        linkedTo: 0,
        gridLineWidth: 0,
        opposite: true,
        title: {
            text: null
        },
        labels: {
            align: 'right',
            x: -3,
            y: 16,
            format: '{value:.,0f}'
        },
        showFirstLabel: false
    }],

    legend: {
        align: 'left',
        verticalAlign: 'top',
        borderWidth: 0
    },

    tooltip: {
        shared: true,
        crosshairs: true
    },

    plotOptions: {
        series: {
            cursor: 'pointer',
            className: 'popup-on-click',
            marker: {
                lineWidth: 1
            }
        }
    },

});}
});

// remove all animation class when popupclose
map.on("popupclose", function (e) {
  removeAllAnimationClassFromMap();
});

// ------------------------------------------------

const mediaQueryList = window.matchMedia("(min-width: 700px)");

mediaQueryList.addEventListener("change", (event) => onMediaQueryChange(event));

onMediaQueryChange(mediaQueryList);

function onMediaQueryChange(event) {
  if (event.matches) {
    document.documentElement.style.setProperty("--min-width", "true");
  } else {
    document.documentElement.style.removeProperty("--min-width");
  }
}

function fitBoundsPadding(e) {
  removeAllAnimationClassFromMap();
  // get with info div
  const boxInfoWith = document.querySelector(
    ".leaflet-popup-content-wrapper"
  ).offsetWidth;

  // add class to marker
  e.target._icon.classList.add("animation");

  // create a feature group, optionally given an initial set of layers
  const featureGroup = L.featureGroup([e.target]).addTo(map);

  // check if attribute exist
  const getPropertyWidth =
    document.documentElement.style.getPropertyValue("--min-width");

  // sets a map view that contains the given geographical bounds
  // with the maximum zoom level possible
  map.fitBounds(featureGroup.getBounds(), {
    paddingTopLeft: [getPropertyWidth ? -boxInfoWith : 0, 10],
  });

  document.querySelector(".leaflet-popup").style.position = "fixed";
}

function removeAllAnimationClassFromMap() {
  // get all animation class on map
  const animations = document.querySelectorAll(".animation");
  animations.forEach((animation) => {
    animation.classList.remove("animation");
  });

  // back to default position
  map.setView([lat, lng], zoom);
}
//
