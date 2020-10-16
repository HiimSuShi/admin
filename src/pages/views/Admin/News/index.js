import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import newApi from './../../../../api/newApi';

import { Link } from 'react-router-dom';



const Info = ({ onRemove, a }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const { data } = await newApi.getAll();

                setData(data);
            } catch (error) {
                console.log('failed to request API: ', error)
            }
        }
        getData();
    }, []);

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
                        <th>Tiêu đề</th>
                        <th>Mô tả ngắn</th>
                        <th>Chi tiết</th>
                        <th>Ngày tạo</th>
                        <th>Cập nhật</th>
                        <th colSpan={2}><Link to="/admin/news/add" className="btn btn-success">Thêm tin tức</Link></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(({ id, title, description, news_detail, created_at, created_by, updated_at }, index) => (
                        <tr key={index}>
                            <th scope="row">{index}</th>
                            <td>{title}</td>
                            <td>{description}</td>
                            <td>{news_detail}</td>
                            <td>{created_at}</td>
                            <td>{updated_at}</td>
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