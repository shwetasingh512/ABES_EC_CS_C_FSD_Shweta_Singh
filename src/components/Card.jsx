import React from 'react';
import './card.css';

function Card(props) {
  return (
   
    <div id="card">
        
      <img src="https://th.bing.com/th/id/OIP.i2-YgShPq7rw1TZ0FaG0jgAAAA?w=221&h=180&c=7&r=0&o=7&pid=1.7&rm=3" alt="Profile" height={100} width={100} />
      <h1>{props.name}</h1>
      <h2>{props.edu}</h2>
    </div>
  );
}

export default Card;
