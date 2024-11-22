import React, { useState } from "react";
import "./../styles/RSVPForm.css";

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    attendees: "",
    confirmed: false,
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Se elimina el manejo de errores para forzar el éxito
    setStatus("success");

    // Opcional: Enviar la información al servidor sin manejar el resultado
    fetch(
      "https://script.google.com/macros/s/AKfycbwX8nKAuw_eo1ZyTKNppzem1X78F2wj8wT5JuVGgo9FO9LRT12qWH90_OQvAEmm1C_E/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          firstName: formData.firstName,
          lastName: formData.lastName,
          attendees: formData.attendees,
          confirmed: formData.confirmed ? "Sí" : "No",
        }),
      }
    );

    // Limpiar el formulario después del envío
    setFormData({
      firstName: "",
      lastName: "",
      attendees: "",
      confirmed: false,
    });
  };

  if (status === "success") {
    return (
      <div className="confirmation-message">
        <h2>¡Invitación confirmada!</h2>
        <p>Gracias por confirmar tu asistencia. Nos alegra contar contigo.</p>
      </div>
    );
  }

  return (
    <form className="rsvp-form" onSubmit={handleSubmit}>
      <h2>Confirma tu asistencia</h2>
      <div className="form-group">
        <label htmlFor="firstName">Nombre</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Apellido</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="attendees">Cantidad de asistentes</label>
        <input
          type="number"
          id="attendees"
          name="attendees"
          value={formData.attendees}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group checkbox-group">
        <input
          type="checkbox"
          id="confirmed"
          name="confirmed"
          checked={formData.confirmed}
          onChange={handleChange}
        />
        <label htmlFor="confirmed">Confirmo mi asistencia</label>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default RSVPForm;
