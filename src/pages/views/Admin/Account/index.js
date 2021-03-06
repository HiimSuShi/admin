import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Account = ({ allData, onRemove, a }) => {
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
                        <th>Name</th>
                        <th>Ngày tạo</th>
                        <th colSpan={2}><Link to="/admin/account/add" className="btn btn-success">Thêm nhân viên</Link></th>
                    </tr>
                </thead>
                <tbody>
                    {allData.map(({ id, user, created_at }, index) => (
                        <tr key={index}>
                            <th scope="row">{id}</th>
                            <td>{user}</td>
                            <td>{created_at}</td>
                            <td>
                                <a className="btn btn-primary" href={'/admin/account/update/' + id} onClick={() => localStorage.setItem('edit_id', id)}  >Sửa</a>
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

Account.propTypes = {

};

export default Account;