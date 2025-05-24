import React, { useState, useEffect } from 'react';


const RoomList = () => {
  const [rooms, setRooms] = useState([]); 

    useEffect(() => {
    fetch('http://localhost:4000/api/rooms')
      .then((response) => response.json())
      .then((data) => {
        setRooms(data); 
      });
  }, []); 

    return (
    <div>
      <h2>Naše pokoje</h2>
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>
            <h3>{room.title}</h3>
            <img src={room.image} alt={room.title} width="250" />
            <p>{room.description}</p>
            <p><strong>Cena:</strong> {room.price} Kč / noc</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoomList;

