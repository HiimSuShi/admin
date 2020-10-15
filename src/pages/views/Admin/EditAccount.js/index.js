import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
// import apiRole from "./../../../../api/roleApi";
import api from "./../../../../api/accountApi";

import firebase from '../../../../firebase'



const EditAccount = ({ onUpdate }) => {
    const [data, setData] = useState([]);

    const edit_id = localStorage.getItem('edit_id');
    useEffect(() => {
        const getData = async () => {
            try {
                const { data } = await api.get(edit_id);
                setData(data);
                console.log(data);
            } catch (error) {
                console.log('failed to request API: ', error)
            }
        }
        getData();
    }, []);
    const [dataRole, setDataRole] = useState([]);
    useEffect(() => {
        const getDataRole = async () => {
            try {
                const { dataRole } = await api.getRole();
                setData(dataRole);
                console.log(dataRole);
            } catch (error) {
                console.log('failed to request API: ', error)
            }
        }
        getDataRole();
    }, []);

    const { register, handleSubmit, errors } = useForm()

    const [account, setAccount] = useState({});

    const date = new Date();

    const onHandleSubmit = (data) => {
        // console.log(data.avatar[0]);
        // let file = data.avatar[0];
        // // tạo reference chứa ảnh trên firesbase
        // let storageRef = firebase.storage().ref(`images/${file.name}`);
        // // đẩy ảnh lên đường dẫn trên
        // storageRef.put(file).then(function () {
        //     storageRef.getDownloadURL().then((url) => {
        //         console.log(url);
        //     })
        // });
        // Tạo object mới chứa toàn bộ thông tin từ input
        const newData = {
            ...account

        }
        console.log(newData);
        // đẩy dữ liệu ra ngoài app.js thông qua props onAdd
        // onUpdate(newData)
    }

    const onChange = (event) => {

        const { name, value } = event.target;
        setAccount({
            ...account,
            [name]: value
        })
        console.log(name, value);
    }
    const sex = document.querySelectorAll('#gender');


    return (
        <div style={{ marginLeft: 300, marginTop: 30 }}>
            <form className="w-50" onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="form-group">
                    <label htmlFor="user">Tên tài khoản</label>
                    <input
                        type="text"
                        name="user"
                        className="form-control"
                        id="user"
                        value={data.user}
                        aria-describedby="nameHelp"
                        ref={register}
                        onChange={onChange}
                    />
                    {errors.user && errors.user.type === "required" && <span>Không để trống</span>}
                    {errors.user && errors.user.type === "minLength" && <span>Bạn phải nhập ít nhất 5 ký tự</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Mật khẩu</label>
                    <input
                        type="text"
                        name="password"
                        className="form-control"
                        id="password"
                        value={data.password}
                        aria-describedby="passwordHelp"
                        ref={register}
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">

                    <label htmlFor="gender">Gender</label>
                    <br />
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" onChange={onChange}
                            checked={
                                sex.value === data.gender ? 'true' : 'false'
                            }
                            type="radio" name="gender" id="gender" value="Nam" />
                        <label class="form-check-label" for="inlineRadio1">Nam</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" onChange={onChange}
                            checked={
                                sex.value === data.gender ? 'true' : 'false'
                            }
                            type="radio" name="gender" id="gender" value="Nũ" />
                        <label class="form-check-label" for="inlineRadio1">Nữ</label>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="">Role</label>
                    <select class="custom-select" name="role" onChange={onChange} id="role">
                        <option selected>Role</option>
                        <option value="1">Hiệu trưởng</option>
                        <option value="2">Giáo viên</option>
                        <option value="3">Học sinh</option>
                    </select>
                </div>
                <select class="custom-select" size="3">
                    <option selected>Info</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <button type="submit" className="btn btn-primary">Sửa</button>
            </form>
        </div >
    )
}

EditAccount.propTypes = {
    onUpdate: PropTypes.func
}

export default EditAccount