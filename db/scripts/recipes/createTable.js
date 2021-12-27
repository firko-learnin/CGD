import query from "../../connection.js";

const tableFormat = `CREATE TABLE IF NOT EXISTS recipes (id SERIAL PRIMARY KEY, username TEXT, drink TEXT, grinder TEXT, grindSetting REAL, preinfusionTime REAL, extractionTime REAL,tastingNotes TEXT);`;

console.log(tableFormat);

async function createTable() {
  const newTable = await query(tableFormat);
}

createTable();
export default createTable;
