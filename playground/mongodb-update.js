//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');


    // db.collection('Todos').findOneAndUpdate({_id: new ObjectID("59ee2d89c7b376e819039544")
    // }, {
    //     $set: {
    //         completed:true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });


    db.collection('Users').findOneAndUpdate({_id: new ObjectID("59ee0f0c3fc5401e18edaf89")
    }, {
        $set: {
            name:'Fannar'
        },
        $inc: { age: 1}
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    //db.close();
});