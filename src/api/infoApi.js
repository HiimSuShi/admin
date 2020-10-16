import http from './axiosHttp';

const getAll = () => {
    return http.get("/info");
};
export default {
    getAll,
};