import axios from './axios';

const ConstructionService = {

  // Get all construction companies
  getConstructionCompanies: () => {
    return axios.get('/construction_companies');
  },

  // Get construction company
  getConstructionCompany: (id) => {
    return axios.get(`/construction_companies/${id}/`);
  }
}

export default ConstructionService
