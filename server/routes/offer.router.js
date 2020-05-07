const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

// ----- GET ALL OFFERS
router.get("/api/offer", (req, res) => {
	const queryText = `SELECT * FROM "offer" ORDER BY "submit_date" DESC;`;

	pool
		.query(queryText)
		.then((responseDb) => {
			res.send(responseDb.rows);
		})
		.catch((err) => {
			console.warn(err);
			res.sendStatus(500);
		});
});

// ----- GET ALL OFFERS BY USER
router.get("/api/offer/:submitting_user_id", (req, res) => {
	const queryText = `SELECT * FROM "offer" WHERE "submitting_user_id" = $2 ORDER BY "submit_date" DESC;`;

	pool
		.query(queryText)
		.then((responseDb) => {
			res.send(responseDb.rows);
		})
		.catch((err) => {
			console.warn(err);
			res.sendStatus(500);
		});
});

// ----- POST NEW OFFER
router.post("/api/offer", (req, res) => {
	const queryText = `INSERT INTO "offer" (
        "submitting_user_id",
        "agency",
        "contact_name",
        "contact_email",
        "ten_digit_dash_phone1",
        "phone1_ext",
        "ship_options",
        "state",
        "city",
        "off_cat",
        "off_detail",
				"offer_status")
				VALUES ($2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13);`;

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

// ----- UPDATE OFFER
router.put("/api/offer/:offer_id", (req, res) => {
	const queryText = `UPDATE "offer"
			SET "submitting_user_id" = $2,
			"agency" = $3,
			"contact_name" = $4,
			"contact_email" = $5,
			"ten_digit_dash_phone1" = $6,
			"phone1_ext" = $7,
			"ship_options" = $8,
			"state" = $9,
			"city" = $10,
			"off_cat" = $11,
			"off_detail" = $12,
			"offer_status" = $13,
			"edit_date" = $15
			WHERE "offer_id" = $1;`;

	const offerId = req.params.id;
	const newOfferData = req.body;

	pool
		.query(queryText, [
			newOfferData.submitting_user_id,
			newOfferData.agency,
			newOfferData.contact_name,
			newOfferData.contact_email,
			newOfferData.ten_digit_dash_phone1,
			newOfferData.phone1_ext,
			newOfferData.ship_options,
			newOfferData.state,
			newOfferData.city,
			newOfferData.off_cat,
			newOfferData.off_detail,
			newOfferData.offer_status,
			offerId,
		])
		.then((responseDb) => {
			res.sendStatus(200);
		})
		.catch((err) => {
			console.warn(err);
			res.sendStatus(500);
		});
});

// ----- DELETE OFFER
router.delete("/api/offer/:offer_id", (req, res) => {
	const offerId = req.params.offer_id;
	const queryText = `DELETE FROM "offer" WHERE "offer_id" = $1;`;

	pool
		.query(queryText, [offerId])
		.then((responseDb) => {
			res.sendStatus(200);
		})
		.catch((err) => {
			console.warn(err);
			res.sendStatus(500);
		});
});

module.exports = router;
