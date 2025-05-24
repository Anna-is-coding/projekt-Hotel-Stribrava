import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const PokojDetail = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:4000/api/rooms/${id}`)
      .then((res) => res.json())
      .then((data) => setRoom(data));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!room) return <p>Načítám data o pokoji...</p>;

  return (
    <section className="light">
      <div className="container">
        <h2>{room.name}</h2>
        <img
          src={`http://localhost:4000/assets/${room.image}`}
          alt={room.name}
        />
        <p>{room.description}</p>
        <p><strong>Cena: {room.price} Kč / noc</strong></p>

        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <h3>Formulář poptávky</h3>

            <label>Počet nocí:</label>
            <input type="number" min="1" required />

            <label>Počet osob:</label>
            <input type="number" min="1" required />

            <label>Speciální požadavky:</label>
            <textarea rows="4" />

            <button type="submit">Odeslat poptávku</button>
          </form>
        ) : (
          <p><strong>✅ Poptávka úspěšně odeslána!</strong></p>
        )}
      </div>
    </section>
  );
};
