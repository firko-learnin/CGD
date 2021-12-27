import express from "express";
import readTable from "../db/scripts/recipes/readTable.js";
import query from "../db/connection.js";
const router = express.Router();

/* GET recipes table. */
router.get("/", async function (req, res, next) {
  let response = await readTable();
  if (response) {
    res.json({ success: true, payload: response });
  } else {
    res.json({
      success: false,
      message: "I wish we had some information to give you ☹️",
    });
  }
});
// Test adding data to the table - ok
// router.get("/test", async function (req, res, next) {
//   let result = await query(
//     "INSERT INTO recipes (drink, extractiontime, grinder, grindsetting, preinfusiontime, tastingnotes, username) VALUES ('espresso', 30.0, 'Niche Zero', 14.0, 10.0, 'Forest fruits', 'jack') RETURNING *"
//   );
//   if (result) {
//     res.json({ success: true, payload: result });
//   } else {
//     res.json({ success: false, message: "Data failed to post" });
//   }
// });

export default router;
