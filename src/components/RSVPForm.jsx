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
    try {
      const response = await fetch(
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

      const result = await response.json(); // Parsear el JSON de la respuesta
      if (result.status === "success") {
        setStatus("success"); // Indicar éxito
        setFormData({ firstName: "", lastName: "", attendees: "", confirmed: false }); // Limpiar el formulario
      } else {
        setStatus("error"); // Indicar error si el servidor devuelve algo inesperado
      }
    } catch (error) {
      setStatus("error");
      console.error("Error enviando el formulario:", error); // Mostrar error en la consola
    }
  };

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
      {status === "success" && (
        <p className="success-message">¡Datos enviados correctamente!</p>
      )}
      {status === "error" && (
        <p className="error-message">Ocurrió un error. Intenta de nuevo.</p>
      )}
    </form>
  );
};

export default RSVPForm;
