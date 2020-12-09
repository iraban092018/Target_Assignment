import React from 'react'
import './App.css';
import {TransitContextProvider} from './context/TransitContext'
import SimpleContainer from './component/organisms/Layout'


function App() {
  return (
    <div className="App">
      <TransitContextProvider>
        <SimpleContainer />
      </TransitContextProvider>
    </div>
  );
}

export default App;
