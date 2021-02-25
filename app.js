
const app = require("./src/services/server.service");
const mongoService = require("./src/services/mongoose.service");

mongoService.dbConnect();
app.start();
// const User = require('./src/models/user.model');



// app.get('/', function(req, res) {
//     res.send('hello world');
// });

// app.post('/users', function (req, res) {
//     const user = new User({
//         firstName: req.body.firstName,
//         lastName: req.body.lastName,
//         password: req.body.password,
//         email: req.body.email,
//         isAdmin: req.body.isAdmin,
//         age: req.body.age
//     });
//     user.save()
//         .then(data => {
//             res.send({
//                 created: true,
//                 data: data
//             });
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: err.message || "Some error occured"
//             })
//         })
// });

// app.get('users/:id', function (req, res) {
//     console.log(req.params);
//     findById(ID)
//     //controller
// })

//services
