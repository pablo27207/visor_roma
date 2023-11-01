Highcharts.chart("container", {
  title: {
    text: "U.S Solar Employment Growth",
    align: "left",
  },

  subtitle: {
    text: 'By Job Category. Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>.',
    align: "left",
  },

  yAxis: {
    title: {
      text: "Number of Employees",
    },
  },

  xAxis: {
    accessibility: {
      rangeDescription: "Range: 2010 to 2020",
    },
  },

  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "middle",
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false,
      },
      pointStart: 2010,
    },
  },

  series: [
    {
      name: "Installation & Developers",
      data: [
        43934, 48656, 65165, 81827, 112143, 142383, 171533, 165174, 155157,
        161454, 154610,
      ],
    },
    {
      name: "Manufacturing",
      data: [
        24916, 37941, 29742, 29851, 32490, 30282, 38121, 36885, 33726, 34243,
        31050,
      ],
    },
    {
      name: "Sales & Distribution",
      data: [
        11744, 30000, 16005, 19771, 20185, 24377, 32147, 30912, 29243, 29213,
        25663,
      ],
    },
    {
      name: "Operations & Maintenance",
      data: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        11164,
        11218,
        10077,
      ],
    },
    {
      name: "Other",
      data: [
        21908, 5548, 8105, 11248, 8989, 11816, 18274, 17300, 13053, 11906,
        10073,
      ],
    },
  ],

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500,
        },
        chartOptions: {
          legend: {
            layout: "horizontal",
            align: "center",
            verticalAlign: "bottom",
          },
        },
      },
    ],
  },
});
var objDatos = [];
var map = new Map();
// fetch(
//   "http://roma-geonetwork.iado-conicet.gob.ar/geonetwork/srv/api/records/6f3c176f-00bf-494a-8a1d-1c2da32f7292/attachments/10-2023.txt"
// )
//   .then((res) => res.text())
//   .then((content) => {
//     let lines = content.split(/\n/);
//     // console.log(lines);
//     lines.forEach(line => {
//         const claves = line.split(/\t/);
//         let newObj = {
//           FechaYhora: claves[0] + claves[1],
//           Conductividad: claves[2],
//           TemperaturaUno: claves[3],
//           NivelAgua: claves[4],
//           ConcentraciónSS: claves[5],
//           ConcentracionDeClorofila: claves[6],
//           Radiación: claves[7],
//           Temperaturados: claves[8],
//           DirecciónDelViento: claves[9],
//           VelocidadDelViento: claves[10],
//         };

//         objDatos.push(newObj);

//     });
//     console.log(objDatos);
//   });

function leerArchivo(e) {
  var archivo = e.target.files[0];
  if (!archivo) {
    return;
  }
  var lector = new FileReader();
  lector.onload = function (e) {
    var contenido = e.target.result;
    let lines = contenido.split(/\n/);
    // console.log(lines);
    lines.forEach((line) => {
      const claves = line.split(/\t/);

      let newObj = {
        FechaYhora: String(claves[0]).substring(0,8),
        Conductividad: claves[2],
        TemperaturaUno:parseFloat( claves[3]),
        NivelAgua: claves[4],
        ConcentraciónSS: claves[5],
        ConcentracionDeClorofila: claves[6],
        Radiación: claves[7],
        Temperaturados: claves[8],
        DirecciónDelViento: claves[9],
        VelocidadDelViento: claves[10],
      };

      objDatos.push(newObj);
    });
    mostrarContenido(contenido);
    map =  objDatos.reduce((map, item) => map.set(item.FechaYhora, item.TemperaturaUno), new Map());
    
 };
  lector.readAsText(archivo);
}

function mostrarContenido(contenido) {
  var elemento = document.getElementById("contenido-archivo");
  elemento.innerHTML = contenido;
  actualizarGrafico();
}

document
  .getElementById("file-input")
  .addEventListener("change", leerArchivo, false);

function actualizarGrafico() {
  
  Highcharts.chart("container", {
    title: {
      text: "Temperatura",
      align: "left",
    },
  
  
    yAxis: {
      title: {
        text: "Temperatura",
      },
    },
  
    xAxis: {
      accessibility: {
        rangeDescription: "Range: 2010 to 2024",
      },
    },
  
    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
    },
  
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
        pointStart: 2022,
      },
    },
  
    series: map,
  
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
            },
          },
        },
      ],
    },
  });
}
