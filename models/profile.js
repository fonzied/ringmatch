var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    

var profileSchema = new Schema({
  name: String,
  game: {
        gameName: String,
        gameImg: String
  },
  bio: String,
  author: {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
      username: String
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }]
});

module.exports = mongoose.model('Profile', profileSchema);