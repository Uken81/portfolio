import { useState } from 'react';
import { Header } from './components/Header';
import { MainMessage } from './components/MainMessage';
import { Projects } from './components/Projects';
import './style.css';

function App() {
  const [messageType, setMessageType] = useState('welcome');
  return (
    <div className="p-80">
      <Header setMessageType={setMessageType} />
      <div className="flex flex-row">
        <MainMessage messageType={messageType} />
        <Projects setMessageType={setMessageType} />
      </div>
    </div>
  );
}

export default App;
