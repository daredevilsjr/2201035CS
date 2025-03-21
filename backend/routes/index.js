const express = require("express");
const postsController = require("../controllers/index");
const router = express.Router();

router.get("/users", postsController.getTopUsers);

router.get("/posts", (req, res) => {
    const { type } = req.query;

    if (type === "popular") {
        postsController.getPopularPosts(req, res);
    } else if (type === "latest") {
        postsController.getLatestPosts(req, res);
    } else {
        res.status(400).json({ message: "Invalid type parameter. Use 'type=popular' or 'type=latest'." });
    }
});

module.exports = router;