import 'babel-polyfill';
import {fun, hello} from './helpers';

const greeting = `${hello('Brian')} ${fun('Bikes')}`;

console.log(greeting);
