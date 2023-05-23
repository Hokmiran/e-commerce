import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import ModalComponent from '../components/ModalComponent';

const initialValues = {
  title: '',
  description: '',
  price: ''
};

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
  image: Yup.string().url('Invalid image URL').required('Image URL is required'),
  price: Yup.number().required('Price is required')
});

function AddProductForm() {
  const nav = useNavigate();
  const [open, setOpen] = React.useState(false);
  const successAddProductText = 'Your product added successfully'

  const handleClose = () => {
    nav('/admin')
    setOpen(false);
  };

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post('https://fakestoreapi.com/products', {
        title: values.title,
        description: values.description,
        price: values.price,
        image: values.image
      });
      const newProduct = response.data;
      console.log('New product created:', newProduct);
    } catch (error) {
      console.error('Error creating product:', error);
    }
    setOpen(true);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit
  });

  return (
    <>
      <form style={{ padding: 30 }} onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <br />
          <input
            className="form-input"
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          {formik.touched.title && formik.errors.title && (
            <p className='validationText'>
              {formik.errors.title}
            </p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <br />
          <textarea
            className="textarea"
            id="description"
            name="description"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
          {formik.touched.description && formik.errors.description && (
            <p className='validationText'>
              {formik.errors.description}
            </p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="image" className="form-label">
            Image
          </label>
          <br />
          <input
            className="form-input"
            id="image"
            name="image"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.image}
          />
          {formik.touched.image && formik.errors.image && (
            <p className='validationText'>
              {formik.errors.image}
            </p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <br />
          <input
            className="form-input"
            id="price"
            name="price"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.price}
          />
          {formik.touched.price && formik.errors.price && (
            <p className='validationText'>
              {formik.errors.price}
            </p>
          )}
        </div>
        <div>
          <button className="form-button" type="submit">
            Add product
          </button>
        </div>
      </form>
      <ModalComponent successAddProductText={successAddProductText} open={open} handleClose={handleClose} />
    </>
  );
}
export default AddProductForm