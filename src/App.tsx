import { useState } from 'react';
import { Header } from './components/Header';
import { MainMessage } from './components/MainMessage';
import { Projects } from './components/Projects';
import './style.css';

function App() {
  const [messageName, setMessageName] = useState('');
  return (
    <div className="flex p-10">
      <div className="border-red-500 border-opacity-10">
        <Header setMessageName={setMessageName} />
        <MainMessage messageName={messageName} />
        <Projects setMessageName={setMessageName} />
      </div>
    </div>
  );
}

export default App;
