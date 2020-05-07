const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

// ----- GET ALL stories
router.get("/api/story", (req, res) => {
	const queryText = `SELECT * FROM "story" ORDER BY "story_date" DESC;`;

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

// ----- POST NEW story
router.post("/api/story", (req, res) => {
	const queryText = `INSERT INTO "story" (
    "submit_story_user_id",
    "off_agency",
    "received_agency",
    "title",
    "narrative",
    "photo_file"
				VALUES ($2, $3, $4, $5, $6, $7);`;

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

// ----- UPDATE story
router.put("/api/story/:story_id", (req, res) => {
	const queryText = `UPDATE "story"
			SET "submit_story_user_id" = $2,
      "off_agency" = $3,
      "received_agency" = $4,
      "title" = $5,
      "narrative" = $6,
      "photo_file" = $7
      WHERE "story_id" = $1;`;

	const storyId = req.params.id;
	const newstoryData = req.body;

	pool
		.query(queryText, [
			newstoryData.submit_story_user_id,
			newstoryData.off_agency,
			newstoryData.received_agency,
			newstoryData.title,
			newstoryData.narrative,
			newstoryData.photo_file,
			storyId,
		])
		.then((responseDb) => {
			res.sendStatus(200);
		})
		.catch((err) => {
			console.warn(err);
			res.sendStatus(500);
		});
});

// ----- DELETE story
router.delete("/api/story/:story_id", (req, res) => {
	const storyId = req.params.story_id;
	const queryText = `DELETE FROM "story" WHERE "story_id" = $1;`;

	pool
		.query(queryText, [storyId])
		.then((responseDb) => {
			res.sendStatus(200);
		})
		.catch((err) => {
			console.warn(err);
			res.sendStatus(500);
		});
});

module.exports = router;
