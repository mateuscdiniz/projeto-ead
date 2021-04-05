const mongoose = require("mongoose");

const aulaSchema = new mongoose.Schema({
  nome: { type: String },
  conteudo: [{ blocoConteudo: String }],
});

module.exports = mongoose.model("Aula", aulaSchema);
