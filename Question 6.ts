function calculateExpression(): number {
    // ((10 + 5) * 3 - 2) / (4 % 3) - 7
    const result = ((10 + 5) * 3 - 2) / (4 % 3) - 7;
  
    return result;
  }
  
  // Calculate and print the result
  const expressionResult: number = calculateExpression();
  console.log("Result of the expression is:", expressionResult);
  