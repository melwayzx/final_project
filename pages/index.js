import Head from "next/head";
import CovidReport from "../src/services/covid-reports";
import MenuBar from "../src/components/MenuBar";
import LandingCard from "../src/components/LandingCard";
import Navbar from "react-bootstrap/Navbar";
import TableChart from "../src/components/Table";
import PieChartData from "../src/components/Chart/PieChartData";

export default function index(props) {
  const {
    domesticDailyCase,
    domesticSum,
    // confirmGlobal,
    // deathGlobal,
    // recoveredGlobal,
  } = props;
  // console.log(`Domestic daily case`, domesticDailyCase);
  // console.log(`domesticSum`, domesticSum);

  return (
    <div>
      <Head>
        <title>Covid-19 updates </title>
      </Head>
      <LandingCard domesticDailyCase={domesticDailyCase} />
      {/* <PieChart domesticSum={domesticSum} /> */}
      <PieChartData domesticSum={domesticSum} />
      {/* <TableChart domesticSum={domesticSum} /> */}
    </div>
  );
}

export async function getServerSideProps() {
  const domesticDailyCase = await CovidReport.getDomesticDailyCase();
  const domesticSum = await CovidReport.getDomesticSum();
  // const confirmGlobal = await CovidReport.getConfirmGlobal();
  // const deathGlobal = await CovidReport.getDeathGlobal();
  // const recoveredGlobal = await CovidReport.getRecoveredGlobal();

  return {
    props: {
      domesticDailyCase,
      domesticSum,
      // confirmGlobal,
      // deathGlobal,
      // recoveredGlobal,]
    }, // will be passed to the page component as props
  };
}
