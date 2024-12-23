import { useEffect, useState } from "react";
import { chartData } from "../data/data";

export default function MainContent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(chartData);
  }, []);

  return (
    <div className="container">
      <p>Spending - Last 7 days</p>
      <div className="charts-container">
        {data.map((eachChart) => {
          return (
            <div className="charts" key={eachChart.day}>
              <div className="money-chart">
                <p>${eachChart.amount}</p>
              </div>
              <div
                className="percentage-chart"
                style={{ height: eachChart.chartHeight }}
              ></div>
              <div className="days-container">{eachChart.day}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}