const express = require("express");
const router = express.Router();
const {
  createPeople,
  getPeople,
  deletePeople,
  updatePeople,
} = require("../controllers/people");

/* // we will fix the route in the app.use in main file
router.get("/", getPeople);

//post
router.post("/", createPeople);

//put

router.put("/:id", updatePeople);

//delete
router.delete("/:id", deletePeople);
 */

//short hand;
router.route("/").get(getPeople).post(createPeople);
router.route("/:id").put(updatePeople).delete(deletePeople);
module.exports = router;
