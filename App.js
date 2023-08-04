import React from 'react';
import './App.css';
import { ClickGame } from './Components/ClickGame';


export const UserContext = React.createContext();
function App() {
 

  return (
    <div className="App">
      <ClickGame/>
    </div>
  );
}

export default App;
