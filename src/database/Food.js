import { resolve } from 'path';
import { readFileSync} from 'fs';
// import { v4 as uuidv4 } from 'uuid';

const foods = [];

function loadSeed() {
  const file = resolve(process.cwd(), 'src', 'database', 'seeders.json');

  const content = JSON.parse(readFileSync(file));

  for (const food of content.foods) {
    create(food);
  }
}

function readAll() {
  return foods;
}

function create(food) {
  // const id = foods.length + 1;
  const id = new Date().getTime();
  // const id = uuidv4();

  const newFood = {...food, id};

  foods.push(newFood);

  return newFood;
}

function update(food, id) {
  const index = foods.findIndex((food) => food.id === id);

  if (index >= 0) {
    const newFood = { id, ...food };

    foods[index] = newFood;

    return newFood;
  } else {
    return false;
  }
}

function destroy(id) {
  const index = foods.findIndex((food) => food.id === id);

  if (index >= 0) {
    foods.splice(index, 1);

    return true;
  } else {
    return false;
  }
}

export default { loadSeed, readAll, create, update, destroy };