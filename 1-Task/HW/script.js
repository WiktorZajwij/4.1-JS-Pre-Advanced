/* 
Напишіть функцію CoffeeMake, яка буде мати в 2 методи: on(),off(). 
Далі напишіть ще методи для 3х типів кавоварок: капельна, ріжкова, 
каво-машина, які будуть наслідувати базовий функціонал CoffeeMake, 
а також мати власний. 
Використовує класи до es6 стандарту.
*/

function CoffeeMake(coffee, water) {
 this.coffee = coffee;
 this.water = water;
}
CoffeeMake.prototype.on = function () {
  console.log('Кава готується!');
}
CoffeeMake.prototype.off = function () {
  console.log('Кава вже готова!');
}




// 
function DripCoffee(coffee, water, milk, filter) {
  CoffeeMake.call(this, coffee, water);
  this.milk = milk;
  this.filter = filter;
}
DripCoffee.prototype = Object.create(CoffeeMake.prototype)
DripCoffee.prototype.constructor = DripCoffee;

let drip = new DripCoffee(true, true, false, 'Paper');

drip.on();
console.log(drip);
drip.off();



// 
function HornCoffee(coffee, water, milk, sugar, cinnamon, chocolate) {
  CoffeeMake.call(this, coffee, water);
  this.milk = milk;
  this.sugar = sugar;
  this.cinnamon = cinnamon;
  this.chocolate = chocolate;
}
HornCoffee.prototype = Object.create(CoffeeMake.prototype)
HornCoffee.prototype.constructor = HornCoffee;

let horn = new HornCoffee(true, true, false, true, true, false);

horn.on();
console.log(horn);
horn.off();



// 
function CoffeeMachine(coffee, water, americano, cappuccino) {
  CoffeeMake.call(this, coffee, water);
  this.americano = americano;
  this.cappuccino = cappuccino;
}
CoffeeMachine.prototype = Object.create(CoffeeMake.prototype)
CoffeeMachine.prototype.constructor = CoffeeMachine;

let mechine = new CoffeeMachine(false, false, false, true);

mechine.on();
console.log(mechine);
mechine.off();




// console.log(drip instanceof CoffeeMake); // true
// console.log(drip instanceof DripCoffee); // true
// console.log(horn instanceof CoffeeMake); // true
// console.log(horn instanceof HornCoffee); // true
// console.log(mechine instanceof CoffeeMake); // true
// console.log(mechine instanceof CoffeeMachine); // true