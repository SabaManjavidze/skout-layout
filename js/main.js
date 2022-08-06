function parent(x) {
  return function child(a) {
    console.log(x + a);
  };
}
const func = parent(1);
let a;
let b;
func(2);

const obj = { a: "a" };
const obj_b = { a: "a" };
console.log(obj === obj_b);
const c = obj;
c.b = "b";
console.log(c === obj);
const arr = [1, 2, 3];
const arr_2 = [...arr];
function func3(...x) {}
func3(1, 2, 3, 4, 5);
