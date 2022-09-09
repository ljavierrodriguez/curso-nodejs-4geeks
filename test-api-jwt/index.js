const express = require('express');
const jwt = require('jsonwebtoken');
const auth = require('express').Router();
const PORT = process.env.PORT || 3000;
const SECRET_KEY = process.env.SECRET_KEY || 'secret-key';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('API REST NodeJS');
})

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

app.post('/token', (req, res) => {
    const { username, password } = req.body;
    if(!(username && password)) return res.status(400).json({ msg: 'Username/Password are required!'})

    if(username === 'admin' && password === 'admin'){
        const payload = {
            username: username,
        }

        const token = jwt.sign(payload, SECRET_KEY, { expiresIn: 1440 });

        return res.status(200).json({
            token: token
        })
    } else {
        return res.status(401).json({ msg: 'Username/password are incorrect!'});
    }
})

auth.use((req, res, next) => {
    const token = req.headers['x-access-token'];

    if(token){
        jwt.verify(token, SECRET_KEY, (err, decoded) => {
            if(err) return res.json({ msg: 'Token is invalid!'})
            req.decoded = decoded;
            next();
        })
    }else{
        return res.status(400).json({ msg: 'Token is missing!'});
    }
});

app.get('/datos-privados', auth, (req, res) => {
    const tasks = [
        { task: 'Task 1', done: false },
        { task: 'Task 2', done: false },
        { task: 'Task 3', done: true },
        { task: 'Task 4', done: false },
    ]

    return res.status(200).json(tasks);
})