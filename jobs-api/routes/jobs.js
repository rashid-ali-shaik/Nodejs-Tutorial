const express = require("express");
const {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
} = require("../controllers/jobs");

const router = express.Router();

router.route("/").get(getAllJobs).get(getJob).post(createJob);
router.route("/:id").patch(updateJob).delete(deleteJob);

module.exports = router;
