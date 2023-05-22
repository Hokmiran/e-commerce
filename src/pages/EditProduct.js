import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { Context } from '../context/Context';
import ModalComponent from '../components/ModalComponent';


function EditProduct() {

    const { id } = useParams();
    const { data } = useContext(Context)
    const editableData = data && data?.data?.filter(q => q.id == id)
    const [open, setOpen] = useState(false);
    const successEditText = 'Your changes successfully updated'
    const nav = useNavigate();


    const handleClose = () => {
        setOpen(false);
        nav('/admin')
    };

    const addProductValidationSchema = Yup.object().shape({
        title: Yup.string()
            .required("This field cannot be empty"),
        description: Yup.string()
            .required("This field cannot be empty"),
        image: Yup.string().url('Invalid image URL').required('Image URL is required'),
        price: Yup.string()
            .required("This field cannot be empty")
    })

    const formik = useFormik({
        initialValues: {
            id: (editableData && editableData[0]?.id) || "",
            title: (editableData && editableData[0]?.title) || "",
            description: (editableData && editableData[0]?.description) || "",
            image: (editableData && editableData[0]?.image) || "",
            price: (editableData && editableData[0]?.price) || ""
        },
        validationSchema: addProductValidationSchema,
        onSubmit: (values) => {
            axios.put(`https://fakestoreapi.com/products/${editableData[0]?.id}`, values)
            setOpen(true);
        }
    })

    useEffect(() => {
        if (!formik.values.title && !formik.values.description && !formik.values.price && editableData) {
            formik.setValues({
                title: editableData[0]?.title || "",
                description: editableData[0]?.description || "",
                image: (editableData && editableData[0]?.image) || "",
                price: editableData[0]?.price || ""
            });
        }
    }, [editableData, formik.values.title, formik.values.description, formik.values.price]);
    console.log(editableData);
    return (<>

        <form style={{ padding: 30 }} onSubmit={formik.handleSubmit}>
            <div className="form-group">
                <label htmlFor="title" className="form-label">Title</label>
                <br />
                <input className="form-input" id="title" name="title" type="text" onChange={formik.handleChange} value={formik.values.title} />
                {formik.touched.title && formik.errors?.title &&
                    <p className='validationText'>
                        {formik.errors.title}
                    </p>}
            </div>
            <div className="form-group">
                <label htmlFor="description" className="form-label">Description</label>
                <br />
                <input className="form-input" id="description" name="description" type="text" onChange={formik.handleChange} value={formik.values.description} />
                {formik.touched.description && formik.errors?.description &&
                    <p className='validationText'>
                        {formik.errors.description}
                    </p>}
            </div>
            <div className="form-group">
                <label htmlFor="image" className="form-label">Image</label>
                <br />
                <input className="form-input" id="image" name="image" type="text" onChange={formik.handleChange} value={formik.values.image} />
                {formik.touched.image && formik.errors?.image &&
                    <p className='validationText'>
                        {formik.errors.image}
                    </p>}
            </div>
            <div className="form-group">
                <label htmlFor="price" className="form-label">Price</label>
                <br />
                <input className="form-input" id="price" name="price" type="text" onChange={formik.handleChange} value={formik.values.price} />
                {formik.touched.price && formik.errors?.price &&
                    <p className='validationText'>
                        {formik.errors?.price}
                    </p>}
            </div>
            <div>
                <button className="form-button" type="submit">Save changes</button>
            </div>
        </form>
        <ModalComponent open={open} handleClose={handleClose} successEditText={successEditText} />
    </>

    )
}

export default EditProduct
