/**
* Created by yarden on 9/3/16.
*/


let chars = ['a', 'b'];
let items = [
    {id: 2, name: 'One', color: 'red'},
    {id: 1, name: 'Two', color: 'green'}
];

let many_items = [
    {id: 2, name: 'One', color: 'red'},
    {id: 1, name: 'Two', color: 'green'},
    {id: 4, name: 'Four', color: 'yellow'},
    {id: 5, name: 'Five', color: 'blue'}

];

cumbersome();
// cumbersome_insert();
// d3_simple();
// d3_update();
// d3_update2();
// d3_update3();
// d3_exit();
// d3_insert();
// d3_insert2();


function cumbersome() {
    let nodes = document.getElementsByTagName('li');
    for (let i=0; i<nodes.length; i++) {
        let node = nodes.item(i);
        node.style.setProperty('color', 'red', null);
    }
}

function d3_simple() {
    d3.select('body').style('background-color', '#f0f0f0');

    d3.selectAll('li').style('color', 'red').style('font-size', '24px');

    d3.select('#list').selectAll('li').style('color', 'green');
}

function cumbersome_insert() {
    let list = document.getElementById('list');

    for (let i=0; i<items.length; i++) {
        let item = document.createElement('li');
        item.appendChild(document.createTextNode(items[i].name));

        list.appendChild(item);
    }
}

function d3_update() {
    let li = d3.select('#list').selectAll('li')
        .data(chars);

    li.text('x');
    // li.text(function(d) { return d;});
}

function d3_update2() {
    let li = d3.select('#list').selectAll('li')
        .data(items);

    li.text(function(d) { return d.name;})
        .style('color', d => d.color);
}


function d3_update3() {
    d3.select('#list').selectAll('li')
    .data(items, d => d.id)                // error: d is undefined for items from the html
        // .data(items, (d, i) => d && d.id || i+1)
        .text(function(d) { return d.name;})
        .style('color', d => d.color);
}

function d3_exit() {
    let li = d3.select('#list').selectAll('li')
        .data(['x']);

    li.text(d => d);

    li.exit().remove();
    // li.exit().style('font-size', '9px');
}

function d3_insert() {
    let li = d3.select('#list').selectAll('li')
        .data(many_items);

    li.enter().append('li')
        .text( d => d.name )
        .style( 'color', 'black');

    li.text( d => d.name )
        .style( 'color', d => d.color);
}

function d3_insert2() {
    let li = d3.select('#list').selectAll('li')
        .data(many_items);

    li.enter().append('li')
        .style( 'color', 'black')            // bug: will be overwritten by the next style command
        .merge(li)
        .text( d => d.name )
        .style( 'color', d => d.color);
}
