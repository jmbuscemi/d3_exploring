svg = d3.select("svg");
g = svg.append("g");
g.attr("transform", "translate(100,50)");

x = d3.scale.linear()
    .domain([2000, 2009])  // Fill in the domain values for the x axis
    .range([0, 800]);
y = d3.scale.linear()
    .domain([0, 60])  // Fill in the domain values for the y axis
    .range([400, 0]);

x_axis = d3.svg.axis().scale(x).orient("bottom").ticks(5).tickFormat(d3.format("d"));
y_axis = d3.svg.axis().scale(y).orient("left").ticks(4);

g.call(y_axis);

gx = g.append("g")
gx.call(x_axis);
gx.attr("transform", "translate(0,400)");

// Okay, now all of your axes are set up.  Add code to draw points here.
//Fill in the parens and add stuff after the last dot, then make more of these lines.
g.append("circle").attr("cx", x(2000)).attr("cy", y(45)).attr("r", 45);
g.append("circle").attr("cx", x(2001)).attr("cy", y(4)).attr("r", 4);
g.append("circle").attr("cx", x(2002)).attr("cy", y(2)).attr("r", 2);
g.append("circle").attr("cx", x(2003)).attr("cy", y(2)).attr("r", 2);
g.append("circle").attr("cx", x(2004)).attr("cy", y(4)).attr("r", 4);
g.append("circle").attr("cx", x(2005)).attr("cy", y(12)).attr("r", 12);
g.append("circle").attr("cx", x(2006)).attr("cy", y(23)).attr("r", 23);
g.append("circle").attr("cx", x(2007)).attr("cy", y(54)).attr("r", 54);
g.append("circle").attr("cx", x(2008)).attr("cy", y(12)).attr("r", 12);
g.append("circle").attr("cx", x(2009)).attr("cy", y(1)).attr("r", 1) ;
;
