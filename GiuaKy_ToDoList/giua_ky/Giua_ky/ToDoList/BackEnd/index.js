const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const todoRoutes = require('./routes/todoRoutes');

const app = express();
const port = 5000;

// Update CORS configuration
const corsOptions = {
    origin: ['http://localhost:3000','http://localhost:5000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
    credentials: false
};

// Handle preflight requests
app.options('*', cors(corsOptions));

app.use(cors(corsOptions));
app.use(bodyParser.json());

// Thêm route cơ bản cho đường dẫn gốc
app.get('/', (req, res) => {
    res.json({ message: "Welcome to Todo List API" });
});

app.use('/api/todos', todoRoutes);

// Thêm error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});