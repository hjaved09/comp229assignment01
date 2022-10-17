let express = require('exprees');
let router = express.Router();
let mainController= require("../conrollers/index");

router.get("/",mainController.home);
router.get("/projects",mainController.projects);
router.get("/about", mainController.about);
router.get("/services",mainController.services);
router.get("/contact",mainController.contact);

module.exports=router;