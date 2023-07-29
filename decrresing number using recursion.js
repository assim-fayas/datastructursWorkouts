function sumNumbers(limit) {
    if (limit === 1) {
      return 1;
    } else {
      return limit + sumNumbers(limit - 1);
    }
  }
  

  const limit = 5;
  const result = sumNumbers(limit);
  console.log(`The sum of numbers from 1 to ${limit} is: ${result}`);
  