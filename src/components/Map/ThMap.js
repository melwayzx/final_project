import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
// import json from "./thailand.json";
import { colors } from "@material-ui/core";

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

    mapLayer
      .selectAll("path")
      .data(domesticSum.features)
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
          .html(d.properties.TH + " " + d.properties.count + " คน")

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
      .style("background", "white")
      .style("font-family", "Sukhumvit Set")
      .style("border-radius", "5px")
      .style("padding", "20px")
      .style("box-shadow", "0px 2px 4px rgba(0, 0, 0, 0.25)")
      .style("visibility", "hidden");

    // for(i in data){

    // }
  }, [data]);

  return (
    <div>
      <div style={{ fontWeight: 700, fontSize: "1.4vw" }}>
        ผู้ติดเชื้อในประเทศไทย จำแนกตามจังหวัด
      </div>
      <div style={{ display: "flex", fontSize: "14px" }}>
        <div style={{ color: "#C0392B", marginRight: "10px", fontWeight: 600 }}>
          อัปเดตล่าสุด
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
