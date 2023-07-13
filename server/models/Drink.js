const { Schema, model } = require('mongoose');

const drinkSchema = new Schema({
  drinkId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },

  recipe: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },
  
  link: {
    type: String,
    required: true,
  },

});

const Drink = model('Drink', drinkSchema);

module.exports = Drink;
