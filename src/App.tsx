import React, { useState } from 'react';

import Header from './components/Header';

function App() {
  const [options, setOptions] = useState<string[]>([]);
  const [description, setDescription] = useState<string>('');

  return (
    <div className="flex">
      <Header
        description={description}
        setDescription={setDescription}
        options={options}
        setOptions={setOptions}
      />
      <div className="container mx-auto flex-1 overflow-y-scroll h-screen p-3">
        <p className="text-center text-gray">Coming</p>
        <p>{JSON.stringify(description)}</p>
        <p>OPTIONS: {JSON.stringify(options)}</p>
      </div>
    </div>
  );
}

export default App;
