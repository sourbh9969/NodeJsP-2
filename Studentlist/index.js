const express = require('express');

const app = express();

const list = {
    "results": [
        "Rajesh",
        "Ramesh",
        "Sayali",
        "Sanjana"
    ]
}

app.get('/student/studentList', (req, res) => {
    res.send(list)
})

const port = process.env.PORT || 8080;
app.listen(8080, () => {
    console.log('running on port 8080');
})