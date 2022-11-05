const Pass = require('../model/pass');

async function prevPass(req, res) {
    const roll = req.params.id;
    if(roll) {
        const prevPass = await Pass.find({rollNumber: roll}, '-_id -rollNumber -name -status');
        res.json({message: "ok", status: 200, data: prevPass});
    } else {
        res.json({message: "Invalid", status: 404});
    }

}

module.exports = prevPass;