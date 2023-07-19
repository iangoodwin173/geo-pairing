// Purpose: User model for the database
const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// import schema from Drink.js
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },

  password: {
    type: String,
    required: true,
    minlength: 5,
  },

  drinks: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Drink',
    },
  ],
// saved drink count
  drinksCount: {
    type: Number,
    default: 0,
  },

});

//pre-save hook to hash the password before it's saved to the database
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});
// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

//  create the User model using the userSchema
const User = model('User', userSchema);

// export the User model
module.exports = User;