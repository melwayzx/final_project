import Head from "next/head";
import CovidReport from "../src/services/covid-reports";
<<<<<<< HEAD
import SumCard from "../src/components/Card/SumCard";
import GenderSumCard from "../src/components/Card/GenderSumCard";
import ThMap from "../src/components/Map/ThMap";
export default function index(props) {
  const {
    domesticDailyCase,
    domesticSum,
    domesticReport
=======
import Table from "../src/components/Chart/Table";
// import LineCharts from '../src/components/Chart/LineCharts';
// import ThMap from "../src/components/Chart/ThMap";
//import covidScale from "./covidScale";
import BarChartData from "../src/components/Chart/BarChartData";
import SumCard from "../src/components/Card/SumCard";
import GenderSumCard from "../src/components/Card/GenderSumCard";

export default function index(props) {
  const {
    // domesticDailyCase,
    // domesticSum,
    domesticCase,
>>>>>>> origin/develop
    // confirmGlobal,
    // deathGlobal,
    // recoveredGlobal,
  } = props;
  // console.log(`Domestic daily case`, domesticDailyCase);
  // console.log(`domesticSum`, domesticSum);

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      {/* <Head>
        <title>Covid-19 updates </title>
      </Head>
<<<<<<< HEAD
      <SumCard domesticDailyCase={domesticDailyCase} />
      <GenderSumCard domesticSum={domesticSum} /> */}

      <ThMap domesticReport={domesticReport} />
=======
      {/* <SumCard domesticDailyCase={domesticDailyCase} />
      <GenderSumCard domesticSum={domesticSum} /> */}
      <BarChartData domesticCase={domesticCase} />
      {/* <Table data={domesticSum} />
      <ThMap></ThMap> */}
>>>>>>> origin/develop
    </div>
  );
}

export async function getServerSideProps() {
  // const domesticDailyCase = await CovidReport.getDomesticDailyCase();
  // const domesticSum = await CovidReport.getDomesticSum();
  const domesticCase = await CovidReport.getDomesticCase();
  // const confirmGlobal = await CovidReport.getConfirmGlobal();
  // const deathGlobal = await CovidReport.getDeathGlobal();
  // const recoveredGlobal = await CovidReport.getRecoveredGlobal();

  return {
    props: {
<<<<<<< HEAD
      domesticDailyCase,
      domesticSum,
      domesticReport: domesticSum
=======
      // domesticDailyCase,
      // domesticSum,
      domesticCase,
>>>>>>> origin/develop
      // confirmGlobal,

      // deathGlobal,
      // recoveredGlobal,]
    }, // will be passed to the page component as props
  };
}
