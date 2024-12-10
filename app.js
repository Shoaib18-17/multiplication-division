const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML form
app.get('/', (req, res) => {
    res.send(`
        <h1>Multiplication and Division</h1>
        <form action="/calculate" method="POST">
            <label for="num1">Enter the first number:</label>
            <input type="number" id="num1" name="num1" required>
            <br>
            <label for="num2">Enter the second number:</label>
            <input type="number" id="num2" name="num2" required>
            <br>
            <button type="submit">Calculate</button>
        </form>
    `);
});

// Handle form submission
app.post('/calculate', (req, res) => {
    const num1 = parseFloat(req.body.num1);
    const num2 = parseFloat(req.body.num2);

    // Perform multiplication and division
    const product = num1 * num2;
    const result = product / 2;

    // Send the result back to the client
    res.send(`
        <h1>Result</h1>
        <p>The result of multiplying ${num1} and ${num2} and then dividing by 2 is: ${result}</p>
        <p>Task performed by Shoaib</p>
        <a href="/">Go back</a>
    `);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});