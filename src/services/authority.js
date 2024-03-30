import axios from './axios';

const AuthorityService = {
  // Create new tender
  createNewTender: (data) => {
    return axios.post('/authority-new-tender', data);
  },
};

export default AuthorityService;
