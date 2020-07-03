import Head from "next/head";
import CovidReport from "../src/services/covid-reports";
import SumCard from "../src/components/Card/SumCard";
import GenderSumCard from "../src/components/Card/GenderSumCard";
import Table from "../src/components/Chart/Table";
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
    <div style={{ padding: "100px", boxSixing: "border-box" }}>
      <Head>
        <title>Covid-19 updates </title>
      </Head>
      <SumCard domesticDailyCase={domesticDailyCase} />
      <GenderSumCard domesticSum={domesticSum} />
      <Table data={domesticSum} />
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
      // confirmGlobal,

      // deathGlobal,
      // recoveredGlobal,]
    }, // will be passed to the page component as props
  };
}
