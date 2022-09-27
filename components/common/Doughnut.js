import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

const p = {
  id: "centerText",
  beforeDraw: function (chart) {
    if (chart?.config?.options?.elements?.center) {
      // Get ctx from string
      const { ctx } = chart;

      // Get options from the center object in options
      const centerConfig = chart.config.options.elements.center;
      const fontStyle = centerConfig.fontStyle || "Arial";
      const txt = centerConfig.text;
      const color = centerConfig.color || "#000";
      const maxFontSize = centerConfig.maxFontSize || 75;
      const sidePadding = centerConfig.sidePadding || 20;
      const sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2);
      // Start with a base font of 30px
      ctx.font = "20px " + fontStyle;

      // Get the width of the string and also the width of the element minus 10 to give it 5px side padding
      const stringWidth = ctx.measureText(txt).width;
      const elementWidth = chart.innerRadius * 2 - sidePaddingCalculated;

      // Find out how much the font can grow in width.
      const widthRatio = elementWidth / stringWidth;
      const newFontSize = Math.floor(30 * widthRatio);
      const elementHeight = chart.innerRadius * 2;

      // Pick a new font size so it will not be larger than the height of label.
      const lineHeight = centerConfig.lineHeight || 25;
      let fontSizeToUse = Math.min(newFontSize, elementHeight, maxFontSize);
      let minFontSize = centerConfig.minFontSize;
      let wrapText = false;

      if (minFontSize === undefined) {
        minFontSize = 20;
      }

      if (minFontSize && fontSizeToUse < minFontSize) {
        fontSizeToUse = minFontSize;
        wrapText = true;
      }

      // Set font settings to draw it correctly.
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      const centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
      let centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;
      ctx.font = fontSizeToUse + "px " + fontStyle;
      ctx.fillStyle = color;

      if (!wrapText) {
        ctx.fillText(txt, centerX, centerY);
        return;
      }

      const words = txt.split(" ");
      let line = "";
      const lines = [];

      // Break words up into multiple lines if necessary
      for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + " ";
        const metrics = ctx.measureText(testLine);
        const testWidth = metrics.width;
        if (testWidth > elementWidth && n > 0) {
          lines.push(line);
          line = words[n] + " ";
        } else {
          line = testLine;
        }
      }

      // Move the center up depending on line height and number of lines
      centerY -= (lines.length / 2) * lineHeight;

      for (let n = 0; n < lines.length; n++) {
        ctx.fillText(lines[n], centerX, centerY);
        centerY += lineHeight;
      }
      //Draw text in center
      ctx.fillText(line, centerX, centerY);
    }
  },
};

ChartJS.register(p, ArcElement, Tooltip, Legend);

// ChartJS.pluginService.register(p);

export const data = {
  labels: ["Perfect", "Good ", "Bad"],
  datasets: [
    {
      data: [72, 18, 10],
      backgroundColor: ["#27C052", "#DF6666", "#ABD84B"],
      borderColor: ["#27C052", "#DF6666", "#ABD84B"],
    },
  ],
};

// const centerText = {
//     id:'centerText',
//     afterDatasetsDraw(chart){
//         let {context} = chart;
//         context.save();
//         console.log(context);
//         context.font = 'bolder 30px Arial';
//         // context.fillStyle = '#ABD84B',
//         context.fillText = 'MLO'
//     }
// }
export const options = {
  //   maintainAspectRatio: false,
  cutout: "85%",
  responsive: true,
  elements: {
    center: {
      text: "MLO",
      //   color: "#FF6384", // Default is #000000
      fontStyle: "Poppins, sans-serif", // Default is Arial
      sidePadding: 20, // Default is 20 (as a percentage)
      minFontSize: 20, // Default is 20 (in px), set to false and text will not wrap.
      lineHeight: 25, // Default is 25 (in px), used for when text wraps
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

export function DoughnutChart() {
  return (
    <>
      <div>
        <Doughnut data={data} options={options} />
      </div>
    </>
  );
}
