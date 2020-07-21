import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import json from "./thailand.json";

export default function ThMap({ domesticSum }) {
  const data = [
    {
      name: domesticSum.Province,
    },
  ];

  const svgRef = useRef();
  useEffect(() => {
    const width = 800;
    const height = 660;
    const svg = d3.select(svgRef.current);
    svg
      .append("rect")
      .style("fill", "#fff")
      .attr("width", width)
      .attr("height", height);

    const g = svg.append("g");
    const mapLayer = g.append("g").classed("map-layer", true);

    const xym = d3.geoMercator();
    const path = d3.geoPath().projection(xym);

    xym.rotate([-100.6331, -13.2]);
    xym.translate([width / 2, height / 2]);
    xym.scale(2500);

    for (const j in domesticSum.Province) {
      for (const i in json.features) {
        if (j === json.features[i].properties.name) {
          json.features[i].properties.count = domesticSum.Province[j];
        }
        if (json.features[i].properties.name == "Bangkok Metropolis") {
          json.features[i].properties.count = domesticSum.Province["Bangkok"];
        }
        if (json.features[i].properties.name == "Phangnga") {
          json.features[i].properties.count = domesticSum.Province["Phang Nga"];
        }
        if (json.features[i].properties.name == "Lop Buri") {
          json.features[i].properties.count = domesticSum.Province["Lopburi"];
        }
        if (json.features[i].properties.name == "Si Sa Ket") {
          json.features[i].properties.count = domesticSum.Province["Sisaket"];
        }
        if (json.features[i].properties.name == "Phangnga") {
          json.features[i].properties.count = domesticSum.Province["Phang Nga"];
        }
        if (json.features[i].properties.name == "Chonburi") {
          json.features[i].properties.count = domesticSum.Province["Chon Buri"];
        }
        if (json.features[i].properties.name == "Buri Ram") {
          json.features[i].properties.count = domesticSum.Province["Buriram"];
        }
        if (json.features[i].properties.name == "Nong Bua Lam Phu") {
          json.features[i].properties.count =
            domesticSum.Province["Nong Bua Lamphu"];
        }
        if (json.features[i].properties.count > 1000) {
          json.features[i].properties.level = "danger";
        } else if (json.features[i].properties.count > 30) {
          json.features[i].properties.level = "caution";
        } else if (json.features[i].properties.count > 2) {
          json.features[i].properties.level = "normal";
        } else {
          json.features[i].properties.level = "less";
        }
      }
    }

    mapLayer
      .selectAll("path")
      .data(json.features)
      .enter()
      .append("path")
      .attr("stroke", "#fff")
      .attr("stroke-width", 1)
      .attr("d", path)
      .attr("vector-effect", "non-scaling-stroke")
      .style("fill", function (data) {
        //console.log(domesticSum.Province[data.properties.name]);
        if (data.properties.level === "danger") {
          return "#800909";
        } else if (data.properties.level === "caution") {
          return "#E35F5B";
        } else if (data.properties.level === "normal") {
          return "#F5C7CA";
        }
        return "#DDDDDD";
      })
      .on("mouseover", function (d, i) {
        d3.select(this).attr("fill", data).attr("stroke-width", 3);
        var x = d.properties.name;
        return tooltip.style("visibility", "visible").text(x);
      })
      .on("mousemove", function (d) {
        tooltip
          .classed("visibility", "hidden")
          .style("top", d3.event.pageY + "px")
          .style("left", d3.event.pageX + 10 + "px")
          .text(d.properties.TH + " " + d.properties.count + " คน")
          .attr("stroke", "#DDDD");
      })

      .on("mouseout", function (d, i) {
        d3.select(this).attr("fill", data).attr("stroke-width", 1);
        return tooltip.style("visibility", "hidden");
      });

    var tooltip = d3
      .select("body")
      .append("div")
      .style("position", "absolute")
      .style("z-index", "12")
      .style("background", "lightpink")
      .style("visibility", "hidden");

    // for(i in data){

    // }
  }, [data]);

  return (
    <div>
      <div style={{ fontWeight: 700, fontSize: "18px" }}>
        ผู้ติดเชื้อในประเทศไทย จำแนกตามจังหวัด
      </div>
      <div style={{ display: "flex", fontSize: "14px" }}>
        <div style={{ color: "#C0392B", marginRight: "10px", fontWeight: 600 }}>
          อัพเดตล่าสุด
        </div>
        <div>{domesticSum.LastData}</div>
      </div>
      <div style={{ ...mapStyle, stroke: "white" }}>
        <svg
          width={"100%"}
          height={"100%"}
          ref={svgRef}
          style={{ position: "relative" }}
        />
      </div>
    </div>
  );
}

const mapStyle = {
  height: 660,
  width: 800,
};
