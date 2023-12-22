import React, { useState } from 'react';
import './styles.css';

const Booking: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);

  const handleButtonClick = (room: string) => {
    setSelectedRoom(room);
  };

  return (
    <div>
      <div className="ktvrooms">
        <button className="room1" onClick={() => handleButtonClick('room1')}><img width="100%" src="https://via.placeholder.com/150" alt="1room" /></button>
        <button className="room2" onClick={() => handleButtonClick('room2')}><img width="100%" src="https://via.placeholder.com/150" alt="2room" /></button>
        <button className="room3" onClick={() => handleButtonClick('room3')}><img width="100%" src="https://via.placeholder.com/150" alt="3room" /></button>
        <button className="room4" onClick={() => handleButtonClick('room4')}><img width="100%" src="https://via.placeholder.com/150" alt="4room" /></button>
        <button className="room5" onClick={() => handleButtonClick('room5')}><img width="100%" src="https://via.placeholder.com/150" alt="5room" /></button>
        <button className="room6" onClick={() => handleButtonClick('room6')}><img width="100%" src="https://via.placeholder.com/150" alt="6room" /></button>
        <button className="room7" onClick={() => handleButtonClick('room7')}><img width="100%" src="https://via.placeholder.com/150" alt="7room" /></button>
        <button className="room8" onClick={() => handleButtonClick('room8')}><img width="100%" src="https://via.placeholder.com/150" alt="8room" /></button>
        
      </div>
      {selectedRoom && (
        <div className="floating-form" style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1, display: 'flex',}}>        
        <div style={{backgroundColor: 'beige', padding: '10px'}}>
            <form>
              <label>
                Name:
                <input type="text" name="name" />
              </label>
              <label>
                Contact number:
                <input type="text" name='phone' />
              </label>
              <label>
                Email:
                <input type="email" name="email" />
              </label>
              <input className='submeet' type="submit" value="Submit"/>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
       

export default Booking;