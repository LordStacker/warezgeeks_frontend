import React from 'react';
import { Link } from 'react-router-dom';

const TeacherRequest = () => {
    return (
        <div className="container">
            <div className="d-flex justify-content-start">
                <div className="col-md-3">
                    <img src="http://lorempixel.com/400/200" className="img-thumbnail" alt="..." />
                    <h5>Nombre</h5>
                    <div className="d-flex justify-content-between">
                        <Link role="button" className="d-inline p-2 btn btn-danger" to="/teacher/profile">Perfil</Link>
                        <Link role="button" className="d-inline p-2 btn btn-danger" to="/teacher/availability">Agendar</Link>  
                        <button type="button" className="d-inline p-2 btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="contacto@warezgeeks.cl">Contactanos</button>

                        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Nuevo Mensaje</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className="mb-3">
                                                <label htmlFor="recipient-name" className="col-form-label">Destinatario:</label>
                                                <input type="text" className="form-control" id="recipient-name" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="message-text" className="col-form-label">Mensaje:</label>
                                                <textarea className="form-control" id="message-text"></textarea>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                        <button type="button" className="btn btn-primary" onClick="submit">Enviar Mensaje</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-8">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td colspan="2">Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default TeacherRequest;