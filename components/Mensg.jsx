import React from 'react';

const Mensag = ({ mensaje }) => {
  return (
    <span className='msg-user msgs'>
      <i>{mensaje.propietario}</i> | {mensaje.text}
    </span>
  );
};

export default Mensag;
