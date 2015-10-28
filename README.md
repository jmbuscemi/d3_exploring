# D3 Explorations and Learning
This repo is me exploring D3 and learning during [@masonfmatthews](https://github.com/masonfmatthews) Week 9 lecture at TIY.

## Concepts Explored:
* `<svg>` tags
* `<g>` tags
  * embedding `<circle> <rect> <line>` withinn `<g>`
* `d3.select` similar to jQuery selectors
  * `d3.scale`
  * `.orient`
  * `.axis`
  * `.ticks`
* `d3.csv("data.csv", function(data) { }`
  * `.data(data)`
  * `.attr("cx", function(d) {return x(d["year"]);} )`
  * `join = g.selectAll("circle").data(data);`
* Change data on button click
* Change data on option selected via `<select>` tags.
* `.transition().duration(1000)` for smooth transition between data change
