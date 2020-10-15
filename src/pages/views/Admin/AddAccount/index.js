import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import api from "./../../../../api/accountApi";
import firebase from '../../../../firebase'

const AddAccount = ({ onAdd, dataRole }) => {
    const { register, handleSubmit, errors } = useForm();
    let history = useHistory();

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

            ...account,
            created_at: date,
            updated_at: null,
            info_id: null,
            role_id: null,
            class_id: null,

        }
        console.log(newData);
        // đẩy dữ liệu ra ngoài app.js thông qua props onAdd
        onAdd(newData)
    }
    console.log(dataRole);
    const onChange = (event) => {

        const { name, value } = event.target;
        setAccount({
            active: null,
            ...account,
            [name]: value
        })
        console.log(name, value);
    }

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
                        aria-describedby="passwordHelp"
                        ref={register}
                        onChange={onChange}
                    />
                </div>
                {/* <div className="form-group">
                    <label htmlFor="avatar">Avatar</label>
                    <div className="input-group">
                        <div className="custom-file">
                            <input type="file"
                                className="custom-file-input"
                                id="avatar"
                                name="avatar"
                                ref={register}
                            />
                            <label className="custom-file-label" htmlFor="avatar" aria-describedby="avatarHelp">Choose image</label>
                        </div>
                    </div>
                </div> */}
                <div className="form-group">

                    <label htmlFor="gender">Gender</label>
                    <br />
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" onChange={onChange} type="radio" name="gender" id="gender" value="Nam" />
                        <label class="form-check-label" for="inlineRadio1">Nam</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" onChange={onChange} type="radio" name="gender" id="gender" value="Nũ" />
                        <label class="form-check-label" for="inlineRadio1">Nữ</label>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="">Role</label>
                    <select class="custom-select" name="role" id="role">
                        <option selected>Role</option>

                        {/* {dataRole.map(({ id, role_name }, index) => (

                            <option value="{id}">{role_name}</option>
                        ))} */}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="">Info</label>
                    <select class="custom-select" >
                        <option selected>Chọn thông tin của user</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="">Lớp</label>
                    <select class="custom-select" >
                        <option selected>Chọn lớp</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                {/* <div className="form-group">
                    <label htmlFor="Giới thiệu">Mô tả</label>
                    <Editor
                        init={{
                            height: 500,
                            images_upload_url: 'postAcceptor.php',
                            plugins: [
                                'advlist autolink lists link image charmap print preview anchor',
                                'searchreplace visualblocks code fullscreen',
                                'insertdatetime media table paste code help wordcount'
                            ],
                            toolbar:
                                'undo redo | formatselect | bold italic backcolor |  image link\
                                alignleft aligncenter alignright alignjustify | \
                                bullist numlist outdent indent | removeformat | help',

                        }}
                        onEditorChange={handleEditorChange}
                    />
                </div> */}
                <button type="submit" className="btn btn-primary">Thêm</button>
            </form>
        </div >
    )
}

AddAccount.propTypes = {
    onAdd: PropTypes.func
}

export default AddAccount