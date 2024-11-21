import React, { useState } from "react";
import "./../styles/RSVPForm.css";

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    attendees: "",
    attending: "yes",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("RSVP Data Submitted:", formData);
    alert("¡Gracias por confirmar tu asistencia!");
  };

  return (
    <section className="rsvp">
      <h2>Confirma tu asistencia</h2>
      <form className="rsvp-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="Nombre"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Apellido"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="attendees"
          placeholder="Cantidad de asistentes"
          value={formData.attendees}
          onChange={handleChange}
          required
          min="1"
        />
        <select
          name="attending"
          value={formData.attending}
          onChange={handleChange}
        >
          <option value="yes">Sí, asistiré</option>
          <option value="no">No puedo asistir</option>
        </select>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default RSVPForm;
