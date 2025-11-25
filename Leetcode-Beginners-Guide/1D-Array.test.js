const sum1DArray = require('./1D-Array');

const tests = [
  { input: [], expected: 0 },
  { input: [3], expected: 3 },
  { input: [1, 2, 3, 4], expected: 10 },
  { input: [-2, 5, 7], expected: 10 },
  { input: [1.5, 2.5], expected: 4 },
];

let allPassed = true;

tests.forEach(({ input, expected }, idx) => {
  const result = sum1DArray(input);
  const passed = Object.is(result, expected);
  console.log(`Test #${idx + 1}:`, passed ? 'PASS' : 'FAIL');
  if (!passed) {
    console.log(`  Input: ${JSON.stringify(input)}`);
    console.log(`  Expected: ${expected}, Received: ${result}`);
    allPassed = false;
  }
});

if (allPassed) {
  console.log('All tests passed!');
} else {
  process.exitCode = 1;
}

