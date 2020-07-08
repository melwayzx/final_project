import Head from "next/head";
import CovidReport from "../src/services/covid-reports";
import SumCard from "../src/components/Card/SumCard";
import GenderSumCard from "../src/components/Card/GenderSumCard";
import AgeSumCard from "../src/components/Card/AgeSumCard";

import ThMap from "../src/components/Map/ThMap";
import TableSum from "../src/components/Chart/TableSum";
import survey from "../src/components/survey";
// import SecondSection from "../src/components/section/SecondSection";
export default function index(props) {
  const {
    domesticDailyCase,
    domesticSum,
    domesticCase,
    // confirmGlobal,
    // deathGlobal,
    // recoveredGlobal,
  } = props;
  // console.log(`Domestic daily case`, domesticDailyCase);
  // console.log(`domesticSum`, domesticSum);

  return (
    <div style={{ height: "100vh", width: "100vw", paddingTop: "150px" }}>
      <Head>
        <title>Covid-19 updates </title>
      </Head>
      <SumCard domesticDailyCase={domesticDailyCase} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "125px",
          background: "#fafafafa",
        }}
      >
        <GenderSumCard domesticSum={domesticSum} />
        <AgeSumCard domesticCase={domesticCase} />
      </div>

      {/* <ThMap domesticSum={domesticSum} /> */}
    </div>
  );
}

export async function getServerSideProps() {
  const domesticDailyCase = await CovidReport.getDomesticDailyCase();
  const domesticSum = await CovidReport.getDomesticSum();
  const domesticCase = await CovidReport.getDomesticCase();
  // const confirmGlobal = await CovidReport.getConfirmGlobal();
  // const deathGlobal = await CovidReport.getDeathGlobal();
  // const recoveredGlobal = await CovidReport.getRecoveredGlobal();

  return {
    props: {
      domesticDailyCase,
      domesticSum,
      domesticCase,
      // domesticReport: domesticSum,
      // confirmGlobal,
      // deathGlobal,
      // recoveredGlobal,]
    }, // will be passed to the page component as props
  };
}
