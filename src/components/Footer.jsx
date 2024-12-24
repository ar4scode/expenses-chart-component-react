import { chartData } from "../data/data";

const Footer = () => {
  // Calculate the total amount
  const totalAmount = chartData.reduce((sum, eachChart) => sum + eachChart.amount, 0);

  return (
    <footer>
      <p>Total this month</p>
      <div className="total-profit-info">
        <div className="total-money">
          <p>${totalAmount.toFixed(2)}</p> {/* Display the total with two decimal places */}
        </div>
        <div className="profit-info">
          <p className="profit">+2.4%</p>
          <p>from last month</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
