import {fun, hello} from './index';

it('#hello should return Hello, Patrick!', () => {
  expect(hello('Patrick')).toBe('Hello, Patrick!');
});

it('#fun should return Bikes are Fun!', () => {
  expect(fun('Bikes')).toBe('Bikes are fun!');
});
