var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var categorySchema = new Schema({
  name: String,
  reviews: [ { type: Schema.Types.ObjectId, ref: 'Review' } ]
});

var Category = mongoose.model('Category', categorySchema);
module.exports = Category;