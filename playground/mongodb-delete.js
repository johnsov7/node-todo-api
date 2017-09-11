// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //DeleteMany
  // db.collection('Todos').deleteMany({text: 'Work hard'}).then((result) => {
  //   console.log(result);
  // });
  //DeleteOne
  // db.collection('Todos').deleteOne({text: 'Life is on your side'}).then((result) =>{
  //   console.log(result);
  // })
  //findOneandDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name: 'Vincent'});
  db.collection('Users').findOneAndDelete({
    _id: new ObjectID("59b4b76274462305225d995b")
  }).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });

  // db.close();
});
