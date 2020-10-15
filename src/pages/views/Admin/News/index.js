import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const News = ({ onRemove }) => {
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
                        <th>Tiêu đề</th>
                        <th>Ảnh</th>
                        <th>Danh mục</th>
                        <th>Mô tả</th>
                        <th colSpan={2}></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row"></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <button className="btn btn-primary" >Sửa</button>
                        </td>
                        <td>
                            <button className="btn btn-danger" data-toggle="modal" data-target="#exampleModal"  >Xóa</button>
                        </td>
                    </tr>
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
                            <button type="button" class="btn btn-success">Xoá</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

News.propTypes = {

};

export default News;