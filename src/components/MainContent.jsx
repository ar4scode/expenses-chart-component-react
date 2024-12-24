import { useEffect, useState } from "react";
import { chartData } from "../data/data";
import Footer from "./Footer";

export default function MainContent() {
  const [data, setData] = useState([]);
  const [hoveredChart, setHoveredChart] = useState(null); // Tracks the currently hovered chart
  const [clickedCharts, setClickedCharts] = useState([]); // Tracks the clicked charts

  useEffect(() => {
    setData(chartData);
  }, []);

  const handleClick = (day) => {
    // Toggle the clicked chart's visibility in the list
    setClickedCharts((prevClickedCharts) =>
      prevClickedCharts.includes(day)
        ? prevClickedCharts.filter((clickedDay) => clickedDay !== day) // Remove if already clicked
        : [...prevClickedCharts, day] // Add if not clicked
    );
  };

  return (
    <div className="container">
      <p>Spending - Last 7 days</p>
      <div className="charts-container">
        {data.map((eachChart) => (
          <div className="charts" key={eachChart.day}>
            <div
              className="money-chart"
              style={{
                opacity:
                  hoveredChart === eachChart.day || clickedCharts.includes(eachChart.day)
                    ? 1
                    : 0, // Show if hovered or clicked
              }}
            >
              <p>${eachChart.amount}</p>
            </div>
            <div
              className="percentage-chart"
              style={{
                height: eachChart.chartHeight,
                backgroundColor: clickedCharts.includes(eachChart.day) ? "#76cfcf" : null, // Highlight clicked charts
              }}
              onMouseEnter={() => setHoveredChart(eachChart.day)} // Set hovered chart
              onMouseLeave={() => setHoveredChart(null)} // Reset hover on mouse leave
              onClick={() => handleClick(eachChart.day)} // Toggle clicked chart
            ></div>
            <div className="days-container">{eachChart.day}</div>
          </div>
        ))}
      </div>

      <hr />
      <Footer />
    </div>
  );
}
