const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//TOdo.remove({})
// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

Todo.findOneAndRemove({_id: '59bc244215925d4baf16d812'}).then((todo) => {
  console.log(todo);
});

Todo.findByIdAndRemove('59bc244215925d4baf16d812').then((todo) => {
  console.log(todo);
});
