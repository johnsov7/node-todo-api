// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('59b6fc3aaf1ead9c7c8a383f')
  // }, {
  //   $set: {
  //       completed: true
  //     }
  //   }, {
  //     returnOriginal: false
  //   }).then((result) => {
  //     console.log(result);
  //   });

    db.collection('Users').findOneAndUpdate({
      _id: new ObjectID('59b70979af1ead9c7c8a3de7')
    }, {
      $set: {
          name: 'Vincent'
        },
        $inc: {
          age: 1
        }
      }, {
        returnOriginal: false
      }).then((result) => {
        console.log(result);
      });

  // db.close();
});
