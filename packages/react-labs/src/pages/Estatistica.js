import { getFuncName } from "@mozg/react-labs/src/components/Util";
import {
  Chart,
  LineController,
  RadarController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
} from "chart.js";
import { color } from "chart.js/helpers"; // THIS IS THE KEY!
import * as Chartjs from "chart.js";
const controllers = Object.values(Chartjs).filter(
  (chart) => chart.id !== undefined
);
Chart.register(...controllers);
import collect from "collect.js";
import leadingzero from "leadingzero";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import jsonData from "./assets/d_mega.json";

// console.log(
//   "getOwnPropertyNames(Chart): ",
//   Object.getOwnPropertyNames(Chart).sort()
// );

// Object.getOwnPropertyNames(Chart)
//   .sort()
//   .forEach(function (val, idx, array) {
//     console.log(`getOwnPropertyNames(${val}: `, Chart[val]);
//   });

const loadData = [...jsonData];
let jsonObj = loadData;
// jsonObj = jsonObj.slice(0, 20);
// console.log(
//   `typeof: ${typeof jsonObj} - length: ${jsonObj.length} -  jsonObj: `,
//   jsonObj
// );
// let jsonList = JSON.stringify(jsonObj);
// console.log(`typeof: ${typeof jsonList} - -  jsonList: `, jsonList);
let max_dataset_index = 60;
// max_dataset_index = max_dataset_index + 1;
let delay = 10;
let max_month = 12;

var MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Styled = styled.div`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    background-color: #222;
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
  }

  .dashboard {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    min-width: 200px;
    min-height: 500px;
  }

  .column {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    flex-wrap: wrap;
  }

  .item {
    margin: 5px;
    flex-grow: 1;
    min-height: 250px;
    min-width: 250px;
  }

  .small.item {
    min-width: 305px;
  }

  #br {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    flex-wrap: wrap;
    min-height: 250px;
  }

  #br > section {
    flex-grow: 1;
  }
`;

// https://pt-br.reactjs.org/docs/hooks-effect.html

