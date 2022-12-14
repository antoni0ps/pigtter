const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  name: { type: String, required: true },
  image: String,
  passwordHash: { type: String, minlength:5, required: true },
  tweets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tweet"
    },
  ],
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tweet"
    }
  ]
});

userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject.__v;
    delete returnedObject._id;
    delete returnedObject.passwordHash;
  },
});

module.exports = mongoose.model("User", userSchema);
