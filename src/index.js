import {cube} from './math.js';
import _ from 'lodash';

let nodeenv = process.env.NODE_ENV;
console.log(_.join(['Looks like we are in', nodeenv, 'mode!'], ' '));
if (nodeenv !== 'production') {
    console.log('no production')
}

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