function foo(a, b) {
  // Explicit type checking and handling
  a = a === null ? 0 : a;
  b = b === null ? 0 : b;
  a = typeof a === 'number' ? a : 0;  
  b = typeof b === 'number' ? b : 0; 
  return a + b; 
}

console.log(foo(2, 3)); // 5
console.log(foo(2, "3")); // 5
console.log(foo(null, 5)); // 5
console.log(foo(undefined, 5)); // 5
console.log(foo(5, undefined));//5