import { useState } from 'react';
import { Demo, DemoImage } from './components/demo/Demo';
import { Header } from './components/Header';
import { MainMessage } from './components/MainMessage';
import { Projects } from './components/Projects';
import './style.css';

function App() {
  const [messageType, setMessageType] = useState('welcome');
  const [demoImage, setDemoImage] = useState('');
  const closeDemo = () => {
    setDemoImage('');
  };

  return (
    <div className="p-52">
      <Header setMessageType={setMessageType} closeDemo={closeDemo} />
      <div className="flex justify-center">
        <Demo demoImage={demoImage} />
      </div>
      <div className="flex flex-row">
        <MainMessage messageType={messageType} setDemoImage={setDemoImage} />
        <Projects setMessageType={setMessageType} closeDemo={closeDemo} />
      </div>
    </div>
  );
}

export default App;
