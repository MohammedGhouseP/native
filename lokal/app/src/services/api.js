// services/api.js
import axios from 'axios';
export const fetchJobs = (page=1) =>
  axios.get(`https://testapi.getlokalapp.com/common/jobs?page=${page}`);
