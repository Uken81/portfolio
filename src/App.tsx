import { useState } from 'react';
import { Header } from './components/Header';
import { MainMessage } from './components/MainMessage';
import { Projects } from './components/Projects';
import './style.css';

function App() {
  const [messageName, setMessageName] = useState('');
  return (
    <div className="p-80">
      <Header setMessageName={setMessageName} />
      <div className="flex flex-row">
        <MainMessage messageName={messageName} />
        <Projects setMessageName={setMessageName} />
      </div>
    </div>
  );
}

export default App;
