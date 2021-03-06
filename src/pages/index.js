import Head from "next/head";
import SumCard from "../components/Card/SumCard";
import GenderSumCard from "../components/Card/GenderSumCard";
import AgeSumCard from "../components/Card/AgeSumCard";
import ThailandSumCard from "../components/Card/ThailandSumCard";
import LineCharts from "../components/Chart/LineCharts";
import GlobalSumCard from "../components/Card/GlobalSumCard";
import THLineChart from "../components/Chart/THLineChart";

export default function index() {
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
          <SumCard />
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
          <THLineChart />
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
          <GenderSumCard />
          <AgeSumCard />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "white",
          }}
        >
          <ThailandSumCard />
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
