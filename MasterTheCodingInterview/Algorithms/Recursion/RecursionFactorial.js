function findFactorialIterative(number) {
    let answer = 1;
    // you actually no longer need the if statement because of the for loop
    // if (number === 2) {
    //   answer = 2;
    // }
    for (let i = 2; i <= number; i++) {
      answer = answer * i;
    }
    return answer;
  }
  
  function findFactorialRecursive(number) {
    if(number === 2) {
      return 2;
    }
    return number * findFactorialRecursive(number - 1)
  }
  
  findFactorialIterative(5);
  console.log(findFactorialRecursive(5));
  
  //If you want, try to add a base case condition for the recursive solution if the parameter given is less than 2