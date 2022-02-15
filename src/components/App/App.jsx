import React from 'react'
import './App.css';
import Header from '../Header/Header';
import Topbar from '../Topbar/Topbar';
import Highpriority from '../Highprioprity/Highpriority';
import Mediumpriority from '../Mediumpriority/Mediumpriority';
import Lowpriority from '../Lowpriority/Lowpriority';
import Togglebuttons from '../Togglebuttons/Togglebuttons';

function App() {
  return (
    <div className="App">
      <header className="header">
      <Header />
      </header>
      <Topbar />
      <section>
        <Togglebuttons />
      </section>
      <main>
      <Highpriority />
      <Mediumpriority />
      <Lowpriority />
      </main>

      
    </div>
  );
}

export default App;
