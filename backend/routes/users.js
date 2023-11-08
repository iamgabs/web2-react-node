const router = require("express").Router()
const userController = require("../controllers/userController");

router.route("/users").post((req, res)=> userController.create(req,res));
router.route("/users/all").get((req, res)=> userController.readAll(req,res));
router.route("/users/:id").get((req, res)=> userController.readOne(req,res));
router.route("/users/edit/:id").put((req, res)=> userController.update(req,res));
router.route("/users/delete/:id").delete((req, res)=> userController.delete(req,res));

module.exports = router;