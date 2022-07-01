const express = require('express');
const app = express();
const port = 8000

app.get('/', (req, res) => res.send('trash how'))

app.listen(port, () => console.log('8000번 포트 대기'));

app.use('/api/user', require('./routes/userRouter'));

