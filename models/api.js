import { query } from "../db/connection.js";

export async function getAllRecipes() {
  const result = query(`SELECT * FROM recipes;`);
  return result.rows;
}
