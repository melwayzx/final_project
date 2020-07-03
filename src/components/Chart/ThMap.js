import React from "react";
import * as d3 from "d3";
// let url = 'https://raw.githubusercontent.com/apisit/thailand.json/master/thailand.json';
// d3.json(url).then(data => console.log(data))

export default function ThMap() {
    const data = d3.json("https://raw.githubusercontent.com/apisit/thailand.json/master/thailand.json");
    const width = 960;
    const height = 500;
    // console.log(data)
    const svg = d3.select('svg')
        .attr('width', width)
        .attr('height', height);
    svg.append('rect')
        .attr('class', 'background')
        .attr('width', width)
        .attr('height', height)
        .on('click', clicked);
    return (<div>
    </div>)

}
