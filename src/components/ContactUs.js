import React from 'react';

const ContactUs = () => {
    return (
        <div className="container mt-5">
            <div className="row">
            <div className="Title d-flex justify-content-center">
                        <h2>Contáctanos</h2>
                    </div>
                <div className="col">                   
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">¿Cuál es tu nombre?</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Juanito Perez" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Tu correo electronico</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="correo@correo.cl" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">¿Por qué tema nos contáctas?</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </div>
                <div className="col d-flex align-items-center">
                    <div className="body">
                        Si necesitas contactarnos para hacer alguna consulta o simplemente para dejar tu comentario, este es el lugar. <br/><br/>Responderemos lo antes posible.
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <button class="btn btn-primary" type="submit">Enviar</button>
            </div>
        </div>

    )
}

export default ContactUs;
