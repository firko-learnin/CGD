import express from "express";
import readTable from "../models/readTable.js";
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

/* POST new recipe. */
router.post("/submit", async function (req, res, next) {
  const username = req.body.username;
  const roaster = req.body.roaster;
  const beantitle = req.body.beantitle;
  const drink = req.body.drink;
  const machines = req.body.machines;
  const grinder = req.body.grinder;
  const grindsetting = req.body.grindsetting;
  const preinfusiontime = req.body.preinfusiontime;
  const extractiontime = req.body.extractiontime;
  const tastingnotes = req.body.tastingnotes;
  const response = await query(
    "INSERT INTO recipes (username, roaster, beantitle, drink, machines, grinder, grindsetting, preinfusiontime, extractiontime, tastingnotes) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *",
    [
      username,
      roaster,
      beantitle,
      drink,
      machines,
      grinder,
      grindsetting,
      preinfusiontime,
      extractiontime,
      tastingnotes,
    ]
  );
  if (response) {
    res.redirect("/");
  } else {
    res.json({
      success: false,
      message: "Posting recipe failed ☹️",
    });
  }
});

router.get("/submit", async function (req, res, next) {
  app.use(express.static(path.join(__dirname, "public")));
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
