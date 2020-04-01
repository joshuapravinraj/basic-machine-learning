const brain = require('brain.js');

const network = new brain.NeuralNetwork();

/**
 * EXAMPLE 2
 * 
 * Example of 2 teams and who wins. 
 * 
 * The 'output: 0' is for the first digit in the 'input'
 * and 'output: 1' is for the second digit in the 'input'
 */

network.train([
    { input: [1, 2], output: [1] }, // Team 2 wins
    { input: [1, 3], output: [1] }, // Team 3 wins
    { input: [2, 3], output: [0] }, // Team 2 wins
    { input: [2, 4], output: [1] }  // Team 4 wins
]);

const output = network.run([1,4]);

console.log(`Prob: ${output}`);