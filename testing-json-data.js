const brain = require('brain.js');
const data = require('./data.json');

// brain.recurrent.LSTM() to read STRINGS
const network = new brain.recurrent.LSTM(); 

// store all the data from data.json
const trainingData = data.map( item => ({
    input: item.text,
    output: item.category
}));

network.train(trainingData, {
    iterations: 2000
});

// Change the text below to see the output
const output = network.run('The code has some bugs');

console.log(`Category: ${output}`);