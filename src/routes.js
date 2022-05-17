import { Router } from "express";
import Food from "./database/Food.js";

const router = Router();

router.get('/foods', (req, res) => {
  const foods = Food.readAll();

  res.json(foods);
});

router.post('/foods', (req, res) => {
  const food = req.body;

  const newFood = Food.create(food);

  res.json(newFood);
});

router.put('/foods/:id', (req, res) => {
  const id = Number(req.params.id);

  const food = req.body;

  const newFood = Food.update(food, id);

  if (newFood) {
    res.json(newFood);
  } else {
    res.status(400).json({ error: 'Food not found.' });
  }
});

router.delete('/foods/:id', (req, res) => {
  const id = Number(req.params.id);

  if (Food.destroy(id)) {
    res.status(204).send();
  } else {
    res.status(400).json({ error: 'Food not found.' });
  }
});

export default router;