import Head from "next/head";
import CovidReport from "../src/services/covid-reports";
import MenuBar from "../src/components/MenuBar";
import LandingCard from "../src/components/LandingCard";
import Table from '../src/components/Chart/Table';
import Piechart from '../src/components/Chart/PieChart';
import LineCharts from '../src/components/Chart/LineCharts';
import Map from '../src/components/Chart/Map';
import { SVGMap } from "react-svg-map";

export default function index(props) {
  const {
    domesticDailyCase,
    domesticSum,
    confirmGlobal,
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
      <Table> </Table>
      {/* <PiechaSrt></Piechart> */}
      <LineCharts confirmGlobal={confirmGlobal}></LineCharts>
      <Map></Map>
      <image></image>
      {/* <SVGMap /> */}

    </div>
  );
}

export async function getServerSideProps() {
  const domesticDailyCase = await CovidReport.getDomesticDailyCase();
  const domesticSum = await CovidReport.getDomesticSum();
  const confirmGlobal = await CovidReport.getConfirmGlobal();
  // const deathGlobal = await CovidReport.getDeathGlobal();
  // const recoveredGlobal = await CovidReport.getRecoveredGlobal();

  return {
    props: {
      domesticDailyCase,
      domesticSum,
      confirmGlobal,

      // deathGlobal,
      // recoveredGlobal,]
    }, // will be passed to the page component as props
  };
}
