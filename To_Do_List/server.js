const express = require('express');
const db = require('./src/configs/database'); // Kết nối đến file database.js để dùng kết nối MySQL

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Ứng dụng đang chạy!');
});

// Lắng nghe kết nối trên PORT
app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
