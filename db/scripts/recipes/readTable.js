import query from "../../connection.js";

async function readTable() {
  const data = await query("SELECT * from recipes");
  return data;
}

readTable();
export default readTable;
