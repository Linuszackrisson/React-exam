import React from 'react';

const Event = ({ name, price, where, when }) => {
  return (
    <div className="event">
      <h2>{name}</h2>
      <p>Pris: {price} kr</p>
      <p>Var: {where}</p>
      <p>När: {when.date} kl {when.from} - {when.to}</p>
    </div>
  );
};

export default Event;
