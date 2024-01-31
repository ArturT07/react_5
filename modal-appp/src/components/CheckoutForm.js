import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './CheckoutForm.scss';

const CheckoutForm = ({ clearCart, purchasedItemCount }) => {
  return (
    <div className="checkout-form-container">
      <h2>Delivery Form </h2>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          age: '',
          address: '',
          phone: '',
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().required('Required'),
          lastName: Yup.string().required('Required'),
          age: Yup.number().required('Required').positive('Must be positive').integer('Must be an integer'),
          address: Yup.string().required('Required'),
          phone: Yup.string().required('Required'),
        })}
        onSubmit={(values, { resetForm }) => {
          console.log('Form submitted:', values);
          resetForm();
          clearCart();
          console.log(`Items Purchased: ${purchasedItemCount}`);
        }}
      >
        <Form className="checkout-form">
          <div className="form-column">
            <label htmlFor="firstName">First Name</label>
            <Field type="text" id="firstName" name="firstName" />
            <ErrorMessage className='error-message' name="firstName" component="div" />

            <label htmlFor="lastName">Last Name</label>
            <Field type="text" id="lastName" name="lastName" />
            <ErrorMessage className='error-message' name="lastName" component="div" />
          </div>

          <div className="form-column">
            <label htmlFor="age">Age</label>
            <Field type="number" id="age" name="age"  />
            <ErrorMessage className='error-message' name="age" component="div" />

            <label htmlFor="address">Address</label>
            <Field type="text" id="address" name="address" />
            <ErrorMessage className='error-message' name="address" component="div" />

            <label htmlFor="phone" >Phone</label>
            <Field type="number" id="phone" name="phone"  />
            <ErrorMessage className='error-message' name="phone" component="div" />
          </div>

          <button type="submit">Checkout</button>
        </Form>
      </Formik>
    </div>
  );
};

export default CheckoutForm;
