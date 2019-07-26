// https://en.wikipedia.org/wiki/Least_common_multiple#Using_prime_factorization
//
//  18 = 2^1 * 3^2
//  19 =                                19^1
//  20 = 2^2    *    5^1
//  21 =       3^1    *    7^1
//  22 = 2^1          *          11^1
//  23 =                                       23^1
// LCM = 2^2 * 3^2 * 5^1 * 7^1 * 11^1 * 19^1 * 23^1

////////////////////////////////////////////////////////////////////////////////

function leastSmallestMultiple(arr) {

    // check if number is a prime one
    const isPrime = num => {
        for (let i = 2; i <= num; i++) {
            if ( num%i === 0 ) return num === i;
        }
    };

    const divideByPrime = (num, factors) => {
        for (let i = 2; i < num; i++) {

            // keep on dividing until the remainder is 0
            if (num%i !== 0) continue;

            // check if this prime number is already in factors object
            // if it isn't, make new key and assign value 1
            // otherwise increase value of that key
            factors[i] = (!factors[i]) ? 1 : factors[i] + 1;

            // quotient becomes new dividend
            num /= i;

            // continue factorizing until reaching 1
            if (num !== 1) factorizeNum(num, factors);

            // return factors object
            return factors;
        }
    };

    const factorizeNum = (num, factors) => {

        // check if number is a prime one
        if (isPrime(num)) {
            // check if this prime number is already in factors object
            // if it isn't, make new key and assign value 1
            // otherwise, increase value of that key
            factors[num] = (!factors[num]) ? 1 : factors[num] + 1;

        } else {
            // keep on dividing until reaching 1
            divideByPrime(num, factors);
        }

        // return factors object to update which factors are common for the range
        return factors;
    };

    const min = Math.min(...arr);
    const max = Math.max(...arr);

    // object whose keys represent prime numbers and values their respective powers
    const commons = {};
    for (let i = min; i <= max; i++) {
        const factors = {};
        factorizeNum(i, factors);

        // comparing current number factors with previously added common factors
        for (const key in factors) {
            if (!commons[key] || commons[key] < factors[key]) commons[key] = factors[key];
        }
    }

    // calculating the least common mutliple
    let mul = 1;
    for (let key in commons) {
        mul *= Math.pow(key, commons[key]);
    }
    return mul;


}

// 6056820
console.log(leastSmallestMultiple([18,23]));
