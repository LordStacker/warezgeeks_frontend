import React, { useState } from "react";
import "../styles/Signup.css"


const Signup = () => {

	const [checked, setChecked] = React.useState(false);
 
  	const handleChange = (e) => {
    setChecked(!checked)
	  };

	return (
	<div className="container-fluid containerForm">
		<div className="signup-form ">
			<form action="" method="post">
				<h2 className="text-center mb-4">Sign Up</h2>
				<hr />
				<div className="form-group mt-5">
					<div className="input-group">
						<div className="input-group-prepend">
						</div>
						<input
							type="text"
							className="form-control"
							name="username"
							placeholder="Nombre"
							required="required"
						/>
					</div>
				</div>
				<div className="form-group">
					<div className="input-group">
						<div className="input-group-prepend">
						</div>
						<input
							type="text"
							className="form-control"
							name="username"
							placeholder="Apellido"
							required="required"
						/>
					</div>
				</div>
				<div className="form-group">
					<div className="input-group">
						<div className="input-group-prepend">
						</div>
						<input
							type="email"
							className="form-control"
							name="email"
							placeholder="Correo"
							required="required"
						/>
					</div>
				</div>
				<div className="form-group">
					<div className="input-group">
						<div className="input-group-prepend">
						</div>
						<input
							type="email"
							className="form-control"
							name="email"
							placeholder="Telefono"
							required="required"
						/>
					</div>
				</div>
				<div className="form-group">
					<div className="input-group">
						<div className="input-group-prepend">
						</div>
						<input
							type="knowledge"
							className="form-control"
							name="knowledge"
							placeholder="Knowledge"
							required="required"
							id="knowledge"
							disabled={checked}
						/>
					</div>
				</div>
				<p>Minimo 8 caracteres</p>
				<div className="form-group">
					<div className="input-group">
						<div className="input-group-prepend">
						</div>
						<input
							type="password"
							className="form-control"
							name="password"
							placeholder="Contraseña"
							required="required"
						/>
					</div>
				</div>
				<div className="form-group">
					<div className="input-group">
						<div className="input-group-prepend">
						</div>
						<input
							type="password"
							className="form-control"
							name="confirm_password"
							placeholder="Confirmar Contraseña"
							required="required"
						/>
					</div>
				</div>

				<div className="form-check">
					<input className="form-check-input" 
					type="checkbox" 
					name="flexRadioDefault" 
					id="estudiante" />
					<label className="form-check-label">Quiero registrarme como Estudiante</label>
				</div>
				<div className="form-check">
					<input className="form-check-input" 
					type="checkbox" 
					name="flexRadioDefault" 
					id="profesor" 
					checked={!checked}
          			onChange={handleChange} /> 
					<label className="form-check-label">Quiero registrarme como Profesor</label>
				</div>
				<div className="form-group">
					<label className="form-check-label mt-4">
						<input type="checkbox" required="required" /> He leido y acepto los{" "}
						<a href="#">Terminos y condiciones</a>
					</label>
				</div>
				<div className="form-group d-flex justify-content-center">
					<button type="submit" className="btn btn-primary btn-lg">
						Registrar
					</button>
				</div>
			</form>
		</div>
	</div>
	)};

	export default Signup;