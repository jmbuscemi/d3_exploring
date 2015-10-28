var scale = d3.scale.linear()
    .domain([2000, 2012])
    .range([50, 950]);
var axis = d3.svg.axis()
    .scale(scale)
    .orient("bottom")
    .ticks(13)
    .tickFormat(d3.format("d"));
var g = d3.select("g");

g.call(axis);
