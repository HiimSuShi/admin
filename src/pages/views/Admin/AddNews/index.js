import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { useForm } from "react-hook-form";


const AddNews = ({ onAdd }) => {
    const { register, handleSubmit, errors } = useForm();

    const date = new Date(); // Biến này lấy ngày

    const onHandleSubmit = (data) => {
        console.log("thêm thành công")
    }

    return (
        <div style={{ marginLeft: 300, marginTop: 30 }}>
            <form className="w-50" onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="form-group">
                    <label htmlFor="title">Tiêu đề</label>
                    <input
                        type="text"
                        name="title"
                        className="form-control"
                        id="title"
                        aria-describedby="nameHelp"
                        ref={register}
                    />
                    {errors.title && errors.title.type === "required" && <span>Không để trống</span>}
                    {errors.title && errors.title.type === "minLength" && <span>Bạn phải nhập ít nhất 5 ký tự</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="description">Mô tả ngắn</label>
                    <input
                        type="text"
                        name="description"
                        className="form-control"
                        id="description"
                        aria-describedby="descriptionHelp"
                        ref={register}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="categories">Danh mục</label>
                    <select class="custom-select" >
                        <option selected>Select Categories</option>
                        <option value="1">ABC</option>
                        <option value="2">UnCategories</option>
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

AddNews.propTypes = {
    onAdd: PropTypes.func
}

export default AddNews