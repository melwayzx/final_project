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
  } = props;

  // console.log(domesticTimeline);
  return (
    <div>
      <div
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
          <SumCard domesticDailyCase={domesticDailyCase} />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#FAFAFA",
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
          <GenderSumCard domesticSum={domesticSum} />
          <AgeSumCard domesticCase={domesticCase} />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "white",
          }}
        >
          <ThailandSumCard domesticSum={domesticSum} />
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
          <GlobalSumCard />
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
          <LineCharts />
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const domesticDailyCase = await CovidReport.getDomesticDailyCase();
  const domesticSum = await CovidReport.getDomesticSum();
  const domesticCase = await CovidReport.getDomesticCase();
  const domesticTimeline = await CovidReport.getDomesticTimeline();

  return {
    props: {
      domesticDailyCase,
      domesticSum,
      domesticCase,
      domesticTimeline,
    }, // will be passed to the page component as props
  };
}
