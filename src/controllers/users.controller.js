const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../configs');

exports.register = (req, res) => {

    let hashedPassword = bcrypt.hashSync(req.body.password, 10);
    
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        isAdmin: req.body.isAdmin,
        age: req.body.age,
        password: hashedPassword
    });
    
    user.save()
        .then(data => {
            let userToken = jwt.sign(
                {
                    id: data._id,
                    admin: data.isAdmin
                },
                config.jwt.secret, {
                    expiresIn: 86400
                }
            )
            res.send({
                auth: true,
                token:userToken,
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured"
            })
        })
}
