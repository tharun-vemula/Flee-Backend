const exp = require('express');
const { Schema } = require('mongoose');

const app = exp();
app.get('/login', (req, res) => {
    // student details
    const username = req.body.roll;
    const password = req.body.password;
    // const fullName = req.body.name;

    res.send("Server running...");
    res.end();

    // can also add photo from institute database

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