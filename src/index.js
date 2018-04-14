import {cube} from './math.js';

function component() {
    let element = document.createElement('pre');

    element.innerHTML = [
        'Hello webpack!',
        '5 cubed is squal to ' + cube(5)
    ].join('\n\n');

    return element;
}

let element = component();
document.body.appendChild(element);