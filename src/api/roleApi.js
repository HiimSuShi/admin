import http from './axiosHttp';

const getAll = () => {
    return http.get("/role");
};
export default {
    getAll,
};