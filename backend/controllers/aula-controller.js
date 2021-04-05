const express = require("express");
const router = express.Router();
const Aula = require("../models/aula");

// retorna todas as aulas
router.get("/", async (req, res) => {
  res.json(await Aula.find());
});

// retorna uma aula por id
router.get("/:id", findPorId, async (req, res) => {
  res.json(req.aula);
});

// cadastra uma nova aula
router.post("/", async (req, res) => {
  try {
    let aula = new Aula(req.body);

    aula = await aula.save();
    res.status(201).json(aula);
  } catch (e) {
    res.status(500).json(e);
  }
});

// deleta uma aula
router.delete("/:id", findPorId, async (req, res) => {
  await req.aula.remove();
});

// altera uma aula
router.put("/:id", findPorId, async (req, res) => {
  await req.aula.set(req.body).save();
});

// função de middleware para recuperar uma aula pelo id
async function findPorId(req, res, next) {
  try {
    req.aula = await Aula.findById(req.params.id);

    if (req.aula === null) {
      return res.status(404).json({
        message: "Nao foi possivel encontrar a aula com o id informado",
      });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  next();
}

module.exports = router;
