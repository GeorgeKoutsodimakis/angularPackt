let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let assignment = require('./routes/assignments');

let mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// const uri = 'mongodb://adminUser:adminUser@cluster0-9uzqn.mongodb.net/assignments?retryWrites=true&';
const uri = 'mongodb://adminUser:adminUser@cluster0-shard-00-00-9uzqn.mongodb.net:27017,cluster0-shard-00-01-9uzqn.mongodb.net:27017,cluster0-shard-00-02-9uzqn.mongodb.net:27017/assignments?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&'
const options = {
  useNewUrlParser: true
};

mongoose.set('useFindAndModify', false);

mongoose.connect(uri, options)
  .then(() => {
    },
    err => {
      console.log('connection error: ', err)
    });

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let port = process.env.PORT || 8010;

const prefix = '/api';

// Assignment API Routes
app.route(prefix + '/assignments')
  .get(assignment.getAssignments);

app.route(prefix + '/assignment/:id')
  .get(assignment.getAssignment)
  .delete(assignment.deleteAssignment);


app.route(prefix + '/assignment')
  .post(assignment.postAssignment)
  .put(assignment.updateAssignment);

// START THE SERVER
app.listen(port, "0.0.0.0");
console.log('Working on port ' + port);

module.exports = app;


