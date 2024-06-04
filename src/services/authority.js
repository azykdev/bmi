import axios from './axios';

const AuthorityService = {
  // Get all tenders
  getTenders: () => {
    return axios.get('/authority_tenders');
  },

  // Get tender
  getTender: (id) => {
    return axios.get(`/authority_tenders/${id}/`);
  },

  // Create new tender
  createTender: (data) => {
    return axios.post('/authority_tenders', data);
  },

  // Update tender
  updateTender: (data) => {
    return axios.put(`/authority_tenders/${data.id}`, data);
  },

  // Delete tender
  deleteTender: (id) => {
    return axios.delete(`/authority_tenders/${id}`);
  },



  // TODO: Autority Viztory and Tenders

  getVicTenders: () => {
    return axios.get('/authority_victory_tenders');
  },

  getVicTender: (id) => {
    return axios.get(`/authority_victory_tenders/${id}/`);
  },

  createVicTender: (data) => {
    return axios.post('/authority_victory_tenders', data);
  },

  updateVicTender: (data) => {
    return axios.put(`/authority_victory_tenders/${data.id}`, data);
  },

  deleteVicTender: (id) => {
    return axios.delete(`/authority_victory_tenders/${id}`);
  },
};

export default AuthorityService;
