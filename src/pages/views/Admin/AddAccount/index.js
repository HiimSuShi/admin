import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import firebase from '../../../../firebase'



const AddAccount = ({ onAdd }) => {
    const { register, handleSubmit, errors } = useForm();
    let history = useHistory();

    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");

    const onHandleSubmit = (data) => {
        console.log(data.avatar[0]);
        let file = data.avatar[0];
        // tạo reference chứa ảnh trên firesbase
        let storageRef = firebase.storage().ref(`images/${file.name}`);
        // đẩy ảnh lên đường dẫn trên
        storageRef.put(file).then(function () {
            storageRef.getDownloadURL().then((url) => {
                console.log(url);
                // Tạo object mới chứa toàn bộ thông tin từ input
                const newData = {
                    user: Math.random().toString(36).substr(2, 9),
                    ...data,
                    password,
                    gender,
                    avatar: url
                }
                console.log(newData);
                // đẩy dữ liệu ra ngoài app.js thông qua props onAdd
                onAdd(newData)
            })
        });
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
                    />
                </div>
                <div className="form-group">
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
                </div>
                <div className="form-group">

                    <label htmlFor="gender">Gender</label>
                    <br />
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="sex" id="gender" value="option1" />
                        <label class="form-check-label" for="inlineRadio1">Nam</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="sex" id="gender" value="option1" />
                        <label class="form-check-label" for="inlineRadio1">Nữ</label>
                    </div>
                </div>

                {/* <div className="form-group">
                    <label htmlFor="">Role</label>
                    <input
                        type="text"
                        name="price"
                        className="form-control"
                        id="password"
                        aria-describedby="priceHelp"
                        ref={register}
                    />
                </div> */}
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