// import React from "react";
// import ReactTooltip from "react-tooltip";
// export default function Map({ domesticSum }) {
//     var width = 960,
//         height = 640,
//         centered;

//     var bigText = d3.select("body").append('text')
//         .classed('big-text', true);

//     var svg = d3.select("body").append("svg")
//         .attr("width", width)
//         .attr("height", height);

//     // Add background
//     svg.append('rect')
//         .style("fill", "#fff")
//         .attr('width', width)
//         .attr('height', height)
//         .on('click', clicked);

//     var g = svg.append('g');
//     var mapLayer = g.append('g')
//         .classed('map-layer', true);

//     var xym = d3.geo.mercator();
//     var path = d3.geo.path().projection(xym);

//     // Customize the projection to make the center of Thailand become the center of the map
//     xym.rotate([-100.6331, -13.2])
//     xym.translate([width / 2, height / 2])
//     xym.scale(2380)

//     d3.json("thailand.json", function (data) {
//         mapLayer.selectAll("path").data(data.features)
//             .enter().append("path")
//             .attr("d", path)
//             .attr('vector-effect', 'non-scaling-stroke')
//             .style("fill", function () { return "#44aaee" })
//             .on("mouseover", mouseover)
//             .on("mouseout", mouseout)
//             .on("click", clicked)
//     });
//     // Get province name
//     function nameFn(d) {
//         return d && d.properties ? d.properties.name : null;
//     }

//     function mouseover(d) {
//         d3.select(this).style('fill', '#f90');
//         bigText.text(nameFn(d));
//     }

//     function mouseout(d) {
//         d3.select(this).style("fill", "#44aaee")
//         // Reset province color
//         mapLayer.selectAll('path')
//             .style('fill', function (d) { return centered && d === centered ? '#D5708B' : '#4ae'; });
//         // Set Provice name
//         if (centered) {
//             bigText.text(nameFn(centered));
//         } else {
//             bigText.text('');
//         }
//     }
//     // When clicked, zoom in
//     function clicked(d) {
//         var x, y, k;

//         // Compute centroid of the selected path
//         if (d && centered !== d) {
//             var centroid = path.centroid(d);
//             x = centroid[0];
//             y = centroid[1];
//             k = 4;
//             centered = d;
//         } else {
//             x = width / 2;
//             y = height / 2;
//             k = 1;
//             centered = null;
//         }

//         // Highlight the clicked province
//         mapLayer.selectAll('path')
//             .style('fill', function (d) { return centered && d === centered ? '#D5708B' : '#44aaee'; });

//         // Zoom
//         g.transition()
//             .duration(750)
//             .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')scale(' + k + ')translate(' + -x + ',' + -y + ')');
//     }
//     return (

//     );
// }
