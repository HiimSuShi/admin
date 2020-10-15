import http from './axiousHttp';

const getAll = () => {
    return http.get("/news");
};