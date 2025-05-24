import { useEffect, useState } from 'react';

export const Pokoje = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/rooms')
      .then((response) => response.json())
      .then((data) => {
        console.log('Načtená data:', data);
        // pokud data obsahují pole pokojů přímo:
        if (Array.isArray(data)) {
          setRooms(data);
        } else if (Array.isArray(data.data)) {
          // pokud je pole uvnitř data.data
          setRooms(data.data);
        } else {
          console.error('Neočekávaný formát dat:', data);
        }
      })
      .catch((error) => console.error('Chyba při načítání pokojů:', error));
  }, []);

  // useEffect(() => {
  //   fetch('http://localhost:4000/api/rooms')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setRooms(data);
  //     })
  //     // .then((data) => setRooms(data))
  //     .catch((error) => console.error('Chyba při načítání pokojů:', error));
  // }, []);

  return (
    <section className="dark">
      <div className="container">
        <h2>Naše pokoje</h2>
        <p>Vyberte si z naší nabídky komfortních pokojů.</p>
        <div className="cards-row">
          {rooms.map((room) => (
            <div key={room.id} className="card">
              <img
                className="card__image"
                src={`http://localhost:4000/assets/${room.image}`}
                alt={room.name}
              />
              <div className="card__title">{room.name}</div>
              <div className="card__body">{room.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// export const Pokoje = () => {
//   return (
//     <section className="dark">
//       <div className="container">
//         <h2>Heading</h2>
//         <p>Quas odio quidem, enim nihil unde quia temporibus vitae in ab.</p>
//         <div className="cards-row">
//           <div className="card">
//             <img className="card__image" src="img/image1.svg" alt="Card 1" />
//             <div className="card__title">Card 1</div>
//             <div className="card__body">Sunt natus</div>
//           </div>

//           <div className="card">
//             <img className="card__image" src="img/image1.svg" alt="Card 2" />
//             <div className="card__title">Card 2</div>
//             <div className="card__body">Laboriosam</div>
//           </div>

//           <div className="card">
//             <img className="card__image" src="img/image1.svg" alt="Card 3" />
//             <div className="card__title">Card 3</div>
//             <div className="card__body">Eveniet officiis</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
