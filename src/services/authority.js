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

  attendTenderParticipants: (data) => {
    return axios.put(`/authority_tenders/${data.id}`, data);
  },

  cancelTenderParticipants: (data) => {
    return axios.put(`/authority_tenders/${data.id}`, data);
  }

};

export default AuthorityService;
