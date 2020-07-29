import Head from "next/head";
import CovidReport from "../src/services/covid-reports";
import SumCard from "../src/components/Card/SumCard";
import GenderSumCard from "../src/components/Card/GenderSumCard";
import AgeSumCard from "../src/components/Card/AgeSumCard";
import ThailandSumCard from "../src/components/Card/ThailandSumCard";
import LineCharts from "../src/components/Chart/LineCharts";
import GlobalSumCard from "../src/components/Card/GlobalSumCard";
import THLineChart from "../src/components/Chart/THLineChart";

export default function index(props) {
  const {
    domesticDailyCase,
    domesticSum,
    domesticCase,
    domesticTimeline,
    globalConfirmed,
    globalDeaths,
    globalRecovered,
  } = props;

  // const dates = new Date();
  // const day = dates.getDate();
  // let month = dates.getMonth();
  // month = month + 1;
  // const year = dates.getFullYear();
  // const updateDate = day + "/" + month + "/" + year;

  console.log(`domesticDailyCase`, domesticDailyCase);
  console.log(`domesticSum`, domesticSum);
  console.log(`domesticCase`, domesticCase);
  console.log(`domesticTimeline`, domesticTimeline);
  console.log(`globalConfirmed`, globalConfirmed);
  console.log(`globalDeaths`, globalDeaths);
  console.log(`globalRecovered`, globalRecovered);

  return (
    <div>
      {/* <div
        style={{
          width: "100vw",
          paddingTop: "150px",
          fontFamily: "Sukhumvit Set",
        }}
      >
        <Head>
          <title>Covid-19 updates </title>
        </Head>

        <div style={{ height: "250px" }}>
          <SumCard
            domesticDailyCase={domesticDailyCase}
            updateDate={updateDate}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "white",
            height: "400px",
            marginTop: "125px",
            // width: "100vw",
          }}
        >
          <THLineChart domesticTimeline={domesticTimeline.Data} />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // marginTop: "125px",
            background: "#FAFAFA",
            height: "600px",
          }}
        >
          <GenderSumCard domesticSum={domesticSum} updateDate={updateDate} />
          <AgeSumCard domesticCase={domesticCase} updateDate={updateDate} />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "white",
          }}
        >
          <ThailandSumCard domesticSum={domesticSum} updateDate={updateDate} />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#FAFAFA",
            // position: "absolute",
            marginBottom: "60px",
            marginTop: "30px",
          }}
        >
          <GlobalSumCard updateDate={updateDate} />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "white",
            // position: "absolute",
            width: "100vw",
            marginBottom: "20px",
          }}
        >
          <LineCharts updateDate={updateDate} />
        </div>
      </div> */}
    </div>
  );
}

export async function getServerSideProps() {
  const domesticDailyCase = await CovidReport.getDomesticDailyCase();
  const domesticSum = await CovidReport.getDomesticSum();
  const domesticCase = await CovidReport.getDomesticCase();
  const domesticTimeline = await CovidReport.getDomesticTimeline();
  const globalConfirmed = await CovidReport.getGlobalConfirmed();
  const globalDeaths = await CovidReport.getGlobalDeaths();
  const globalRecovered = await CovidReport.getGlobalRecovered();

  return {
    props: {
      domesticDailyCase,
      domesticSum,
      domesticCase,
      domesticTimeline,
      globalConfirmed,
      globalDeaths,
      globalRecovered,
    }, // will be passed to the page component as props
  };
}
