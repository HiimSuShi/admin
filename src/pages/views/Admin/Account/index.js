import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Account = ({ accounts, onRemove, a }) => {
    const removeHandle = (id) => {
        onRemove(id);
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
                        <th>Gender</th>
                        <th>Role</th>
                        <th colSpan={2}><Link to="/admin/account/add" className="btn btn-success">Thêm nhân viên</Link></th>
                    </tr>
                </thead>
                <tbody>
                    {accounts.map(({ id, name, gender, role }, index) => (
                        a = id,
                        <tr key={index}>
                            <th scope="row">{id}</th>
                            <td>{name}</td>
                            <td>{gender}</td>
                            {/* <td><img src={image} alt="" width="50" /></td> */}
                            <td>{role}</td>
                            <td>
                                <button className="btn btn-primary" >Sửa</button>
                            </td>
                            <td>
                                <button className="btn btn-danger" data-toggle="modal" data-target="#exampleModal"  >Xóa</button>
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
                            <button type="button" onClick={() => removeHandle(a)} class="btn btn-success">Xoá</button>
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