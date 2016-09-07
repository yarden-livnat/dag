let svg = d3.select('#draw')
    .append('svg')
    .attr('width', 300)
    .attr('height', 200);

let g = svg.append('g')
    .attr('class', 'g1');

g.append('rect')
    .attr('class', 'box')
    .attr('width', 200)
    .attr('height', 200);

d3.csv('circles.csv', function(err, data) {
    // .row( d => { d.r = +d.r; d.x = +d.x; d.y = +d.y; return d;} )
    if (err) {
        console.log('err:',err);
    } else {
        console.log(data);
    }
});
