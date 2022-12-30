import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  // the data points should be received as props
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.vale}
          maxValue={null}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
