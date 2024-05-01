const getAllJobs = (req, res) => {
  res.send("getAllJobs");
};
const createJob = (req, res) => {
  res.send("create job");
};

const deleteJob = (req, res) => {
  res.send("delete job");
};

const updateJob = (req, res) => {
  res.send("update job");
};

const getJob = (req, res) => {
  res.send("get single job");
};

module.exports = { getAllJobs, createJob, deleteJob, updateJob, getJob };
