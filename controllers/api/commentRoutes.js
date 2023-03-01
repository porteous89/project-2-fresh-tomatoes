const router = require("express").Router();
const { User, Comment } = require("../../models/");
const withAuth = require("../../utils/auth");

//GET all comments
router.get("/", async (req, res) => {
    try {
        const commentData = await Comment.findAll({
            where: {
                user_id: req.session.user_id,
            },

            include: [
                { 
                    model: User 
                }
            ],
        });
        const comments = commentData.map((comment) => comment.get({ plain: true }));
        res.render("dashboard", { 
            comments,
            loggedIn: true });
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET a single comment by ID
router.get("/:id", async (req, res) => {
    try {
        const commentData = await Comment.findByPk(req.params.id);
        if(!commentData) {
            res.status(404).json({ message: "No comment found with this id!" });
            return;
        }
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//POST a new comment
router.post("/", withAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
            comment_text: req.body.comment_text,
            user_id: req.session.user_id,
        });
        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
});

//PUT to update a comment
router.put("/:id", withAuth, async (req, res) => {
    try {
        const commentData = await Comment.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        if (!commentData[0]) {
            res.status(404).json({ message: "No comment found with this id!" });
            return;
        }
        res.status(200).json({ message: "Comment updated successfully!" });
    } catch (err) {
        res.status(500).json(err);
    }
});

//DELETE a comment by ID
router.delete("/:id", withAuth, async (req, res) => {
    try {
        const commentData = await Comment.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (!commentData) {
            res.status(404).json({ message: "No comment found with this id!" });
            return;
        }
        res.status(200).json({ message: "Comment deleted successfully!" });
    } catch (err) {
        res.status(500).json(err);
    }
});
          

module.exports = router;