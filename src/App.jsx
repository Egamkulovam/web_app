import React, { useState } from 'react';
import Enter from './components/home/Enter';

import './App.css';
function App() {

  const [showHome, setShowHome] = useState(true);

  const handleHomeButtonClick = () => {
    setShowHome(false); 
  };



  return (
    <div className="App">
       {showHome ? (
        <Enter onButtonClick={handleHomeButtonClick} />
      ) : (
        <div>
         <h1>Home</h1>
         
        </div>
      )}
    </div>
  );
    

}

export default App;
