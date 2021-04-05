const express = require("express");
const router = express.Router();
const Curso = require("../models/curso");

// retorna todas os cursos
router.get("/", async (req, res) => {
  res.json(await Curso.find());
});

// retorna um curso por id
router.get("/:id", findPorId, async (req, res) => {
  res.json(req.curso);
});

// cadastra um novo curso
router.post("/", async (req, res) => {
  try {
    let curso = new Curso(req.body);

    curso = await curso.save();
    res.status(201).json(curso);
  } catch (e) {
    res.status(500).json(e);
  }
});

// deleta um curso
router.delete("/:id", findPorId, async (req, res) => {
  await req.curso.remove();
});

// altera um curso
router.put("/:id", findPorId, async (req, res) => {
  await req.curso.set(req.body).save();
});

// função de middleware para recuperar um curso pelo id
async function findPorId(req, res, next) {
  try {
    req.curso = await Curso.findById(req.params.id);

    if (req.curso === null) {
      return res.status(404).json({
        message: "Nao foi possivel encontrar o curso com o id informado",
      });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  next();
}

module.exports = router;
