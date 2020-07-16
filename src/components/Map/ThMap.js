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

    const report = transform(domesticSum);

    mapLayer.selectAll("path").data(json.features)
    mapLayer.selectAll("path").data(json.features)
      .enter()
      .append("path")
      .attr("stroke", "#C0392B")
      .attr("stroke-width", 1)
      .attr("d", path)
      .attr("vector-effect", "non-scaling-stroke")
      .style("fill", function (data) {
        // console.log(report);
        if (domesticSum.Province[data.properties.name]?.level === "danger") {
          return "#800909";
        } else if (
          domesticSum.Province[data.properties.name]?.level === "caution"
        ) {
          return "#E35F5B";
        } else if (
          domesticSum.Province[data.properties.name]?.level === "normal"
        ) {
          return "#F5C7CA";
        }
        return "#DDDDDD";
      })
      .on("mouseover", function (d, i) {
        d3.select(this).attr("fill", data).attr("stroke-width", 3);
        var x = d.properties.name
        return tooltip.style("visibility", "visible").text(x)
      })
      .on("mousemove", function (d) {
        tooltip.classed("visibility", "hidden")
          .style("top", (d3.event.pageY) + "px")
          .style("left", (d3.event.pageX + 10) + "px")
          .text(d.properties.name)

      })

      .on("mouseout", function (d, i) {
        d3.select(this).attr("fill", data).attr("stroke-width", 1);
        return tooltip.style("visibility", "hidden");
      })

    var tooltip = d3
      .select("body")
      .append("div")
      .style("position", "absolute")
      .style("z-index", "12")
      .style("background", "lightpink")
      .style("visibility", "hidden")

  }, [data]);

  // console.log(data);
  const transform = (report) => {
    const newObj = { ...report };

    for (const key in newObj.Province) {
      if (newObj.Province.hasOwnProperty(key)) {
        if (newObj.Province[key] > 1000) {
          newObj.Province[key] = {
            level: "danger",
            count: newObj.Province[key],
          };
        } else if (newObj.Province[key] > 30) {
          newObj.Province[key] = {
            level: "caution",
            count: newObj.Province[key],
          };
        } else if (newObj.Province[key] > 2) {
          newObj.Province[key] = {
            level: "normal",
            count: newObj.Province[key],
          };
        } else {
          newObj.Province[key] = {
            level: "less",
            count: newObj.Province[key],
          };
        }
      }
      console.log(newObj);
      return newObj;
    }
  };

  return (
    <div>
      <div>ผู้ติดเชื้อในประเทศไทย จำแนกตามจังหวัด</div>
      <div style={{ display: "flex", fontSize: "14px" }}>
        <div style={{ color: "#C0392B", marginRight: "10px" }}>
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
