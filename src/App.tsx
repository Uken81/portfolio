import { useState } from 'react';
import { Demo } from './components/demo/Demo';
import { Header } from './components/Header';
import { MainMessage } from './components/MainMessage';
import { Projects } from './components/Projects';
import './style.css';

function App() {
  const [messageType, setMessageType] = useState('welcome');
  const [demoImage, setDemoImage] = useState<string | null>(null);
  //remove function and use state setter instead?
  const closeDemo = () => {
    setDemoImage(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 px-52 py-32 text-gray-400">
      <Header setMessageType={setMessageType} closeDemo={closeDemo} />
      <div className="px-32">
        <div className="flex justify-center p-16">
          <Demo demoImage={demoImage} closeDemo={closeDemo} />
        </div>
        <div className="flex flex-row justify-center">
          <MainMessage messageType={messageType} setDemoImage={setDemoImage} />
          <Projects setMessageType={setMessageType} closeDemo={closeDemo} />
        </div>
      </div>
    </div>
  );
}

export default App;
