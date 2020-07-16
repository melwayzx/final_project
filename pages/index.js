import Head from "next/head";
import CovidReport from "../src/services/covid-reports";
import SumCard from "../src/components/Card/SumCard";
import GenderSumCard from "../src/components/Card/GenderSumCard";
import AgeSumCard from "../src/components/Card/AgeSumCard";
import ThailandSumCard from "../src/components/Card/ThailandSumCard";
import LineCharts from "../src/components/Chart/LineCharts";
// import Global from "../src/components/GlobalData";

import GlobalSumCard from "../src/components/Card/GlobalSumCard";
import GlobalSelect from "../src/components/GlobalSelect";
export default function index(props) {
  const { domesticDailyCase, domesticSum, domesticCase } = props;

  return (
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
          marginTop: "125px",
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
<<<<<<< HEAD


        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#FAFAFA",
            height: "200px",
            position: "absolute",
            width: "100vw",
          }}
        >
          {/* <GlobalSumCard /> */}
          {/* <SearchCountry /> */}
          {/* <GlobalSelect /> */}
          <ThailandSumCard domesticSum={domesticSum} />

        </div>
=======
        <ThailandSumCard domesticSum={domesticSum} />
>>>>>>> origin/Melwayz
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#FAFAFA",
          height: "250px",
          // position: "absolute",
          width: "100vw",
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
          marginBottom: "30px",
        }}
      >
        <LineCharts />
      </div>
      {/* <SearchCountry /> */}
      {/* <GlobalSelect /> */}
    </div>
  );
}

export async function getServerSideProps() {
  const domesticDailyCase = await CovidReport.getDomesticDailyCase();
  const domesticSum = await CovidReport.getDomesticSum();
  const domesticCase = await CovidReport.getDomesticCase();

  return {
    props: {
      domesticDailyCase,
      domesticSum,
      domesticCase,
    }, // will be passed to the page component as props
  };
}
