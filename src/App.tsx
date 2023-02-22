import { useState } from 'react';
import { Header } from './components/Header';
import './style.css';

function App() {
  return (
    <div className="flex p-10">
      <div className="border-red-500 border-opacity-10">
        <Header />
        <div className="mr-72 flex flex-col">
          <h1 className="mb-5 text-6xl text-blue-500">Welcome.</h1>

          <span className="border-l-4 pl-2">
            Aute do ad culpa velit sunt cupidatat minim ea. Non laboris commodo
            ad ea veniam. Excepteur velit et consectetur nulla commodo magna
            incididunt sunt enim cillum ex laborum proident. Mollit dolor in
            magna in qui laborum sit duis. Anim consectetur ex consequat ad.
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
