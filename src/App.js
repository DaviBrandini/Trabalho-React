import React, { useState } from 'react';
import MusicForm from './components/MusicForm';
import MusicList from './components/MusicList';
import './App.css';

function App() {
  const [musicList, setMusicList] = useState([]);

  const addMusic = (newMusic) => {
    setMusicList([...musicList, newMusic]);
  };

  const editMusic = (index, updatedMusic) => {
    const updatedList = musicList.map((music, i) => (i === index ? updatedMusic : music));
    setMusicList(updatedList);
  };

  const deleteMusic = (index) => {
    const updatedList = musicList.filter((_, i) => i !== index);
    setMusicList(updatedList);
  };

  return (
    <div className="App">
      <h1>Minha Lista de Músicas Favoritas</h1>
      <MusicForm addMusic={addMusic} />
      <MusicList musicList={musicList} editMusic={editMusic} deleteMusic={deleteMusic} />
    </div>
  );
}

export default App;
