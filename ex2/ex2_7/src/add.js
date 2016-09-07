/**
 * Created by yarden on 9/3/16.
 */

function addElement() {
    let div = document.createElement("li");
    let text = document.createTextNode("A new node");
    div.appendChild(text);

    let list = document.getElementById('list');
    list.appendChild(div);
}