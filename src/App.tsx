import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div style={{
      height: '100%',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
    }}
    >
      <div color="black">
        <div color="green" className="row">
          <Button>.</Button>
          <div className="column" color="purple" style={{ textAlign: 'center' }}>
            I am desperately
          </div>
          <div className="column" color="orange" style={{ textAlign: 'center' }}>
            trying to save the world with everything
          </div>
          <div className="column" color="red" style={{ textAlign: 'center' }}>
            I have, so let&apos;s hope it works.
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
