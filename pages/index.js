import Head from "next/head";
import CovidReport from "../src/services/covid-reports";
import SumCard from "../src/components/Card/SumCard";
import GenderSumCard from "../src/components/Card/GenderSumCard";
import AgeSumCard from "../src/components/Card/AgeSumCard";
import ThailandSumCard from "../src/components/Card/ThailandSumCard";
import LineCharts from "../src/components/Chart/LineCharts";
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
        {/* <SumCard domesticDailyCase={domesticDailyCase} /> */}
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
        {/* <GenderSumCard domesticSum={domesticSum} />
        <AgeSumCard domesticCase={domesticCase} /> */}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "white",
        }}
      >
        {/* <ThailandSumCard domesticSum={domesticSum} /> */}
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
          <LineCharts />
<<<<<<< HEAD

=======
>>>>>>> origin/Melwayz
        </div>
      </div>
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
