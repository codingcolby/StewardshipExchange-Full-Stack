const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

// ----- ADD CONTACT INQUIRES
router.post("/api/contact", (req, res) => {
	const queryText = `INSERT INTO "site_contact" (
"person_name",
"person_contact",
"contact_msg", 
"msg_received")
VALUES ($1, $2, $3, $4);`;

	pool
		.query(queryText, [req.body.name])
		.then((responseDb) => {
			res.sendStatus(201);
		})
		.catch((err) => {
			console.warn(err);
			res.sendStatus(500);
		});
});

module.exports = router;
