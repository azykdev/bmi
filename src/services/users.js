import axios from "./axios";

const UserService = {
  getUsers: () => {
    return axios.get("/users");
  },
  getUser: (id) => {
    return axios.get(`/users/${id}/`);
  },
  createUser: (data) => {
    return axios.post("/users", data);
  },
  updateUser: (data) => {
    return axios.put(`/users/${data.id}`, data);
  },
  deleteUser: (id) => {
    return axios.delete(`/users/${id}`);
  },
};

export default UserService;
