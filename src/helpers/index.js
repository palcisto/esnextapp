export function fun(value) {
  return `${value} are fun!`;
}
export function hello(name) {
  return `Hello, ${name}!`;
}

const helpers = {fun, hello};
export default helpers;
