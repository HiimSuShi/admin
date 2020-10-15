import React from "react";
import PropTypes from 'prop-types';

const baseUrl = 'http://localhost:8080'
const get = async (table, id) => {
    const res = await fetch(`${baseUrl}/${table}/${id}`);
    return res.json();
}

const getAll = async (table) => {
    const res = await fetch(`${baseUrl}/${table}`);
    const data = await res.json();
    const arr = [];
    if (data) {
        data.forEach((value, index) => {
            if (value == null) return;
            let object = {
                id: index,
                ...value
            }
            arr.push(object)
        });
    }
    return arr;
}

const create = async (table, data) => {
    // const id = await getCounter(table) + 1;
    const response = await fetch(`${baseUrl}/${table}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    // setCounter(table, id);
    return response.json();
}

const update = async (uri, data) => {
    const response = await fetch(`${baseUrl}${uri}`, {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response.json();
}

const remove = async (uri) => {
    const response = await fetch(`${baseUrl}${uri}`, {
        method: 'DELETE',
    });
    return response.json();
}

const setCounter = async (table, number) => {
    update(`/counters/${table}.json`, number);
}

const getCounter = async (table) => {
    const res = await fetch(baseUrl + '/counters/' + table + '.json');
    const id = await res.json() ?? 0;
    return id;
}


export default {
    getAll,
    get,
    create,
    update,
    remove,
};