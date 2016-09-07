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

d3.csv('circles.csv')
    .row( d => { d.r = +d.r; d.x = +d.x; d.y = +d.y; return d;} )
    .get(function(err, data) {
        if (err) {
            console.log('err:',err);
        } else {
            // console.log(data);
            d3.select('.circles').selectAll('circle')
                .data(data)
                .enter()
                .append('circle')
                .attr('r', d => d.r)
                .attr('fill', d => d.color)
                .attr('transform', d => `translate(${d.x}, ${d.y})`);
        }
    });
