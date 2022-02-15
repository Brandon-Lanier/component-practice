import React from 'react'
import './App.css';
import Header from '../Header/Header';
import Topbar from '../Topbar/Topbar';
import Highpriority from '../Highprioprity/Highpriority';
import Mediumpriority from '../Mediumpriority/Mediumpriority';
import Lowpriority from '../Lowpriority/Lowpriority'

function App() {
  return (
    <div className="App">
      <header className="header">
      <Header />
      </header>
      <Topbar />
      <main>
      <Highpriority />
      <Mediumpriority />
      <Lowpriority />
      </main>

      
    </div>
  );
}

export default App;
