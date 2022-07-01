const userControl = require("../controller/userControl")
const router = require("express").Router();

router.route('/')
    .get(userControl.getUsers)



module.exports = router;
