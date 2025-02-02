function foo(a,b){return a+b;}
console.log(foo(2,3)); //5
console.log(foo(2,"3")); //23
console.log(foo(null, 5)); //5
console.log(foo(undefined, 5)); //NaN
console.log(foo(5,undefined)); //NaN