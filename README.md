# JavaScript Type Coercion in Addition

This example demonstrates the unexpected behavior of JavaScript's type coercion when performing addition with different data types. Specifically, it highlights the impact of using null and undefined values.

## Bug

The `foo` function simply adds two numbers. However, when different data types are provided as arguments, the behavior is not intuitive.

* Adding a number and a string results in string concatenation.
* Adding null and a number results in the number.
* Adding undefined and a number results in NaN.