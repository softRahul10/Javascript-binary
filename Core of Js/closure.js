// Example 2
function boo(string) {
      return function boo2(name) {
            return function boo3(name2) {
                  console.log(`${string},${name},${name2}`)
            }
      }
}

// Arrow function
const boo = (string) => (name) => (name2) => `${string},${name},${name2}`;



// Example
function a() {
      let grandpa = 'Grandpa';
      let grandpa2 = 'Grandpa2';
      return function b() {
            let father = 'Father';
            let father2 = 'Father2';
            console.log(grandpa2);
            return function c() {
                  let son = 'Son';
                  return `${grandpa} >> ${father} >> ${son}`;
            }
      }
}

a()()();















