import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Pokoje = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/rooms')
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setRooms(data);
        } else if (Array.isArray(data.data)) {
          setRooms(data.data);
        } else {
          console.error('Neočekávaný formát dat:', data);
        }
      })
      .catch((error) => console.error('Chyba při načítání pokojů:', error));
  }, []);

  return (
    <section className="dark">
      <div className="container">
        <h2>Naše pokoje</h2>
        <p>Vyberte si z naší nabídky komfortních pokojů.</p>
        <div className="cards-row">
          {rooms.map((room) => (
            <Link
              to={`/pokoje/${room.id}`}
              key={room.id}
              className="card"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <img
                className="card__image"
                src={`http://localhost:4000/assets/${room.image}`}
                alt={room.name}
              />
              <div className="card__title">{room.name}</div>
              <div className="card__body">{room.description}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
