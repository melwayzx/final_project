import Head from "next/head";
import CovidReport from "../src/services/covid-reports";
import SumCard from "../src/components/Card/SumCard";
import GenderSumCard from "../src/components/Card/GenderSumCard";
import AgeSumCard from "../src/components/Card/AgeSumCard";
import ThMap from "../src/components/Map/ThMap";
import TableSum from '../src/components/Chart/TableSum';
import survey from '../src/components/survey';
import LineCharts from '../src/components/Chart/LineCharts';
import Table from '../src/components/Chart/Table';
import CardAbord from "../src/components/Card/CardAbord";
export default function index(props) {
  const {
    domesticDailyCase,
    domesticSum,

    confirmGlobal,
    // deathGlobal,
    // recoveredGlobal,
  } = props;
  console.log(`Domestic daily case`, domesticDailyCase);
  // console.log(`domesticSum`, domesticSum);
  // console.log(`confirmGlobal`, confirmGlobal);

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Head>
        <title>Covid-19 updates </title>
      </Head>
      <SumCard domesticDailyCase={domesticDailyCase} />
      <GenderSumCard domesticSum={domesticSum} />
      <survey />
      <ThMap domesticSum={domesticSum} />
      {/* <TableSum /> */}

      <CardAbord />
      <LineCharts confirmGlobal={confirmGlobal} />
      {/* <Table /> */}
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
      domesticReport: domesticSum,
      // confirmGlobal,

      // deathGlobal,
      // recoveredGlobal,]
    }, // will be passed to the page component as props
  };
}
