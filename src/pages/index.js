import Head from "next/head";
import services from "../services";
import SumCard from "../components/Card/SumCard";
import GenderSumCard from "../components/Card/GenderSumCard";
import AgeSumCard from "../components/Card/AgeSumCard";
import ThailandSumCard from "../components/Card/ThailandSumCard";
import LineCharts from "../components/Chart/LineCharts";
import GlobalSumCard from "../components/Card/GlobalSumCard";
import THLineChart from "../components/Chart/THLineChart";

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

  const dates = new Date();
  const day = dates.getDate();
  let month = dates.getMonth();
  month = month + 1;
  const year = dates.getFullYear();
  const updateDate = day + "/" + month + "/" + year;

  // console.log(`domesticDailyCase`, domesticDailyCase);
  // console.log(`domesticSum`, domesticSum);
  // console.log(`domesticCase`, domesticCase);
  // console.log(`domesticTimeline`, domesticTimeline);
  // console.log(`globalConfirmed`, globalConfirmed);
  // console.log(`globalDeaths`, globalDeaths);
  // console.log(`globalRecovered`, globalRecovered);

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
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const domesticDailyCase = await services.getDomesticDailyCase();
  const domesticSum = await services.getDomesticSum();
  const domesticCase = await services.getDomesticCase();
  const domesticTimeline = await services.getDomesticTimeline();
  const globalConfirmed = await services.getGlobalConfirmed();
  const globalDeaths = await services.getGlobalDeaths();
  const globalRecovered = await services.getGlobalRecovered();

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