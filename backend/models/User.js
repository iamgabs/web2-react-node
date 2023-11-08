const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  data: {
    type: Date, 
  },
  cpf: {
    type: String,
  },
  adr: {
    type: String,
  },
  cep: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = {
  User,
  userSchema,
};
