import React, { useState } from 'react';

const InputCreate = () => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const urlApi = 'http://localhost:5000/create';
    const payload = { title };

    try {
      const response = await fetch(urlApi, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        console.log('Tarea añadida correctamente');
        setTitle('');
      } else {
        console.error('Error al añadir la tarea');
      }
    } catch (error) {
      console.error('Error de conexión', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Añadir nueva tarea"
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default InputCreate;