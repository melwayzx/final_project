import React, { useRef, useEffect } from 'react';
import * as d3 from "d3";
import json from "./thailand.json"
import { Tooltip } from "recharts";

export default function ThMap({ domesticSum }) {
    const data = [{ name: domesticSum.Province }]
    console.log(domesticSum.Province)
    const svgRef = useRef();

    useEffect(() => {
        const width = 800
        const height = 660

        const svg = d3.select(svgRef.current);
        svg.append('rect')
            .style("fill", "#fff")
            .attr('width', width)
            .attr('height', height)

        const g = svg.append('g');
        const mapLayer = g.append('g').classed('map-layer', true)

        const xym = d3.geoMercator();
        const path = d3.geoPath().projection(xym)

        xym.rotate([-100.6331, -13.2])
        xym.translate([width / 2, height / 2])
        xym.scale(2500)

        const report = transform(domesticSum)
        mapLayer.selectAll("path").data(json.features)
        mapLayer.selectAll("path").data(json.features)
            .enter().append("path")
            .attr("d", path)
            .attr('vector-effect', 'non-scaling-stroke')
            // .on('mouseover', function (e) {}



            .style("fill", function (data) {

                if (domesticSum.Province[data.properties.name]?.level === "danger") {
                    return "#800909"
                } else if (domesticSum.Province[data.properties.name]?.level === "caution") {
                    return "#f8a8ae"
                }
                return "#fce0d2"
            })

    }, [data]);

    return (
        <div style={mapStyle}>
            <svg
                width={"100%"}
                height={"100%"}
                ref={svgRef}
                style={{ position: "relative" }}
            />
            <Tooltip title={domesticSum.Province} placement="top-start"></Tooltip>;
        </div>
    );
}


const transform = (report) => {
    report.Province["Phangnga"] = report.Province["Phang Nga"]
    delete report.Province[report.Province["Phang Nga"]]

    report.Province["Bangkok Metropolis"] = report.Province["Bangkok"]
    delete report.Province["Bangkok"]

    report.Province["Lop Buri"] = report.Province["Lopburi"]
    delete report.Province["Lopburi"]

    report.Province["Si Sa Ket"] = report.Province["Sisaket"]
    delete report.Province["Sisaket"]

    report.Province["Chonburi"] = report.Province["Chon Buri"]
    delete report.Province["Chon Buri"]

    report.Province["Buri Ram"] = report.Province["Buriram"]
    delete report.Province["Buriram"]

    report.Province["Nong Bua Lam Phu"] = report.Province["Nong Bua Lamphu"]
    delete report.Province["Nong Bua Lamphu"]

    const newObj = { ...report }

    for (const key in newObj.Province) {
        if (newObj.Province.hasOwnProperty(key)) {
            if (newObj.Province[key] > 1000) {
                newObj.Province[key] = {
                    level: "danger",
                    count: newObj.Province[key]
                }
            }
            else if (newObj.Province[key] > 20) {
                newObj.Province[key] = {
                    level: "caution",
                    count: newObj.Province[key]
                }
            }
            else {
                newObj.Province[key] = {
                    level: "normal",
                    count: 0
                }
            }
        }
    }

    return newObj
}

const mapStyle = {
    height: 660,
    width: 800
}

