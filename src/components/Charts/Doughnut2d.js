// Step 1 - Include react
import React from "react";

// Step 2 - Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Step 3 - Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Step 4 - Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Step 5 - Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";

// Step 6 - Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const ExampleChart = ({chartData}) => {

// Create a JSON object to store the chart configurations
const chartConfigs = {
  type: "doughnut2d", // The chart type
  width: "100%", // Width of the chart
  height: "250", // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
    // Chart Configuration
    chart: {
      caption: "Stars per language",    //Set the chart caption
      doughnutRadius: '45%', 
      showPercentValues: 0, 
      theme: 'candy',
    },
    // Chart Data - from step 2
    data: chartData
  }
};

return (<ReactFC {...chartConfigs} />);

};

export default ExampleChart;
