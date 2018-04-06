import _ from 'lodash';
import './style.css';
import Ryan from './images/ryan.png';
import Data from './data/data.xml';

function component() {
    let element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    let ryanImage = new Image();
    ryanImage.src = Ryan;

    element.appendChild(ryanImage);

    console.log(Data);

    return element;
}

document.body.appendChild(component());
