import { test } from './js/test';
import wpLogo from './img/wp_logo.svg';
import './css/index.scss';

const heading = document.createElement('h1');
heading.textContent = test();

const img = document.createElement('img');
img.src = wpLogo;

const root = document.querySelector('#root');
root.append(img, heading);
