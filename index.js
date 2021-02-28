// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
//   plus(point){
//     const {x, y} = point;
//     const newPoint = new Point(this.x +x, this.y + y); 
//     return newPoint;
//   }
// }
//   const ​pointA = ​new ​Point(​1​, ​2​);
//   const ​pointB = ​new ​Point(​2​, ​1​);
// console.log(pointA.plus(pointB));
/// Zadanie 2

// function ​go(options = {}) {
//   let​ {speed = ​4​, enable: { hyperdrive = ​false​, frobnifier = ​true​ } = {}} = {options};
// console.log(speed, hyperdrive, frobnifier);
// }
// go({ speed: ​5​ });
// go();
// zadanie 3

const​ inventory = [
{ type: ​"machine"​, value: ​5000 ​},
{ type: ​"machine"​, value: ​650​ },
{ type: ​"plant"​, value: ​20​ },
{ type: ​"furniture"​, value: ​1200​ },
{ type: ​"machine"​, value: ​250​ }
];
const​ valueOfMachines  = inventory
                                  .filter(item => item.type === 'machine')
                                  .map(item => item.value)
                                  .reduce((sum, value) => sum + value, 0);

console.log(valueOfMachines);

// zadanie 4
const​ items = [​"foo"​, ​"bar"​, ​"moo"​, ​"baz"​];
const ​includesA = text => text.includes(​"a"​);
function partition(fn, array){
const okItems = array.filter(fn);
const notOkey = array.filter(item => fn(item));
return [okItems, notOkey];
}
// zwraca [ [​"bar"​, ​"baz"​], [​"foo"​, ​"moo"​] ]
partition(includesA, items);