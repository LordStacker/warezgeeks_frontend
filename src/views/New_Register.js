import React, { useState } from "react";
import banner from '../img/banner.png';
import anom from '../img/anom.png';
import '../styles/register.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';


const NewRegister = () => {
    const [submittedForm, setSubmittedForm] = useState(false);
    const [checked, setChecked] = useState(false);
    
         return (
        <>
            <Formik //contenedor del formulario
                initialValues={{//valores iniciales
                    name: '',
                    lastName: '',
                    userName: '',
                    password: '',
                    email: '',
                    phone: '',
                }}
                validate={(valores) => { //funcion para validar el formulario
                    let errores = {};

                    //Validacion nombre
                    if (!valores.name) {
                        errores.name = 'Por favor ingresa tu nombre.'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{4,40}$/.test(valores.name)) {
                        errores.name = 'El nombre solo puede contener letras y espacios, puede llevar tildes.'
                    }
                    if (!valores.lastName) {
                        errores.lastName = 'Por favor ingresa tu apellido.'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{4,40}$/.test(valores.lastName)) {
                        errores.lastName = 'El apellido solo puede contener letras y espacios, puede llevar tildes.'
                    }
                    //Validacion nombre de usuario
                    if (!valores.userName) {
                        errores.userName = 'Por favor ingresa tu nombre de usuario.'
                    } else if (!/^[a-zA-Z0-9]{4,16}$/.test(valores.userName)) {
                        errores.userName = 'El nombre de usuario puede contener letras, numeros, guion y guion bajo.'
                    }
                    //Validacion password
                    if (!valores.password) {
                        errores.password = 'Por favor ingresa tu contraseña.'
                    } else if (!/^.{4,12}$/.test(valores.password)) {
                        errores.password = 'Tu contraseña debe tener entre 4 a 12 digitos.'
                    }
                    //Validacion correo
                    if (!valores.email) {
                        errores.email = 'Por favor ingresa tu email.'
                    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) {
                        errores.email = 'El correo puede tener letras, numeros, puntos guiones y guion bajo.'
                    }
                    //Validacion phone
                    if (!valores.phone) {
                        errores.phone = 'Por favor ingresa tu numero de celular.'
                    } else if (!/^\d{9}$/.test(valores.phone)) {
                        errores.phone = 'Numero de telefono debe tener 9 numeros.'
                    }

                    return errores;
                }}

                onSubmit={(valores, { resetForm }) => { //funcion para enviar formulario
                    resetForm();
                    console.log('Formulario enviado')
                    setSubmittedForm(true);
                    setTimeout(() => setSubmittedForm(false), 3000)
                }}

                
            >
                {({ values, errors, handleSubmit, touched, handleChange, handleBlur }) => ( //render prop, funcion que va dentro de Formik que nos permite insertar informacion
                    <Form className="formulario">
                        <div>

                            <div className="col-md-12">
                                <img src={banner} className="img-fluid" alt="Responsive img" />

                                <div className="row">
                                    <div className="col-md-2 p-2">
                                        <img src={anom} className="img-thumbnail rounded-circle" alt="Responsive img" />
                                    </div>
                                    <div className="col-md-6 p-2">

                                        <div>
                                            <label htmlFor="name">Name</label>
                                            <Field type="text" id="name" name="name" placeholder="John" />
                                            <ErrorMessage name="name" component={() => (<div className="error">{errors.name}</div>)} />
                                        </div>

                                        <div>
                                            <label htmlFor="lastName">Last Name</label>
                                            <Field type="text" id="lastName" name="lastName" placeholder="Doe" />
                                            <ErrorMessage name="lastName" component={() => (<div className="error">{errors.lastName}</div>)} />
                                        </div>

                                        <div>
                                            <label htmlFor="userName">User Name</label>
                                            <Field type="text" id="userName" name="userName" placeholder="Raccon95" />
                                            <ErrorMessage name="userName" component={() => (<div className="error">{errors.userName}</div>)} />
                                        </div>

                                        <div>
                                            <label htmlFor="password">Password</label>
                                            <Field type="password" id="password" name="password" placeholder="Tu contraseña" />
                                            <ErrorMessage name="password" component={() => (<div className="error">{errors.password}</div>)} />
                                        </div>

                                        <div>
                                            <label htmlFor="email">Email</label>
                                            <Field type="email" id="email" name="email" placeholder="email@email.com" />
                                            <ErrorMessage name="email" component={() => (<div className="error">{errors.email}</div>)} />
                                        </div>

                                        <div>
                                            <label htmlFor="Phone">Phone</label>
                                            <Field type="number" id="phone" name="phone" placeholder="999999999" />
                                            <ErrorMessage name="phone" component={() => (<div className="error">{errors.phone}</div>)} />
                                        </div>

                                        <div>
                                            <label>
                                                <Field type="checkbox" name="student" value="student" id="student" />Quiero registrarme como estudiante
                                            </label>
                                            <label>
                                                <Field type="checkbox" name="teacher" value="teacher" id="teacher" checked={!checked} onChange={handleChange} />Quiero registrate como profesor
                                            </label>
                                        </div>

                                        <div>
                                            <label htmlFor="knowledge">Knowledge</label>
                                            <Field name="knowledge" as="input" id="knowledge" disabled={checked} required="required" placeholder="Solo si te registras como profesor" />
                                        </div>
                                        <button type="submit">Enviar</button>
                                        {submittedForm && <p className="exito">Formmulario enviado con exito</p>}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}


export default NewRegister;

