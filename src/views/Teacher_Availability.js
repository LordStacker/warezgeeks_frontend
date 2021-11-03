import React, { useState } from "react";
import CalendarTemplate from 'availability-calendar-react';
import { Link } from "react-router-dom";

const TeacherAvailability = () => {
    const [availability, setAvailability] = useState([])
    const Calendar = CalendarTemplate({
        availability,
        setAvailability: (update) =>{
            console.log(update)
            setAvailability(update)
        },
        startTime: "11:00",
        endTime: "20:00"
    })

//const exampleModal = document.getElementById('exampleModal');
//  exampleModal.addEventListener('show.bs.modal', function (event) {
        // Button that triggered the modal
//const button = event.relatedTarget
        // Extract info from data-bs-* attributes
//const recipient = button.getAttribute('data-bs-whatever')
        // If necessary, you could initiate an AJAX request here
        // and then do the updating in a callback.
        //
        // Update the modal's content.
//const modalTitle = exampleModal.querySelector('.modal-title')
//const modalBodyInput = exampleModal.querySelector('.modal-body input')

//modalTitle.textContent = 'Envianos tu mensaje'
//modalBodyInput.value = recipient
//})


    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-start">
                    <div className="col-md-3">
                        <img src="http://lorempixel.com/400/200" className="img-thumbnail" alt="..." />
                        <h5>Nombre</h5>
                        <div className="d-flex justify-content-between">
                            <Link role="button" className="d-inline p-2 btn btn-danger" to="/teacher/profile">Perfil</Link>
                            <Link role="button" className="d-inline p-2 btn btn-danger" to="/teacher/request">Solicitudes</Link>
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
                    <div className="col-md-9">
                        <Calendar />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeacherAvailability;