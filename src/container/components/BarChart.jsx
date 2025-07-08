import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  Ticks,
} from "chart.js";
import React from "react";
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const BarChart = React.memo(function BarChart({ tab, color1, color2 }) {
  let chartInfo = tab;
  let step;
  if (tab === "week") step = 10;
  if (tab === "month") step = 100;
  if (tab === "year") step = 1000;

  const week = {
    labels: ["Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun"],
    datasets: [
      {
        data: [60, 50, 80, 65, 70, 90, 75],
        backgroundColor: color1,
        barThickness: 20,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
      },

      {
        data: [40, 10, 25, 30, 50, 20, 15],
        backgroundColor: color2,
        barThickness: 20,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
      },
    ],
  };

  const month = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Api",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        data: [400, 600, 400, 800, 600, 800, 600, 400, 800, 400, 800, 500],
        backgroundColor: color1,
        barThickness: 20,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
      },
      {
        data: [200, 400, 200, 200, 400, 600, 200, 600, 400, 400, 200, 200],
        backgroundColor: color2,
        barThickness: 20,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
      },
    ],
  };

  const year = {
    labels: ["2018", "2019", "2020", "2021", "2022", "2023", "2024"],
    datasets: [
      {
        data: [6000, 4000, 8000, 6500, 7000, 5000, 4000],
        backgroundColor: color1,
        barThickness: 20,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
      },
      {
        data: [1000, 2000, 2500, 3000, 1500, 4000, 1000],
        backgroundColor: color2,
        barThickness: 20,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
        },
        ticks: {
          stepSize: step,
        },
      },
    },
  };
  if (chartInfo === "week") return <Bar data={week} options={options} />;
  if (chartInfo === "month") return <Bar data={month} options={options} />;
  if (chartInfo === "year") return <Bar data={year} options={options} />;
  if (chartInfo === "all") return <Bar data={year} options={options} />;
});
export { BarChart };

const StackChart = React.memo(function StackChart({
  profitTab,
  color1,
  color2,
  stacked,
}) {
  let stackTab = profitTab;
  let step;

  if (stackTab === "day") step = 2;
  if (stackTab === "week") step = 10;
  if (stackTab === "month") step = 100;
  if (stackTab === "year") step = 1000;

  const day = {
    labels: ["mon", "tue", "wed", "thur", "fri", "sat", "sun"],
    datasets: [
      {
        data: [3, 2, 4, 1, 5, 2, 6],
        backgroundColor: color1,
        stack: "stack1",
        barThickness: 10,
      },
      {
        data: [6, 8, 10, 7, 6, 10, 8],
        backgroundColor: color2,
        stack: "stack1",
        barThickness: 10,
        borderRadius: 10,
      },
    ],
  };

  const week = {
    labels: ["Wk1", "Wk2", "Wk3", "Wk4", "Wk5"],
    datasets: [
      {
        data: [40, 10, 25, 30, 50],
        backgroundColor: color1,
        barThickness: 10,
        stack: "stack1",
      },
      {
        data: [60, 50, 80, 65, 70],
        backgroundColor: color2,
        stack: "stack1",
        barThickness: 10,
        borderRadius: 10,
      },
    ],
  };

  const month = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Api",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        data: [200, 400, 200, 200, 400, 600, 200, 600, 400, 400, 200, 200],

        backgroundColor: color1,
        stack: "stack1",
        barThickness: 10,
      },
      {
        data: [400, 600, 400, 800, 600, 800, 600, 400, 800, 400, 800, 500],
        backgroundColor: color2,
        stack: "stack1",
        barThickness: 10,
        borderRadius: 10,
      },
    ],
  };

  const year = {
    labels: ["2018", "2019", "2020", "2021", "2022", "2023", "2024"],
    datasets: [
      {
        data: [6000, 4000, 8000, 6500, 7000, 5000, 4000],
        backgroundColor: color1,
        stack: "stack1",
        barThickness: 10,
      },
      {
        data: [1000, 2000, 2500, 3000, 1500, 4000, 1000],
        backgroundColor: color2,
        stack: "stack1",
        barThickness: 10,
        borderRadius: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: {
        display: false,
      },
    },
    scales: {
      x: { stacked: stacked },
      y: {
        stacked: stacked,
        beginAtZero: true,
        title: {
          display: true,
        },
        ticks: {
          stepSize: step,
        },
      },
    },
  };

  if (stackTab === "day") return <Bar data={day} options={options} />;
  if (stackTab === "week") return <Bar data={week} options={options} />;
  if (stackTab === "month") return <Bar data={month} options={options} />;
  if (stackTab === "year") return <Bar data={year} options={options} />;
});
export { StackChart };
