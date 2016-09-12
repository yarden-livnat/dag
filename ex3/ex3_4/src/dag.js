
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

let c = ['red', 'green', 'blue', 'purple'];

g.selectAll('circle')
    .data(c)
    .enter()
        .append('circle')
        .attr('r', 5)
        // .attr('transform', 'translate('+ Math.random()*100 + ',' + Math.random()*60+')')  // bug
        // .attr('transform', () => 'translate('+ Math.random()*100 + ',' + Math.random()*60+')')
        // .attr('transform', () => `translate(${Math.random()*100}, ${Math.random()*60})`)
        .attr('transform', (d, i) => `translate(${Math.random()*100}, ${i*10+60})`)
        .attr('fill', d => d);

d3.selectAll("circle").transition()
    .duration(750)
    .delay(function(d, i) { return i * 500; })
    .attr("r", (d, i) =>  i * 10);
