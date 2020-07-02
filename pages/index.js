import Head from "next/head";
import CovidReport from "../src/services/covid-reports";
import Table from '../src/components/Chart/Table';
// import LineCharts from '../src/components/Chart/LineCharts';
import Map from '../src/components/Chart/Map';
// import covidScale from "./covidScale";
import SumCard from "../src/components/Card/SumCard";
import GenderSumCard from "../src/components/Card/GenderSumCard";
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
    <div style={{ padding: "100px", boxSixing: "border-box" }}>
      <Head>
        <title>Covid-19 updates </title>
      </Head>
      <Table> </Table>
      {/* <LineCharts confirmGlobal={confirmGlobal}></LineCharts> */}
      <covidScale></covidScale>
      {/* <Map domesticSum={domesticSum} /> */}
      <SumCard domesticDailyCase={domesticDailyCase} />
      <GenderSumCard domesticSum={domesticSum} />
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
