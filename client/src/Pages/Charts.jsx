import React, { useEffect, useRef } from "react";
import { Line, Doughnut } from "react-chartjs-2";
import {
  ArcElement,
  CategoryScale,
  Chart as Chartjs,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";

Chartjs.register(
  CategoryScale,
  Tooltip,
  Filler,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Legend
);

// Static data for LineChart
const staticLineChartLabels = [
  "Day 1", "Day 2", "Day 3", "Day 4", "Day 5", 
  "Day 6", "Day 7", "Day 8", "Day 9", "Day 10",
  "Day 11", "Day 12", "Day 13", "Day 14", "Day 15",
  "Day 16", "Day 17", "Day 18", "Day 19", "Day 20",
  "Day 21", "Day 22", "Day 23", "Day 24", "Day 25",
  "Day 26", "Day 27", "Day 28", "Day 29", "Day 30",
  "Day 31", "Day 32", "Day 33", "Day 34", "Day 35",
  "Day 36", "Day 37", "Day 38", "Day 39", "Day 40",
  "Day 41", "Day 42", "Day 43", "Day 44", "Day 45",
  "Day 46", "Day 47", "Day 48", "Day 49", "Day 50",
  "Day 51", "Day 52", "Day 53", "Day 54", "Day 55",
  "Day 56", "Day 57", "Day 58", "Day 59", "Day 60",
  "Day 61", "Day 62", "Day 63", "Day 64", "Day 65",
  "Day 66", "Day 67", "Day 68", "Day 69", "Day 70",
];

const staticLineChartData = Array.from({ length: 70 }, () => Math.floor(Math.random() * 100));

// LineChart Options
const LineChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        display: false,
      },
    },
  },
};

// LineChart Component
const LineChart = () => {
  const data = {
    labels: staticLineChartLabels,
    datasets: [
      {
        label: "Sales",
        data: staticLineChartData,
        borderColor: "#00456D", // Dark blue
        backgroundColor: "rgba(0, 69, 109, 0.2)", // Lighter version for fill
        fill: true,
      },
    ],
  };

  return <Line data={data} options={LineChartOptions} />;
};

// DoughnutChart Options
const DoughnutChartOptions = {
  responsive: true,
  maintainAspectRatio: false, // Ensure it adapts to the container size
  plugins: {
    legend: {
      display: false,
    },
  },
  cutout: 110,
};

// Static data for DoughnutChart
const staticDoughnutLabels = ["Fruits", "Vegetables"];
const staticDoughnutData = [70, 30]; // Example percentages

// DoughnutChart Component
const DoughnutChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = chartRef.current;
    if (chart) {
      chart.resize();
    }
  }, []);

  const data = {
    labels: staticDoughnutLabels,
    datasets: [
      {
        data: staticDoughnutData,
        backgroundColor: ["#6A994E", "#F2C57C"], // Muted green for Fruits, warm beige-yellow for Vegetables
        hoverBackgroundColor: ["#588B42", "#E0AC59"], // Slightly darker shades for hover effect
        offset: 10,
      },
    ],
  };

  return <Doughnut ref={chartRef} data={data} options={DoughnutChartOptions} />;
};

// Export the charts
export { LineChart, DoughnutChart };
