# Least Common Multiple

My JS algorithm for the problem of finding the least common multiple of a set of positive integers.


#### Solution

My solution is based on **unique factorization theorem** that says:
- the least common multiple is a composite number that can be made by combining prime numbers which are factors of the numbers in the given set

*For more explanation check [Wikipedia article](https://en.wikipedia.org/wiki/Least_common_multiple#Using_prime_factorization).*

#### Example

- a set of number is given as an array: [18, 23]
- for each number get factors as prime numbers
```
  18 = 2^1 * 3^2
  19 =                                19^1
  20 = 2^2    *    5^1
  21 =       3^1    *    7^1
  22 = 2^1          *          11^1
  23 =                                       23^1
 LCM = 2^2 * 3^2 * 5^1 * 7^1 * 11^1 * 19^1 * 23^1
```
- for each prime number get only the highest power
- the least common multiple is 6056820
