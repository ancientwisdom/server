const mongoose = require('mongoose');
const Peotry = require('../models/Poetry');

let data = null;

mongoose.connect(
  'mongodb://poetry:ILovePoetry@116.196.96.247:27017/poetry?authSource=admin',
  err => {
    if (err) throw err;
    console.log('Connected');
  }
);

// Peotry.find().then(res => {
//   res.map(item => {
//     Peotry.findOneAndUpdate(
//       { title: item.title },
//       { content: item.content.split('。').join('。\n') },
//       (err, doc, result) => {
//         if (err) console.log(err);
//         console.log('Done!');
//         mongoose.disconnect();
//         return;
//       }
//     );
//   });
// });
