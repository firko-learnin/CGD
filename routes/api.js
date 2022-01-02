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

/* GET recipes by grinder. */
router.get("/grinders/", async function (req, res, next) {
  const input = "%" + req.query.q + "%";
  console.log(input);
  const response = await query(
    "SELECT * from recipes WHERE grinder ILIKE ($1)",
    [input]
  );
  if (response) {
    res.json({ success: true, payload: response });
  } else {
    res.json({
      success: false,
      message: "I wish we had some information to give you ☹️",
    });
  }
});

/* GET recipes by machine. */
router.get("/machines/", async function (req, res, next) {
  const input = "%" + req.query.q + "%";
  console.log(input);
  const response = await query(
    "SELECT * from recipes WHERE machines ILIKE ($1)",
    [input]
  );
  if (response) {
    res.json({ success: true, payload: response });
  } else {
    res.json({
      success: false,
      message: "I wish we had some information to give you ☹️",
    });
  }
});

/* GET recipes by roaster. */
router.get("/roasters/", async function (req, res, next) {
  const input = "%" + req.query.q + "%";
  console.log(input);
  const response = await query(
    "SELECT * from recipes WHERE roaster ILIKE ($1)",
    [input]
  );
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
//     "INSERT INTO recipes (drink, extractiontime, grinder, grindsetting, preinfusiontime, tastingnotes, username, machines, roaster, beantitle) VALUES ('espresso', 30.0, 'Niche Zero', 14.0, 10.0, 'Forest fruits', 'jack', 'Lelit Bianca', 'Quarter Horse', 'Christmas Beans') RETURNING *"
//   );
//   if (result) {
//     res.json({ success: true, payload: result });
//   } else {
//     res.json({ success: false, message: "Data failed to post" });
//   }
// });

// Add additional columns to table
// router.get("/test", async function (req, res, next) {
//   let response = await query("ALTER TABLE recipes ADD COLUMN machines TEXT");
//   res.json({ success: true, payload: response });
// });

export default router;
