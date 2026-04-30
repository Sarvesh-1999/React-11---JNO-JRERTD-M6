//! NAMED EXPORTS
/**
 * ! WAY 1
 *  export function greet() {
    console.log("Welcome");
    }

 * ! WAY 2
 *  function greet() {
    console.log("Welcome");
    }

    export {greet}
 */

function greet() {
  console.log("Welcome");
}

function demo() {
  console.log("I am demo");
}

export { greet, demo };

//! DEFAULT EXPORTS
function sum(n1, n2) {
  return n1 + n2;
}
export default sum;

//! REACT EXAMPLE
export function useState(x) {
  return [x, () => {}];
}

export function useRef(x) {
  return {current : x};
}
