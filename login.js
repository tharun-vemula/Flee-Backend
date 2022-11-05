const exp = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const app = exp();
app.get('/login', (req, res) => {
    /* student details */
    const username = req.body.roll;
    const password = req.body.password;
    // const fullName = req.body.name;
    // can also add photo from institute database

    res.send("Server running...");
    res.end();

});

const studentDetailsSchema = new Schema(
    {
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    }
);

app.listen(3000);

exports.modules = mongoose.model('StudentDetails', studentDetailsSchema);