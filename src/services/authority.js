import axios from './axios';

const AuthorityService = {
  // Get all tenders
  getTenders: () => {
    return axios.get('/authority_tenders');
  },

  // Get tender
  getTender: (id) => {
    return axios.post('/authority-tenders/{id}');
  },

  // Create new tender
  createTender: (data) => {
    return axios.post('/authority_tenders', data);
  },

  // Update tender
  // updateTender: (data) => {
  //   return axios.post('/authority-update-tender', data);
  // },

  // Delete tender
  // deleteTender: (data) => {
  //   return axios.post('/authority-delete-tender', data);
  // },

};

export default AuthorityService;
