import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import infoApi from './../../../../api/infoApi';

import { Link } from 'react-router-dom';

const Info = ({ data, onRemove, a }) => {
    console.log(data);
    const getId = (id) => {
        a = id;

    }
    const removeHandle = () => {
        onRemove(a);
    }
    return (
        <div style={{
            marginLeft: 240
        }}>
            <table class="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Birthday</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Gender</th>
                        <th colSpan={2}><Link to="/admin/info/add" className="btn btn-success">Thêm thông tin</Link></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(({ id, firstname, lastname, birthday, address, phone, gender, created_at, updated_by }, index) => (
                        <tr key={index}>
                            <th scope="row">{index}</th>
                            <td>{firstname}</td>
                            <td>{lastname}</td>
                            <td>{birthday}</td>
                            <td>{address}</td>
                            <td>{phone}</td>
                            <td>{gender}</td>
                            <td>
                                <a className="btn btn-primary" href={'/admin/info/update/' + id} onClick={() => localStorage.setItem('edit_id', id)}  >Sửa</a>
                            </td>
                            <td>
                                <button className="btn btn-danger" onClick={() => getId(id)} data-toggle="modal" data-target="#exampleModal"  >Xóa</button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Thông báo</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            Thích thì xoá không thích thì xoá
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                            <button type="button" onClick={() => removeHandle()} class="btn btn-success">Xoá</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

Info.propTypes = {

};

export default Info;