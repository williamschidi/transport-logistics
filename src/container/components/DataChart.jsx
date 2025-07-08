import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

function DataChart({
  values = [70, 30],
  color = ["#00c49f", "#f7f7fb"],
  borderCo = "transparent",
  borderWidth = 0,
  cutout = "50%",
}) {
  const data = {
    datasets: [
      {
        data: values,
        backgroundColor: color,
        borderColor: borderCo,
        borderWidth: borderWidth,
      },
    ],
  };
  const options = {
    cutout: cutout,
    responsive: true,
    maintainAspectRatio: false,
  };

  return <Doughnut data={data} options={options} />;
}
export default DataChart;
