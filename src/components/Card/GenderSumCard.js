import PieChartData from "../Chart/PieChartData";

export default function GenderSumCard({ domesticSum }) {
  return (
    <div>
      <PieChartData domesticSum={domesticSum} />
    </div>
  );
}
