import http from "./axiosHttp";

const getAll = () => {
    return http.get("/categories");
};

const get = id => {
    return http.get(`/categories/${id}`);
};

const create = data => {
    return http.post("/categories", data);
};

const update = (id, data) => {
    return http.put(`/categories/${id}`, data);
};

const remove = id => {
    console.log(id);
    return http.delete(`/categories/${id}`);
};

export default {
    getAll,
    get,
    create,
    update,
    remove,
};