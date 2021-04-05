const mongoose = require("mongoose");
const Aula = require("./aula");

const cursoSchema = new mongoose.Schema({
  nome: { type: String },
  aulas: [{ type: mongoose.Schema.Types.ObjectId, ref: Aula }],
});

module.exports = mongoose.model("Curso", cursoSchema);