export default () => {
  //   const [itemsCharts, setItemsCharts] = useState([]);
  //   const [intervalId, setintervalId] = useState([]);
  const [message, setMessage] = useState();
  //   const [randomImage, setRandomImage] = useState(null);

  const textJavascript = () => {
    // console.log("textJavascript: ");

    //

    // https://www.chartjs.org/samples/latest/utils.js

    const utilsJS = () => {
      //   "use strict";
      getFuncName();

      window.chartColors = {
        red: "rgb(255, 99, 132)",
        orange: "rgb(255, 159, 64)",
        yellow: "rgb(255, 205, 86)",
        green: "rgb(75, 192, 192)",
        blue: "rgb(54, 162, 235)",
        purple: "rgb(153, 102, 255)",
        grey: "rgb(201, 203, 207)",
      };

      (function (global) {
        // console.log("window: ", window);
        // console.log("global: ", global);
        var MONTHS = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];

        var COLORS = [
          "#4dc9f6",
          "#f67019",
          "#f53794",
          "#537bc4",
          "#acc236",
          "#166a8f",
          "#00a950",
          "#58595b",
          "#8549ba",
        ];

        var Samples = global.Samples || (global.Samples = {});
        var Color = global.Color;

        Samples.utils = {
          // Adapted from http://indiegamr.com/generate-repeatable-random-numbers-in-js/
          srand: function (seed) {
            this._seed = seed;
          },

          rand: function (min, max) {
            var seed = this._seed;
            min = min === undefined ? 0 : min;
            max = max === undefined ? 1 : max;
            this._seed = (seed * 9301 + 49297) % 233280;
            return min + (this._seed / 233280) * (max - min);
          },

          numbers: function (config) {
            var cfg = config || {};
            var min = cfg.min || 0;
            var max = cfg.max || 1;
            var from = cfg.from || [];
            var count = cfg.count || 8;
            var decimals = cfg.decimals || 8;
            var continuity = cfg.continuity || 1;
            var dfactor = Math.pow(10, decimals) || 0;
            var data = [];
            var i, value;

            for (i = 0; i < count; ++i) {
              value = (from[i] || 0) + this.rand(min, max);
              if (this.rand() <= continuity) {
                data.push(Math.round(dfactor * value) / dfactor);
              } else {
                data.push(null);
              }
            }

            return data;
          },

          labels: function (config) {
            var cfg = config || {};
            var min = cfg.min || 0;
            var max = cfg.max || 100;
            var count = cfg.count || 8;
            var step = (max - min) / count;
            var decimals = cfg.decimals || 8;
            var dfactor = Math.pow(10, decimals) || 0;
            var prefix = cfg.prefix || "";
            var values = [];
            var i;

            for (i = min; i < max; i += step) {
              values.push(prefix + Math.round(dfactor * i) / dfactor);
            }

            return values;
          },

          months: function (config) {
            var cfg = config || {};
            var count = cfg.count || 12;
            var section = cfg.section;
            var values = [];
            var i, value;

            for (i = 0; i < count; ++i) {
              value = MONTHS[Math.ceil(i) % 12];
              values.push(value.substring(0, section));
            }

            return values;
          },

          color: function (index) {
            return COLORS[index % COLORS.length];
          },

          transparentize: function (color, opacity) {
            var alpha = opacity === undefined ? 0.5 : 1 - opacity;
            return Color(color).alpha(alpha).rgbString();
          },
        };

        // DEPRECATED
        window.randomScalingFactor = function () {
          return Math.round(Samples.utils.rand(-100, 100));
        };

        // INITIALIZATION

        Samples.utils.srand(Date.now());
      })(window);
    };

    // view-source:https://www.chartjs.org/samples/latest/charts/bar/vertical.html

    const mainJS = () => {
      getFuncName();

      //

      //   var color = Chart.instances.color;
      var colorNames = Object.keys(window.chartColors);

      //

      //   function Dump(obj) {
      //     for (var [key, value] of Object.entries(obj)) {
      //       let label = key;
      //       if (typeof value === "function") {
      //         console.log(`${label}: `, Object.getOwnPropertyNames(value).sort());
      //       } else {
      //         console.log(`${label}: `, value);
      //       }
      //     }
      //   }

      //

      var dynamicColors = function () {
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        return "rgb(" + r + "," + g + "," + b + ")";
      };

      //

      //

      // https://www.it-swarm.dev/pt/javascript/mostrar-valores-na-parte-superior-das-barras-no-chart.js/829820107/

      function onComplete_1(event) {
        console.log("onComplete_1");

        let chartInstance = event.chart;
        let ctx = chartInstance.ctx;

        // ctx.font = Chart.instances.fontString(
        //   Chart.defaults.global.defaultFontSize,
        //   Chart.defaults.global.defaultFontStyle,
        //   Chart.defaults.global.defaultFontFamily
        // );
        ctx.textAlign = "center";
        ctx.textBaseline = "bottom";

        chartInstance.data.datasets.forEach(function (dataset, i) {
          var meta = chartInstance.getDatasetMeta(i);

          meta.data.forEach(function (bar, index) {
            var data = dataset.data[index];
            ctx.fillText(data, bar.x, bar.y - 5);
          });
        });
      }

      //

      // https://jsfiddle.net/4mxhogmd/1/

      function onComplete_2(event) {
        console.log("onComplete_2");

        let chartInstance = event.chart;
        let ctx = chartInstance.ctx;

        // ctx.font = Chart.instances.fontString(
        //   Chart.defaults.global.defaultFontSize,
        //   Chart.defaults.global.defaultFontStyle,
        //   Chart.defaults.global.defaultFontFamily
        // );
        ctx.textAlign = "center";
        ctx.textBaseline = "bottom";

        chartInstance.data.datasets.forEach(function (dataset, i) {
          var meta = chartInstance.getDatasetMeta(i);
          meta.data.forEach(function (bar, index) {
            var data = dataset.data[index];
            ctx.fillText(data, bar.x, bar.y - 5);
          });
        });
      }

      //

      document
        .getElementById("shuffle")
        .addEventListener("click", function () {});

      function ChartsSorting() {
        // Object.getOwnPropertyNames(Chart)
        //   .sort()
        //   .forEach(function (val, idx, array) {
        //     console.log(`getOwnPropertyNames(${val}: `, Chart[val]);
        //   });
        Chart.instances.each(Chart.instances, function (chart) {
          if (chart.ctx.canvas.id === "chart_1") {
            console.log("chart: ", chart);

            let datasets = [];

            let labelArray = chart.data.labels;
            let dataArray = chart.data.datasets[0].data.slice();
            //   console.log(`labelArray: `, labelArray);
            //   console.log(`dataArray: `, dataArray);

            dataArray.forEach(function (value, index) {
              // console.log(`index: ${index} value:: `, value);
              datasets.push({
                label: labelArray[index],
                value: value,
              });
            });

            console.log(`datasets: `, datasets);

            let sorted = datasets.sort(function (a, b) {
              return a.value - b.value;
            });

            console.log(`sorted: `, sorted);

            //

            //  labels & datas = array lists

            //   console.log(`typeof ${typeof datasets} datasets: `, datasets);

            var labels = [];
            var datas = [];
            datasets.forEach(function (item, index) {
              // console.log(`index: ${index} item:: `, item);
              let label = item.label;
              let data = item.value;
              labels.push(label);
              datas.push(data);
            });

            //

            chart.data.labels = labels;
            chart.data.datasets[0].data = datas;
            chart.update();

            //
          }
        });
      }

      setTimeout(function () {
        // ChartsSorting();
        console.warn("ChartsSorting");
      }, 1000);

      // https://jsfiddle.net/kingBethal/r23y0h6n/

      //   let plugin_chartjs_sort_data = {
      //     beforeUpdate: function(chart) {
      //       if (chart.options.sort) {
      //         let dataArray = chart.data.datasets[0].data.slice();
      //         let dataIndexes = dataArray.map((d, i) => i);
      //         dataIndexes.sort((a, b) => {
      //           return dataArray[a] - dataArray[b];
      //         });

      //         // sort data array as well
      //         dataArray.sort((a, b) => a - b);

      //         // At this point dataIndexes is sorted by value of the data, so we know how the indexes map to each other
      //         let meta = chart.getDatasetMeta(0);
      //         let newMeta = [];
      //         // let labels = chart.data.labels;
      //         let newLabels = [];

      //         meta.data.forEach((a, i) => {
      //           newMeta[dataIndexes[i]] = a;
      //           newLabels[dataIndexes[i]] = chart.data.labels[i];
      //         });

      //         meta.data = newMeta;
      //         chart.data.datasets[0].data = dataArray;
      //         chart.data.labels = newLabels;
      //       }
      //     }
      //   };

      //   Chart.defaults.global.animation.duration = 2000;

      //   Chart.plugins.register(plugin_chartjs_sort_data);

      //

      // chart_0
      //   (function () {
      //     // "use strict";

      //     console.warn("chart_1");

      //     function chart(run = true) {
      //       if (run === false) return false;
      //       getFuncName();
      //       //

      //       let obj = ["line", "bar", "radar"];
      //       obj = ["bar"];
      //       let length = obj.length - 1;
      //       let random = _.random(0, length);
      //       let typeRandom = obj[random];

      //       //   console.log("typeRandom: ", typeRandom);

      //       //

      //       console.log(
      //         "%c - ",
      //         "background: black; color: white",
      //         `collection data`
      //       );

      //       //

      //       let datasets = [];

      //       const collection = collect(jsonObj);

      //       let i0 = 1;
      //       while (i0 <= 60) {
      //         let dataset_id = i0;
      //         //

      //         let filterByDataSet = collection.filter((value, key) => {
      //           //   return value > 2;
      //           let dezenas = value.dezenas;
      //           let condition_2 = dezenas.includes(dataset_id);
      //           return condition_2 ? value : 0;
      //         });

      //         // let AllFilterByDataSet = filterByDataSet.all();

      //         let CountFilterByDataSet = filterByDataSet.count();

      //         //

      //         let backgroundColor = [];
      //         backgroundColor.push(dynamicColors());

      //         let value = CountFilterByDataSet ? CountFilterByDataSet : 0;

      //         datasets.push({
      //           label: `Dataset: ${dataset_id} `,
      //           backgroundColor: backgroundColor,
      //           borderColor: backgroundColor,
      //           borderWidth: 1,
      //           data: [value],
      //         });

      //         //
      //         i0++;
      //       }

      //       //  labels & datas = array lists

      //       //   console.log(`typeof ${typeof datasets} datasets: `, datasets);

      //       var labels = [];
      //       var datas = [];
      //       var backgroundColors = [];
      //       datasets.forEach(function (value, index) {
      //         //   console.log(`index: ${index} value:: `, value);
      //         let label = value.label;
      //         let data = value.data[0];
      //         let backgroundColor = value.backgroundColor;
      //         labels.push(label);
      //         datas.push(data);
      //         backgroundColors.push(backgroundColor);
      //       });

      //       //

      //       let config = {
      //         type: typeRandom,
      //         data: {
      //           labels: labels,
      //           datasets: [
      //             {
      //               label: "Index",
      //               backgroundColor: backgroundColors,
      //               borderColor: backgroundColors,
      //               fillColor: backgroundColors,
      //               strokeColor: backgroundColors,
      //               highlightFill: backgroundColors,
      //               highlightStroke: backgroundColors,
      //               borderWidth: 1,
      //               data: datas,
      //             },
      //           ],
      //         },
      //         options: {
      //           responsive: true,
      //           legend: {
      //             display: true,
      //             position: "top",
      //           },
      //           title: {
      //             display: true,
      //             text: "Números mais sorteados entre o periodo 11/03/1996 - 02/05/2020",
      //           },
      //           animation: {
      //             duration: 1,
      //             onComplete: function (event) {
      //               //  onComplete_0(event);
      //             },
      //           },
      //         },
      //       };

      //       console.log("config: ", config);

      //       //

      //       console.log(
      //         "%c - ",
      //         "background: black; color: white",
      //         `new chart_0`
      //       );

      //       let elementId, element;

      //       elementId = "legend_0";
      //       element = document.createElement("div");
      //       element.id = elementId;
      //       document.getElementById("chart-container").appendChild(element);

      //       elementId = "chart_0";
      //       element = document.createElement("canvas");
      //       element.id = elementId;
      //       document.getElementById("chart-container").appendChild(element);

      //       let ctx = document.getElementById(elementId).getContext("2d");

      //       new Chart(ctx, config);

      //       console.log("new chart_0");
      //     }
      //     //
      //     chart();
      //     //
      //   })();

      // chart_1
      (function () {
        // "use strict";

        console.warn("chart_1");

        function chart(run = true) {
          if (run === false) return false;
          getFuncName();
          //

          let obj = ["line", "bar", "radar"];
          obj = ["bar"];
          let length = obj.length - 1;
          let random = _.random(0, length);
          let typeRandom = obj[random];

          //   console.log("typeRandom: ", typeRandom);

          //

          console.log(
            "%c - ",
            "background: black; color: white",
            `collection data`
          );

          let datasets = [];

          const collection = collect(jsonObj);

          let i1 = 1;
          while (i1 < max_dataset_index) {
            let dataset_id = i1;
            //

            let filterByDataSet = collection.filter((value, key) => {
              //   return value > 2;
              let dezenas = value.dezenas;
              let condition_2 = dezenas.includes(dataset_id);
              return condition_2 ? value : 0;
            });

            // console.log(
            //   ` dataset_index: ${dataset_id} - filterByDataSet : `,
            //   filterByDataSet
            // );

            // let AllFilterByDataSet = filterByDataSet.all();

            // console.log(
            //   `dataset_index: ${dataset_id} - AllFilterByDataSet : `,
            //   AllFilterByDataSet
            // );

            let CountFilterByDataSet = filterByDataSet.count();

            // console.log(
            //   `dataset_index: ${dataset_id} - CountFilterByDataSet : `,
            //   CountFilterByDataSet
            // );

            //

            let backgroundColor = [];
            backgroundColor.push(dynamicColors());

            let value = CountFilterByDataSet ? CountFilterByDataSet : 0;

            datasets.push({
              label: `Dataset: ${dataset_id} `,
              backgroundColor: backgroundColor,
              borderColor: backgroundColor,
              borderWidth: 1,
              data: [value],
            });

            //
            i1++;
          }

          //  labels & datas = array lists

          //   console.log(`typeof ${typeof datasets} datasets: `, datasets);

          var labels = [];
          var datas = [];
          var backgroundColors = [];
          datasets.forEach(function (value, index) {
            //   console.log(`index: ${index} value:: `, value);
            let label = value.label;
            let data = value.data[0];
            let backgroundColor = value.backgroundColor;
            labels.push(label);
            datas.push(data);
            backgroundColors.push(backgroundColor);
          });

          //

          let config = {
            type: typeRandom,
            data: {
              labels: labels,
              datasets: [
                {
                  label: "Index",
                  backgroundColor: backgroundColors,
                  borderColor: backgroundColors,
                  fillColor: backgroundColors,
                  strokeColor: backgroundColors,
                  highlightFill: backgroundColors,
                  highlightStroke: backgroundColors,
                  borderWidth: 1,
                  data: datas,
                },
              ],
            },
            options: {
              responsive: true,
              legend: {
                display: true,
                position: "top",
              },
              title: {
                display: true,
                text: "Numeros mais sorteados de cada mês entre o periodo 11/03/1996 - 02/05/2020",
              },
              animation: {
                duration: 1,
                onComplete: function (event) {
                  onComplete_1(event);
                },
              },
            },
          };

          console.log("config: ", config);

          //

          console.log(
            "%c - ",
            "background: black; color: white",
            `new chart_1`
          );

          let elementId, element;

          elementId = "legend_1";
          element = document.createElement("div");
          element.id = elementId;
          document.getElementById("chart-container").appendChild(element);

          elementId = "chart_1";
          element = document.createElement("canvas");
          element.id = elementId;
          document.getElementById("chart-container").appendChild(element);

          let ctx = document.getElementById(elementId).getContext("2d");

          new Chart(ctx, config);

          console.log("new chart_1");
        }
        //
        chart();
        //
      })();

      // chart_2
      (function () {
        // "use strict";

        console.warn("chart_2");

        function chart(run = true) {
          if (run === false) return false;
          getFuncName();
          //

          let obj = ["line", "bar", "radar"];
          obj = ["bar"];
          let length = obj.length - 1;
          let random = _.random(0, length);
          let typeRandom = obj[random];

          //   console.log("typeRandom: ", typeRandom);

          //

          console.log(
            "%c - ",
            "background: black; color: white",
            `collection data`
          );

          var datasets_month = [];

          const collection = collect(jsonObj);

          let i2 = 0;
          while (i2 < max_month) {
            let month_index = i2;
            let month = i2 + 1;
            let leading_month = leadingzero(month, 2);

            console.log(
              "%c - ",
              "background: black; color: white",
              `month: `,
              month
            );

            //

            datasets_month[month_index] = [];

            //

            const filterByMonth = collection.where(
              "datasorteio_month",
              leading_month
            );

            // console.log(
            //   ` leading_month: ${leading_month} - filterByMonth : `,
            //   filterByMonth
            // );

            // let AllFilterByMonth = filterByMonth.all();

            // console.log(
            //   ` leading_month: ${leading_month} - AllFilterByMonth : `,
            //   AllFilterByMonth
            // );

            let CountFilterByMonth = filterByMonth.count();

            // console.log(
            //   `leading_month: ${leading_month} - CountFilterByMonth : `,
            //   CountFilterByMonth
            // );

            //

            if (CountFilterByMonth > 0) {
              let i1 = 1;
              while (i1 < max_dataset_index) {
                let dataset_id = i1;

                //

                //

                let filterByDataSet = filterByMonth.filter((value, key) => {
                  //   return value > 2;
                  let dezenas = value.dezenas;
                  let condition_2 = dezenas.includes(dataset_id);
                  return condition_2 ? value : 0;
                });

                // console.log(
                //   ` dataset_index: ${dataset_id} - filterByDataSet : `,
                //   filterByDataSet
                // );

                // let AllFilterByDataSet = filterByDataSet.all();

                // console.log(
                //   `dataset_index: ${dataset_id} - AllFilterByDataSet : `,
                //   AllFilterByDataSet
                // );

                let CountFilterByDataSet = filterByDataSet.count();

                // console.log(
                //   `dataset_index: ${dataset_id} - CountFilterByDataSet : `,
                //   CountFilterByDataSet
                // );

                //

                let backgroundColor = [];
                backgroundColor.push(dynamicColors());

                let value = CountFilterByDataSet ? CountFilterByDataSet : 0;

                datasets_month[month_index].push({
                  label: `Dataset: ${dataset_id} `,
                  backgroundColor: backgroundColor,
                  borderColor: backgroundColor,
                  borderWidth: 1,
                  data: [value],
                });

                // console.log(
                //   "datasets_month[month_index].push: ",
                //   datasets_month
                // );

                //
                i1++;
              }

              //

              //   console.log(
              //     `typeof ${typeof datasets_month} datasets_month:: `,
              //     datasets_month
              //   );

              //
            }

            //

            i2++;
          }

          //

          //   setItemsCharts(itemsCharts => [...itemsCharts, datasets_month]);

          //

          console.log(
            "%c - ",
            "background: black; color: white",
            `new Chart(s)`
          );

          let i = 0;
          while (i < max_month) {
            console.log(
              "%c - ",
              "background: black; color: white",
              `chart_2_${i + 1}: `
            );

            //

            let month_index = i;
            let month = i + 1;

            //

            // console.log("datasets_month: ", datasets_month);

            let datasets = datasets_month[month_index];

            // console.log(
            //   `typeof ${typeof datasets} datasets_month:: `,
            //   datasets
            // );

            //  labels & datas = array lists

            // console.log(`typeof ${typeof datasets} datasets: `, datasets);

            let labels = [];
            let datas = [];
            let backgroundColors = [];
            datasets.forEach(function (value, index) {
              //   console.log(`index: ${index} value:: `, value);
              let label = value.label;
              let data = value.data[0];
              let backgroundColor = value.backgroundColor;
              labels.push(label);
              datas.push(data);
              backgroundColors.push(backgroundColor);
            });

            // console.log("labels: ", labels);

            //

            let config = {
              type: typeRandom,
              data: {
                labels: labels,
                datasets: [
                  {
                    label: MONTHS[month_index],
                    backgroundColor: backgroundColors,
                    borderColor: backgroundColors,
                    fillColor: backgroundColors,
                    strokeColor: backgroundColors,
                    highlightFill: backgroundColors,
                    highlightStroke: backgroundColors,
                    borderWidth: 1,
                    data: datas,
                  },
                ],
              },
              options: {
                responsive: true,
                legend: {
                  display: true,
                  position: "top",
                },
                title: {
                  display: true,
                  text: MONTHS[month_index],
                },
                animation: {
                  duration: 1,
                  onComplete: function (event) {
                    onComplete_2(event);
                  },
                },
              },
            };

            // console.log("config: ", config);

            //

            let elementId, element;

            elementId = "legend_2_" + month;
            element = document.createElement("div");
            element.id = elementId;
            document.getElementById("chart-container").appendChild(element);

            elementId = "chart_2_" + month;
            element = document.createElement("canvas");
            element.id = elementId;
            document.getElementById("chart-container").appendChild(element);

            let ctx = document.getElementById(elementId).getContext("2d");

            new Chart(ctx, config);

            console.log("new chart_2_" + month);

            i++;
          }
        }
        //
        chart();
        //
      })();

      //
    };

    //

    utilsJS();
    mainJS();

    //
  };

  // Similar ao componentDidMount e componentDidUpdate:
  useEffect(() => {
    getFuncName();

    textJavascript();
    //
  }, []);

  return (
    <>
      <Styled>
        <div className='container-fluid'>
          <div className='card '>
            <div className='card-header text-center'>
              {message ? message : "Chart.js"}
            </div>
            <div className='card-body'>
              <div id='chart-container'></div>
            </div>
            <div className='card-footer text-muted text-center'>
              <div style={{ display: "none" }}>
                <button id='randomizeData'>Randomize Data</button>
                <button id='addDataset'>Add Dataset</button>
                <button id='removeDataset'>Remove Dataset</button>
                <button id='addData'>Add Data</button>
                <button id='removeData'>Remove Data</button>
              </div>
              <div style={{ display: "none" }}>
                <button id='Smooth'>Smooth</button>
                <button id='Randomize'>Randomize</button>
              </div>
              <button
                type='button'
                className='btn btn-primary'
                id='shuffle'
                style={{ display: "none" }}
              >
                Sort Data
              </button>

              {/* <div>
                {(() => {
                  console.log("IIFE - render");
                  //   console.log("intervalId: ", intervalId);
                  //   let jsonIntervalId = JSON.stringify(intervalId);
                  //   let jsoncCartsData = JSON.stringify(itemsCharts);
                  console.log(
                    `itemsCharts ${typeof itemsCharts}: `,
                    itemsCharts
                  );
                  //   let itemsChartsDepp = [...itemsCharts];
                  //   itemsChartsDepp = JSON.stringify(itemsChartsDepp);
                  return (
                    <>
                      <h1>{Math.random()}</h1>
                      <hr />
                      <span>
                        {typeof itemsCharts} {Object.keys(itemsCharts).length}{" "}
                        {JSON.stringify(itemsCharts)}
                      </span>
                    </>
                  );
                })()}

                <hr />

                {itemsCharts.map((item, index) => (
                  <>
                    <p key={index} style={{ border: "2px solid red" }}>
                      {index} - {JSON.stringify(item)}
                    </p>
                  </>
                ))}

                <hr />

                {(() => {
                  if (!_.isEmpty(intervalId)) {
                  }
                })()}
              </div> */}
            </div>
          </div>
        </div>
        <p>&nbsp;</p>
      </Styled>
    </>
  );
};
