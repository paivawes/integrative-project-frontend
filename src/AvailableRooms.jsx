import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import { Button } from './components/atoms/button/button';
import ScheduleService from './service/schedule-service/schedule-service';

function AvailableRooms({ startDate, endDate, availableRoom, scheduleDescription }) {
  const [rooms, setRooms] = useState(availableRoom);
  const [error, setError] = useState(null);
  const [reservedRooms, setReservedRooms] = useState([]);

  console.log(scheduleDescription , 'save')

  const scheduleService = new ScheduleService()

  const handleReserve = (roomId) => {
    scheduleService.create({
      description: scheduleDescription,
      userId: 5,
      roomId: roomId,
      startToScheduling: startDate,
      endToScheduling: endDate
    }).then(( res) => (console.log(res,   'res')))
  };

  return (
    <div>
      <h2>Salas Disponíveis</h2>
      {!error ? (
        <List sx={{ width: 400 }} component={Paper}>
          {rooms?.map((room) => (
            <ListItem key={room.id}>
              <ListItemText
                primary= {room.name}
                secondary= {"Capacidade: " + room.capacity}
              />
              <Button
                label={reservedRooms.includes(room.id) ? 'Solicitada' : 'Reservar'}
                onClick={() => handleReserve(room.id)}
                disabled={reservedRooms.includes(room.id)}
              />
            </ListItem> 
          ))}
        </List>
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
}

export default AvailableRooms;
